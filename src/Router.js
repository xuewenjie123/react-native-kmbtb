import React, { PureComponent } from 'react';
import { BackHandler,ToastAndroid,View,NativeAppEventEmitter,StatusBar, Animated, Easing,StyleSheet,Image,Platform, DeviceEventEmitter,NativeModules } from 'react-native';
import color from './constant/color'
import { connect} from 'react-redux';
import * as loginAction from './actions/loginAction';
import {getMyInfomation} from './services/myInfo'
import {recordActiveUser} from './services/loginInfo'
import {httpURI} from './constant/url'
import {getStorage} from './constant/storage'
import {
  StackNavigator,
  NavigationActions,
  addNavigationHelpers
} from 'react-navigation';
import { width, height,scale } from './components/common/Dimensions'
import JPushModule from 'jpush-react-native';//极光推送

import MyMessage from './containers/MyMessage'
import HomeNavigator from './containers/HomeNavigator'
import Demand from './containers/Demand'//需求
import Home from './containers/Home';//主页
import Infomation from './containers/Infomation';//资讯页
import InfomationDetail from './containers/InfomationDetail'//资讯详情
  import Logistics from './containers/Logistics';//物流页
import LogisiticInfo from './containers/LogisiticInfo'//物流详情

import MySelf from './containers/MySelf';//我的页
import MySelfInfo from './containers/MySelfInfo'//我的信息

import PaySuc from './containers/PaySuc'

import Login from './containers/Login';//登录
import Register from './containers/Register';//注册
import Account from './containers/Account'//账户管理
import Security from './containers/Security'//账户安全

import ResetPassWord from './containers/ResetPassWord'//忘记重置密码
import ModifyPassWord from './containers/ModifyPassWord';//修改密码
import ModifyCheck from './containers/ModifyCheck'//修改密码手机验证
import FindCheck from './containers/FindCheck'//找回密码手机验证
import ResetTel from './containers/ResetTel'//更改手机号码
import ResetTelTwo from './containers/ResetTelTwo'//更改手机号码
import RealNameAgree from './containers/RealNameAgree'//实名认证1
import RealNameInfo from './containers/RealNameInfo'//实名认证2
import RealNameSuc from './containers/RealNameSuc'//实名认证3
import ApplyShopInfo from './containers/ApplyShopInfo'//申请开店签订协议
import ApplyShopAgree from './containers/ApplyShopAgree'//申请开店基本信息
import ApplyShopInfoAdd from './containers/ApplyShopInfoAdd'//申请信息补充信息
import ApplySuc from './containers/ApplySuc'//申请成功等待审核

import MyOrderList from './containers/MyOrderList'//我的订单

import MyPublish from './containers/MyPublish';//我的发布
import MyPublishInfo from './containers/MyPublishInfo';//我的发布详情
import PublishSettlement from './containers/PublishSettlement';//发布结算
import PublishDemand from './containers/PublishDemand';//发布需求
import AddGoods from './containers/AddGoods'//添加货品
import DemandDetail from './containers/DemandDetail'//需求详情

import MyAssess from './containers/MyAssess'//我的报价发布评价

import MyOffer from './containers/MyOffer'//我的报价
import OfferPrice from './containers/OfferPrice'//我要报价
import MyOfferInfo from './containers/MyOfferInfo'//我的报价详情
import MyAddress from "./containers/MyAddress"; //地址管理
import MyAddressAdd from "./containers/MyAddressAdd";//添加地址

import ShopList from './containers/ShopList'//商品列表
import ShopCart from './containers/ShopCart'//购物车
import ShopClass from './containers/ShopClass'//商品分类
import ShopDetail from './containers/ShopDetail'//商品详情页
import ConfirmOrder from './containers/ConfirmOrder'//填写订单
import ConfirmPay from "./containers/ConfirmPay";//确认支付

import MyCollect from './containers/MyCollect'//我的收藏
import CompanyInfo from './containers/CompanyInfo'//公司简介
import FillCompanyInfo from './containers/FillCompanyInfo'//填写公司简介
import FillBill from './containers/FillBill'//填写发票信息
import EvalList from './containers/EvalList'//全部评价
import Search from './containers/Search'//搜索
import SearchContent from './containers/SearchContent'//搜索结果页

