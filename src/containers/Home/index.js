import React, { Component } from 'react';
import {  View,TextInput,Alert,TouchableOpacity,Image,Text, ScrollView ,FlatList,InteractionManager,DeviceEventEmitter, StyleSheet,RefreshControl} from 'react-native';
import styles from './style';
import color from '../../constant/color'
import text from '../../constant/text'
import httpURI from '../../constant/url'
import { width, height,scale } from '../../components/common/Dimensions'
import SwiperBox from '../../components/common/SwiperBox';
import SwiperTwo from '../../components/home/SwiperTwo'
import RenderShop from '../../components/common/RenderShop'
import {getStorage} from '../../constant/storage'
import {getHomeInfo} from '../../services/home'

import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {NavigationActions} from 'react-navigation'
import {connect} from '../../components/common/connect';
import * as loginAction from '../../actions/loginAction'

var _this,_state,_navigator;
class Home extends Component {
  constructor(props){
        super(props)
        this.state={
          searchContent:"",
          selling:[],
          imgList:[],
          titleList:[],
          shopList:[],
          loading:true,
          failLoad:true,
          index_ad:{}
        }
  }
  //需要登陆才可跳转
  navigateRouter(str,routerData){
    getStorage("login",(error,data)=>{
          if(data){
            _navigator.navigate(str,routerData)
          }else {
            Alert.alert('温馨提示',"请先登陆",[{text: '稍后登陆'},{text: '确认', onPress: () =>{
              _navigator.navigate('Login',{router:"Home"})
            }},])
          }
    })
  }
   
  //获取首页数据接口
  fetchUI(){
    getHomeInfo(``,_this.getInfoResult,_this.FailFuc)
  }

  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      _this.fetchUI()
    });
  }

  //获取首页数据处理
  getInfoResult(result){
      _this.setState({
        selling:result.sellingList,
        imgList:result.imgList,
        titleList:result.titleList,
        shopList:result.shopList,
        loading:false,
        index_ad:result.index_ad?result.index_ad:{}
      })
  }
  //请求失败
  FailFuc(){
    _this.setState({
      loading:false,failLoad:false
    })
  }


  navRouter(type){
    //去资讯页的询盘， 第二个参数就是去询盘页的表示
    _this.props.tabNavigator("资讯",true)    
  }
  //下啦刷新
  onRefresh(){
    _this.setState({loading:false})
    getHomeInfo(``,_this.getInfoResult,_this.FailFuc)
  }
  render() {
    // console.log("我是首页的渲染")
    _this=this;
    _state=this.state;
    _navigator=this.props.navigation;
    let SwiperBoxProps = {
      _navigator:_navigator,
      imgList:_state.imgList,
    }
    let SwiperTwoProps = {
      _navigator:_navigator,
      titleList: _state.titleList
    }
    return (
      <View style={styles.main}>
          
            <View  style={styles.header}>
                <TouchableOpacity  onPress={()=>_navigator.navigate("ShopClass")}>
                <Image source={require('../../images/home_head_l.png')} style={styles.header_icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.input} underlayColor='transparent' activeOpacity={0.8} onPress={()=>_navigator.navigate("Search")}>
                    <Image source={require('../../images/home_head_search.png')} style={styles.search_icon}/>
                    <Text style={styles.textInput} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>_this.navigateRouter("ShopCart")}>
                  <Image source={require('../../images/shopingCart.png')} style={styles.header_icon}/>
                </TouchableOpacity>
            </View>
            <ScrollView  contentContainerStyle={{width:width}}   
                  refreshControl={
                            <RefreshControl
                                refreshing={_state.loading}
                                onRefresh={_this.onRefresh}
                                colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                                title= {this.state.loading? '刷新中....':'下拉刷新'}
                            />
                    }>
              <View style={styles.banner}>
               
                  <View style={{width:width,height:270*scale,overflow:"hidden"}}>
                  {
                    _state.imgList.length? <SwiperBox {...SwiperBoxProps}/>:null
                   }
                  </View>
                  
                <Image  source={require('../../images/tmBot.png')} style={styles.imgPosBot}/>
              </View>
            
            <View style={styles.sections} >
                <View style={styles.sectionHeader}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Text style={[text.lan15,{fontWeight:"500"}]}>热 <Text style={text.lan12}>/</Text> 销 <Text style={text.lan12}>/</Text> 分 <Text style={text.lan12}>/</Text> 类</Text>
                    </View>
                    <TouchableOpacity style={styles.classMore} onPress={()=>_navigator.navigate("ShopClass")}>
                      <Text style={text.hei12}>更多分类</Text>
                      <View style={styles.section_iconBox}>
                        <Image source={require('../../images/right_back.png')} style={styles.section_icon}/>
                      </View>
                    </TouchableOpacity> 
                </View>
              </View>
            {_this._renderItem()}
            <View style={styles.interval}>
          <View style={styles.inter_info}>
              <Text style={styles.text2}>行业咨讯</Text>
              <View style={styles.infoMationBox}>
                <SwiperTwo  {...SwiperTwoProps}/>
              </View>
              <TouchableOpacity style={{alignItems:"center",justifyContent:"center",flexDirection:"row",}} onPress={()=>_this.navRouter(true)}>
                <Image source={require('../../images/home_line.png')} style={styles.homeLine}/>
                <Text style={[styles.text3,{marginLeft:30*scale}]}>更多</Text>
              </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.advertImg} activeOpacity={1} onPress={()=>{}}>
          <Image source={{uri:_state.index_ad.ad_code?_state.index_ad.ad_code:""}} style={{width:width,height:150*scale}}/>
        </TouchableOpacity>

        <View style={styles.askBox}>
          <View style={styles.ask_l}>
            <Image source={require('../../images/home_9.png')} style={styles.askImg}/>
            <TouchableOpacity style={styles.askBtn} onPress={()=>{_this.navigateRouter("PublishDemand")}}>
                <Text style={text.bai12}>直接发布需求</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ask_l}>
            <Image source={require('../../images/home_10.png')} style={styles.askImg}/>
            <TouchableOpacity style={styles.askBtn} onPress={()=>_this.navRouter()}>
                <Text style={text.bai12}>立即询价</Text>
            </TouchableOpacity>
          </View>
        </View>

          <View style={styles.interval}> 
          <Text style={[text.lan15,{fontWeight:"500"}]}>
          热 <Text style={text.lan12}>/</Text> 销 <Text style={text.lan12}>/</Text> 商 <Text style={text.lan12}>/</Text> 品
          </Text>
          </View>
  
         <RenderShop shopList={_state.shopList} navigation={_navigator}/>
          </ScrollView>
      </View>
    )
  }


  _renderItem(){
    return (
      <View style={styles.sellList}>
      {
      _state.selling.length?_state.selling.map((item,index)=>(
          <TouchableOpacity style={styles.sectBox} key={index} onPress={()=>_navigator.navigate("ShopList",{id:item.menu_url})}>
                    <View style={styles.sellImgBox}><Image source={{uri:item.menu_img}} style={styles.sellImg}/></View> 
                    <Text style={text.hei12}>{item.menu_name}</Text>
          </TouchableOpacity>
      ))
     :null}
     </View>
    )
  }
}

export default connect((state)=>({
  loginProps:state.loginReducer,
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(Home)