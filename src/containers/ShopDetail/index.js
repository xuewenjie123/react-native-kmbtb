'use strict';
import React, { Component, } from 'react';
import { View,Image,TouchableOpacity,Alert,ToastAndroid,Text,BackHandler,InteractionManager, ScrollView} from 'react-native';
import WebViewAutoHeight from '../../components/common/WebViewAutoHeight'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import styles from './styles';
import CartSelect from '../../components/common/CartSelect'
import { width, height,scale } from '../../components/common/Dimensions';
import {getStorage} from '../../constant/storage'
import {NavigationActions} from '../../components/common/navigation'
import Swiper from 'react-native-swiper';
import {getDetailnfo,addto_cart,updateCatGoodsNum} from '../../services/shopServer'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {date1str,delHtmlTag} from '../../constant/constants'
import {tabAttr,isCollectShop,getGoodsAndSupplierInfo} from '../../services/shopServer'
import {getMyInfomation} from '../../services/myInfo'
import {connect} from '../../components/common/connect';
import {toastShort} from '../../constant/toast'
import * as loginAction from '../../actions/loginAction'
var _this,_state,_navigator;
var evalList=[
  {tel:"18982832199",imgUrl:require('../../images/home_1.png'),evalContent:"买过一次，卖家态度特别好，点赞！",creatTime:"2017年10月07日",spec:"100*23"},
  {tel:"18982832199",imgUrl:require('../../images/home_1.png'),evalContent:"买过一次，卖家态度特别好，点赞！",creatTime:"2017年10月07日",spec:"100*23"}
]

class ShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopDetail:{},
            goods_id:this.props.navigation.state.params.goods_id,
            imgList:[],
            intro:"shop",
            evalData:false,//评论
            visible:false,
            records:[],
            loading:true,
            failLoad:true,
            attrList:{},
            shopInfo:{},
            isCollect:0,
            collect:false
        };
        this.selectIndex=0
     }
    componentDidMount(){
      InteractionManager.runAfterInteractions(()=>{
          getDetailnfo(`id=${_state.goods_id}`,_this.getDetaiResult,_this.failFuc)           
      })
    }
    //这是商品详情的请求结果
    getDetaiResult(result){
      let {picturesList,goodsList,comment_list,attrList}=result
      // Image.getSize(this.props.source.uri, (width, height) => {
      //   this.setState({width, height});
      // });

      _this.attrId=[];
      if(attrList.length){//如果有规格有属性的话那么去请求获取modal页面展示数据
        attrList.forEach((item,i)=>{
          item.selectIndex=0;//默认每一行第一条选中
          _this.attrId.push(item.values[0].id);
        })
         //这里是请求商品加入购物车或立即购买弹出modal的页面数据
         tabAttr(`act=price&attr=${_this.attrId}&number=1&id=${_state.goods_id}`,_this.tabAttrResult,_this.tabFail)
      }else{//如果有规格没有属性，那么去本来传过来的
        let {goods_number,shop_price,goods_thumb}=result.goodsList
        _state.shopInfo.result=shop_price;
        _state.shopInfo.goods_attr_number=goods_number;
        _state.shopInfo.goods_attr_thumb=goods_thumb;
        _state.shopInfo.goods_attr="";
        _this.setState({shopInfo:_state.shopInfo})
      }
     //这里是轮播图啊，商品详情,评论，还有属性列表的
      _this.setState({
        isCollect:result.goodsList.is_collect?result.goodsList.is_collect:"0",
        collect:result.goodsList.is_collect==="0"||!result.goodsList.is_collect?false:true,
        imgList:picturesList,
        shopDetail:goodsList,
        loading:false,
        evalLength:comment_list?comment_list.length:0,
        evalMore:comment_list?comment_list.length>1?true:false:false,
        evalData:comment_list?comment_list.splice(0,1)[0]:null,
        records:attrList
      })
    }
    //这里是切换属性重新获取商品展示信息的接口
    selectShop(attrId){
      tabAttr(`act=price&attr=${attrId}&number=1&id=${_state.goods_id}`,_this.tabAttrResult,_this.tabFail)
    }
     //这里是切换属性重新获取商品展示信息的接口结果
    tabAttrResult(result){
      _this.setState({
        shopInfo:result
      })
    }
    //失败了
    failFuc(){
      _this.setState({
        loading:false,
        failLoad:false
      })
    }
    //无限返回
    backRouter(){
      _navigator.dispatch(NavigationActions.back())
    }
    //立即购买或者加入购物车的动作
    confirm(num,attrIds){
      _this.closeModal()
      _this.loginCanDo(()=>{
        if(_state.action=="mai"){//如果点击的是立即购买
          addto_cart(`goods_id=${_state.goods_id}&buy_num=${num}&spec=[${attrIds}]`,_this.maiAction)
        }else{
          addto_cart(`goods_id=${_state.goods_id}&buy_num=${num}&spec=[${attrIds}]`,_this.addResult)
        }
      })
    }
    //买的时候获取往结算页需要的信息
    maiAction(result){
        if(result.returnCode==200){
          getGoodsAndSupplierInfo(`goods_id=${_state.goods_id}`,_this.maiActionResult)
        }else{
          Alert.alert('温馨提示',result.returnMsg,[{text: '确认',onPress:()=>{}}])
        }
    }
     //立即购买请求接口后处理逻辑   把要购买的商品信息push的一个数组中去 下一个页面取
    maiActionResult(result){
        if(result.returnCode==200){
          var shopList =[];
          let {goods_name,goods_attr,shop_price,goods_number,company_name,goods_thumb,rec_id}=result.goods_info
          shopList.push({company_name,cart_list:[{goods_name,goods_attr,shop_price,goods_number,goods_thumb,rec_id}]})
          _navigator.navigate("ConfirmOrder",{shopList})//立即购买
        }
    }
    //加入购物车结果
    addResult(result){
        if(result.returnCode==200){
          // _this.msg="加入购物车成功"
          // //这里弹出一个小信息提示，因为ios没有一弹就消失的api组件，自己搞吧
          // _this.setState({
          //     msg:true
          //   },()=>{
          //     _this.timer=setTimeout(()=>_this.setState({msg:false}),2000)
          //     }
          // )
          toastShort("加入购物车成功")
        }else{
          toastShort(result.returnMsg)
          // Alert.alert('温馨提示',result.returnMsg,[{text: '确认',onPress:()=>{}}])
        }
    }
    // componentWillUnmount(){
    //   this.timer&&clearTimeout(this.timer)
    // }
    //这是关闭modal的动作
    closeModal(){
      _this.setState({
        visible:false
      })
    }
    //收藏做事
    collect(){
      isCollectShop(`id=${_state.goods_id}&is_collect=${_state.isCollect?_state.isCollect:"0"}&act=collect`,_this.isCollectShopResult,_this.FailFuc)
    }
    //收藏的结果
    isCollectShopResult(result){
      if(result.returnCode==200){
        if(!_state.collect){
          _this.msg="收藏成功"
        }else{
          _this.msg="取消收藏成功"
        }
        //这里弹出一个小信息提示，因为ios没有一弹就消失的api组件，自己搞吧
        _this.setState({
            collect:_state.isCollect==0?true:false,
            isCollect:_state.isCollect=="0"?"1":"0",
            msg:true
          }
          // ,()=>{
            // _this.timer=setTimeout(()=>_this.setState({msg:false}),2000)
            // }
        )
        toastShort(_this.msg)
        //收藏之后更新我的个人收藏信息
        getMyInfomation(`registration_id=${_this.props.loginProps.registrationId}`,_this.getInfo)
      }
    }

    //更新我的个人信息 
    getInfo(result){
      if(result.returnCode==200){
          let {collect_article_num,collect_goods_num}=result.user_info
          _this.props.login({
           collect_article_num,collect_goods_num
          })
        }
    }

    //得登陆才能做的事情 代码不多这里就不做封装了
    loginCanDo(callback){
      getStorage("login",(error,data)=>{
            if(data){
              callback()
            }else {
              Alert.alert('温馨提示',"请先登陆",[{text: '确认', onPress: () =>{
                _navigator.navigate('Login',{router:"ShopDetail"})
              }},{text: '稍后登陆'},])
            }
      })
    }
    //展示提示信息
    _renderMessage(){
      return (
        <View style={styles.posMsgBox}>
          <View style={styles.posMsg}>
          </View>
          <View style={styles.posMsg2}>
            <Text style={text.bai15}>{_this.msg}</Text>
          </View>
        </View>
      )
    }

    render(){
      _this=this;
      _state = this.state;
      const {goods_name,activity,shop_price,order_num,goods_number,goods_desc,company_abstract}=_state.shopDetail;
      //这里是跟modal组件 父组件和子组件 交互，
      let CartSelectProps={
        visible:_state.visible,
        confirm:_this.confirm,
        closeModal:_this.closeModal,
        records:_state.records,
        attrIds:_this.attrId,
        shopInfo:_state.shopInfo,
        selectIndex:_this.selectIndex,
        _selectShop:_this.selectShop
      };
      let NavigatorTopBarProps={
        visible:true,
        leftView: (
          <TouchableOpacity style={{flex: 1}}
            underlayColor='transparent'
            onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
            <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
              <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
            </View>
          </TouchableOpacity>
        ),
        title:"商品详情"
      };

      const html=_state.intro=="shop"?goods_desc?goods_desc:"":company_abstract?company_abstract:""
      _navigator=this.props.navigation;
       return(
        <View style={styles.main}>
          {/* {_state.msg?this._renderMessage():null} */}
          <NavigatorTopBar {...NavigatorTopBarProps}/>
         <CartSelect {...CartSelectProps}/>
            {/* <View style={[styles.backView]}>
              <TouchableOpacity  onPress={() => {_this.backRouter()}} style={styles.backBtn}>
                <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}/>
              </TouchableOpacity>
            </View> */}
            
           
            {_state.imgList.length?
               <ScrollView style={{flex:1}}>
               
               <View style={{width:width,height:width}}>
                  <Swiper horizontal={true}>
                    {_state.imgList.map((d,index)=>(
                      <TouchableOpacity activeOpacity={1} key={index} style={{width:width,height:width}} onPress={()=>{}}>
                        {d.thumb_url?<Image resizeMethod="scale" resizeMode="cover" style={{width:width,height:width}} source={{uri:d.thumb_url}} />:null}
                      </TouchableOpacity>
                    ))}
                  </Swiper>
                </View>
              
                  <View style={styles.shopDetailBox}>
                      <Text style={text.hei15}>{goods_name}</Text>
                      <Text style={text.hong12}>{activity}</Text>
                      <Text style={text.lan18}>￥{shop_price}</Text> 
                      <View style={styles.textBox}>
                        <Text style={text.shenhui10}>销售量：{order_num} </Text> 
                        <Text style={text.shenhui10}> 库存：{goods_number}</Text> 
                        {/* <Text style={text.shenhui10}>配送：{peisong}</Text>*/}
                      </View>
                  </View>
      
                <View style={{height:10*scale,width:width,backgroundColor:color.main}}></View>
                {
                  _state.evalData?
                  <View style={styles.Box}>
                      <Text style={[text.shenhui12,{marginVertical:18*scale}]}>评价{"("+_state.evalLength+")"}</Text> 
                      <View style={styles.personBox}>
                      <View style={styles.personImgBox}>
                        <Image source={{uri:_state.evalData.headimg}} style={styles.personImg}/>
                      </View>
                        <Text style={text.hei10}>{_state.evalData.user_name}</Text>
                      </View>
                        <Text style={text.hei10}>{_state.evalData.content}</Text>
                        <View style={[styles.personBox,{marginTop:20*scale}]}>
                          <Text style={text.shenhui10}>{date1str(_state.evalData.add_time,"yyyy年MM月dd日")} &nbsp; &nbsp; </Text>
                          <Text style={text.shenhui10}>商品属性：{_state.evalData.goods_attr}</Text>
                        </View>
                        {
                          _state.evalMore?
                          <View style={{width:width,alignItems:"center",marginBottom:20*scale}}>
                            <TouchableOpacity style={styles.evalBtn} onPress={()=>_navigator.navigate("EvalList",{goods_id:_state.goods_id})}>
                              <Text style={text.lan12}>查看更多评价</Text>
                            </TouchableOpacity>
                          </View>
                          :null
                        }
                  </View>
                  :
                  <View style={styles.Box}>
                    <Text style={[text.shenhui12,{marginVertical:18*scale}]}>评价(0)</Text> 
                    <Text style={[text.qianhei12,{marginVertical:18*scale,textAlign:"center"}]}>去购买货品添加第一条评价!</Text> 
                  </View>
                }
                  <View style={{height:10*scale,width:width,backgroundColor:color.main}}></View>
      
                  <View style={styles.Box}>
                    <View style={styles.webViewHead}>
                      <TouchableOpacity 
                        style={[styles.introBox,_state.intro=="shop"?{borderBottomWidth:1}:{}]}
                        onPress={()=>{_this.setState({intro:"shop"})}}
                      >
                         <Text style={_state.intro=="shop"?text.lan15:text.hei15}>货品介绍</Text> 
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={[styles.introBox,_state.intro=="seller"?{borderBottomWidth:1}:{}]}
                        onPress={()=>{_this.setState({intro:"seller"})}}
                      >
                         <Text style={_state.intro=="seller"?text.lan15:text.hei15}>卖家介绍</Text> 
                      </TouchableOpacity> 
                    </View>
                    <WebViewAutoHeight
                          style={{ width: width}}
                          minHeight={180}
                          contentInset={{top: 0, right: 0, bottom: 0, left: 0}}
                          source={{html:`<!DOCTYPE html><html><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="initial-scale=1, minimal-ui," id="viewport"><body>${html}</body></html>`
                        }}
                    />
                  </View>
                  
                </ScrollView>
              :
              _state.loading?<Naviwait/>:
              <Lost title={_state.failLoad?"没有找到该商品":"您的网络不给力哦~~~"}
                  imgUrl={require('../../images/loadFail.gif')}
                  imgStyle={{width:240*scale,height:240*scale}}    
              />
            }
        
          
          <View style={styles.footerBox}>
            <TouchableOpacity style={styles.leftBox} onPress={()=>{_this.loginCanDo(_this.collect)}}>
              {_state.collect?
                 <Image source={require('../../images/collected.png')} style={styles.cleImg}/> 
                  :
                  <Image source={require('../../images/noCollect.png')} style={styles.cleImg}/> 
              }
              <Text style={_state.collect?text.lan10:text.hei10}>收藏</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.leftBox} onPress={()=>_this.loginCanDo(()=>_navigator.navigate("ShopCart"))}>
              <Image source={require('../../images/addCart.png')} style={styles.cleImg}/>
              <Text style={_state.collect?text.lan10:text.hei10}>购物车</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btnBox,{backgroundColor:"#d8e3f2"}]} onPress={()=>{_this.setState({visible:true,action:"jia"})}}>
              <Text style={text.lan15}>加入购物车</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btnBox,{backgroundColor:color.bluebg}]} onPress={()=>_this.setState({visible:true,action:"mai"})}>
              <Text style={text.bai15}>立即购买</Text>
            </TouchableOpacity>
          </View>
        </View>
       )
     }

   }


  export default connect((state)=>({
    loginProps:state.loginReducer
  }),
  (dispatch)=>({
    login:(payLoad)=>dispatch(loginAction.login(payLoad))
  }))(ShopDetail)