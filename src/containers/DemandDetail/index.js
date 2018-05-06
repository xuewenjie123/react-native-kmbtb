import React, { Component } from 'react';
import { FlatList, View,Alert,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,InteractionManager, Modal} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style'
import color from '../../constant/color'
import {date1str,delHtmlTag} from '../../constant/constants'
import {NavigationActions} from '../../components/common/navigation'
import ModalSelect from '../../components/common/ModalSelect'
import {getRequireDetail} from '../../services/demand'
import text from '../../constant/text'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {getStorage} from '../../constant/storage'
import {connect} from '../../components/common/connect';
import * as loginAction from '../../actions/loginAction'
import {httpURI,httpURIde} from '../../constant/url'
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
class DemandDetail extends Component {
  constructor(props){
        super(props)
        this.state={
          title:"",//需求名称
          address:"",//地址
          user_name:"",//买家名称
          address:"",//地址
          tel:"",//联系电话
          startTime:"",//发布日期
          endTime:"",//截止日期
          data:[],//所有需求列表
          loading:true,
          dataSource:[],//显示需求列表
          billing:false,
          invoice_type:"",//发票类型
          failLoad:true,
          user_id:"",
          showImg:[],//显示上传图片
          visible:false,     
          project_id:this.props.navigation.state.params.project_id,//项目id
        }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
        getRequireDetail(`project_id=${_state.project_id}`,_this.getDetailResult,_this.failFuc)
    });
  }
  failFuc(){
      _this.setState({loading:false,failLoad:false})
  }
  getDetailResult(result){
    if(result.returnCode==200){
      let {project_name,user_name,mobile_phone,province,municipality,county,area,start_time,end_time,invoice,project_list,invoice_type,other_require,user_id,images}=result.require_detail
      let showImg = images?images.split("|"):[]
      
     showImg =  showImg.map(element => {
         return element = httpURIde+"/KemaoEC/"+element
      });
      _this.setState({
          user_id,
          title:project_name,
          address:province+municipality+county+area,
          user_name:user_name,
          tel:mobile_phone,
          startTime:start_time,
          endTime:end_time,
          data:project_list,
          dataSource:project_list.length>3?project_list.slice(0,3):project_list,
          listMoreShow:project_list.length>3?true:false,
          loading:false,
          invoice_type:invoice_type,
          billing:invoice==1?true:false,
          otherRequire:other_require,
          showImg
        })
      
    }
  }

  offerPriceAction(){
    // console.log(_this.props.loginProps.supplier_flag)
    getStorage("login",(error,data)=>{
        if(data){
          switch(_this.props.loginProps.supplier_flag){
            case "1":
            if(data.userId==_state.user_id){
              Alert.alert('温馨提示',"您不能给自己报价",[{text: '确认'}])
            }else{
              _navigator.navigate("OfferPrice", {project_id:_state.project_id})
            }
              break;
             default:
             Alert.alert('温馨提示',"开店审核通过后方可报价",[{text: '确认'}])
          }
        }else {
          Alert.alert('温馨提示',"请先登陆",[{text: '稍后登陆'},{text: '确认', onPress: () =>{
            _navigator.navigate('Login',{router:"DemandDetail"})
          }},])
        }
      })
    
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
      title:"需求详情"
    };
   
    return (
      <View style={[styles.main,_state.state=="选择中"?{paddingBottom:140*scale}:null]}>
    
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        {
          _state.title?
        <ScrollView contentContainerStyle={{width:width,alignItems:"center"}}>
          <View style={styles.projectInfo}>
              <View style={styles.titlebar}>
                    <Text style={text.hei15}>{_state.title}</Text>
              </View>
           
            <View style={styles.textbox}>
              <Text numberOfLines={1} style={text.qianhei12}>买 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家：</Text>
              <Text numberOfLines={1} style={text.hei12}>{_state.user_name}</Text>
            </View>
            <View style={styles.textbox}>
              <Text numberOfLines={1} style={text.qianhei12}>地 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</Text>
              <Text numberOfLines={1} style={text.hei12}>{_state.address}</Text>
            </View>
            {/* <View style={styles.textbox}>
              <Text numberOfLines={1} style={text.qianhei12}>联系电话：</Text>
              <Text numberOfLines={1} style={text.hei12}>{_state.tel}</Text>
            </View> */}

            <View style={[styles.textbox,{justifyContent:"space-between",marginTop:15*scale}]}>
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
              <View style={styles.footer_2}>
                      <View style={styles.rowFooter}>
                          <Text numberOfLines={1} style={text.qianhei12}>开具发票 </Text>
                          <Text numberOfLines={1} style={text.hei12}>{_state.billing?_state.invoice_type==1?"增值税专用发票":"增值税普通发票":"不需要发票"}</Text>
                      </View>
                      <View style={styles.rowFooter}>
                          <Text numberOfLines={1} style={text.qianhei12}>其他要求 </Text>
                          <Text  style={text.hei12}> {_state.otherRequire?delHtmlTag(_state.otherRequire):""}</Text>
                      </View>
                </View>
                {_this.renderImg()}
                <View style={{width:width,alignItems:"center",marginVertical:20*scale}}>
                  <TouchableOpacity style={styles.upImgBtn} onPress={()=>_this.offerPriceAction()}>
                      <Text style={text.bai12}>我要报价</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        </ScrollView>
          :
          _state.loading?<Naviwait/>:
          <Lost title={_state.failLoad?"您的网络不给力哦~~":"您的网络不给力哦~~~"}
              imgUrl={require('../../images/loadFail.gif')}
              imgStyle={{width:240*scale,height:240*scale}}    
          />
        }
        
        <Modal
          animationType="fade"
          transparent={true}
          visible={_state.visible}
          style={{alignItems:"center",justifyContent:"center",}}
          onRequestClose={() => {_this.setState({visible:false})}}>
          <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000000", opacity: .9,}}>
            <TouchableOpacity style={{flex:1}} onPress={() => {_this.setState({visible:false})}}>
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
      <View style={{flexDirection:"row",flexWrap:"wrap",width:width-40*scale}}>
        { _state.showImg.length? 
            _state.showImg.map((item,index)=>(
              <TouchableOpacity key={index} onPress={()=>{_this.quanpin(item)}}>
                  <Image source={{uri:item}} style={{width:200*scale,height:100*scale,marginRight:20*scale,marginBottom:20*scale}}/>
              </TouchableOpacity>
            )):null}
      </View>
    )
  }
  quanpin(item){
    _this.setState({
        visible:true,
        showImgUrl:item
    })
  }

  _renderHeader(){
      return(
        <View style={styles.listHeader}>
               <Text numberOfLines={1} style={text.hei12}>报价清单</Text>
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
                    <Text style={text.hei10}>{item.good_name}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei10}>规格</Text>
                </View>
                <View style={styles.itemRight}> 
                    <Text style={text.hei10}>{item.detail_size}</Text>
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

            {/* <View style={styles.tableLabel}>
              <View style={styles.itemLeft}>
                    <Text style={text.qianhei10}>价格</Text>
              </View>
              <View style={styles.itemRight}>
                  <Text style={text.hei10}>{item.price}</Text>
              </View>
           </View> */}
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



export default connect((state)=>({
    loginProps:state.loginReducer
  }),
  (dispatch)=>({
    login:(payLoad)=>dispatch(loginAction.login(payLoad))
  }))(DemandDetail)