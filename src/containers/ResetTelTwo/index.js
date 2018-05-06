'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation'
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import SmallCir from '../../components/common/SmallCir'
import SmallLine from '../../components/common/SmallLine'
import {updateMobilePhone} from '../../services/loginInfo'
import PublicRand from '../../components/common/PublicRand'
import TextInputs from '../../components/common/TextInput'
var _navigator,_this,_state;
import * as loginAction from '../../actions/loginAction'
import {connect} from '../../components/common/connect';
class ResetTelTwo extends Component {

  constructor(props) {
    super(props);
    this.state={
      tel:"",
      telCode:""
    }
  }
  componentDidMount(){
     
  } 
  submitAction(){
      if(_state.tel==""){
        Alert.alert('温馨提示',"请设置新手机号",[{text: '确认'},])
        return false;
      }else if( !(/^1[34578]\d{9}$/.test(_state.tel)) ){
        Alert.alert('温馨提示',"请输入正确的手机号码",[{text: '确认'},])
        return false;
      }if(_state.telCode==""){
        Alert.alert('温馨提示',"请输入手机验证码",[{text: '确认'}])
        return false;
      }else{
        updateMobilePhone(`new_mobile=${_state.tel}&mobile_code=${_state.telCode}`,_this.resetSuc,_this.failFuc)
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
          user_id:"",user_name:"",mobile_phone:"",rank_points:"",collect_article_num:"",collect_goods_num:""
        })
        _navigator.dispatch(resetAction)
      })
    }else{
      Alert.alert('温馨提示',result.returnMsg,[{text: '确认'}])
    }
  }
  failFuc(){
    Alert.alert('温馨提示',"请检查您的网络",[{text: '确认'}])
  }
  telCodeChange(telCode){
    _this.setState({telCode})
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
      title:"更换手机号",
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
      <ScrollView  keyboardShouldPersistTaps={'handled'} contentContainerStyle={{backgroundColor: color.write,alignItems:"center"}} ref={(ref)=>this.scroller=ref}>
        <View style={{width:width-212*scale,height:30*scale,alignItems:"center",flexDirection:"row",marginTop:30*scale}}>
           <SmallCir />
              <SmallLine width={width-272*scale}/>
           <SmallCir />
        </View>
       
        <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={text.lan10}>手机验证</Text>
          <Text style={text.lan10}>修改手机号码</Text>
        </View>
        <View style={{height:1,backgroundColor:"#c8c8c8",width:width}}></View>
        <View style={styles.inputBox}>
            <Text style={text.hei15}>设置新手机号</Text>
           <TextInputs maxLength={11}  style={styles.input}
                    onChangeText={(text)=> _this.setState({tel:text})} value={_this.state.tel}
                    placeholder="请输入新手机号" />
        </View>
        <PublicRand tel={_state.tel} telCodeChange={telCode=>this.telCodeChange(telCode)} code_type="yanzhengTel"/>
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
}))(ResetTelTwo)