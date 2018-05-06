'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert,ActivityIndicator, View, Image, TextInput, Text,TouchableOpacity ,BackHandler,Platform} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {httpURI} from '../../constant/url'
import {NavigationActions} from '../../components/common/navigation'
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import RandNum from '../../components/common/RandNum'
import {registerUser} from '../../services/loginInfo'
import {connect} from '../../components/common/connect';
import * as loginAction from '../../actions/loginAction'
import {toastShort} from '../../constant/toast'
import JPushModule from 'jpush-react-native';//极光推送
var _navigator,_this,_state;
class Register extends Component {
  constructor(props) {
    super(props);
    this.state={
      passWord:"",
      tel:"",
      telCode:"",
      passWordConfirm:"",
      name:"",
      dropHeight:0,
      randNum:"获取验证码"
    }
  }
  componentDidMount(){
   
  }
 
  telChange(tel){
    _this.setState({tel})
  }
  passWordChange(passWord){
    _this.setState({passWord})
  }
  passConfirmChange(passWordConfirm){
    _this.setState({passWordConfirm})
  }


  registerAction(){
    let {tel,telCode,passWord,passWordConfirm} =_state
      if(tel==""){
        Alert.alert('温馨提示',"请输入手机号码",[{text: '确认'},])
        return false;
      }else if( !(/^1[34578]\d{9}$/.test(tel)) ){
        Alert.alert('温馨提示',"请输入正确的手机号码",[{text: '确认'},])
        return false;
      }else if(telCode==""){
        Alert.alert('温馨提示',"请输入手机验证码",[{text: '确认'},])
        return false;
      }else if(passWord==""){
        Alert.alert('温馨提示',"请输入密码",[{text: '确认'},])
        return false;
      }else if(passWordConfirm==""){
        Alert.alert('温馨提示',"请再次输入密码",[{text: '确认'},])
        return false;
      }else if(passWordConfirm!==passWord){
        Alert.alert('温馨提示',"两次输入密码不一致",[{text: '确认'},])
        return false;
      }else if(!_this.props.loginProps.registrationId){
        _this.setState({
          registeaction:true
        })
        JPushModule.getRegistrationID((id)=>{
          _this.props.login({registrationId:id})
          registerUser(`mobile_phone=${tel}&password=${passWordConfirm}&mobile_code=${telCode}&registration_id=${id}&system=${Platform.OS=="android"?0:1}`,_this.registeResult,_this.registFail)
        })
      }else{
        _this.setState({
          registeaction:true
        })
        registerUser(`mobile_phone=${tel}&password=${passWordConfirm}&mobile_code=${telCode}&registration_id=${_this.props.loginProps.registrationId}&system=${Platform.OS=="android"?0:1}`,_this.registeResult,_this.registFail)
      }
  }

  registFail(){
    _this.setState({
      registeaction:false
    })
    toastShort("服务器异常，请稍后再试")
  }

  registeResult(result){
    _this.setState({
      registeaction:false
    })
    const resetAction = NavigationActions.reset({
      index:0,
      actions:[NavigationActions.navigate({ routeName:'Home'})]
    })
      if(result.returnCode==200){
        let {user_id,user_name,mobile_phone,rank_points,collect_article_num,collect_goods_num,headimg,rank_name,qq,email,status,supplier_flag}=result.user_info
        let {stystem_msg,msg_count} = result
        setStorage("login",{userId:user_id},(error)=>{
           _this.props.login({
              user_id,user_name,mobile_phone,rank_points,collect_article_num,collect_goods_num,headimg,rank_name,qq,email,status,supplier_flag,stystem_msg,msg_count
            })
            if(_this.props.loginProps.LoginTopKey){
              _navigator.dispatch(NavigationActions.back({key:_this.props.loginProps.LoginTopKey}))
            }else{
              _navigator.dispatch(resetAction)
            }

        })
      }else{
        toastShort(result.returnMsg)
      }
  }

  telCodeChange(telCode){
    _this.setState({telCode})
  }
  render() {
    let NavigatorTopBarProps = {
            visible: true,
            title: "欢迎注册",
            leftView: (
              <TouchableOpacity style={{flex: 1}}
                underlayColor='transparent'
                onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
                <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
                  <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
                </View>
              </TouchableOpacity>
            )
        }
    _this = this;
    _state=this.state;
    _navigator = this.props.navigation;
    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
      <ScrollView contentContainerStyle={{width:width,alignItems:"center"}} ref={(ref)=>this.scroller=ref}  keyboardShouldPersistTaps={'handled'}>
      <Image source={require('../../images/logo.png')} style={styles.logoStyle}/>
        <Text style={text.jihei18}>潞盈建材</Text><Text style={text.jihei18}>www.luyingjc.com</Text>
       

        <View style={styles.inputBox}>
            
            <Text style={[text.lan18,{marginRight:30*scale}]}>+86</Text>
            <TextInput maxLength={11} keyboardType='numeric' underlineColorAndroid="transparent" style={styles.input}
                    onChangeText={(text)=> _this.telChange(text)} defaultValue={_this.state.tel}
                    placeholder="请输入手机号码" placeholderTextColor='#c8c8c8'/>
        </View>

        <RandNum tel={_state.tel} telCodeChange={telCode=>this.telCodeChange(telCode)}/>

        <View style={styles.inputBox}>
           <TextInput maxLength={20}  underlineColorAndroid="transparent" style={styles.input}
                    onChangeText={(text)=> _this.passWordChange(text)} defaultValue={_this.state.passWord}
                    placeholder="请输入密码" secureTextEntry={true} placeholderTextColor='#c8c8c8'/>
        </View>
        <View style={styles.inputBox}>
           <TextInput maxLength={20}  underlineColorAndroid="transparent" style={styles.input}
                    onChangeText={(text)=> _this.passConfirmChange(text)} defaultValue={_this.state.passWordConfirm}
                    placeholder="请再次输入密码" secureTextEntry={true} placeholderTextColor='#c8c8c8'/>
        </View>
        <TouchableOpacity style={styles.loginBtn}
          onPress={()=>_this.registerAction()}>
                <Text style={text.bai15}>注册</Text>
        </TouchableOpacity>
        {
          _state.registeaction?
          <ActivityIndicator style={{marginBottom:10}} color="#0000ff" />
          :
          null
        }
        
        <Text style={text.hei10}>点击注册按钮，即表示您同意</Text>
        <Text style={text.hei10}> 《服务协议》《隐私政策》</Text>
       
        <View style={[styles.textBox,{marginTop:30*scale,marginBottom:54*scale}]}>
            <Text style={text.hei12}>已有账号?  </Text>
            <Text style={text.lan12} onPress={()=>{_navigator.navigate("Login")}}> 直接登录</Text>
        </View>
      </ScrollView>
     
      </View>
    );
  }
};
export default connect((state)=>({
  loginProps:state.loginReducer,
  nav:state.StackReducer
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(Register)