'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image, TextInput,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation'
import { width, height,scale } from '../../components/common/Dimensions';
import SmallCir from '../../components/common/SmallCir'
import SmallLine from '../../components/common/SmallLine'
import {toastShort} from '../../constant/toast'
import * as wechat from 'react-native-wechat'
import {AppID,AppSecret} from '../../constant/constants'
import TextInputs from '../../components/common/TextInput'
import {choosePayType} from '../../services/loginInfo'
var _navigator,_this,_state;
export default class ApplyShopMoney extends Component {
  constructor(props) {
    super(props);
    this.state={
      supplier_id:this.props.navigation.state.params.supplier_id
    }
  }

  componentDidMount(){
    wechat.registerApp(AppID)
  }
 
  wechatPay(){
    choosePayType(`pay_style=0&supplier_id=${_state.supplier_id}`,_this.wechatPayResult,_this.failFuc)
  }

  wechatPayResult(result){
    if(result.returnCode==200){
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
                Alert.alert("温馨提示","支付成功",[{text:"确认",onPress:()=>{
                    DeviceEventEmitter.emit("MySelfUI");
                    _navigator.navigate("ApplySuc")
                }}])
              })
          .catch(()=>{
            Alert.alert("温馨提示","支付失败",[{text:"确认",onPress:()=>{}}])
          })
       }else {
             Alert.alert("温馨提示","没有安装微信软件，请您安装微信之后再试",[{text:"确认",onPress:()=>{}}])
          }
      });
    }
  }

  payfoot(){
    choosePayType(`pay_style=0&supplier_id=${_state.supplier_id}`,_this.payfootResult,_this.failFuc)
  }
  payfootResult(result){
      if(result.returnCode==200){
        DeviceEventEmitter.emit("MySelfUI");
        _navigator.navigate("ApplySuc")
      }
  }

  failFuc(){
    toastShort('服务器异常请稍后再试')
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
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/cancel2.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      title:"申请开店",
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this.submitAction()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>下一步</Text>
          </View>
        </TouchableOpacity>
      )
    };


    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
      
           <View style={{width:width-212*scale,height:30*scale,alignItems:"center",marginTop:30*scale,flexDirection:"row"}}>
                <SmallCir />
                <SmallLine />
                <SmallCir />
                <SmallLine/>
                <SmallCir/>
                <SmallLine/>
                <SmallCir/>
                <View style={{width:(width-362*scale)/4,height:8*scale,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                  <SmallLine/>
                  <SmallLine backgroundColor="#c8c8c8"/>
                </View>
                {/* <SmallCir num={4}/>
                <SmallLine backgroundColor="#c8c8c8"/> */}
                <SmallCir num={5}/>
            </View>
            <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={text.lan10}>签订协议</Text>
                <Text style={text.lan10}>基本信息</Text>
                <Text style={text.lan10}>补充信息</Text>
                <Text style={text.hui10}>缴纳入住费</Text>
                <Text style={text.hui10}>等待审核</Text>
            </View>
      
              <View style={{width:width,backgroundColor:color.qianhui,height:1}}></View>

              <View style={{width:width,height:234*scale,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                 <Text style={text.hei15}>商家入住费 </Text>
                 <Text style={text.lan18}> 356/年</Text>
              </View>

              <View style={{width:width,backgroundColor:color.main,height:65*scale,paddingHorizontal:20*scale,justifyContent:"center"}}>
                 <Text style={text.hei12}>选择支付方式</Text>
              </View>
              <View style={styles.payBox}>
                <TouchableOpacity style={styles.payVal} onPress={()=>_this.wechatPay()}>
                  <Image style={styles.weImg} source={require('../../images/shopInfoWechat.png')}/>
                  <Text style={text.hei15}>微信支付</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.payVal} onPress={()=>{_this.payfoot()}}>
                  <Image style={styles.weImg} source={require('../../images/shopXianxia.png')}/>
                  <Text style={text.hei15}>线下支付</Text>
                </TouchableOpacity>
              </View>
      </View>
    );
  }

};
