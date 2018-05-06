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
import * as loginAction from '../../actions/loginAction'
import {connect} from '../../components/common/connect';
var _navigator,_this,_state;
class ResetTel extends Component {

  constructor(props) {
    super(props);
    this.state={
      telCode:"",
      tel:this.props.loginProps.mobile_phone
    }
  }
  componentDidMount(){
   
  } 

  telCodeChange(telCode){
    _this.setState({telCode})
  }
  telChange(tel){
    _this.setState({tel})
  }
  submitAction(){
   if(_state.telCode==""){
      Alert.alert('温馨提示',"请输入手机验证码",[{text: '确认'}])
      return false;
    }else{
      checkMobileCode(`mobile_phone=${_state.tel}&mobile_code=${_state.telCode}`,_this.sucAction,_this.failFuc)
    }
  }
  sucAction(result){
    if(result.returnCode==200){
      DeviceEventEmitter.emit("PublicRandUI")
      _navigator.navigate("ResetTelTwo",{mobile:_state.tel})
    }else{
      Alert.alert('温馨提示',result.returnMsg,[{text: '确认'}])
    }
  }
  failFuc(){
    Alert.alert('温馨提示',"请检查您的网络",[{text: '确认'}])
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
      title:"更换手机号码",
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
      <ScrollView  keyboardShouldPersistTaps={'handled'} contentContainerStyle={{backgroundColor: color.write,width:width,paddingHorizontal:20*scale,alignItems:"center"}} ref={(ref)=>this.scroller=ref}>
        <View style={{width:width-212*scale,height:30*scale,alignItems:"center",flexDirection:"row",marginTop:30*scale}}>
           <SmallCir />
              <SmallLine/>
              <SmallLine backgroundColor="#c8c8c8"/>
           <SmallCir num={2}/>
        </View>
        <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={text.lan10}>手机验证</Text>
          <Text style={text.hui10}>修改手机号码</Text>
        </View>
        <View style={{height:1,backgroundColor:"#c8c8c8",width:width}}></View>        
        <View style={styles.inputBox}>
            <Text style={[text.hei15,{marginRight:30*scale}]}>已验证手机号码</Text>
            <Text style={[text.hei15,{marginRight:30*scale}]}>{this.props.loginProps.mobile_phone}</Text>
        </View>
       <PublicRand tel={_state.tel} telCodeChange={telCode=>this.telCodeChange(telCode)} code_type="editTel"/>
      </ScrollView>
     
      </View>
    );
  }
};
export default connect((state)=>({
  loginProps:state.loginReducer
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(ResetTel)