'use strict';
import React, { Component, } from 'react';
import { Image,ScrollView,Animated,StyleSheet,Text,View,TouchableOpacity,Platform} from 'react-native';
import { width, height,scale } from '../components/common/Dimensions';
import {NavigationActions} from '../components/common/navigation'
var _navigator,_this,_state,_props;
import {recordDeviceInfo} from '../services/loginInfo'
import {connect} from '../components/common/connect';
import * as loginAction from '../actions/loginAction';
import {getStorage,setStorage} from '../constant/storage';
class StartRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bounceValue: new Animated.Value(1)
    }
  }
  componentDidMount(){
    //这里就是react-native写的启动页，优点可控性高，可以随意控制自己想要控制的东东，不过建议有时间用原生写，主要原生我不太会，只会在android上加一个启动页，而且多的不会控制了
    Animated.timing(
        this.state.bounceValue, { toValue:1.2, duration: 1000 }
    ).start();
    //这里就是重置路由了，后面就我不在注释里哔哔了
    const resetAction = NavigationActions.reset({
        index:0,
        actions:[NavigationActions.navigate({ routeName: 'Home',params:{router:"首页"}})]
      })
      const resetActionBoot = NavigationActions.reset({
        index:0,
        actions:[NavigationActions.navigate({ routeName: 'BootPage'})]
      })
      //判断是不是第一次进来
    getStorage("AlreadyLoad",(error,data)=>{
        if(data){
              _navigator.dispatch(resetAction)
        }else{
            setStorage("AlreadyLoad","1",()=>{
              recordDeviceInfo(`system=${Platform.OS=="android"?0:1}&registration_id=${_this.props.loginProps.registrationId}`,()=>{})
                _this.timer=setTimeout(()=>{_navigator.dispatch(resetActionBoot)},1000)
            })
        }
    })
 }

 componentWillUnmount(){
    this.timer&&clearTimeout(this.timer)
 }

  render() {
    _this = this;
    _state = this.state;
    _navigator = this.props.navigation;
    return (
        <View style={{width:width,height:height}}>
          <Animated.Image source={require("../images/startPage.png")} style={{width:width,height:height,transform: [{ scale: this.state.bounceValue }]}}/>
        </View>
    );
  }

};
export default connect((state)=>({
  loginProps:state.loginReducer,
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(StartRouter)
