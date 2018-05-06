import React, { Component } from 'react';
import { FlatList, View,Alert,TextInput,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,InteractionManager, DeviceEventEmitter} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style'
import color from '../../constant/color'
import text from '../../constant/text'
import {date2str} from '../../constant/constants'
import ModalSelect from '../../components/common/ModalSelect'
import {NavigationActions} from '../../components/common/navigation'
import {submitComfirmRequireOrder,getRequireOfferDetail} from '../../services/myPublish'
import Lost from '../../components/common/Lost'//丢失页面
import {toastShort} from '../../constant/toast'
import Naviwait from '../../components/common/NavWait'
var _this,_state,_navigator;
let infoData=[
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55},
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55},
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55},
  {name:"盐分到",spec:"A-CCA300*250",brand:"力力",unit:"m",number:"1000",remarks:"",price:2345.55}
]

let partner={
  code:"QY93847923",
  name:"北京潞盈科贸有限公司",
  address:"北京市朝阳区建国路58号",
  title:"朝阳区写字楼建设",
  remarks:"无",
  listMoreShow:false
}
export default class PublishSettlement extends Component {
  constructor(props){
        super(props)
        this.state={
          companyInfo:{},
          tel:this.props.navigation.state.params.tel,
          user_name:this.props.navigation.state.params.user_name,
          address:this.props.navigation.state.params.address,
          totalPrice:0,
          payPirce:"",
          data:[],
          dataSource:[],
          failLoad:true,
          loading:true,
          project_id:this.props.navigation.state.params.project_id,//项目id
          supplier_id:this.props.navigation.state.params.supplier_id,//公司id
          title:this.props.navigation.state.params.title
        }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      getRequireOfferDetail(`project_id=${_state.project_id}&supplier_id=${_state.supplier_id}`,_this.getDetailResult,_this.failFuc)
    });
  }
  getDetailResult(result){
    if(result.returnCode==200){
      let {project_list,company_info,tax_rate,total_price}=result
        _this.setState({
          companyInfo:company_info,
          payPirce:total_price,
          loading:false,
          data:project_list,
          dataSource:project_list.length>3?project_list.slice(0,3):project_list,
          listMoreShow:project_list.length>3?true:false,
        })
        project_list.forEach(item=>{
          _state.totalPrice+=Number(item.money)
        })
       
        _this.setState({
          totalPrice:_state.totalPrice
        })

    }else{
      Alert.alert('温馨提醒',result.returnMsg,[{text:"确定",onPress:()=>{}}])
    }
  }
  failFuc(){
    toastShort("服务器异常，请稍后再试")
    _this.setState({loading:false,failLoad:false})
  }
// 提交订单结果
  comfirResult(result){
    if(result.returnCode==200){
        DeviceEventEmitter.emit("MyPublishUI")
        DeviceEventEmitter.emit("MyPublishInfoUI")
        _navigator.navigate("ConfirmPay",{orderId:result.project_order_id,price:_state.payPirce,router:"PublishSettlement"})
    }else{
      toastShort(result.returnMsg)
    }
  }
//提交订单
  selectAction(){
     Alert.alert('温馨提醒',"是否要提交订单?",[{text:"确定",onPress:()=>{
         submitComfirmRequireOrder(`project_id=${_state.project_id}&supplier_id=${_state.supplier_id}`,_this.comfirResult,_this.failFuc)
     }},{text:"取消"}])
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
      title:"确认订单"
    };
   
    return (
      <View style={styles.main}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        {_state.dataSource.length?
        <ScrollView contentContainerStyle={{width:width,alignItems:"center"}}>
          <View style={styles.projectInfo}>
              <View style={styles.titlebar}>
                    <Text style={text.hei15}>{_state.title}</Text>
              </View>
            <View style={[styles.textbox,{justifyContent:"space-between",height:126*scale,}]}>
                <View>
                  <Text numberOfLines={1} style={[text.hei12,{marginBottom:20*scale}]}>{_state.user_name} {_state.tel}</Text>
                  <Text numberOfLines={1} style={text.hei12}>
                  {_state.address}
                  </Text>
                </View>
                {/* <Image source={require('../../images/next_demand.png')} style={{width:14*scale,height:26*scale}}/> */}
            </View>
          </View>
       
       

             <View style={{width:width,height:10*scale}}></View>
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingVertical:10*scale,width:width,paddingHorizontal: 20*scale,backgroundColor: "#FFFFFF"}}
                ref={ ref => this.flatList1 = ref }
                data={ _state.dataSource }
                extraData={_state}
                keyExtractor={(item, index) => index+"i"}
                renderItem={ this._renderItem }
                ListHeaderComponent={ this._renderHeader }
                ListFooterComponent={ this._renderFooter }
                ItemSeparatorComponent={ this._SeparatorComponent }
              />
              <View style={styles.projectInfo}>
                  <View style={[styles.footer_1,{borderBottomColor:"#c8c8c8",borderBottomWidth:1}]}>
                    <Text numberOfLines={1} style={text.shenhei10}>总计：¥{_state.totalPrice}</Text>
                </View>
                <View style={styles.footer_1}>
                    <Text numberOfLines={1} style={text.shenhei10}>实付款：</Text>
                    <Text numberOfLines={1} style={styles.text6}>¥{_state.payPirce}</Text>
                    <TouchableOpacity style={styles.selectBtn} onPress={()=>_this.selectAction()}>
                      <Text style={text.bai12}>提交订单</Text>
                    </TouchableOpacity>
                </View>
              </View>
         
         
          
        </ScrollView>
        : _state.loading?<Naviwait/>:
         <Lost title={_state.failLoad?"您的网络不给力哦":"您的网络不给力哦~~~"}
             imgUrl={require('../../images/loadFail.gif')}
             imgStyle={{width:240*scale,height:240*scale}}    
         />}
      </View>
    )
  }
  _renderHeader(){
      return(
        <View style={styles.listHeader}>
               <Text numberOfLines={1} style={text.hei15}>{_state.companyInfo.company_name}</Text>
        </View>
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
                    <Text style={text.hei10}>{item.project_list_name}</Text>
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



