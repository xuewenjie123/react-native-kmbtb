import React, { Component } from 'react';
import { FlatList, View,Alert,TextInput,TouchableOpacity,Image,ToastAndroid,Text,DeviceEventEmitter, ScrollView ,InteractionManager} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style'
import color from '../../constant/color'
import text from '../../constant/text'
import {date1str} from '../../constant/constants'
import {getAddressList} from '../../services/myAdress'
import {addGoodsToOrder} from '../../services/shopServer'
import ModalSelectType from '../../components/common/ModalSelectType'
import {NavigationActions} from '../../components/common/navigation';
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {toastShort} from '../../constant/toast'
var _this,_state,_navigator;
let cartList=[
  {companyName:"北京潞盈科技有限公司",activity:"满减活动：满100减200",
     goodsList:[
       {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1},
       {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1}
     ]
   },
   {companyName:"北京潞盈科技有限公司",
   goodsList:[
     {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1},
     {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1}
     ]
   },
   {companyName:"北京潞盈科技有限公司",activity:"满减活动：满100减200",
   goodsList:[
     {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1},
     {goodsName:"南坡（成都）白坡",goodsSpec:"100*23",goodsPrice:4150,number:1}
     ]
   },
 ]

export default class ConfirmOrder extends Component {
  constructor(props){
        super(props)
        this.state={
          name:"",//姓名
          address:"",//地址
          tel:"",//电话
          dataSource:[],//订单数据
          open:false,//是否开具发票
          billType:"普通个人发票",
          invoice_type:"normal_invoice",//发票类型默认普通发票
          visible:false,
          invoice_info:false,//非普通发票信息
          billContent1:"",//个人发票抬头
          address_id:"",//地址id
          InfoFill:false,//是否填写发票信息
          loading:true//是否显示加载中
        }
  }
  componentDidMount(){
    this.scriptOption1=DeviceEventEmitter.addListener("ConfirmOrderUIbills",this.updateUIbill);//注册更新发票信息事件
    this.scriptOption2=DeviceEventEmitter.addListener("ConfirmOrderAddressUI",this.updateAddress);//注册更新地址事件
    
    InteractionManager.runAfterInteractions(() => {
      getAddressList("",_this.getListResult,_this.FailFuc)//获取默认地址
      _this.setState({
        dataSource:_this.props.navigation.state.params.shopList//设置上层传过来的个人信息
      })
    });
  }
  componentWillUnmount(){
    this.scriptOption1.remove()
    this.scriptOption2.remove()
  }

  getListResult(result){
    if(result.returnCode==200){
      let  list={}
      if(result.address_list.length){
        result.address_list.forEach(element => {
          if(element.default_flag==1){
            list=element
          }
        })//取默认地址
        let {address_id,consignee,mobile,country_name,province_name,city_name,district_name}=list
        _this.setState({
          loading:false,
          address_id,
          name:consignee,
          tel:mobile,
          address:country_name+province_name+city_name+district_name
        })
      }else{
        _this.setState({
          loading:false,
        })
      }
    }else{
      _this.FailFuc()
    }
  }

  FailFuc(){
    _this.setState({
      loading:false,
      failLoad:false
    })
    toastShort("您的网络似乎有点问题请检查")
  }

  componentWillUnmount(){
    this.timer&&clearTimeout(this.timer)
  }

  updateUIbill(json){
     _this.setState({
       invoice_info:json,//发票信息
       InfoFill:true
      })
  }

  updateAddress(json){
    let {address_id,consignee,mobile,country_name,province_name,city_name,district_name}=json
    _this.setState({
        address_id,
        name:consignee,
        tel:mobile,
        address:country_name+province_name+city_name+district_name
    })
  }
 //开具发票
  openChange(){
    this.setState({
      open:!_state.open
    },()=>{
      this.timer=setTimeout(()=>this.scrollView.scrollToEnd({animated: true}),200)
    })
  }
  
  closeModal(){
    _this.setState({visible:false})
  }

