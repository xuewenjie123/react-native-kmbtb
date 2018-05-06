'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image, TextInput,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './style'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation'
import { width, height,scale } from '../../components/common/Dimensions';
var _navigator,_this,_state;
export default class PaySuc extends Component {
  constructor(props) {
    super(props);
    this.state={
     
    }
  }
  componentDidMount(){
   
  }
  
  render() {
    _this = this;
    _state=this.state;
    _navigator = this.props.navigation;
    let NavigatorTopBarProps={
      visible:true,
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/cancel2.png')}/>
          </View>
        </TouchableOpacity>
      ),
      title:"支付成功"
    };

    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
        <View style={styles.topBox}>
            <Image style={styles.sucImg} source={require('../../images/loadSucc.gif')}/>
            <Text style={text.hei15}>支付成功</Text>
        </View>
        <View style={styles.row}>
        <TouchableOpacity onPress={()=>_this.backRouter("Home")}>
           <Text style={text.hei15}>返回首页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>_this.backRouter("order")}>
           <Text style={text.hei15}>返回订单页</Text>
        </TouchableOpacity>
        </View>
     
      </View>
    );
  }
  backRouter(router){
    const resetAction1 = NavigationActions.reset({
      index:0,
      actions:[
        NavigationActions.navigate({ routeName:'Home'}),
      ]
    })
    const resetAction2 = NavigationActions.reset({
      index:1,
      actions:[
        NavigationActions.navigate({ routeName:'Home'}),
        NavigationActions.navigate({ routeName:'MyOrderList'})
      ]
    })
    if(router=="Home"){
      _navigator.dispatch(resetAction1)
    }else{
      _navigator.dispatch(resetAction2)
    }
  }
};
