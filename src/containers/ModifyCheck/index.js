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
var _navigator,_this,_state;
//修改或手机号密码页面
export default class ModifyCheck extends Component {
  constructor(props) {
    super(props);
    this.state={
      telCode:"",
      tel:"18919803362"
    }
  }
  //获取验证码
  telCodeChange(telCode){
    _this.setState({telCode})
  }
  //提交动作
  submitAction(){
      if(_state.passWord==""){
        Alert.alert('温馨提示',"请设置密码",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.passWord2==""){
        Alert.alert('温馨提示',"请确认密码",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.passWord!==_state.passWord2){
        Alert.alert('温馨提示',"两次密码不一致请重新输入",[{text: '确认', onPress: () =>{}},])
        return false;
      }else{
          _navigator.navigate("ModifyPassWord")
      }
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
      title:"修改密码",
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
          <Text style={text.lan10}>身份验证</Text>
          <Text style={text.hui10}>修改登录密码</Text>
        </View>
        <View style={{height:1,backgroundColor:"#c8c8c8",width:width}}></View>        
        <View style={styles.inputBox}>
            <Text style={[text.hei15,{marginRight:30*scale}]}>已验证手机</Text>
            <Text style={text.hei15}>{_state.tel.substring(0,3)+"****"+_state.tel.slice(-4)}</Text>
        </View>
       <PublicRand tel={_state.tel} telCodeChange={telCode=>this.telCodeChange(telCode)} code_type="editPassWord"/>
      </ScrollView>
     
      </View>
    );
  }
};