  billContentChange(billContent1){
    _this.setState({billContent1})
  }
  scrollToEnd(){
    this.timer=setTimeout(()=>this.scrollView.scrollToEnd({animated: true}),500)
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
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      title:"填写订单"
    };
   let ModalSelectTypeProps={
     visible:_state.visible,
     confirm:(billType,invoice_type)=>{
        _this.setState({visible:false,billType,invoice_type})
     },
     closeModal:_this.closeModal
   }
    return (
      <View style={styles.main}>
        <ModalSelectType {...ModalSelectTypeProps}/>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        {
          _state.loading?<Naviwait/>
          :
          <ScrollView keyboardShouldPersistTaps={'handled'} style={{flex:1}} contentContainerStyle={{width:width,alignItems:"center"}} ref={(ref)=>this.scrollView=ref}>
          <View style={styles.projectInfo}>
            {
              _state.name?
              <TouchableOpacity style={[styles.textbox,{justifyContent:"space-between",height:126*scale,}]} onPress={()=>_navigator.navigate("MyAddress",{router:"ConfirmOrder"})}>
                <View>
                  <Text numberOfLines={1} style={[text.hei12,{marginBottom:20*scale}]}>{_state.name} {_state.tel}</Text>
                  <Text numberOfLines={1} style={text.hei12}>{_state.address}</Text>
                </View>
                <Image source={require('../../images/next_demand.png')} style={{width:14*scale,height:26*scale}}/>
            </TouchableOpacity>
              : 
            <TouchableOpacity style={[styles.textbox,{justifyContent:"space-between",height:126*scale,}]} onPress={()=>_navigator.navigate("MyAddress",{router:"ConfirmOrder"})}>
                  <Text numberOfLines={1} style={text.hei15}>添加地址</Text>
                <Image source={require('../../images/next_demand.png')} style={{width:14*scale,height:26*scale}}/>
            </TouchableOpacity>

            }
           
            
          </View>
          <View style={{width:width,height:10*scale,backgroundColor:color.main}}></View>

          <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{width:width,backgroundColor: "#fff"}}
                ref={ ref => this.flatList = ref }
                data={ _state.dataSource }
                extraData={_state.dataSource}
                keyExtractor={(item, index) => index+"i"}
                renderItem={ this._renderItem }
                ItemSeparatorComponent={ this._SeparatorComponent }
            />

          <View style={[styles.textbox,{borderTopWidth:1,borderColor:"#ddd",height:100*scale,justifyContent:"space-between"}]}>
              <Text style={text.hei15}>开具发票</Text>
              <TouchableOpacity activeOpacity={0.7} style={{height:100*scale,justifyContent:"center"}} onPress={()=>this.openChange()}>
                {
                  _state.open?
                  <Image source={require('../../images/opend.png')} style={{width:94*scale,height:50*scale}}/>
                  :
                  <Image source={require('../../images/closed.png')} style={{width:94*scale,height:50*scale}}/>
                }
              </TouchableOpacity>
          </View>
          
          {
            _state.open?
            <View>
              <View style={[styles.textbox,{borderTopWidth:1,borderColor:"#ddd",height:100*scale,justifyContent:"space-between"}]}>
                  <Text style={text.hei15}>发票类型</Text>
                  <TouchableOpacity activeOpacity={0.7} style={{height:100*scale,flexDirection:"row",alignItems:"center"}} onPress={()=>{_this.setState({visible:true})}}>
                      <Text style={text.hei15}>{_state.billType}</Text>
                      <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
                  </TouchableOpacity>
              </View>
              {_state.billType!="普通个人发票"?
                <View style={[styles.textbox,{borderTopWidth:1,borderColor:"#ddd",height:100*scale,justifyContent:"space-between"}]}>
                  <Text style={text.hei15}>{_state.billType=="增值税专用发票"?"发票抬头":"公司名称"}</Text>
                  {
                    _state.billType=="增值税专用发票"?
                  <TouchableOpacity activeOpacity={0.7} style={{height:100*scale,flexDirection:"row",justifyContent:"flex-end",alignItems:"center",flex:1}} onPress={()=>{_navigator.navigate('FillBill',{router:"ConfirmOrder",invoice_type:1,invoice_info:_state.invoice_info})}}>
                      <Text style={text.hei15}>{_state.invoice_info?"重新编辑":"请填写"}</Text>
                    <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
                  </TouchableOpacity>
                      :
                    <TextInput maxLength={20} underlineColorAndroid="transparent" style={styles.input} onFocus={()=>{this.scrollToEnd()}} placeholder={"请输入发票抬头"} placeholderTextColor={"#ddd"} onChangeText={(text)=> _this.billContentChange(text)} value={_this.state.billContent1} />
                  }
               </View>
              :null}
              
              
            </View>
            :null
          }
          <View style={[styles.textbox,{borderTopWidth:1,borderColor:"#ddd",height:100*scale,justifyContent:"flex-end",marginBottom:88*scale}]}>
              <Text style={[text.hei15,{fontSize:12}]}>小计：¥{_this.realPayprice()}</Text>
          </View>
        </ScrollView>
        }
        
