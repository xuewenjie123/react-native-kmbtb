'use strict';
import React, { Component, } from 'react';
import { View,Image,TouchableOpacity,ToastAndroid,Text,BackHandler,InteractionManager} from 'react-native';
import NavigatorTopBar from '../../components/common/NavigatorTopBar.js';
import color from '../../constant/color.js';
import text from '../../constant/text.js';
import styles from './styles.js';
import Dimensions from 'Dimensions';
import { width, height,scale } from '../../components/common/Dimensions';
import * as loginAction from '../../actions/loginAction'
import {NavigationActions} from '../../components/common/navigation'
import {connect} from '../../components/common/connect';
var _this,_state,_navigator;
class Security extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tel:""
        };
     }
     componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            
        })
      }
      backRouter(){
        _navigator.dispatch(NavigationActions.back())
      }
     render(){
       _this=this;
       _state = this.state;
       _navigator=this.props.navigation;
       let NavigatorTopBarProps = {
           visible: true,
           title: "账号与安全",
           leftView: (
             <TouchableOpacity style={{flex: 1}}
               underlayColor='transparent'
               onPress={() => {_this.backRouter()}}>
               <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
               <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
               </View>
             </TouchableOpacity>
           ),
       };
       let {mobile_phone} = this.props.loginProps
       return(
         <View style={styles.main}>
             <NavigatorTopBar {...NavigatorTopBarProps}/>
             <TouchableOpacity style={styles.infoBox} onPress={()=>_navigator.navigate("ModifyPassWord")}>
             <View style={styles.myInfo}>
               <Text style={text.hei15}>修改密码</Text>
               <Text style={text.shenhui10}>为了保证账户安全，建议经常修改密码</Text>
             </View> 
             <Image source={require('../../images/next_demand.png')} style={styles.nextImg}/>
           </TouchableOpacity>

           <TouchableOpacity style={styles.infoBox} onPress={()=>_navigator.navigate("ResetTel")}>
             <View style={styles.myInfo}>
               <Text style={text.hei15}>验证手机</Text>
               <Text style={text.shenhui10}>若手机更换请尽快更改</Text>
             </View> 
             <View style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={text.shenhui15}>{mobile_phone.substring(0,3)+"****"+mobile_phone.slice(-4)}</Text>
                <Image source={require('../../images/next_demand.png')} style={styles.nextImg}/>
             </View>
            
           </TouchableOpacity>

          </View>
       )
     }
   }

   export default connect((state)=>({
    loginProps:state.loginReducer
  }),
  (dispatch)=>({
    login:(payLoad)=>dispatch(loginAction.login(payLoad))
  }))(Security)