'use strict';
import React, { Component, } from 'react';
import { View, Image, ScrollView,Alert, DeviceEventEmitter,TouchableOpacity, ToastAndroid,Text, TextInput, BackHandler} from 'react-native';//InteractionManager
import styles from './style';
import { width, height,scale } from '../../components/common/Dimensions'
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
var _navigator,_this,_state,_props;
export default class FillCompanyInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contents:""
    }
  }
  componentDidMount(){
     this.textInput.focus();
   }
   //提交函数
  _submit(){
    //防重点击
    if (_this.lastOnpress&&_this.lastOnpress + 1000 >= new Date().getTime()){
         return false
      }
    _this.lastOnpress=new Date().getTime()
    this.textInput.blur();
    if(_state.contents===''){
      Alert.alert("温馨提示","请填写企业简介",[{text:"确认"}])
      return false;
    }else {
      DeviceEventEmitter.emit("ApplyShopInfoUIcompanyInfo",_state.contents)      
      _navigator.dispatch(NavigationActions.back())
    }

  }

  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps={
      visible:true,
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,marginRight:40*scale}} source={require('../../images/cancel2.png')}/>
          </View>
        </TouchableOpacity>
      ),
      title:"企业简介",
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this._submit()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>保存</Text>
          </View>
        </TouchableOpacity>
      ),
    };
    return (
      <View style={{flex: 1}}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        <View style={styles.main}>
            <View style={styles.inputBox}>
            <TextInput 
                ref={(ref)=>{this.textInput=ref}} 
                underlineColorAndroid="transparent" 
                autoFocus  
                multiline  
                maxLength={200} 
                blurOnSubmit={true}
                style={styles.textInut}
                placeholder='请填写企业简介'
                value={_state.contents}
                onChangeText={(text)=>{_this.setState({contents:text})}}
              />
            </View>
          
        </View>
      </View>
    );
  }

};
