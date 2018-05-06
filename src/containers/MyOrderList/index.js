import React, { Component } from 'react';
import { FlatList, View,Alert,TouchableOpacity,Image,ToastAndroid,Text,DeviceEventEmitter, ScrollView ,InteractionManager} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style'
import color from '../../constant/color'
import text from '../../constant/text'
import {date2str} from '../../constant/constants'
import {NavigationActions} from '../../components/common/navigation'
import {getMyOrderList} from '../../services/shopServer'
import {confirmReceipt} from '../../services/order'
import {updateSystemMsgStatus} from '../../services/myMsg'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {toastShort} from '../../constant/toast'
var _this,_state,_navigator;
let cartList=[
  {companyName:"北京潞盈科技有限公司",payState:"待支付",sumPrice:4150,
     goodsList:[
       {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1},
       {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1}
     ]
   },
   {companyName:"北京潞盈科技有限公司",payState:"待收货",sumPrice:4150,
   goodsList:[
     {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1},
     {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1}
     ]
   },
   {companyName:"北京潞盈科技有限公司",payState:"待支付",sumPrice:4150,
   goodsList:[
     {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1},
     {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1}
     ]
   },
 ]
export default class MyOrderList extends Component {
  constructor(props){
        super(props)
        this.state={
          dataSource:[],
          open:false,
          visible:false,
          billContent1:"",
          billContent2:"",
          titleList:["全部","待支付","待收货","已完成"],
          titleOrder:0,//
          loading:true,//是否加载中状态
          failLoad:true,//网络状态
          pay_status:"",//支付状态 0,未付款;   1,付款中;  2, 已付款;
          shipping_status:"",//发货状态  0，未发货；1，已发货；2，已收货；3，备货中
          refreshing:true,//是否显示刷新状态
          query_status:"",//查询那个状态  0 待付款  100 代发货  101 待收货   102 已完成
          notice_list:[],//有小红点状态的数组
        }
  }
  //获取订单列表
  fetchUI(){
    getMyOrderList(`query_status=${_state.query_status}`,_this.getOrderListResult,_this.failFuc)
  }

  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      DeviceEventEmitter.addListener("MyOrderListUI",_this.fetchUI)
      _this.fetchUI()
    });
  }

  failFuc(){
    toastShort("服务器似乎有点问题，请稍后再试")
    _this.setState({
      loading:false,
      failLoad:false,
      refreshing:false
    })
  }
  //获取订单列表回调
  getOrderListResult(result){
    if(result.returnCode==200){
        _this.setState({
          dataSource:result.order_list,
          loading:false,
          refreshing:false,
          notice_list:result.notice_list
        })
    }
  }

  //切换各类状态
  tabtitleList(titleOrder){
    _this.setState({titleOrder,refreshing:true,loading:true})
    let query_status;
    switch(titleOrder){
      case 0:
      query_status=""
      break;
      case 1:
      query_status=100
      break;
      case 2:
      query_status=101
      break;
      case 3:
      query_status=102
      break;
      default:
      break;
    }
    _this.setState({query_status})
    if(_state.notice_list.indexOf(query_status)!=-1){
      updateSystemMsgStatus(`operation_type=1&type=6&status=${query_status}`,_this.fetchUI,_this.failFuc)
    }else{
      getMyOrderList(`query_status=${query_status}`,_this.getOrderListResult,_this.failFuc)
    }
  }
  //是否渲染有未读小红点状态
  _renderDot(titleOrder){
    // console.log(_state.notice_list)
    switch(titleOrder){
      case 1:
       return _this.renderDotState(_state.notice_list.indexOf(100)!=-1)
      break;
      case 2:
        return _this.renderDotState(_state.notice_list.indexOf(101)!=-1)
      break;
      case 3:
        return _this.renderDotState(_state.notice_list.indexOf(102)!=-1)
      break;
      default:
      return null
      break;
    }
  }
  //小红点的渲染页面
  renderDotState(onoff){
    if(onoff){
      return (<View style={{width:10*scale,height:10*scale,backgroundColor:color.red,borderRadius:5*scale,marginBottom:10*scale,marginLeft:10*scale}}></View>)
    }
  }

  backRouter(){
    DeviceEventEmitter.emit('MySelfUI')
    _navigator.dispatch(NavigationActions.back())
  }
  render() {
    _this=this;
    _navigator=this.props.navigation;
    _state=this.state;
    let NavigatorTopBarProps={
      visible:true,
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => _this.backRouter()}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      title:"我购买过的商品"
    };
    return (
      <View style={styles.main}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
          <View style={styles.selectBox} ref={(selectBox)=>this.selectBox=selectBox}>
              {_state.titleList.length?
                  _state.titleList.map((item,index)=>(
                    <TouchableOpacity style={styles.btnBox} onPress={()=>{_this.tabtitleList(index)}} key={index}>
                    <View style={[{height:70*scale,alignItems:"center",marginBottom:2*scale,justifyContent:"center",flexDirection:"row"},_state.titleOrder==index?{borderBottomColor:color.bluebg,borderBottomWidth:2,marginBottom:0}:null]}>
                              <Text style={text.hei12}>{item}</Text>
                              {_this._renderDot(index)}
                      </View>
                </TouchableOpacity>
                  ))
                :null}
          </View>
          <View style={{width:width,height:1*scale,backgroundColor:color.qianhui}}></View> 
          {
            _state.dataSource.length?
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{width:width,backgroundColor: "#fff"}}
              ref={ ref => this.flatList = ref }
              data={ _state.dataSource }
              extraData={_state.dataSource}
              keyExtractor={(item, index) => index+"i"}
              renderItem={ this._renderItem }
              onRefresh={()=>_this.fetchUI()}
              refreshing={ this.state.refreshing }
              ItemSeparatorComponent={ this._SeparatorComponent }
          />
            :
            _state.loading?<Naviwait/>:
            <Lost title={_state.failLoad?"暂时还没有报价":"服务器异常，请稍后再试~~~"}
                imgUrl={require('../../images/loadFail.gif')}
                imgStyle={{width:240*scale,height:240*scale}}    
            />
          }
      
      </View>
    )
  }
 //分割线
  _SeparatorComponent(){
    return(
        <View style={{height:10*scale,backgroundColor:"#f0f0f0"}}></View>
    )
  }
  //是否显示评价
  assestShow(comment_state,shipping_status,order_id,goods_id){
    if(shipping_status==2&&comment_state==0){
        return (
          <TouchableOpacity onPress={()=>{_navigator.navigate("ShopAssess",{orderId:order_id,goods_id:goods_id})}} style={styles.actionBtn}>
            <Text style={text.bai12}>去评价</Text>
          </TouchableOpacity>
        )
    }else{
      return null
    }
  }
  
  _renderItem({item,index}){
    const {order_id,company_name,goods_list,pay_status,order_status,shipping_status,comment_status}=item;
    return (
      <View style={styles.itemStyle}>
           <View style={styles.itemTop}>
                <Text style={text.hei12}>{company_name}</Text>
                <Text style={text.lan12}>{_this.showState(pay_status,order_status,shipping_status)}</Text>
          </View>

          <View style={styles.itemBottom}>
              {
                goods_list.map((list,i)=>(
                  <TouchableOpacity style={[styles.listStyle,i!=0?{borderTopWidth:1,borderColor:"#ddd"}:{}]} key={i+"1"} onPress={()=>_navigator.navigate("ShopDetail",{goods_id:list.goods_id})}>
                        <View style={styles.listImg}>
                         <Image source={{uri:list.goods_thumb?list.goods_thumb:""}} style={styles.listImg}/>
                        </View>
                        <View style={styles.listRight}>
                          <Text style={text.hei15}>{list.goods_name}</Text>
                          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:width-260*scale}}>
                            <Text style={text.shenhui12}>规格：{list.goods_attr}</Text>
                            {_this.assestShow(list.comment_state,shipping_status,order_id,list.goods_id)}
                          </View>
                          <View style={styles.listRB}>
                            <Text style={text.lan15}>¥{list.goods_price}</Text>
                             <Text style={text.hei15}>x{list.goods_number}</Text>
                          </View>
                        </View>
                  </TouchableOpacity>
                ))
              }
          </View>
            <View style={[styles.textbox,{borderTopWidth:1,borderColor:"#ddd",height:100*scale,justifyContent:"space-between"}]}>
                <Text style={text.hei15}>{_this.rowSumPrice(goods_list)}</Text>
                {_this.actionWay(pay_status,order_status,shipping_status,order_id,goods_list,comment_status)}
            </View>
      </View> 
    )
  }
  //每一行渲染总价
  rowSumPrice(goods_list){
    let price=0
    goods_list.forEach(item=>{
      price+=item.goods_price*item.goods_number
    })
    return "¥"+price
  }
  //渲染状态
  showState(pay_status,order_status,shipping_status){
      if(pay_status==0){
        return "待支付"
      }else{
        switch(shipping_status){
          case 0:
             return "待发货"
          break;
          case 1:
              return "已发货"
          break;
          case 2:
              return "已收货"
          break;
          case 3:
              return "备货中"
          break;
          default:
          return ""
        }
      }
  }
  //确认收货失败
  failConfirmFuc(){
    toastShort("服务器似乎有点问提请稍后再试")
  }
  //确认收获
  _confirmReceipt(orderId){
    // console.log(orderId)
    confirmReceipt(`order_id=${orderId}`,_this.confirmReuslt,_this.failConfirmFuc)
  }
  //确认收获回调
  confirmReuslt(result){
    if(result.returnCode==200){
      _this.fetchUI()
    }else{
      toastShort(result.returnMsg)
    }
  }
  //以何
  actionWay(payState,order_status,shipping_status,orderId,goods_list,comment_status){
    let price=0
    goods_list.forEach(item=>{
      price+=item.goods_price*item.goods_number
    })
    if(payState=="0"){//未付款
        return (
          <TouchableOpacity onPress={()=>{_navigator.navigate("ConfirmPay",{orderId,price})}} style={styles.actionBtn}>
              <Text style={text.bai12}>去支付</Text>
          </TouchableOpacity>
        )
    }else{
      switch(shipping_status){
        case "0"://未发货
           return  null
        break;
        case "1"://已发货
          return (
            <View style={styles.actionBox}>
              {/* <Text style={[text.lan12,{marginRight:30*scale}]}>查看物流</Text> */}
               <TouchableOpacity onPress={()=>{_this._confirmReceipt(orderId)}} style={styles.actionBtn}>
                <Text style={text.bai12}>确认收货</Text>
               </TouchableOpacity>
            </View>
            )
        break;
        case "2"://已收货
        if(comment_status==1){
            return null
        }else{
          // return (
          //   <View style={styles.actionBox}>
          //      <TouchableOpacity onPress={()=>{_navigator.navigate("ShopAssess",{orderId})}} style={styles.actionBtn}>
          //       <Text style={text.bai12}>去评价</Text>
          //      </TouchableOpacity>
          //   </View>
          //   )
          return null
        }
            
        break;
        case "3"://备货中
            return null
        break;
        default:
        break;
      }
    }
  }
}



