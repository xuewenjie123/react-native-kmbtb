import React, { Component } from 'react';
import { FlatList, View,Alert,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,InteractionManager,DeviceEventEmitter} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style'
import text from '../../constant/text'
import color from '../../constant/color'
import {NavigationActions} from '../../components/common/navigation'
import {date1str,delHtmlTag} from '../../constant/constants'
import ModalLogistics from '../../components/common/ModalLogistics'
import { getStorage } from "../../constant/storage";
import {getMyOfferDetail,confirmRefund,fillLogisticsInformation} from '../../services/myOffer'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
var _this,_state,_navigator;
let infoData=[
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55},
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55},
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55},
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55}
]

export default class MyOfferInfo extends Component {
  constructor(props){
        super(props)
        this.state={
          state:this.props.navigation.state.params.projectState||"",//汉字报价中审核中等状态
          project_id:this.props.navigation.state.params.project_id||"",//发布详情id
          stateNum:this.props.navigation.state.params.stateNum||"",//状态数字
          data:[],//总数据
          listMoreShow:false,//是否显示加载更多
          dataSource:[],//订单清单
          partner:{},//订单信息
          invoice_info:false,//发票信息
          billing:false,
          other_require:"",//其他要求
          selectId:"",
          visible:false,
          companyInfo:false,
          loading:true,
          noSelect:false,//是否被选中
        }
  }
  fetchUI(){
    //获取我的报价详情
    getMyOfferDetail(`project_id=${_state.project_id}`,_this.getDetailResult,_this.failFuc)
   }
   //获取结果
  getDetailResult(result){
    if(result.returnCode==200){
      let {project_name,user_name,mobile_phone,province,municipality,county,area,start_time,end_time,invoice,invoice_type,other_require,stage,total_price,seller_id}=result.project_info
        _this.setState({
          title:project_name,
          address:province+municipality+county+area,
          user_name:user_name,
          tel:mobile_phone,
          startTime:start_time,
          endTime:end_time,
          billing:invoice==0?false:true,
          invoice_type:invoice_type==1?"增值税专用发票":"增值税普通发票",
          loading:false,
          stateNum:stage,
          state:stage==2?"报价中":stage==1?"审核中":stage==4?"交易中":stage==3?"选择中":"已完成",
          other_require,
          total_price
        })
        getStorage("login",(error,data)=>{
          if(data){
            if(data.userId!=seller_id){
                _this.setState({noSelect:true})
            }
          }
      })
        if(stage!=4&&stage!=5){
          let {project_detail_list}=result
          _this.setState({
            data:project_detail_list,
            dataSource:project_detail_list.length>3?project_detail_list.slice(0,3):project_detail_list,
            listMoreShow:project_detail_list.length>3?true:false,
          })
        }else{
          let {order_info,invoice_info}=result
          _this.setState({
            partner:order_info,
            invoice_info:invoice_info
          })
        }
    }else{
      _this.setState({loading:false,failLoad:false})
    }
  }

  failFuc(){
    _this.setState({loading:false,failLoad:false})
  }
  componentWillMount(){
    this.scriptOption=DeviceEventEmitter.addListener("MyOfferInfoInfoUI",this.fetchUI)
  }
  componentDidMount(){ 
    InteractionManager.runAfterInteractions(() => {
        _this.fetchUI();
    });
  }
  componentWillUnmount(){
    this.scriptOption.remove()
  }
  sumPayment(){
      var sumPrice=0;
      for(let i=0;i<_state.data.length;i++){
        sumPrice+=_state.data[i].money*1
      }
      return sumPrice+""
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
      title:"我的报价"
    };
    let ModalLogisticsProps={
        visible:_state.visible,
        closeModal:()=>{
            _this.setState({visible:false})
          },
          confirm:(json)=>{
            _this.setState({visible:false})
            // console.log(json)
            fillLogisticsInformation(`order_id=${_state.partner.order_id}&mobile_phone=${json.tel}&license_no=${json.carCode}`,result=>{
              if(result.returnCode==200){
                _this.fetchUI()
              }else{
                Alert.alert('温馨提醒','服务器异常，请稍后再试',[{text:"确定",onPress:()=>{}}])
              }
            })
          }
    };

