'use strict';
import React, { Component, } from 'react';
import { StyleSheet,Alert, Text, View, TextInput, TouchableOpacity } from 'react-native';
import text from '../../constant/text';
import { width, height,scale } from '../../components/common/Dimensions';
var _navigator,_state,_this,_props;
import {sendCode} from '../../services/loginInfo'
import color from '../../constant/color'
import {toastShort} from '../../constant/toast'
export default class PublicRand extends Component {
  constructor(props) {
   super(props);
   this.state={
    tel:this.props.tel,
    telCode:"",
    randNum:"获取验证码"
   }
  }
  stateChange(stadus){
    this.setState({
       randNum:stadus
    })
  }
  componentWillUnmount(){
    this.timer&&clearTimeout(this.timer)
  }
  componentWillReceiveProps(newProps){
    // console.log(newProps)
    if(newProps.tel!=this.state.tel){
      this.setState({tel:newProps.tel})
    }
  }
  getRand(){
    if (_this.lastBackPressed&&_this.lastBackPressed + 2000 >= new Date().getTime()){
      return false
   }
   _this.lastBackPressed=new Date().getTime()
    if(_state.tel==""){
      toastShort('温馨提示',"请输入11位手机号码")
      return false;
    }else if( !(/^1[34578]\d{9}$/.test(_state.tel)) ){
      toastShort("请输入正确的手机号码")
      return false;
    }
    var stadus=60;
    _this.stateChange(60)
    var changeRandNum = ()=>{
      clearTimeout(_this.timer)
        _this.timer=setTimeout(()=>{
          stadus-=1;
          _this.stateChange(stadus)
            if(stadus==0){
             _this.stateChange('重新获取')
               clearTimeout(_this.timer)
            }else{
                changeRandNum()
            }
          },1000)
      }
    changeRandNum();
    sendCode(`mobile_phone=${_state.tel}`,_this.getRandResult,_this.failFuc)
  }
  failFuc(){
    toastShort("请确保您的网络连接")
  }
  getRandResult(result){
    if(result.returnCode==200){

      toastShort("手机验证码已发送,请稍后查看您的手机")
    }else{
      Alert.alert('温馨提示',result.returnMsg,[{text: '确认'},])
    }
  }

  telCodeChange(telCode){
        _this.setState({telCode})
        _props.telCodeChange(telCode)
  }
  render() {
    _this=this;
    _state=this.state;
    _props=this.props;
    _navigator=this.props._navigator;
    return (
      <View style={styles.inputBox}>
          <Text style={text.hei15}>手机验证码 </Text>
          <TextInput maxLength={20}  underlineColorAndroid="transparent" style={styles.input}
                  onChangeText={(text)=> _this.telCodeChange(text)} value={_this.state.telCode}  keyboardType='numeric'
                  placeholder="请输入手机验证码" placeholderTextColor='#c8c8c8'/>
          <TouchableOpacity style={styles.randStyle} disabled={isNaN(_this.state.randNum)?false:true} onPress={()=>_this.getRand()}>
              <Text style={text.bai12}>{_state.randNum}</Text>
          </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  inputBox:{
    width:width-40*scale,
    flexDirection: "row",
    height: 106*scale,
    alignItems:"center",
  },
  randStyle:{
    width:170*scale,
    height: 60*scale,
    borderRadius: 10*scale,
    backgroundColor: color.bluebg,
    alignItems: "center",
    justifyContent: "center"
  },
  input:{
    flex:1,
    padding: 0,
    paddingLeft: 30*scale,
    fontSize:15,
    justifyContent: "center",
    color:'#999999',
  },
});

