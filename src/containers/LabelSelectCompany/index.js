'use strict';
import React, { Component, } from 'react';
import { View,Alert, Image, ScrollView,DeviceEventEmitter, TouchableOpacity, Text,InteractionManager} from 'react-native';
import styles from './style'
import color from '../../constant/color';
import text from '../../constant/text';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import { width, height,scale } from '../../components/common/Dimensions';
import {getLabelList} from '../../services/demand'
import {NavigationActions} from "../../components/common/navigation";
import {updateSupplierLabel} from '../../services/demand'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {toastShort} from '../../constant/toast'
var _navigator,_this,_state,_props;
export default class LabelSelectCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records:[],
      labelIds:[],
      loading:true
    }
  }
  componentDidMount(){
    getLabelList("",_this.getLabelResult,_this.failFuc)
  }
  getLabelResult(result){
    if(result.returnCode==200){
        _this.setState({records:result.label_list,loading:false})
    }else{
      Alert.alert('温馨提示',result.returnMsg,[{text: '确认', onPress: () =>{}},])
    }
  }
  failFuc(){
    Alert.alert('温馨提示',"网络请求失败",[{text: '确认', onPress: () =>{}}])
    _this.setState({loading:false})
  }

  navigateBack(){
    let labelJson={};
    labelJson.label1=_state.labelIds.length?_state.labelIds[0]:"";
    labelJson.label2=_state.labelIds.length>1?_state.labelIds[1]:"";
    labelJson.label3=_state.labelIds.length>2?_state.labelIds[2]:"";
    let {router}=_this.props.navigation.state.params
    if(labelJson.label1==""){
      toastShort("请至少选择一个标签")
      return false
    }
    if(router=="ApplyShopInfo"){
      DeviceEventEmitter.emit("ApplyShopInfoUIlabels",JSON.stringify(labelJson))    
      _navigator.dispatch(NavigationActions.back())
    }else{
      updateSupplierLabel(`label_str=${JSON.stringify(labelJson)}`,_this.updateResult)
    }
  
  }

  updateResult(result){
      if(result.returnCode==200){
        DeviceEventEmitter.emit("DemandUI")
        _navigator.dispatch(NavigationActions.back())
      }else{
        Alert.alert('温馨提示',result.returnMsg,[{text: '确定'},])
      }
  }

  selectLabel(id){
  
    if(_state.labelIds.indexOf(id)==-1){
      if(_state.labelIds.length>=3){
        Alert.alert('温馨提示',"最多只能选三条",[{text: '确定'},])
        return false
      }else{
        _state.labelIds.push(id)
      }
    }else {
      _state.labelIds.splice(_state.labelIds.indexOf(id),1)
    }

    _this.setState({
      labelIds:_state.labelIds,
    })
  }

  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator=_this.props.navigation;
    let NavigatorTopBarProps={
      visible:true,
      title:"选择标签",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this.navigateBack()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>确定</Text>
          </View>
        </TouchableOpacity>
      ),
    };
    
    return (
      <View style={styles.wrapper}>
          <NavigatorTopBar {...NavigatorTopBarProps}/>
          <ScrollView>
            <View style={styles.limitBox}>
              <Text style={text.hong10}>*最多能选择3个标签</Text>
            </View>
            {_state.records.length?
                  <View style={styles.labelBox}>
                          {_state.records.map((item,index)=>(
                              <TouchableOpacity key={index}
                              style={[styles.label,_state.labelIds.indexOf(item.label_id)==-1?{}:{borderColor:color.bluebg}]}
                              underlayColor='transparent'
                              onPress={()=>_this.selectLabel(item.label_id)}>
                              <Text numberOfLines={1} style={_state.labelIds.indexOf(item.label_id)==-1?text.shenhui12:text.lan12}>
                                  {item.label_name}
                              </Text>
                              </TouchableOpacity>
                          ))}
                  </View>
            : _state.loading?<Naviwait/>:
            <Lost title={"请检查您的网络"}
                imgUrl={require('../../images/loadFail.gif')}
                imgStyle={{width:240*scale,height:240*scale}}    
            />}
          </ScrollView>
        
      </View>
    )
  }
  
};