import LabelSelectDemand from './containers/LabelSelectDemand'//选择标签页
import LabelSelectCompany from './containers/LabelSelectCompany'//选择标签页
import HelpCenter from './containers/HelpCenter'//帮助中心
import ShopAssess from './containers/ShopAssess'
import BootPage from './containers/BootPage'//引导页
import StartRouter from './containers/StartRouter'//启动页

import ShowWeb from './containers/ShowWeb' //点击通知进入的活动页

import ApplyShopMoney from './containers/ApplyShopMoney' //缴纳入住费




export const AppNavigator = StackNavigator(
  {
    Home:{ screen: HomeNavigator,path:"app/Home"},
    Demand:{ screen: HomeNavigator,path:"app/Demand"},
    Infomation:{ screen: HomeNavigator,path:"app/Infomation"},
    Logistics:{ screen: HomeNavigator,path:"app/Logistics"},
    MySelf:{ screen: HomeNavigator,path:"app/MySelf"},
    // HomeNavigator:{}
    Login:{screen:Login},//登录
    Register:{screen:Register},//注册
    Security:{screen:Security},//账户管理
    Account:{screen:Account},//账户管理
    MySelfInfo:{screen:MySelfInfo},//账户信息
    ModifyPassWord:{screen:ModifyPassWord},//修改密码
    ResetPassWord:{screen:ResetPassWord},//找回密码
    ModifyCheck:{screen:ModifyCheck},//修改密码手机验证
    FindCheck:{screen:FindCheck},//忘记密码手机验证
  
    MyAddress:{screen:MyAddress},//地址管理
    MyAddressAdd:{screen:MyAddressAdd},//添加地址
    MyCollect:{screen:MyCollect},//我的收藏
    ResetTel:{screen:ResetTel},//更改手机号
    ResetTelTwo:{screen:ResetTelTwo},//更换手机号
    
    RealNameAgree:{screen:RealNameAgree},//实名认证1
    RealNameInfo:{screen:RealNameInfo},//实名认证2
    RealNameSuc:{screen:RealNameSuc},//实名认证3

    ApplyShopAgree:{screen:ApplyShopAgree},//申请开店签订协议
    ApplyShopInfo:{screen:ApplyShopInfo},//申请开店基本信息
    ApplyShopInfoAdd:{screen:ApplyShopInfoAdd},//申请开店补充信息
    ApplyShopMoney:{screen:ApplyShopMoney},
    ApplySuc:{screen:ApplySuc},//申请开店审核

    MyMessage:{screen:MyMessage},//我的消息
    PublishDemand:{screen:PublishDemand},//发布需求
    MyPublish:{screen:MyPublish},//我的发布
    MyPublishInfo:{screen:MyPublishInfo},//我的发布 审核 交易 等发布
    MyAssess:{screen:MyAssess},//我的发布报价 评价
    CompanyInfo:{screen:CompanyInfo},//公司简介

    OfferPrice:{screen:OfferPrice},//我要报价
    MyOffer:{screen:MyOffer},//我的报价
    MyOfferInfo:{screen:MyOfferInfo},//我的报价 审核 交易 等发布
    PublishSettlement:{screen:PublishSettlement},//发布结算
    
    FillBill:{screen:FillBill},//填写发票信息
    DemandDetail:{screen:DemandDetail},//需求详情
  
    ShopList:{screen:ShopList},//商品列表
    ShopCart:{screen:ShopCart},//购物车
    ConfirmOrder:{screen:ConfirmOrder},//填写订单
    Search:{screen:Search},//搜索
    SearchContent:{screen:SearchContent},//搜索结果
   
    ConfirmPay:{screen:ConfirmPay},//确认支付
    FillCompanyInfo:{screen:FillCompanyInfo},//填写企业简介
    ShopClass:{screen:ShopClass},//商品分类
    MyOrderList:{screen:MyOrderList},//我的订单
    ShopDetail:{screen:ShopDetail},//商品详情
    LogisiticInfo:{screen:LogisiticInfo},//物流详情
    InfomationDetail:{screen:InfomationDetail},//资讯详情
    AddGoods:{screen:AddGoods},//添加货品
    EvalList:{screen:EvalList},//评价列表
    BootPage:{screen:BootPage},//引导页
    LabelSelectDemand:{screen:LabelSelectDemand},//需求标签选择
    LabelSelectCompany:{screen:LabelSelectCompany},//公司标签选择
    ShopAssess:{screen:ShopAssess},//商品评价
    HelpCenter:{screen:HelpCenter},//帮助中心
    StartRouter:{screen:StartRouter},//启动页
    PaySuc:{screen:PaySuc},//支付成功
    ShowWeb:{screen:ShowWeb}//接到通知跳转的活动页面
  },
  {
    initialRouteName:"StartRouter",
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const height = layout.initHeight;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })
        return { opacity, transform: [{ translateX }] }
      },
    }),
  }
)

