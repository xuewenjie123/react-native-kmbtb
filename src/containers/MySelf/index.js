import React, { Component } from 'react'
import { StyleSheet,Alert, View,DeviceEventEmitter,Image,TouchableOpacity,Text,ToastAndroid, ScrollView,InteractionManager ,RefreshControl} from 'react-native'
import styles from './style'
import {httpURI} from '../../constant/url'
import text from '../../constant/text'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import {getStorage} from '../../constant/storage'
import {getMyInfomation} from '../../services/myInfo'
import {connect} from '../../components/common/connect';
import * as loginAction from '../../actions/loginAction';
import MyBtn from '../../components/common/MyBtn'
let _this
class MySelf extends Component {
  constructor(props){
        super(props)
        this.state={
          loading:false
        }
  }

  componentDidMount(){
    this.scriptOption=DeviceEventEmitter.addListener("MySelfUI",_this.fetchUI)
    InteractionManager.runAfterInteractions(()=>{
      _this.fetchUI()
    })
  }
  componentWillUnmount(){
    this.scriptOption.remove()
  }
  fetchUI(){
    getMyInfomation(`registration_id=${_this.props.loginProps.registrationId}`,_this.getInfo)
  }
  //获取用户信息
  getInfo(result){
      if(result.returnCode==200){
        _this.setState({loading:false})
        let {stystem_msg,msg_count} = result;
        stystem_msg=stystem_msg.filter(item=>{
          return item!=1&&item!=2&&item!=3
       })
        let {user_id,user_name,supplier_flag,mobile_phone,rank_points,collect_article_num,collect_goods_num,rank_name,status,qq,email,headimg,user_device_id}=result.user_info
        _this.props.login({
          user_id,user_name,supplier_flag,mobile_phone,rank_points,collect_article_num,collect_goods_num,rank_name,status,qq,email,headimg:headimg?httpURI+'/'+headimg:"",stystem_msg:stystem_msg?stystem_msg:[],msg_count,user_device_id
        })
      }else{
        _this.setState({
          loading:false
        })
      }
  }
  //登陆才可跳转
  navigateRouter(str,routerData){
    getStorage("login",(error,data)=>{
          if(data){
            _navigator.navigate(str,routerData)
          }else {
            Alert.alert('温馨提示',"请先登录",[{text: '稍后登录'},{text: '确认', onPress: () =>{
              _navigator.navigate('Login',{router:"Mine"})
            }},])
          }
    })
  }
  //下拉刷新
  onRefresh(){
    _this.setState({loading:true})
    _this.fetchUI()
  }
  render() {
    _this=this;
    _navigator=this.props.navigation;
    _state=this.state;
    let NavigatorTopBarProps={
      visible:true,
      title:"我的"
    };
    let {user_id,user_name,mobile_phone,rank_points,collect_article_num,supplier_flag,collect_goods_num,rank_name,headimg,status,stystem_msg,msg_count}=this.props.loginProps
    return (
      <View style={styles.main}>
          <NavigatorTopBar {...NavigatorTopBarProps}/>
          <ScrollView
             refreshControl={
              <RefreshControl
                  refreshing={_state.loading}
                  onRefresh={_this.onRefresh}
                  colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                  title= {this.state.loading? '刷新中....':'下拉刷新'}
              />}
            >
            {
              user_name?
              <TouchableOpacity style={styles.headerBox} onPress={()=>_navigator.navigate("Account")}>
                  <View style={styles.photoImg}>
                    {headimg!=""
                      ?<Image source={{uri:headimg}} style={{width:122*scale,height:122*scale}}/>
                      :<Image source={require('../../images/defaultImg.png')} style={{width:122*scale,height:122*scale}}/>
                    }
                  </View>
                  <Text style={text.hei15}>{user_name}</Text>
                  <Text style={[text.hei10,{marginTop:10*scale}]}>{this._renderPerson(status)}</Text>
                  <View style={styles.creditBox}>
                      <Text style={text.bai10}>{rank_name}</Text>
                  </View>
              </TouchableOpacity>
              :
              <TouchableOpacity style={styles.headerBox} onPress={()=>_navigator.navigate("Login")}>
                  <View style={styles.photoImg}>
                    <Image source={require('../../images/defaultImg.png')} style={{width:122*scale,height:122*scale}}/>
                  </View>
                  <Text style={[text.hei15,{marginTop:30*scale}]}>请先登录</Text>
              </TouchableOpacity>
            }

          <View style={{width:width,height:18*scale}}></View>
          <View style={styles.collectBox}>
            <TouchableOpacity style={styles.collectBoxSmall} onPress={()=>_this.navigateRouter("MyCollect",{option:"shop"})}>
              <Text style={[text.hei10,{marginRight:30*scale}]}>商品收藏</Text> 
              <Text style={text.lan30}>{collect_goods_num?collect_goods_num:0}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.collectBoxSmall} onPress={()=>_this.navigateRouter("MyCollect",{option:"info"})}>
              <Text style={[text.hei10,{marginRight:30*scale}]}>资讯收藏</Text> 
              <Text style={text.lan30}>{collect_article_num?collect_article_num:0}</Text>
            </TouchableOpacity>
          </View>
        <View style={{width:width,height:18*scale}}></View>
        <View style={styles.viewBox}>
              <MyBtn title="我的消息"  onPress={()=>_this.navigateRouter("MyMessage")} showSpot={false} infoNum={msg_count}/>
              <MyBtn title="我的订单" content="我购买过的所有商品订单" onPress={()=>_this.navigateRouter("MyOrderList")} showSpot={stystem_msg.indexOf("6")!=-1?true:false}/>
              <MyBtn title="我的发布" content="我发布的需求" onPress={()=>_this.navigateRouter("MyPublish")} showSpot={stystem_msg.indexOf("4")!=-1?true:false}/>
              <MyBtn style={{borderBottomWidth:0}} title="我的报价" content="我报价的需求" onPress={()=>_this.navigateRouter("MyOffer")} showSpot={stystem_msg.indexOf("5")!=-1?true:false}/>
        </View>
        <View style={{width:width,height:18*scale}}></View>
        <View style={styles.viewBox}>
        <TouchableOpacity style={[styles.infoBox,{borderBottomWidth:0}]}
        	disabled={supplier_flag != 0 && supplier_flag != 1 ? false : true}
          onPress={() => _this.canShop()}
          >
          <Text style={text.hei15}>{this._renderAgree(supplier_flag)}</Text>
          {
            supplier_flag==2?
            <View style={styles.ShopInfo}>
              <Text style={[text.lan10,{marginRight:20*scale}]}>您尚未开店，请先申请开店</Text>
              <Image source={require('../../images/next_demand.png')} style={styles.nextImg}/>
           </View> 
            :null
          }
        </TouchableOpacity>
       
        </View>
        </ScrollView>
      </View>
    )
  }
