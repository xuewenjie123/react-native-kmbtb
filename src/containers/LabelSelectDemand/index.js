'use strict';
import React, { Component, } from 'react';
import { View,Alert, Image, ScrollView,DeviceEventEmitter, TouchableOpacity, Text,TextInput,InteractionManager} from 'react-native';
import styles from './style'
import color from '../../constant/color';
import text from '../../constant/text';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import { width, height,scale } from '../../components/common/Dimensions';
import {getLabelList} from '../../services/demand'
import {NavigationActions} from "../../components/common/navigation";
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {toastShort} from '../../constant/toast'
var _navigator,_this,_state,_props;
export default class LabelSelectDemand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records:[],
      labelId:"",
      labelText:"",
      loading:true
    }
  }
  componentDidMount(){
    getLabelList("",_this.getLabelResult,_this.failFuc)
    // _this.setState({
    //   records:[{label_name:"热卷",label_id:"1"},{label_name:"建材",label_id:"2"},{label_name:"束带结发",label_id:"3"},{label_name:"热卷",label_id:"4"},{label_name:"热卷",label_id:"5"},{label_name:"建材",label_id:"6"},{label_name:"束带结发",label_id:"7"},{label_name:"热卷",label_id:"8"}],
    // })
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
    if(_state.labelId==""){
      toastShort("请选择标签")
      return false
    }
    _navigator.dispatch(NavigationActions.back())
    DeviceEventEmitter.emit("PublishDemandUIlabels",{labelId:_state.labelId,label_text:_state.labelText})
  }

  selectLabel(id,label_name){
    _this.setState({
      labelId:id,
      labelText:label_name
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
          {_state.records.length?
                <View style={[styles.labelBox,{marginTop:20*scale}]}>
                        {_state.records.map((item,index)=>(
                            <TouchableOpacity key={index}
                             style={[styles.label,_state.labelId==item.label_id?{borderColor:color.bluebg}:{}]}
                             underlayColor='transparent'
                             onPress={()=>_this.selectLabel(item.label_id,item.label_name)}>
                            <Text numberOfLines={1} style={_state.labelId==item.label_id?text.lan12:text.shenhui12}>
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