var  getCurrentScreen = (navigationState)=> {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}
var _this;

class Router extends PureComponent {
  constructor(props){
    super(props)
  }
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('handwareBackPress',this.onBackAndroid)
    }
  }
  //获取用户信息
  fetchUI(){
    getMyInfomation(`registration_id=${_this.props.registrationId}`,_this.getInfo)
  }
  //获取用户信息的回调
  getInfo(result){
      if(result.returnCode==200){
        _this.setState({loading:false})
        let {stystem_msg,msg_count} = result;
        //如果是系统消息或者实名认证的消息的话过滤掉，因为我的小红点是根据 我的订单 我的发布 报价存不存在判断的 
        stystem_msg=stystem_msg.filter(item=>{
          return item!=1&&item!=2&&item!=3
       })
        let {user_id,user_name,supplier_flag,mobile_phone,rank_points,collect_article_num,collect_goods_num,rank_name,status,qq,email,headimg,user_device_id}=result.user_info
        //更新到redux的全局状态中去
        const login = (payLoad)=>{
          // console.log(payLoad)
          return {
            type: types.LOGIN_IN_DONE,
            payLoad
          }
        }
   
        _this.props.dispatch(loginAction.login({
          user_id,user_name,supplier_flag,mobile_phone,rank_points,collect_article_num,collect_goods_num,rank_name,status,qq,email,headimg:headimg?httpURI+'/'+headimg:"",stystem_msg:stystem_msg?stystem_msg:[],msg_count,user_device_id
        }))
      }
  }
  componentDidMount(){
    const { dispatch, nav } = _this.props
    //判断有没有登陆有登陆就调用此接口，统计数据用吧
    getStorage("login",(error,data)=>{
        if(data){
          recordActiveUser(``,()=>{})
        }
    })

      // JPushModule.initPush()
    //  在收到点击事件之前调用此接口
        if(Platform.OS=="android"){
          JPushModule.notifyJSDidLoad((resultCode) => {
            // console.log("resultCode"+resultCode)
            if (resultCode === 0) {
            }
          });
        }
      // // 用户注册成功后（一般在用户启动应用后），如果订阅了这个事件，将会收到这个 registrationId。
      //   JPushModule.addGetRegistrationIdListener((registrationId) => {
      //     console.log("设备注册成功后得到的registrationId" + registrationId);
      //  });

         //获取RegistrationID  
          JPushModule.getRegistrationID((id)=>{
              console.log("设备注册成功后得到的registrationId")
              // console.log(id)
              _this.props.dispatch(loginAction.login({registrationId:id}))
          })
          // 1 系统通知2 实名认证3 商家认证4 需求消息(我的发布)5 需求消息(我的报价)6 商城消息
         //收到通知后回触发此事件  {extras: "{}", alertContent: "{"router":"Mypush"}", id: 1735890310}
                  JPushModule.addReceiveNotificationListener((map) => {
                      console.log("我是通知，我是"+Platform.OS+"这边收到的通知");
                      console.log(nav)
                      console.log(map)
                      let type;
                      let id;
                      if(Platform.OS=="android"){
                        type=JSON.parse(map.extras).type;
                        id=JSON.parse(map.extras).relation_id;
                      }else{
                        type=map.type;
                        id=map.relation_id;
                      }
                      console.log("type"+type)
                      console.log(id)
                      switch(type){
                        case "1":
                         _this.fetchUI()
                        break;
                        case "2":
                        _this.fetchUI()
                        break;
                        case "3":
                        _this.fetchUI()
                        break;
                        case "4":
                        console.log("我要触发4号事件")
                          DeviceEventEmitter.emit("MyPublishUI")
                          DeviceEventEmitter.emit("MyPublishInfoUI")
                        break;
                        case "5":
                        console.log("我要触发5号事件")
                          DeviceEventEmitter.emit("MyOfferUI")
                          DeviceEventEmitter.emit("MyOfferInfoInfoUI")
                        break;
                        case "6":
                         _this.fetchUI()
                          DeviceEventEmitter.emit("MyOrderListUI")
                        break;
                        default:
                        break
                    }
                  });
      //在用户点击通知后，将会触发此事件
               JPushModule.addReceiveOpenNotificationListener((map) => {
                  console.log("我被点击了你敢相信？")
                  console.log(map)
                  let type;
                  let id;
                  let url;
                  if(Platform.OS=="android"){
                    type=JSON.parse(map.extras).type;
                    id=JSON.parse(map.extras).relation_id;
                    url=JSON.parse(map.extras).url;
                  }else{
                    type=map.type;
                    id=map.relation_id;
                    url=map.url
                  }
                  console.log(nav)
                  console.log(type)
                  console.log(id)
                  console.log(url)
                
                //去我的报价信息页面
                const resetAction1 = NavigationActions.reset({
                  index:2,
                  actions:[
                    NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
                    NavigationActions.navigate({ routeName:'MyOffer'}),
                    NavigationActions.navigate({ routeName:'MyOfferInfo',params:{project_id:id}})
                  ]
                })
                  //去我的发布信息页面
                const resetAction2 = NavigationActions.reset({
                  index:2,
                  actions:[
                    NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
                    NavigationActions.navigate({ routeName:'MyPublish'}),
                    NavigationActions.navigate({ routeName:'MyPublishInfo',params:{project_id:id}})
                  ]
                })
                  //去我的订单页面
                const resetAction3 = NavigationActions.reset({
                  index:1,
                  actions:[
                    NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
                    NavigationActions.navigate({ routeName:'MyOrderList'})
                  ]
                })
                 // 1 系统通知2 实名认证3 商家认证4 需求消息(我的发布)5 需求消息(我的报价)6 商城消息
                if(url){
                  console.log("我要跳转了")
                  dispatch(NavigationActions.navigate({ routeName:'ShowWeb',params:{url}}))
                }else{
                  console.log("我要往另一个🔝页面跳转")
                    switch(type){
                      case "4":
                      dispatch(resetAction2)
                      break;
                      case "5":
                      dispatch(resetAction1)
                      break;
                      case "6":
                      dispatch(resetAction3)
                      break;
                      default:
                      break
                  }
                }
                 
              });

     }

  componentWillUnmount() {
// JPushModule.removeReceiveCustomMsgListener();
// JPushModule.removeReceiveNotificationListener();
// BackAndroid.removeEventListener('hardwareBackPress');
// NativeAppEventEmitter.removeAllListeners();
// DeviceEventEmitter.removeAllListeners();
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener("handwareBackPress")
      // 清除通知事件
      JPushModule.clearAllNotifications();
    }
  }
  //安卓返回键
  onBackAndroid(){
      const { dispatch, nav } = _this.props
      // const navigation = addNavigationHelpers({ dispatch, state: nav })
      const routers = nav.routes;
      if (routers.length > 1) {
        
        dispatch(NavigationActions.back())
        return true;
      }
      if(_this.lastBackPressed && _this.lastBackPressed + 2000 >= Date.now()){
        return false;
      }
      _this.lastBackPressed = Date.now() 
      ToastAndroid.show('再点击一次退出应用',ToastAndroid.SHORT);
      return true;
  }

  render() {
    _this=this
    const { dispatch, nav } = this.props
    const navigation = addNavigationHelpers({ dispatch, state: nav })
    return (
      <View style={{flex:1}}> 
      
        <View style={[{backgroundColor:color.bluebg},Platform.OS=="android"?{height:StatusBar.currentHeight}:{height:0}]}>
          <StatusBar
             backgroundColor={color.bluebg}
              translucent={true}
              barStyle="light-content"
          />
       </View>
        <AppNavigator navigation={navigation}/>
      </View>
    )
  }
}


// export default connect((state)=>({
//   nav: state.StackReducer,
// }),
// (dispatch)=>({
//   login:(payLoad)=>dispatch(loginAction.login(payLoad))
// }))(Router)

// 这里监听router
// const mapActionDispatch = dispatch =>({
//   login:(payLoad)=>dispatch(loginAction.login(payLoad))
// })
const mapStateToProps = state => ({
  nav: state.StackReducer,
  registrationId:state.loginReducer.registrationId
});
// export default connect(mapStateToProps,mapActionDispatch)(Router);
export default connect(mapStateToProps)(Router);
// export default Router;
