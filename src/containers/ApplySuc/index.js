'use strict';
import React, { Component, } from 'react';
import {Alert, View, Image,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text'
import {NavigationActions} from '../../components/common/navigation'
import {connect} from '../../components/common/connect';
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import SmallCir from '../../components/common/SmallCir'
import SmallLine from '../../components/common/SmallLine'
import Lost from '../../components/common/Lost'
import * as loginAction from '../../actions/loginAction'
var _navigator,_this,_state;
class ApplySuc extends Component {

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

      }
  }
  backRouter(){
    // _this.props.navigation.goBack(this.props.MySelfKey)
    // _navigator.dispatch(NavigationActions.back(this.props.MySelfKey)) 这种不行
    DeviceEventEmitter.emit("MySelfUI",_state.contents)
    _navigator.dispatch(NavigationActions.back({key:this.props.MySelfKey}))
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
      title:"申请开店"
    };

    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
      <View style={{backgroundColor: color.write,width:width,paddingHorizontal:20*scale,alignItems:"center"}}>
            <View style={{width:width-212*scale,height:30*scale,alignItems:"center",marginTop:30*scale,flexDirection:"row"}}>
              <SmallCir />
              <SmallLine/>
              <SmallCir />
              <SmallLine/>
              <SmallCir/>
              <SmallLine/>
              <SmallCir/>
              <SmallLine/>
              <SmallCir/>
            </View>
            <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={text.lan10}>签订协议</Text>
              <Text style={text.hui10}>基本信息</Text>
              <Text style={text.hui10}>补充信息</Text>
              <Text style={text.hui10}>缴纳入住费</Text>
              <Text style={text.hui10}>等待审核</Text>
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
  MySelfKey:state.loginReducer.MySelfKey,
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(ApplySuc)