'use strict';
import React, { Component, } from 'react';
import { ScrollView,  View, Image,ActivityIndicator,Platform, Text,TouchableOpacity ,Alert} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation'
import {getStorage,setStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import {httpURI} from '../../constant/url'
import * as wechat from 'react-native-wechat'
import {login,recordActiveUser} from '../../services/loginInfo'
import {AppID,AppSecret} from '../../constant/constants'
import {connect} from '../../components/common/connect';
import * as loginAction from '../../actions/loginAction'
import Geolocation from 'Geolocation'
import {toastShort} from '../../constant/toast'
import TextInputs from '../../components/common/TextInput'
import JPushModule from 'jpush-react-native';//极光推送
var _navigator,_this,_state;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      passWord:"",
      tel:this.props.loginProps.mobile_phone||"",//电话
      wechatLoginInfo:{},
      regid:""
    }
  }
  componentDidMount(){
    // _this.getLocation()
      // console.log("下面这是registrationID")
      // console.log(this.props.loginProps.registrationId)
      if(this.props.navigation.state.params){
          // if(this.props.loginProps.mobile_phone){
          //   _this.setState({
          //     tel:this.props.loginProps.mobile_phone
          //   })
          // }
        //这里存储上一页的key值
          _this.props.login({
            LoginTopKey:this.props.nav.routes[this.props.nav.routes.length-1].key
          })
      }else{
        this.props.login({
          LoginTopKey:false
        })
      }
    wechat.registerApp("wx3044636ca81ac440")
  }
  //获取地理位置
