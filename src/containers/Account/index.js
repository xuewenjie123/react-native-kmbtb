'use strict';
import React, { Component, } from 'react';
import { View,Image,Alert,TextInput,TouchableOpacity,ToastAndroid,Text,BackHandler,InteractionManager} from 'react-native';
import NavigatorTopBar from '../../components/common/NavigatorTopBar.js';
import color from '../../constant/color.js';
import text from '../../constant/text.js';
import styles from './styles';
import {connect} from '../../components/common/connect';
import {removeStorage} from '../../constant/storage'
import { width, height,scale } from '../../components/common/Dimensions';
import * as loginAction from '../../actions/loginAction'
import {NavigationActions} from '../../components/common/navigation'
import AccountBtn from '../../components/common/AccountBtn'
import {logoutAPP} from '../../services/loginInfo'
var _this,_state,_navigator;
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"雪文杰",
            tel:"18919809333",
            email:"873813122@qq.com",
            QQ:873813122
        };
     }
     componentDidMount(){
       //存储我的页面路由的key 在进行实名认证后可以直接返回到我的页面
        InteractionManager.runAfterInteractions(()=>{
          _this.props.login({
            MySelfKey:_this.props.nav.routes[_this.props.nav.routes.length-1].key
          })
        })
      }
      //返回
      backRouter(){
        _navigator.dispatch(NavigationActions.back())
      }
     render(){
       _this=this;
       _state = this.state;
       _navigator=this.props.navigation;
       let NavigatorTopBarProps = {
           visible: true,
           title: "账号信息",
           leftView: (
             <TouchableOpacity style={{flex: 1}}
               underlayColor='transparent'
               onPress={() => {_this.backRouter()}}>
               <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
               <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
               </View>
             </TouchableOpacity>
           )
       };
       let {user_id,user_name,mobile_phone,rank_points,collect_article_num,supplier_flag,collect_goods_num,rank_name,headimg,status}=this.props.loginProps
      //  console.log(headimg)
       return(
         <View style={styles.main}>
             <NavigatorTopBar {...NavigatorTopBarProps}/>

            <TouchableOpacity style={styles.headBox} onPress={()=>_navigator.navigate("MySelfInfo")}>
            <View style={styles.headImg}>
               {/* <Image source={_state.headimg!=""?{uri:_state.headimg}:require('../../images/defaultImg.png')} style={styles.headImg}/> */}
               <Image source={headimg!=""?{uri:headimg}:require('../../images/defaultImg.png')} style={styles.headImg}/>
               {/* <Image source={require('../../images/defaultImg.png')} style={styles.headImg}/> */}
            </View>
             
              <View style={{flex:1,justifyContent:"space-around"}}>
                <Text style={text.hei15}>{user_name}</Text> 
                <View style={styles.creditBox}>
                    <Text style={text.bai10}>{rank_name}</Text>
                </View>
            </View>
              
              <View style={styles.imgBox}>
                <Image source={require('../../images/next_demand.png')} style={styles.nextImg}/>
              </View>
            </TouchableOpacity>

            <View style={[styles.infoBox,{justifyContent:"space-between"}]}>
             <TouchableOpacity style={styles.inputBox} 
             disabled={status == 1 || status == 2 ? true : false}
             onPress={()=>_navigator.navigate("RealNameInfo")}>
                <Text style={text.hei15}>实名认证</Text> 
                <View style={{flexDirection:"row",alignItems:"center"}}>
                  <Text style={[text.hei15,{marginRight:20*scale}]} numberOfLines={1}>{this._renderPerson(status)}</Text>
                  <Image source={require('../../images/next_demand.png')} style={styles.nextImg}/>
                </View>
             </TouchableOpacity>
             <AccountBtn title="账户安全" onPress={()=>_navigator.navigate("Security")}/> 
             <AccountBtn title="收货地址管理" onPress={()=>_navigator.navigate("MyAddress")}/> 
             <AccountBtn title="帮助中心" style={{borderBottomWidth:0}} onPress={()=>_navigator.navigate("HelpCenter")}/> 
             
            </View>
            <TouchableOpacity style={styles.loginOut} onPress={()=>_this.loginOutAction()}>
                <Text style={text.bai15}>退出登录</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity style={styles.loginOut} onPress={()=>_this.test()}>
                <Text style={text.bai15}>测试</Text>
              </TouchableOpacity> */}
          </View>
       )
     }
    //  test(){
    //     var a=[1,12,2,2,32,3,3,3,4,5,3,2,3,23]
    //     // for(var i=0;i<a.length-1;i++){
    //     //     for(var j=i+1;j<a.length;j++){
    //     //       if(a[i]>a[j]){
    //     //         let t = a[i];
    //     //         a[i]=a[j]
    //     //         a[j]=t
    //     //       }
    //     //     }
    //     // }
    //     // a.sort(function(a,b){
    //     //   return a-b
    //     // })
    //     console.log(a)
    //  }
//是否个人认证0 未认证 1 已认证 2 审核中 3 审核未通过
     _renderPerson(status){
      switch(status){
        case "1":
        return "已认证"
          break;
        case "2":
        return "正在审核中！"
          break;
        case "3":
        return "审核未通过 再次认证"
          break;
        default:
        return "未认证"
          break;
      }
    }
    //退出登录动作
     loginOutAction(){
      Alert.alert('温馨提示',"确定要退出登录吗?", [
        {text: '确定',onPress:()=>_this.loginOut()},
        {text: '取消'}
      ]);
     }
     //退出行为
     loginOut(){
      const resetAction = NavigationActions.reset({
        index:1,
        actions:[
          NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
          NavigationActions.navigate({ routeName:'Login'})
        ]
      })
       //此处把推出登陆行为传给后台
        logoutAPP(`user_device_id=${_this.props.loginProps.user_device_id}`,()=>{
           //删除存储在内存中的登陆信息
          removeStorage("login",(error)=>{
            _this.props.login({
              user_id:"",user_name:"",rank_points:"",collect_article_num:"",collect_goods_num:""
            })
            // _navigator.navigate("Login",{router:"Account"})
            _navigator.dispatch(resetAction)
          })
        })
       
       
       
     }
   }

  export default connect((state)=>({
    loginProps:state.loginReducer,
    nav:state.StackReducer
  }),
  (dispatch)=>({
    login:(payLoad)=>dispatch(loginAction.login(payLoad))
  }))(Account)