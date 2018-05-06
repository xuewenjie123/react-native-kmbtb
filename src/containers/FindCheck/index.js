'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image, TextInput,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation'
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import SmallCir from '../../components/common/SmallCir'
import SmallLine from '../../components/common/SmallLine'
import PublicRand from '../../components/common/PublicRand'
import {checkMobileCode} from '../../services/loginInfo'
import {toastShort} from '../../constant/toast'
var _navigator,_this,_state;
export default class FindCheck extends Component {

  constructor(props) {
    super(props);
    this.state={
      telCode:"",
      tel:""
    }
  }

  //验证码
  telCodeChange(telCode){
    _this.setState({telCode})
  }
  //电话
  telChange(tel){
    _this.setState({tel})
  }
  //提交 至下一步
  submitAction(){
    if(_state.tel==""){
      toastShort("请输入手机号码")
      return false;
    }else if( !(/^1[34578]\d{9}$/.test(_state.tel)) ){
      toastShort("请输入正确的手机号码")
      return false;
    }else if(_state.telCode==""){
      toastShort("请输入手机验证码")
      return false;
    }else{
      checkMobileCode(`mobile_phone=${_state.tel}&mobile_code=${_state.telCode}`,_this.sucAction,_this.failFuc)
    }
  }
  //请求回调
  sucAction(result){
    if(result.returnCode==200){
      _navigator.navigate("ResetPassWord",{mobile:_state.tel})
    }else{
      toastShort(result.returnMsg)
    }
  }
  //连接服务器失败函数
  failFuc(){
    toastShort("抱歉，服务器出了点问题，请稍后再试")
  }
  render() {
    _this = this;
    _state=this.state;
    _navigator = this.props.navigation;
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
      title:"找回密码",
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this.submitAction()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>下一步</Text>
          </View>
        </TouchableOpacity>
      ),
    };

    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
      <ScrollView contentContainerStyle={{backgroundColor: color.write,width:width,paddingHorizontal:20*scale,alignItems:"center"}} ref={(ref)=>this.scroller=ref}>
        <View style={{width:width-212*scale,height:30*scale,alignItems:"center",flexDirection:"row",marginTop:30*scale}}>
           <SmallCir />
              <SmallLine/>
              <SmallLine backgroundColor="#c8c8c8"/>
           <SmallCir num={2}/>
        </View>
        <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={text.lan10}>找回密码</Text>
          <Text style={text.hui10}>设置密码</Text>
        </View>
        <View style={{height:1,backgroundColor:"#c8c8c8",width:width}}></View>        
        <View style={styles.inputBox}>
            <Text style={[text.hei15,{marginRight:30*scale}]}>手机号码</Text>
            <TextInput maxLength={20} 
                       keyboardType='numeric'
                      underlineColorAndroid="transparent"
                      style={styles.input}
                      onChangeText={(text)=> _this.telChange(text)} 
                      value={_this.state.tel}
                      placeholder="请输入手机号码" 
                      placeholderTextColor='#c8c8c8'/>
        </View>
       <PublicRand tel={_state.tel} telCodeChange={telCode=>this.telCodeChange(telCode)} code_type="findPassWord"/>
      </ScrollView>
      </View>
    );
  }
};