//   getLocation() {
//     Geolocation.getCurrentPosition(
//         location => {
//             var result = "速度：" + location.coords.speed +
//                         "\n经度：" + location.coords.longitude +
//                         "\n纬度：" + location.coords.latitude +
//                         "\n准确度：" + location.coords.accuracy +
//                         "\n行进方向：" + location.coords.heading +
//                         "\n海拔：" + location.coords.altitude +
//                         "\n海拔准确度：" + location.coords.altitudeAccuracy +
//                         "\n时间戳：" + location.timestamp;
//         //  alert(result)
//         },
//         error => {
//           console.log("获取位置失败："+ error)
//         }
//     );
//  }
  //微信登陆
  wechatLogin(){
    let scope = 'snsapi_userinfo';
    let state = 'wechat_sdk_demo';
    console.log("我进来了")
    //判断微信是否安装
    wechat.isWXAppInstalled()
      .then((isInstalled) => {
        if (isInstalled) {
          //发送授权请求
          console.log("我走到这里乐山")
          wechat.sendAuthRequest("snsapi_userinfo", state)
            .then(result => {
              console.log(result)
              _this.getLoginInfo(result)
              //返回code码，通过code获取access_token
              // _this.getAccessToken(responseCode.code);
            })
            .catch(err => {
              console.log(err)
              Alert.alert('登录授权发生错误：', err.message, [
                {text: '确定'}
              ]);
            })
        } else {
            Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
              {text: '确定'}
            ])
        }
      })
  }
  //获取第三方登录所需信息
  getLoginInfo(result){
    // console.log(result)
    // errCode("ERR_OK = 0(用户同意) ERR_AUTH_DENIED = -4（用户拒绝授权）ERR_USER_CANCEL = -2（用户取消）")
    // code  用户换取access_token的code，仅在ErrCode为0时有效
    // _this.setState({
    //   wechatLoginInfo:result
    // })
    if(result.errCode==0){
      fetch(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${AppID}&secret=${AppSecret}&code=${result.code}&grant_type=authorization_code`)
      .then(response=>{return response.json()})
      .then(result=>_this.getAccess_token(result))
      .catch(error=>{
          console.log(error)
      })
    }
  }
  //获取access_token 调用授权关系接口的调用凭证
  getAccess_token(result){
      console.log(result)
  }

  loginAction(){
    
    if(_this.props.loginProps.mobile_phone===""){
      Alert.alert('温馨提示',"请输入手机号码", [
        {text: '确定'}
      ]);
    }else if( !(/^1[3|4|5|7|8][0-9]{9}$/.test(_this.props.loginProps.mobile_phone)) ){
      Alert.alert('温馨提示',"请输入正确的电话号码", [
        {text: '确定'}
      ]);
      return false;
    }else if(_this.props.loginProps.passWord===""){
      Alert.alert('温馨提示',"请输入密码", [
        {text: '确定'}
      ]);
      //
    }else{
      _this.setState({
        loginaction:true
      })
          JPushModule.getRegistrationID((id)=>{
            console.log(id)
            _this.props.login({registrationId:id})
          })
      //统计接口
      recordActiveUser(``,()=>{})
      login(`account=${_this.props.loginProps.mobile_phone}&password=${_this.props.loginProps.passWord}&registration_id=${_this.props.loginProps.registrationId}&system=${Platform.OS=="android"?0:1}`,_this.loginResult,_this.loginFail)
    }
    //_navigator.dispatch(resetAction)
    // _navigator.dispatch(NavigationActions.back({key:_navigator.state.key}))
  }

  //登陆失败
  loginFail(){
    _this.setState({
      loginaction:false
    })
    toastShort("服务器异常请稍后再试")
  }
  // user_id:"",//用户ID
  // user_name:"",//用户名称
  // mobile_phone:"",//手机号
  // rank_points:"",//	int	Y	信用值
  // headimg:"",//	string	Y	头像
  // rank_name:"",//	string	Y	信用等级
  // collect_article_num:"",//	int	Y	收集手机数量
  // collect_goods_num:"",//收集物品数量
  //登录回调
  loginResult(result){
    _this.setState({
      loginaction:false
    })
    const resetAction = NavigationActions.reset({
      index:0,
      actions:[NavigationActions.navigate({ routeName:'Home'})]
    })
    //首先等请求成功后  获取用户信息   消息信息
      if(result.returnCode==200){
        let {stystem_msg,msg_count} = result
        stystem_msg=stystem_msg.filter(item=>{
          return item!=1&&item!=2&&item!=3
       })

        let {user_id,user_name,mobile_phone,rank_points,collect_article_num,collect_goods_num,headimg,rank_name,qq,email,status,supplier_flag,user_device_id}=result.user_info
        setStorage("login",{userId:user_id},(error)=>{
           _this.props.login({
              user_id,user_name,mobile_phone,rank_points,collect_article_num,collect_goods_num,headimg:headimg?httpURI+'/'+headimg:"",rank_name,qq,email,status,supplier_flag,stystem_msg,msg_count,user_device_id
            })
            if(_this.props.navigation.state.params){
              _navigator.dispatch(NavigationActions.back({key:_this.props.loginProps.LoginTopKey}))
            }else{
              _navigator.dispatch(resetAction)
            }
        })
      }else{
        if(result.returnMsg=="regid是必填参数"){
          _this.setState({
            loginaction:true
          })
          JPushModule.getRegistrationID((id)=>{
            _this.props.login({registrationId:id})
            login(`account=${_this.props.loginProps.mobile_phone}&password=${_this.props.loginProps.passWord}&registration_id=${id}&system=${Platform.OS=="android"?0:1}`,_this.loginResult,_this.loginFail)
          })
        }else{
          toastShort(result.returnMsg)
        }
      }
  }
  // 返回
  backRouter(){
    if(_this.props.navigation.state.params&&_this.props.navigation.state.params.router=="Account"){
        _navigator.dispatch(NavigationActions.back({key:_this.props.loginProps.MySelfKey}))
    }else{
      _navigator.dispatch(NavigationActions.back())
    }
  }
  //修改电话号码
  telChange(mobile_phone){
    _this.props.login({mobile_phone})
  }
  //修改密码
  passWordChange(passWord){
    _this.props.login({passWord})
  }
  render() {
    let NavigatorTopBarProps = {
            visible: true,
            title: "登录",
            leftView: (
              <TouchableOpacity style={{flex: 1}}
                underlayColor='transparent'
                onPress={() => {_this.backRouter()}}>
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
        <ScrollView contentContainerStyle={{width:width,alignItems:"center"}}  keyboardShouldPersistTaps={'handled'}>
        <Image source={require('../../images/logo.png')} style={styles.logoStyle}/>
        <Text style={text.shenhei18}>潞盈建材</Text><Text style={text.shenhei10}>www.luyingjc.com</Text>
        <View style={styles.inputBox}>
          <Text style={[text.lan18,{marginRight:30*scale}]}>+86</Text>  
           <TextInputs   
                    maxLength={11}  
                    keyboardType='numeric'  
                    style={styles.input}
                    onChangeText={(text) => {_this.telChange(text)}} defaultValue={_this.state.tel}
                    placeholder="请输入手机号码"/>
        </View>
        <View style={styles.inputBox}>
           <TextInputs 
                    maxLength={20}  
                    style={styles.input}
                    onChangeText={(text)=>{_this.passWordChange(text)}} 
                    defaultValue={_this.state.passWord}
                    placeholder="请输入密码" secureTextEntry={true}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}
          onPress={()=>_this.loginAction()}>
                <Text style={styles.textlogin}>登录</Text>
        </TouchableOpacity>
        {
          _state.loginaction?
          <ActivityIndicator color="#0000ff" />
          :
          null
        }
        <View style={styles.textBox}>
            <TouchableOpacity onPress={()=>_navigator.navigate("Register")}>
              <Text style={text.lan12}>免费注册</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>_navigator.navigate("FindCheck")}>
              <Text style={text.lan12}>忘记密码</Text>
            </TouchableOpacity>            
        </View>
        <View style={styles.textBox2}>
            <Image source={require('../../images/hengxian.png')} style={styles.hengxian}/>
             <Text style={text.shenhui10}>使用第三方登录</Text>
            <Image source={require('../../images/hengxian.png')} style={styles.hengxian}/>
        </View>
        <TouchableOpacity style={styles.textBox3} onPress={()=>_this.wechatLogin()}>
            {/* <Image source={require('../../images/phone.png')} style={[styles.threeIcon,{ marginRight: 58*scale}]}/> */}
            <Image source={require('../../images/wechat.png')} style={styles.threeIcon}/>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};
//连接redux
export default connect((state)=>({
  loginProps:state.loginReducer,
  nav:state.StackReducer
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(Login)