        <View style={styles.footerB}>
                <Text style={text.shenhei12}>实付款：</Text>
                <Text style={text.lan12}>{_this.realPayprice()}</Text>
                <TouchableOpacity style={styles.submitBtn} onPress={()=>_this._submitOrder()}>
                   <Text style={text.bai12}>提交订单</Text>
                </TouchableOpacity>
        </View>
      </View>
    )
  }
  realPayprice(){
    let price=0
     _state.dataSource.forEach(element=>{
       element.cart_list.forEach(item=>{
          price+=item.shop_price*item.goods_number
       })
     })
     return price.toFixed(2)
  }
  _submitOrder(){
    if(_this.lastBackPressed && _this.lastBackPressed + 1500 >= Date.now()){
      toastShort("您的操作过于频繁，请稍后再试")
      return false;
    }
    _this.lastBackPressed = Date.now();

    if(_state.open){//如果需要开具发票
      if(_state.invoice_type=="vat_invoice"&&!_state.InfoFill){
        Alert.alert('温馨提示',"请填写发票信息",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.billType=="普通单位发票"&&_state.billContent1==""){
        Alert.alert('温馨提示',"请填写公司名称",[{text: '确认'}])
        return false;
      }
    }else if(!_state.name){
      Alert.alert('温馨提示',"请选择地址",[{text: '确认'}])
      return false;
    }

    let {open,invoice_type,invoice_info,billContent1,billType,address_id}=_state
    let {company_name,tax_no,reg_addr,reg_tel,bank_type,bank_no,provinceId,cityId,countyId,area,contact,contact_info}=invoice_info
    let idList=[]
    _state.dataSource.forEach(element=>{
      element.cart_list.forEach(item=>{
        idList.push(item.rec_id)
      })
    })
    let type= billType=="普通个人发票"?"个人":_state.billContent1
    addGoodsToOrder(`inv_flag=${open?1:0}&rec_id_str=${idList}&inv_type=${invoice_type}&vat_inv_company_name=${company_name}&vat_inv_taxpayer_id=${tax_no}&vat_inv_registration_address=${reg_addr}&vat_inv_registration_phone=${reg_tel}&vat_inv_deposit_bank=${bank_type}&vat_inv_bank_account=${bank_no}&inv_consignee_name=${contact}&inv_consignee_phone=${contact_info}&inv_consignee_country=1&inv_consignee_province=${provinceId}&inv_consignee_city=${cityId}&inv_consignee_district=${countyId}&inv_consignee_address=${area}&inv_payee=${type}&address_id=${address_id}`,_this.addOrderResult,_this.FailFuc)
  }
  //加入购物车结果
  addOrderResult(result){
    let price=0
    _state.dataSource.forEach(element=>{
      element.cart_list.forEach(item=>{
         price+=item.shop_price*item.goods_number
      })
    })

    if(result.returnCode==200){
      if(_this.props.navigation.state.params.router=="ShopCart"){
        DeviceEventEmitter.emit("ShopCartUI")
      }
      _navigator.navigate("ConfirmPay",{orderId:result.return_result[0],price})
    }else{
      if(result.returnMsg=="购物车中没有商品"){
        Alert.alert('温馨提示',"该订单已经提交",[{text: '确认'}])
      }else{
        toastShort(result.returnMsg)
      }
      
    }
  }
  _SeparatorComponent(){
    return(
        <View style={{height:10*scale,backgroundColor:"#f0f0f0"}}></View>
    )
  }
  _renderItem({item,index}){
    const {company_name,cart_list}=item;
    return (
      <View style={styles.itemStyle}>
      <View style={styles.itemTop}>
              <View style={{flexDirection:"row",alignItems:"center",height: 59*scale}}>
                <Text style={styles.text1}>{company_name}</Text>
              </View>
          </View>
          <View style={styles.itemBottom}>
              {
                cart_list.map((list,i)=>(
                  <View style={[styles.listStyle,i!=0?{borderTopWidth:1,borderColor:"#ddd"}:{}]} key={i+"1"}>
                        <Image source={{uri:list.goods_thumb}} style={styles.listImg}/>
                        <View style={styles.listRight}>
                          <Text style={text.hei15}>{list.goods_name}</Text>
                          <Text style={text.shenhui12}>规格：{list.goods_attr}</Text>
                          <View style={styles.listRB}>
                            <Text style={text.lan15}>¥{list.shop_price}</Text>
                             <Text style={text.hei15}>x{list.goods_number}</Text>
                          </View>
                        </View>
                  </View>
                ))
              }
          </View>
          {item.activity?
            <View style={[styles.textbox,{borderTopWidth:1,borderColor:"#ddd",height:100*scale,justifyContent:"space-between"}]}>
                <Text style={text.hei15}>优惠活动</Text>
                <Text style={text.hei15}>{item.activity}</Text>
            </View>
            :null}
      </View> 
    )
  }

}



