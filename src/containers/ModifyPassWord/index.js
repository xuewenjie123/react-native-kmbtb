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
import {updatePassword} from '../../services/loginInfo'
import {connect} from '../../components/common/connect';
import {toastShort} from '../../constant/toast'
import * as loginAction from '../../actions/loginAction'
var _navigator,_this,_state;
class ModifyPassWord extends Component {

  constructor(props) {
    super(props);
    this.state={
      oldPassWord:"",
      passWord:"",
      passWord2:""
    }
  }
  componentDidMount(){
   
  }
  telChange(tel){
    _this.setState({tel})
  }
  submitAction(){
    
      if(_state.oldPassWord==""){
        Alert.alert('温馨提示',"请输入旧密码",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.passWord==""){
        Alert.alert('温馨提示',"请设置密码",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.passWord2==""){
        Alert.alert('温馨提示',"请确认密码",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(!/^.{6,}$/.test(_state.passWord)){
        Alert.alert('温馨提示',"密码至少六位",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.passWord!==_state.passWord2){
        Alert.alert('温馨提示',"两次密码不一致请重新输入",[{text: '确认', onPress: () =>{}},])
        return false;
      }else{
        updatePassword(`old_password=${_state.oldPassWord}&new_password=${_state.passWord2}`,_this.resetSuc,_this.failFuc)
      }
  }

  resetSuc(result){
    const resetAction = NavigationActions.reset({
      index:0,
      actions:[NavigationActions.navigate({ routeName:'Login'})]
    })
    if(result.returnCode==200){
      removeStorage("login",(error)=>{
        _this.props.login({
          user_id:"",user_name:"",rank_points:"",collect_article_num:"",collect_goods_num:""
        })
        _navigator.dispatch(resetAction)
      })
    }else{
      Alert.alert('温馨提示',result.returnMsg,[{text: '确认'}])
    }
  }

  requestStr(text){
    var reg =/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
    if (reg.test(text)){
      toastShort('不能输入中文');
      return false;   
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
            <Text style={{fontSize:12,color:"#fff"}}>上一步</Text>
          </View>
        </TouchableOpacity>
      ),
      title:"修改密码",
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this.submitAction()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>提交</Text>
          </View>
        </TouchableOpacity>
      ),
    };

    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
      <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={{backgroundColor: color.write,alignItems:"center"}} ref={(ref)=>this.scroller=ref}>
        <View style={{width:width-212*scale,height:30*scale,alignItems:"center",flexDirection:"row",marginTop:30*scale}}>
           <SmallCir />
              <SmallLine width={width-272*scale}/>
           <SmallCir />
        </View>
       
        <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={text.lan10}>身份验证</Text>
          <Text style={text.lan10}>修改登录密码</Text>
        </View>
        <View style={{height:1,backgroundColor:"#c8c8c8",width:width}}></View>
        <View style={styles.inputBox}>
            <Text style={text.hei15}>旧的密码</Text>
           <TextInput maxLength={11} secureTextEntry={true} underlineColorAndroid="transparent" style={styles.input}
                    onChangeText={(text)=> _this.setState({oldPassWord:text})} value={_this.state.oldPassWord}
                    placeholder="请输入旧的密码" placeholderTextColor='#c8c8c8'/>
        </View>

        <View style={styles.inputBox}>
            <Text style={text.hei15}>设置密码</Text>
           <TextInput maxLength={11} secureTextEntry={true}  underlineColorAndroid="transparent" style={styles.input}
                    onChangeText={(text)=> {_this.requestStr(text);_this.setState({passWord:text})}} value={_this.state.passWord}
                    placeholder="请输入登录密码" placeholderTextColor='#c8c8c8'/>
        </View>
        <View style={styles.inputBox}>
            <Text style={text.hei15}>确认密码</Text>
           <TextInput maxLength={11} secureTextEntry={true}  underlineColorAndroid="transparent" style={styles.input}
                    onChangeText={(text)=> {_this.requestStr(text);_this.setState({passWord2:text})}} value={_this.state.passWord2}
                    placeholder="请再次输入登录密码" placeholderTextColor='#c8c8c8'/>
        </View>
        <Text style={[text.hong12,{marginTop:25*scale}]}>登陆密码不能少于6位字符</Text>
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
}))(ModifyPassWord)