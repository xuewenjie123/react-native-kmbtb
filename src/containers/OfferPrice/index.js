import React, { Component } from 'react';
import { FlatList,TextInput,KeyboardAvoidingView, View,Alert,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,InteractionManager} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style'
import color from '../../constant/color'
import {date1str} from '../../constant/constants'
import ModalSelect from '../../components/common/ModalSelect'
import {getRequireDetail} from '../../services/demand'
import {NavigationActions} from '../../components/common/navigation'
import {submitOffer,uploadeFiles} from '../../services/offerPrice'
import text from '../../constant/text'
import ImagePicker from 'react-native-image-crop-picker';
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { baseURI } from '../../constant/url';
import { toastShort } from '../../constant/toast';
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
export default class OfferPrice extends Component {
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
          loading:true,//
          dataSource:[],//显示需求列表
          billing:false,//是否开具发票
          contents:'',//备注
          taxRate:"",//税率
          offer_list:[],//上传价格数组
          file_url:"",//图片路径
          failLoad:true,
          project_id:this.props.navigation.state.params.project_id,//项目id
        }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      getRequireDetail(`project_id=${_state.project_id}`,_this.getDetailResult,_this.fialFuc)
    })
  }

  failFuc(){
    toastShort("服务器异常，请稍后再试")
    _this.setState({loading:false,failLoad:false})
  }
  
  getDetailResult(result){
    if(result.returnCode==200){
      let {project_name,user_name,mobile_phone,province,municipality,county,area,start_time,end_time,invoice,project_list,invoice_type}=result.require_detail
      _state.offer_list=project_list.map((item,index)=>{
                          item.detail_id=item.detail_id;
                          item.money="";
                          return item
                        })
        _this.setState({
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
          billing:invoice==1?true:false,
          offer_list:_state.offer_list,
          invoice_type:invoice_type
        })
    }
  }

  selectAction(){

  }
  taxRateChange(taxRate){
    _this.setState({taxRate})
  }

  openMycamera(){//打开相机
    ImagePicker.openPicker({
      width:300,
      height:300,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      let data = new FormData();
      let name = image.path.split("/")
      let file = { uri: image.path, type: "multipart/form-data", name: name[name.length-1] };
      data.append("picture", file);
      data.append("save_path", "4");
      uploadeFiles(data,_this.uploadeFilesResult)
    });
  }

  uploadeFilesResult(result){//上传图片结果
    if(result.returnCode==200){
      _this.setState({
        file_url:result.upload_url
      })
    }
  }
  
  _submit(){
    if(_this.lastBackPressed && _this.lastBackPressed + 1500 >= Date.now()){
      toastShort("您的操作过于频繁，请稍后再试")
      return false;
    }
    _this.lastBackPressed = Date.now();

    let {contents,taxRate,file_url,offer_list,project_id}=_state
    let onOff=true
    offer_list.forEach((element,i) => {
        if(!element.money){
           Alert.alert('温馨提示',`请填写第${i+1}项的价格`,[{text: '确认'},])
            onOff=false
        }
    });
   if(!onOff){
     return false
   }
    let _offer_list=offer_list.map((item,i)=>{
      return JSON.stringify(item)
     })
    //  提交接口
    submitOffer(`project_id=${project_id}&tax_rate=${taxRate}&file_url=${file_url}&remark=${contents}&offer_list=[${_offer_list}]`,_this._submitResult,_this.failFuc)
  }

  _submitResult(result){
    const resetAction = NavigationActions.reset({
      index:1,
      actions:[
        NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
        NavigationActions.navigate({ routeName:'MyOffer'})
      ]
    })
    if(result.returnCode==200){
      _navigator.dispatch(resetAction)
    }else{
      toastShort(result.returnMsg)
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
      title:"我要报价",
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this._submit()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={text.bai12}>提交</Text>
          </View>
        </TouchableOpacity>
      ),
    };
   
    return (
      <View style={[styles.main,_state.state=="选择中"?{paddingBottom:140*scale}:null]}>
    
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        {
          _state.title?
          <KeyboardAwareScrollView>
       
          <ScrollView keyboardShouldPersistTaps={'handled'}  contentContainerStyle={{width:width,alignItems:"center"}}>
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
               keyboardShouldPersistTaps={'handled'} 
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
       
              <View style={[styles.projectInfo,{paddingTop:20*scale}]}>
          
              <View style={styles.textbox}>
                  <Text numberOfLines={1} style={text.qianhei10}>税率 </Text>
                  <Text numberOfLines={1} style={text.qianhei10}>{_state.billing?_state.invoice_type==1?"17%":"6%":"0%"}</Text>
              </View>
           
                <View style={styles.textbox}>
                  <Text numberOfLines={1} style={text.qianhei10}>发票类型：</Text>
                  <Text numberOfLines={1} style={[text.qianhei10,{color:"#1d1d1d"}]}>{_state.billing?_state.invoice_type==1?"增值税专用发票":"增值税普通发票":"不需要发票"}</Text>
                </View>
                <Text numberOfLines={1} style={text.qianhei10}>备注</Text>
                <KeyboardAvoidingView behavior={"position"}>
                  <View style={styles.inputBox}>
                    <TextInput maxLength={200}  underlineColorAndroid="transparent" style={styles.input} maxLength={200} multiline={true}
                    onChangeText={(text)=> _this.contentsChange(text)} value={_state.contents} placeholder="填写备注" placeholderTextColor='#c8c8c8'/>
                  </View>
                </KeyboardAvoidingView>
              <View style={{width:width,alignItems:"center",marginVertical:20*scale}}>
                <TouchableOpacity style={styles.upImgBtn} onPress={()=>_this.openMycamera()}>
                    <Text style={text.lan12}>{!_state.file_url?"上传图片":"已上传"}</Text>
                  </TouchableOpacity>
              </View>
            
          </View>  
        </ScrollView>     
        </KeyboardAwareScrollView>
          : _state.loading?<Naviwait/>:
          <Lost title={_state.failLoad?"暂时还没有需求":"服务器异常，请稍后再试~~~"}
              imgUrl={require('../../images/loadFail.gif')}
              imgStyle={{width:240*scale,height:240*scale}}    
          />
        }
       
        
      </View>
    )
  }
  contentsChange(contents){
    _this.setState({contents})
  }
  _renderHeader(){
      return(
        <View style={styles.listHeader}>
               <Text numberOfLines={1} style={text.hei12}>报价</Text>
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

            <View style={styles.tableLabel}>
              <View style={styles.itemLeft}>
                    <Text style={text.qianhei10}>价格</Text>
              </View>
              <View style={styles.itemRight}>
              <TextInput 
              underlineColorAndroid="transparent" 
              style={[styles.inputs,text.hei10]}
              placeholder={"请填写价格"}
              keyboardType='numeric' 
              onChangeText={(text)=> _this.priceChange(text,index)} 
              value={_state.offer_list[index].money}/>
              </View>
           </View>
        </View>
      )
  }

    priceChange(text,rowId){
      _state.offer_list[rowId].money = text;
      _this.setState({
        offer_list: _state.offer_list,
      })
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



