import React, { Component } from 'react';
import { FlatList,DeviceEventEmitter, View,Alert,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,InteractionManager,Modal} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style'
import color from '../../constant/color'
import text from '../../constant/text'
import {NavigationActions} from '../../components/common/navigation'
import {date1str,delHtmlTag} from '../../constant/constants'
import ModalSelect from '../../components/common/ModalSelect'
import {getMyRequireDetail,applicationForRefund,confirmationOfReceipt} from '../../services/myPublish'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {httpURI,httpURIde} from '../../constant/url'
var _this,_state,_navigator;
let infoData=[
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55},
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55},
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55},
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55}
]
let companyList=[
  {id:"111",name:"北京一线天贸易有限公司",price:120324},{id:"123",name:"北京一线天贸易有限公司",price:120324},{id:"121",name:"北京一线天贸易有限公司",price:120324},{id:"1",name:"北京一线天贸易有限公司",price:120324},{id:"2",name:"北京一线天贸易有限公司",price:120324},{id:"3",name:"北京一线天贸易有限公司",price:120324},{id:"9",name:"北京一线天贸易有限公司",price:120324},{id:"78",name:"北京一线天贸易有限公司",price:120324},{id:"4",name:"北京一线天贸易有限公司",price:120324},{id:"008",name:"北京一线天贸易有限公司",price:120324},{id:"71",name:"北京一线天贸易有限公司",price:120324},{id:"5",name:"北京一线天贸易有限公司",price:120324},{id:"67",name:"北京一线天贸易有限公司",price:120324},{id:"6",name:"北京一线天贸易有限公司",price:120324}
];
let partner={
  code:"QY93847923",
  name:"北京潞盈科贸有限公司",
  address:"北京市朝阳区建国路58号",
  title:"朝阳区写字楼建设",
  remarks:"无",
  listMoreShow:false
}
// let companyInfo={
//   name:"【门窗】写字楼建设项目",
//   companyName:"北京潞盈科技有限公司",
//   address:"天津市市辖线宁河县芦台镇桥北新区津榆公路北侧",
//   tel:189828298934,
//   startTime:"2017/02/01",
//   endTime:"2018/01/03",
// } 
export default class MyPublishInfo extends Component {
  constructor(props){
        super(props)
        this.state={
          state:this.props.navigation.state.params.projectState,//汉字报价中审核中等状态
          project_id:this.props.navigation.state.params.project_id||"",//发布详情id
          stateNum:this.props.navigation.state.params.stateNum||"",//状态数字
          isChecked:true,//交易中状态是否审核过
          other_require:"",//其他要求
          data:[],//清单数据
          companyList:[],//公司列表
          dataSource:[],//显示清单数据
          partner:{},//交易中订单信息
          isCheck:true,//是否通过
          billing:false,//是否开具发票
          otherRequire:"无",//其他要求
          supplier_id:"",//公司id
          visible:false,//modal显示
          visible2:false,
          invoice_type:"",//发票类型
          loading:true,//加载状态
          // visible2:false,
          reason:"",//需求未通过原因
          tel:1988382838,
          failLoad:true,
          showImgUrl:""
        }
  }
  
 fetchUI(){
   //获取我的发布详情
  getMyRequireDetail(`project_id=${_state.project_id}`,_this.getDetailResult,_this.failFuc)
 }

