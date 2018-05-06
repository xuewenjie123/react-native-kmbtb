'use strict';
import React, { Component, } from 'react';
import {Alert, View, Image,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import {NavigationActions} from '../../components/common/navigation'
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import SmallCir from '../../components/common/SmallCir'
import SmallLine from '../../components/common/SmallLine'
import Lost from '../../components/common/Lost'
import * as loginAction from '../../actions/loginAction'
import {connect} from '../../components/common/connect';
var _navigator,_this,_state;
class RealNameSuc extends Component {

  constructor(props) {
    super(props);
    this.state={
      name:"",//姓名
      code:"",//身份证号码
      dateLong:"请选择",//有效期
      img1:"",//身份证正面
      img2:"",//身份证反面
      startTime:"",
      endTime:""
    }
  }
  componentDidMount(){
   
  }

  backRouter(){
    console.log(_this.props.loginProps.key)
    // _this.props.navigation.goBack(this.props.loginProps.MySelfInfoKey)
    _navigator.dispatch(NavigationActions.back({key:_this.props.loginProps.key}))
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
          onPress={() => {_this.backRouter()}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,marginRight:40*scale}} source={require('../../images/cancel2.png')}/>
          </View>
        </TouchableOpacity>
      ),
      title:"实名认证"
    };

    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
      <View style={{backgroundColor: color.write,width:width,paddingHorizontal:20*scale,alignItems:"center"}}>
            <View style={{width:width-212*scale,height:30*scale,alignItems:"center",marginTop:30*scale,flexDirection:"row"}}>
              <SmallCir />
               <SmallLine/> 
              <SmallCir />
              <SmallLine />
              <SmallCir/> 
            </View>
            <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={styles.text2}>签订协议</Text>
              <Text style={styles.text2}>基本信息</Text>
              <Text style={styles.text2}>等待审核</Text>
            </View>
        </View>
        <View style={{height:1,backgroundColor:"#c8c8c8",width:width}}></View>
      <View style={{flex:1,backgroundColor:color.write}}>
      <Lost backgroundColor="#fff" imgUrl={require('../../images/loadSucc.gif')} imgStyle={{width:240*scale,height: 240*scale}} title="申请已提交，请等待管理员审核"/>
      </View>
      
      </View>
    );
  }

};
export default connect((state)=>({
  loginProps:state.loginReducer,
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(RealNameSuc)