    let styleBoxState=_state.state=="报价中"?{borderColor:"#ff7200"}:_state.state=="交易中"?{borderColor:"#ff5e84"}:_state.state=="选择中"?{borderColor:"#0eb8ff"}:{borderColor:"#cbcbcb"}
    let styleTextState=_state.state=="报价中"?{color:"#ff7200"}:_state.state=="交易中"?{color:"#ff5e84"}:_state.state=="选择中"?{color:"#0eb8ff"}:{color:"#cbcbcb"}
    return (
      <View style={styles.main}>
        <ModalLogistics {...ModalLogisticsProps}/>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        {_state.title?
          <ScrollView>
            <View style={styles.projectInfo}>
                <View style={styles.titlebar}>
                  <View style={{flex: 1}}></View>
                  <View style={styles.centerView}>
                      <Text style={text.hei15} numberOfLines={1} >{_state.title}</Text>
                  </View>
                  <View style={{flex: 1,justifyContent:"center"}}>
                     <View style={[styles.stateBox,styleBoxState]}>
                        <Text style={[text.hei10,styleTextState]}>{_state.state}</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.textbox,{marginBottom:20*scale}]}>
                <Text numberOfLines={1} style={text.qianhei12}>买 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家：</Text>
                <Text numberOfLines={1} style={text.hei12}>{_state.user_name}</Text>
              </View>
              <View style={[styles.textbox,{marginBottom:20*scale}]}>
                <Text numberOfLines={1} style={text.qianhei12}>地 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</Text>
                <Text numberOfLines={1} style={text.hei12}>{_state.address}</Text>
              </View>
              <View style={[styles.textbox,{marginBottom:20*scale}]}>
                <Text numberOfLines={1} style={text.qianhei12}>联系电话：</Text>
                <Text numberOfLines={1} style={text.hei12}>{_state.tel}</Text>
              </View>
  