 componentWillMount(){
    this.scriptOption=DeviceEventEmitter.addListener("MyPublishInfoUI",this.fetchUI)
 }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      _this.fetchUI()        
    });
  }

  componentWillUnmount(){
    this.scriptOption.remove()
  }
  
  getDetailResult(result){
    if(result.returnCode==200){
      let {status,project_name,user_name,mobile_phone,province,municipality,county,area,start_time,end_time,invoice,invoice_type,other_require,stage,error_msg,images}=result.project_info
      let showImg = images?images.split("|"):[]
      showImg =  showImg.map(element => {
            return element = httpURIde+"/KemaoEC/"+element
        });
        _this.setState({
          title:project_name, 
          isCheck:status==2?false:true,
          address:province+municipality+county+area,
          user_name:user_name,
          tel:mobile_phone,
          startTime:start_time,
          endTime:end_time,
          billing:invoice==0?false:true,
          invoice_type:invoice_type==1?"增值税专用发票":"增值税普通发票",
          loading:false,
          stateNum:stage,
          reason:error_msg,
          state:stage==2?"报价中":stage==1?"审核中":stage==4?"交易中":stage==3?"选择中":"已完成",
          other_require:other_require,
          showImg
        })
        if(stage==1){
          let {project_detail_list}=result
          _this.setState({
            data:project_detail_list,
            dataSource:project_detail_list.length>3?project_detail_list.slice(0,3):project_detail_list,
            listMoreShow:project_detail_list.length>3?true:false,
          })
        }else if(stage==3||stage==2){
          let {supplier_list}=result
            _this.setState({
              companyList:supplier_list
            })
        }else if(stage==4||stage==5){
          let {order_info}=result
          _this.setState({
            partner:order_info
          })
        }
    }else{
      _this.setState({loading:false,failLoad:false})
    }
  }

  failFuc(){
    _this.setState({loading:false,failLoad:false})
  }

  selectAction(){
    if(!_state.supplier_id){
      Alert.alert('温馨提醒','请选择公司',[{text:"确定",onPress:()=>{}}])
    }else{
      _this.setState({visible:true})
    }
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
      title:"我的发布"
    };
    let ModalSelectProps={
      visible:_state.visible,
      content:_state.state=="选择中"||_state.state=="报价中"?"确定选择该公司吗？":_state.partner?_state.partner.order_stage==2?"是否确认申请退款？":"是否确认收货":"是否确认收货",
      closeModal:()=>{
        _this.setState({visible:false})
      },
      confirm:()=>{
        _this.setState({visible:false})
        if(_state.state=="选择中"||_state.state=="报价中"){
          //如果等于选择中确认之后
          _navigator.navigate('PublishSettlement',{supplier_id:_state.supplier_id,project_id:_state.project_id,title:_state.title,user_name:_state.user_name,address:_state.address,tel:_state.tel})
        }else{
          //申请退款 或者确认收货逻辑
          if(_state.partner.order_stage==2){
            applicationForRefund(`order_id=${_state.partner.order_id}`,function(result){
              if(result.returnCode==200){
                _this.fetchUI()
                DeviceEventEmitter.emit("MyPublishUI")
              }else{
                Alert.alert('温馨提醒',result.returnMsg,[{text:"确定",onPress:()=>{}}])
              }
            })
          }else{
            confirmationOfReceipt(`order_id=${_state.partner.order_id}`,function(result){
              if(result.returnCode==200){
                _this.fetchUI()
                DeviceEventEmitter.emit("MyPublishUI")
              }else{
                Alert.alert('温馨提醒',result.returnMsg,[{text:"确定",onPress:()=>{}}])
              }
            })
          }
        }
      }
    }
    let styleBoxState=_state.state=="审核中"||_state.state=="报价中"?{borderColor:"#ff7200"}:_state.state=="交易中"?{borderColor:"#ff5e84"}:_state.state=="选择中"?{borderColor:"#0eb8ff"}:{borderColor:"#cbcbcb"}
    let styleTextState=_state.state=="审核中"||_state.state=="报价中"?{color:"#ff7200"}:_state.state=="交易中"?{color:"#ff5e84"}:_state.state=="选择中"?{color:"#0eb8ff"}:{color:"#cbcbcb"}
   
    return (
      <View style={[styles.main,_state.state=="选择中"||_state.state=="报价中"?{paddingBottom:140*scale}:null]}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
       {
         _state.title?
         <ScrollView>
         <View style={styles.projectInfo}>
             <View style={styles.titlebar}>
               <View style={{flex: 1}}></View>
               <View style={styles.centerView}>
                   <Text style={text.hei15} numberOfLines={1} >{_state.title}</Text>
               </View>

               <View style={{flex: 1,justifyContent:"center"}}>
              
                  <View style={[styles.stateBox,styleBoxState]}>
                     <Text style={[text.hei10,styleTextState]}>{!_state.isCheck?"未通过":_state.state}</Text>
                 </View>

               </View>
             </View>
             {!_state.isCheck?
             _state.reason?
                 <Text style={[text.qianhei12,{color:"red",textAlign:"center",marginBottom:20*scale}]}>需求未通过，原因：{_state.reason}</Text>
               :null:null}
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

         <View style={{width:width,height:10*scale,backgroundColor:color.main}}></View>
         {_state.state=="交易中"||_state.state=="已完成"&&_state.partner?
             <View style={styles.projectInfo}>
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
                 
                 <View style={[styles.textbox,{marginTop:20*scale}]}>
                   <Text numberOfLines={1} style={text.qianhei12}>合 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计：</Text>
                   <Text numberOfLines={1} style={text.hei12}>¥{_state.partner.total_price}</Text>
                 </View>
                 {this._renderShow(_state.partner.order_stage)}
                 {
                   _state.partner.license_no?
                   <View style={styles.logBox}>
                    <Text numberOfLines={1} style={[text.hei12,{marginTop:30*scale}]}>物流信息</Text>
                    <View style={[styles.textbox,{marginTop:20*scale}]}>
                      <Text numberOfLines={1} style={text.qianhei12}>车牌号：</Text>
                      <Text numberOfLines={1} style={text.hei12}>{_state.partner.license_no}</Text>
                    </View>
                    <View style={[styles.textbox,{marginTop:20*scale}]}>
                      <Text numberOfLines={1} style={text.qianhei12}>司机电话：</Text>
                      <Text numberOfLines={1} style={text.hei12}>{_state.partner.mobile_phone}</Text>
                    </View>
                  </View>
                   :null
                 }
                
             </View>
           :
         null}


       {_state.state=="审核中"?
            <View style={{width:width,height:10*scale,backgroundColor:color.main}}></View>
           :
          null
       }
        {/* <View style={[styles.projectInfo,{paddingTop:15*scale,paddingBottom:15*scale}]}> */}
       {
         _state.state!=="选择中"&&_state.state!=="报价中"?
           _state.state!=="交易中"&&_state.state!=="已完成"?
             <FlatList
               contentContainerStyle={{paddingVertical:15*scale,width:width,paddingHorizontal: 20*scale,backgroundColor: "#FFFFFF"}}
               ref={ ref => this.flatList1 = ref }
               data={ _state.dataSource }
               extraData={_state}
               keyExtractor={(item, index) => index+"i"}
               renderItem={ this._renderItem }
               ListHeaderComponent={ this._renderHeader }
               ListFooterComponent={ this._renderFooter }
               ItemSeparatorComponent={ this._SeparatorComponent }
           />:null:
           _state.companyList.length?
             <FlatList
                 contentContainerStyle={{paddingVertical:15*scale,width:width,paddingHorizontal: 20*scale,backgroundColor: "#FFFFFF"}}
                 ref={ ref => this.flatList1 = ref }
                 data={ _state.companyList }
                 extraData={_state}
                 keyExtractor={(item, index) => index+"j"}
                 renderItem={ (item)=>this._renderItem2(item) }
                 ItemSeparatorComponent={ this._SeparatorComponent2 }
                 getItemLayout={(data, index) => ( { length: 320*scale, offset: (320 + 10) *scale* index +60*scale, index } )}
             />
            :_state.loading?
            <Naviwait/>:
            <View style={[styles.projectInfo,{alignItems:"center"}]}>
                <View style={{flex:1,width:width,alignItems:"center",marginTop:40*scale,justifyContent:"center"}}>
                     <Image source={require('../../images/loadFail.gif')} style={{width:146*scale,height:144*scale}}/>
                     <Text style={{fontSize:12,color:"#999",marginTop:20*scale}}>暂时还没有报价～～～</Text>
                 </View>
                 <View style={{marginTop:50*scale}}>
                   <Text style={text.hong10}>建议</Text>
                   <Text style={text.hong10}>1. 更换一个醒目的需求名称；</Text>
                   <Text style={text.hong10}>2. 延长报价时间；</Text>
                   <Text style={text.hong10}>3. 更换一个更精确的标签</Text>
                 </View>
                 <View style={styles.selectFooter2}>
                     <TouchableOpacity style={styles.selectBtn} onPress={()=>{_navigator.navigate("PublishDemand")}}>
                       <Text style={text.bai15}>重新发布需求</Text>
                     </TouchableOpacity>
                 </View>
            </View>
         }
              
            <View style={styles.projectInfo}>
            {
            _state.state=="审核中"?
                    <View style={styles.footer_2}>
                        <View style={styles.rowFooter}>
                            <Text numberOfLines={1} style={text.qianhei12}>开局发票 </Text>
                            <Text numberOfLines={1} style={text.hei12}> {_state.billing?_state.invoice_type:"否"}</Text>
                        </View>
                        <View style={styles.rowFooter}>
                            <Text numberOfLines={1} style={text.qianhei12}>其他要求 </Text>
                            <Text numberOfLines={1} style={text.hei12}> {_state.other_require?delHtmlTag(_state.other_require):""}</Text>
                        </View>
                    </View>
                  :null}
                {_this.renderImg()}
            </View>
       </ScrollView>
         : _state.loading?<Naviwait/>:
         <Lost title={_state.failLoad?"服务器异常，请稍后再试":"服务器异常，请稍后再试~~~"}
             imgUrl={require('../../images/loadFail.gif')}
             imgStyle={{width:240*scale,height:240*scale}}    
         />
       }
      
        {
            _state.state=="选择中"||_state.state=="报价中"?
            _state.companyList.length?
                <View style={styles.selectFooter}>
                      <TouchableOpacity style={styles.selectBtn} onPress={()=>_this.selectAction()}>
                        <Text style={text.bai15}>选择</Text>
                      </TouchableOpacity>
                </View>
            :null:null
        }
        <ModalSelect {...ModalSelectProps}/>
        <Modal
          animationType="fade"
          transparent={true}
          visible={_state.visible2}
          style={{alignItems:"center",justifyContent:"center",}}
          onRequestClose={() => {_this.setState({visible2:false})}}>
          <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000000", opacity: .9,}}>
            <TouchableOpacity style={{flex:1}} onPress={() => {_this.setState({visible2:false})}}>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
           <Image source={{uri:_state.showImgUrl}}  style={{width:300*scale,height:300*scale,marginRight:20*scale,marginBottom:20*scale}}/>
           </View>
        </Modal>
      </View>
    )
  }
   //显示图片
  renderImg(){
    console.log(_state.showImg)
    return (
      _state.state=="审核中"?
      <View style={{flexDirection:"row",flexWrap:"wrap",width:width-40*scale}}>
        { _state.showImg.length? 
            _state.showImg.map((item,index)=>(
              <TouchableOpacity key={index} onPress={()=>{_this.quanpin(item)}}>
                  <Image source={{uri:item}} style={{width:200*scale,height:100*scale,marginRight:20*scale,marginBottom:20*scale}}/>
              </TouchableOpacity>
            )):null}
      </View>:null
    )
  }
  quanpin(item){
    _this.setState({
         visible2:true,
        showImgUrl:item
    })
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
        return <Text numberOfLines={1} style={[text.hei12,{color:color.bluebg}]}>退款中/退款成功</Text>
          break;
      case "-2":
        return <Text numberOfLines={1} style={[text.hei12,{color:color.bluebg}]}>退款中/退款成功</Text>
          break;
      case "-3":
        return <Text numberOfLines={1} style={[text.hei12,{color:"#e3e3e3"}]}>已关闭</Text>
          break;
    }
  }
  _renderShow(order){
    // <View style={styles.refund2}>
    //               <TouchableOpacity style={styles.refundBtn} onPress={()=> _navigator.navigate("MyAssess",{project_id:_state.project_id})}>
    //                 <Text style={text.bai12}>评价</Text>
    //               </TouchableOpacity>
    //           </View>
    switch(order){
      case "1":
        return(
            <View style={styles.refund2}>
                <TouchableOpacity style={styles.refundBtn} onPress={()=>_navigator.navigate("ConfirmPay",{project_id:_state.project_id,price:_state.partner.total_price})}>
                  <Text style={text.bai12}>去支付</Text>
                </TouchableOpacity>
            </View>
        )
          break;
      case "2":
          return(
            <View style={styles.refund2}>
                  <TouchableOpacity style={styles.refundBtn} onPress={()=> _this.setState({visible:true})}>
                    <Text style={text.bai12}>申请退款</Text>
                  </TouchableOpacity>
              </View>
          )
            break;
      case "3":
          return(
            <View style={styles.refund2}>
                  <TouchableOpacity style={styles.refundBtn} onPress={()=> _this.setState({visible:true})}>
                    <Text style={text.bai12}>确认收货</Text>
                  </TouchableOpacity>
              </View>
          )
            break;
      case "4":
          return(
            null
          )
            break;
      case "-1":
        return(
            <View style={styles.refund1}>
              <Text style={text.hong10}>卖家处理中，若卖家超过15天不处理，系统将把钱款自动退回</Text>
            </View>
        )
          break;
      case "-2":
          return(
            <View style={styles.refund1}>
              <Text style={text.hong10}>卖家处理中，若卖家超过15天不处理，系统将把钱款自动退回</Text>
            </View>
          )
            break;
      default:
          return <View style={{height:20*scale,width:width}}></View>
            break
      }     
  }

  _renderHeader(){
      return(
        _state.state=="审核中"?
        <View style={styles.listHeader}>
               <Text numberOfLines={1} style={text.hei12}>货品清单</Text>
        </View>:null
      )
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
        {
          _state.state=="交易中"||_state.state=="已完成"?
          item.price?
            <View style={styles.tableLabel}>
              <View style={styles.itemLeft}>
                    <Text style={text.qianhei10}>价格</Text>
              </View>
              <View style={styles.itemRight}>
                  <Text style={text.hei10}>{item.price}</Text>
              </View>
           </View>
          :null:null
        }
        </View>
      )
  }
  selectCompany(supplier_id){
    _this.setState({
      supplier_id
    })
  }
  _renderItem2({item,index}){
      return (
        <View style={styles.itemstyle2}>
          <View style={{flexDirection:"row",height:100*scale,alignItems:"center"}}>
            <TouchableOpacity onPress={()=>_this.selectCompany(item.supplier_id)} style={{height:100*scale,justifyContent:"center"}}>
              {
                  _state.supplier_id===item.supplier_id?
                  <Image source={require('../../images/selected.png')} style={{width:24*scale,height:24*scale,marginRight:20*scale}}/>
                  :
                  <Image source={require('../../images/noSelect.png')} style={{width:24*scale,height:24*scale,marginRight:20*scale}}/>
                }
            </TouchableOpacity>
            <Text style={text.hei15} onPress={()=>_this.selectCompany(item.supplier_id)}>{item.company_name}</Text>
          </View>
      
          <TouchableOpacity style={{flexDirection:"row",height:100*scale,alignItems:"center"}} onPress={()=>{_navigator.navigate("CompanyInfo",{supplier_id:item.supplier_id,project_id:item.project_id})}}>
            <Text style={[text.hei15,{color:color.bluebg}]}>¥{item.total_price}</Text>
            <Image source={require('../../images/next_demand.png')} style={{width:14*scale,height:26*scale,marginLeft:20*scale}}/>
          </TouchableOpacity>
        </View>
      )
  }
  _SeparatorComponent(){
    return(
        <View style={{height:10*scale}}></View>
    )
  }
  _SeparatorComponent2(){
    return(
        <View style={{width:width-40*scale,height:1,backgroundColor:"#dcdcdc"}}></View>
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



