'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image, TextInput,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler,Platform} from 'react-native';
import styles from './style'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation'
import * as wechat from 'react-native-wechat'
import { width, height,scale } from '../../components/common/Dimensions';
var _navigator,_this,_state;
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state={
      orderId:this.props.navigation.state.params.orderId,
      price:this.props.navigation.state.params.price
    }
  }
  componentDidMount(){
    const resetAction1 = NavigationActions.reset({
      index:1,
      actions:[
        NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
        NavigationActions.navigate({ routeName:'MyPublish'}),
      ]
    })
   
    // console.log(_state.orderId)
    wechat.registerApp('wx3044636ca81ac440')
  }
  wechatPay(){
    wechat.isWXAppInstalled()
    .then(( isInstalled ) => {
      if ( isInstalled ) {
          wechat.pay({
            partnerId: '',  // 商家向财付通申请的商家id
            prepayId: '',   // 预支付订单
            nonceStr: '',   // 随机串，防重发
            timeStamp: '',  // 时间戳，防重发
            package: '',    // 商家根据财付通文档填写的数据和签名
            sign: ''        // 商家根据微信开放平台文档对数据做的签名
        })
        .then(()=>{
              Alert.alert("温馨提示","支付成功",[{text:"确认",onPress:()=>{}}])
            })
        .catch(()=>{
          Alert.alert("温馨提示","支付失败",[{text:"确认",onPress:()=>{}}])
        })
     }else {
           Alert.alert("温馨提示","没有安装微信软件，请您安装微信之后再试",[{text:"确认",onPress:()=>{}}])
        }
    });
  }
  backRouter(){
    const resetAction1 = NavigationActions.reset({
      index:1,
      actions:[
        NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
        NavigationActions.navigate({ routeName:'MyPublish'}),
      ]
    })
    // if(_this.props.navigation.state.params.router=="PublishSettlement"){
    //   _navigator.dispatch(resetAction1)
    // }else{
      _navigator.dispatch(NavigationActions.back())
    // }
  }
  render() {
    _this = this;
    _state=this.state;
    _navigator = this.props.navigation;
    let NavigatorTopBarProps={
      visible:true,
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          onPress={() => {_this.backRouter()}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/cancel2.png')}/>
          </View>
        </TouchableOpacity>
      ),
      title:"确认支付"
    };

    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
        <View style={styles.topBox}>
            <Image style={styles.sucImg} source={require('../../images/loadSucc.gif')}/>
            <Text style={text.hei15}>订单提交成功</Text>
            <Text style={[text.hei12,{marginTop:10*scale}]}>请您在48小时内完成支付，否则订单会被自动取消</Text>
        </View>
        <View style={styles.tbBox}>
          <Text style={text.hei12}>应付金额</Text>
          <Text style={text.lan12}>￥{_state.price}</Text>
        </View>
        
        <View style={styles.interBox}>
           <Text style={text.hei12}>选择支付</Text>
        </View>
        <View style={styles.payBox}>
          <TouchableOpacity style={styles.payVal} onPress={()=>_this.wechatPay()}>
             <Image style={styles.weImg} source={require('../../images/wechat.png')}/>
             <Text style={text.hei15}>微信支付</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