              <View style={[styles.textbox,{justifyContent:"space-between",marginVertical:15*scale}]}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text numberOfLines={1} style={text.qianhei12}>发布日期：</Text>
                        <Text numberOfLines={1} style={text.hei12}>{date1str(_state.startTime,"yyyy年MM月dd日")}</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text numberOfLines={1} style={text.qianhei12}>截止日期：</Text>
                        <Text numberOfLines={1} style={text.hei12}>{date1str(_state.endTime,"yyyy年MM月dd日")}</Text>
                    </View>
              </View>
            </View>
          
       
        {_state.state=="报价中"||_state.state=="选择中"?<View style={{width:width,height:10*scale}}></View>:null}
        {
          _state.state=="报价中"||_state.state=="选择中"?
          <View>    
            <FlatList
                contentContainerStyle={{paddingVertical:15*scale,width:width,paddingHorizontal: 20*scale,backgroundColor: "#FFFFFF"}}
                ref={ ref => this.flatList = ref }
                data={ _state.dataSource }
                extraData={_state}
                keyExtractor={(item, index) => index+"j"}
                renderItem={ this._renderItem }
                ListFooterComponent={ this._renderFooter }
                ItemSeparatorComponent={ this._SeparatorComponent }
            />

           
              <View style={styles.projectInfo}>    
                  <View style={[styles.footer_1,{borderBottomColor:"#ddd",borderBottomWidth:1}]}>
                  <Text numberOfLines={1} style={text.hei12}>总计：¥{this.sumPayment()}／实付款：¥{this.shuiSumpay()}</Text>
                  </View>              
                  <View style={styles.footer_2}>
                      <View style={styles.rowFooter}>
                          <Text numberOfLines={1} style={text.qianhei12}>开局发票 </Text>
                          <Text numberOfLines={1} style={text.hei12}> {_state.billing?_state.invoice_type:"否"}</Text>
                      </View>
                      <View style={styles.rowFooter}>
                          <Text numberOfLines={1} style={text.qianhei12}>其他要求 </Text>
                          <Text numberOfLines={1} style={text.hei12}> {_state.other_require?delHtmlTag(_state.other_require):null}</Text>
                      </View>
                  </View>
              </View>
              
            </View>
              :
              _state.noSelect?
              <View style={styles.projectInfo}>
                  <View style={{width:width,height:10*scale,backgroundColor:color.main}}></View>
                  <View style={{flex:1,width:width,alignItems:"center",marginTop:40*scale,justifyContent:"center"}}>
                      <Image source={require('../../images/loadFail.gif')} style={{width:146*scale,height:144*scale}}/>
                      <Text style={{fontSize:14,color:"#999",marginTop:20*scale}}>抱歉，买家期待与您的下次合作</Text>
                  </View>
              </View>
              :
                <View style={styles.projectInfo}>
                    <View style={{width:width,height:10*scale,backgroundColor:color.main}}></View>
                    <View style={[styles.textbox,{justifyContent:"space-between",borderBottomColor:"#ddd",borderBottomWidth:1,height:60*scale}]}>
                        <Text numberOfLines={1} style={text.hei12}>订单编号：{_state.partner.order_no}</Text>
                        {this.showText(_state.partner.order_stage)}
                    </View> 
                <View style={[styles.textbox,{marginTop:20*scale}]}>
                        <Text numberOfLines={1} style={text.qianhei12}>卖家名称：</Text>
                        <Text numberOfLines={1} style={text.hei12}>{_state.partner.company_name}</Text>
                </View> 
                <View style={[styles.textbox,{marginTop:20*scale}]}>
                    <Text numberOfLines={1} style={text.qianhei12}>货品数量：</Text>
                    <Text numberOfLines={1} style={text.hei12}>{_state.partner.total_num}</Text>
                </View>
                
                <View style={[styles.textbox,{marginTop:20*scale,marginBottom:10*scale}]}>
                    <Text numberOfLines={1} style={text.qianhei12}>合 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计：</Text>
                    <Text numberOfLines={1} style={text.hei12}>¥{_state.partner.total_price}</Text>
                </View>

                {this._renderShow(_state.partner.order_stage)}
                {
                  _state.invoice_info?
                  <View style={styles.logBox}>
                  <Text numberOfLines={1} style={text.hei12}>发票信息</Text>
                  <View style={[styles.textbox,{marginTop:20*scale}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>单位名称：</Text>
                  <Text numberOfLines={1} style={text.hei12}>{_state.invoice_info.company_name}</Text>
                  </View>
                  <View style={[styles.textbox,{marginTop:20*scale}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>纳税人识别号：</Text>
                  <Text numberOfLines={1} style={text.hei12}>{_state.invoice_info.tax_no}</Text>
                  </View>
                  <View style={[styles.textbox,{marginTop:20*scale}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>注册地址：</Text>
                  <Text numberOfLines={1} style={text.hei12}>{_state.invoice_info.reg_addr}</Text>
                  </View>
                  <View style={[styles.textbox,{marginTop:20*scale}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>注册电话：</Text>
                  <Text numberOfLines={1} style={text.hei12}>{_state.invoice_info.reg_tel}</Text>
                  </View>
                  <View style={[styles.textbox,{marginTop:20*scale}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>开户银行</Text>
                  <Text numberOfLines={1} style={text.hei12}>{_state.invoice_info.bank_type	}</Text>
                  </View>
                  <View style={[styles.textbox,{paddingVertical:20*scale,borderBottomWidth:1,borderBottomColor:"#ddd"}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>开户银行账号</Text>
                  <Text numberOfLines={1} style={text.hei12}>{_state.invoice_info.bank_no}</Text>
                  </View>
                  <View style={[styles.textbox,{marginTop:20*scale}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>邮寄至：</Text>
                  <Text numberOfLines={1} style={text.hei12}>{_state.invoice_info.province}{_state.invoice_info.municipality}{_state.invoice_info.county}</Text>
                  </View>
                  <View style={[styles.textbox,{marginTop:20*scale}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>联系人</Text>
                  <Text numberOfLines={1} style={text.hei12}>{_state.invoice_info.contact}</Text>
                  </View>
                  <View style={[styles.textbox,{marginTop:20*scale}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>联系电话</Text>
                  <Text numberOfLines={1} style={text.hei12}>{_state.invoice_info.contact_info}</Text>
                  </View>
              </View>
                  :null
                }
               
            </View>
          }
          
        </ScrollView>
        : _state.loading?<Naviwait/>:
        <Lost title={_state.failLoad?"服务器异常，请稍后再试":"服务器异常，请稍后再试~~~"}
            imgUrl={require('../../images/loadFail.gif')}
            imgStyle={{width:240*scale,height:240*scale}}    
        />
      }
       
      </View>
    )
  }
  //含税总价
  shuiSumpay(){
    let shuilv = _state.billing?_state.invoice_type==1?0.17:0.06:0
    let sumPrice=_this.sumPayment()
    return (parseFloat(sumPrice)+parseFloat(sumPrice)*shuilv).toFixed(3)
  }
  
  showText(order){
    switch(order){
      case "1":
        return <Text numberOfLines={1} style={[text.hei12,{color:color.bluebg}]}>待支付</Text>
         break;
      case "2":
        return <Text numberOfLines={1} style={[text.hei12,{color:color.bluebg}]}>待发货</Text>
         break;
      case "3":
        return <Text numberOfLines={1} style={[text.hei12,{color:color.bluebg}]}>待收货</Text>
          break;
      case "4":
        return <Text numberOfLines={1} style={[text.hei12,{color:color.bluebg}]}>已完成</Text>
         break;
      case "-1":
        return <Text numberOfLines={1} style={[text.hei12,{color:color.bluebg}]}>退款中</Text>
          break;
      case "-2":
        return <Text numberOfLines={1} style={[text.hei12,{color:color.bluebg}]}>退款中/退款成功</Text>
          break;
      case "-3":
        return <Text numberOfLines={1} style={[text.hei12,{color:"#e3e3e3"}]}>已关闭</Text>
          break;
      default:
        return null
          break
    }
  }
  _confirmRefund(){
    confirmRefund(`order_id=${_state.partner.order_id}`,function(result){
      if(result.returnCode==200){
        _this.fetchUI()
        DeviceEventEmitter.emit("MyOfferUI")
        DeviceEventEmitter.emit("MyOfferInfoInfoUI")
      }})
  }
  _renderShow(order){
    switch(order){
      case "2":
        return(
          <View style={styles.refund2}>
            <TouchableOpacity style={styles.refundBtn} onPress={()=> _this.setState({visible:true})}>
              <Text style={text.bai12}>发货</Text>
            </TouchableOpacity>
        </View>
        )
         break;
      case "-1":
        return(
          <View style={[styles.refund2,{flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}]}>
              <TouchableOpacity style={styles.refundBtn} onPress={()=>{_this._confirmRefund()}}>
                  <Text style={text.bai12}>同意</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.refundBtn,{marginLeft:20*scale}]} onPress={()=> _this.setState({visible:true})}>
                  <Text style={text.bai12}>发货</Text>
              </TouchableOpacity>
          </View>
        )
          break;
      default:
        return null
          break
    }     
  }
  _renderItem({item,index}){
      return (
        <View style={styles.itemstyle}>
           <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei10}>序号</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{index+1}</Text>
                </View>
            </View>
            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei10}>货品名称</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{item.good_name}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei10}>规格</Text>
                </View>
                <View style={styles.itemRight}> 
                    <Text style={text.hei10}>{item.size}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei10}>品牌</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{item.brand}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei10}>单位</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{item.unit}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei10}>数量</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{item.num}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei10}>备注</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{item.remark}</Text>
                </View>
            </View>
   
            <View style={styles.tableLabel}>
              <View style={styles.itemLeft}>
                    <Text style={text.qianhei10}>价格</Text>
              </View>
              <View style={styles.itemRight}>
                  <Text style={text.hei10}>{item.money}</Text>
              </View>
           </View>
       
        </View>
      )
  }
  _SeparatorComponent(){
    return(
        <View style={{height:10*scale}}></View>
    )
  }
  _renderFooter(){
    return(
        _state.listMoreShow?
          <TouchableOpacity style={styles.listFoot} onPress={()=>_this.loadMore()}>
              <Text style={{fontSize:10,color:color.bluebg}}>加载更多</Text>
              <Image source={require('../../images/dropDown_icon.png')} style={{width:34*scale,height:19*scale}}/>
          </TouchableOpacity>
          :
        null
    )
  }
  loadMore(){
    _this.setState({
        dataSource:_state.data,
        listMoreShow:false
    })
  }

}