//是否个人认证0 未认证 1 已认证 2 审核中 3 审核未通过  
  _renderPerson(status){
    switch(status){
      case "1":
      return "已认证"
        break;
      case "2":
      return "审核中"
        break;
      case "3":
      return "审核未通过"
        break;
      default:
      return "未认证"
        break;
    }
  }
  canShop() {
		//是否个人认证0 未认证 1 已认证 2 审核中 3 审核未通过
		getStorage('login', (error, data) => {
			if (data) {
				switch (_this.props.loginProps.status) {
					case '1':
						_navigator.navigate('ApplyShopAgree');
						break;
					case '2':
						Alert.alert('温馨提示', '实名认证审核通过后方可申请开店', [ { text: '确认' } ]);
						break;
					case '3':
						Alert.alert('温馨提示', '请先进行实名认证', [
							{ text: '稍后认证' },
							{
								text: '去认证',
								onPress: () => {
									_navigator.navigate('RealNameAgree');
								}
							}
						]);
						break;
					default:
						Alert.alert('温馨提示', '请先进行实名认证', [
							{ text: '稍后认证' },
							{
								text: '去认证',
								onPress: () => {
									_navigator.navigate('RealNameAgree');
								}
							}
						]);
						break;
				}
			} else {
				Alert.alert('温馨提示', '请先登陆', [
					{ text: '稍后登陆' },
					{
						text: '确认',
						onPress: () => {
							_navigator.navigate('Login', { router: 'Mine' });
						}
					}
				]);
			}
		});
	}
  //是不是商家 0 审核中 1 通过 -1 失败 2 未申请、不是商家
  _renderAgree(supplier_flag){
    switch(supplier_flag){
      case "1":
      return "您的店铺已认证"
        break;
      case "0":
      return "您的开店申请正在审核中！"
        break;
      case "-1":
      return "审核未通过再次申请"
        break;
      default:
      return "申请开店"
        break;
    }
  }
}

export default connect((state)=>({
  loginProps:state.loginReducer,
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(MySelf)