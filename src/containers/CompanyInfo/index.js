import React, { Component } from 'react';
import {Modal ,FlatList,KeyboardAvoidingView, View,Alert,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,InteractionManager,Platform} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import styles from './style';
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation';
import {date2str,delHtmlTag} from '../../constant/constants';
import ModalSelect from '../../components/common/ModalSelect';
import {getRequireOfferDetail} from '../../services/myPublish';
import Lost from '../../components/common/Lost'//丢失页面
import {toastShort} from '../../constant/toast'
import Naviwait from '../../components/common/NavWait';
import RNFS from 'react-native-fs';
var _this,_state,_navigator;

let partner={
  code:"QY93847923",
  name:"北京潞盈科贸有限公司",
  address:"北京市朝阳区建国路58号",
  title:"朝阳区写字楼建设",
  remarks:"无",
  listMoreShow:false
}
export default class CompanyInfo extends Component {
  constructor(props){
        super(props)
        this.state={
          companyInfo:{},
          data:[],
          dataSource:[],
          contents:'',
          tax_rate:"",
          total_price:"",
          failLoad:true,
          loading:true,
          option:"list",
          project_id:this.props.navigation.state.params.project_id,
          supplier_id:this.props.navigation.state.params.supplier_id,
          filePath:"",
          fileShow:false
        }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      getRequireOfferDetail(`project_id=${_state.project_id}&supplier_id=${_state.supplier_id}`,_this.getDetailResult,_this.failFuc)
    });
  }
  selectAction(){

  }
  failFuc(){
    _this.setState({loading:false,failLoad:false})
  }
  getDetailResult(result){
    if(result.returnCode==200){
      
      let {project_list,company_info,tax_rate,total_price,file_path}=result
        _this.setState({
          companyInfo:company_info,
          tax_rate:tax_rate,
          total_price:total_price,
          loading:false,
          data:project_list,
          dataSource:project_list.length>3?project_list.slice(0,3):project_list,
          listMoreShow:project_list.length>3?true:false,
          filePath:file_path
        })
    }
  }
  
  taxRateChange(taxRate){
    _this.setState({taxRate})
  }
  tabOption(option){
    _this.setState({option})
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
      centerView:(
        <View style={{width:380*scale,height:48*scale,borderColor:"#fff",borderWidth:1,borderRadius:5*scale,flexDirection:"row"}}>
          <TouchableOpacity activeOpacity={0.7} style={_state.option=="list"?styles.activeBtn:styles.transBtn} onPress={()=>_this.tabOption("list")}>
              <Text style={_state.option=="list"?text.lan12:text.bai12}>报价清单</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={_state.option=="companyInfo"?styles.activeBtn:styles.transBtn} onPress={()=>_this.tabOption("companyInfo")}>
            <Text style={_state.option=="companyInfo"?text.lan12:text.bai12}>企业简介</Text>
          </TouchableOpacity>
        </View>
      )
    };
   
    return (
      <View style={[styles.main,_state.state=="选择中"?{paddingBottom:140*scale}:null]}>
    
        <NavigatorTopBar {...NavigatorTopBarProps}/>

          <Modal
            animationType="fade"
            transparent={true}
            visible={_state.fileShow}
            style={{alignItems:"center",justifyContent:"center",}}
            onRequestClose={() => {_this.setState({fileShow:false})}}
          >
           <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000000",opacity:.9}}>
              <TouchableOpacity style={{flex:1}} onPress={() => {_props.closeModal()}}>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{width:width,height:height,alignItems:"center",justifyContent:"center"}} onPress={()=>_this.setState({fileShow:false})}>
              <Image source={{uri:_state.filePath}} style={{width:width/2,height:width/2}}/>
            </TouchableOpacity>
          </Modal>
         
        {/* <Image style={{width:40,height:100*scale}} source={{uri:"file:///data/user/0/com.kmbtb/files/1.jpg"}}/> */}
            {
              _state.option=="list"?
              _state.dataSource.length?
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingVertical:20*scale,width:width,paddingHorizontal: 20*scale,backgroundColor: "#FFFFFF"}}
                    ref={ ref => this.flatList1 = ref }
                    data={ _state.dataSource }
                    extraData={_state}
                    keyExtractor={(item, index) => index+"i"}
                    renderItem={ this._renderItem}
                    ListFooterComponent={ this._renderFooter }
                    ItemSeparatorComponent={ this._SeparatorComponent }
              />: 
                _state.loading?<Naviwait/>:
                <Lost title={_state.failLoad?"您的网络不给力哦":"您的网络不给力哦~~~"}
                  imgUrl={require('../../images/loadFail.gif')}
                  imgStyle={{width:240*scale,height:240*scale}}    
              />
              :
              <View style={[styles.projectInfo,{flex:1}]}>
               {_state.companyInfo.shop_log? <Image source={{uri:_state.companyInfo.shop_log}} style={styles.companyImg}/>:null}
                <Text style={[text.qianhei10,{marginVertical:20*scale}]}>企业名称 <Text style={text.hei10}> {_state.companyInfo.company_name}</Text></Text>
                <Text style={[text.qianhei10,{marginBottom:20*scale}]}>地址 <Text style={text.hei10}> {_state.companyInfo.province}{_state.companyInfo.city}{_state.companyInfo.country}{_state.companyInfo.address}</Text></Text>

                <Text style={[text.dddd12,{marginBottom:5*scale}]}>企业介绍</Text>
                <Text style={[text.dddd10,{lineHeight:25}]}>{_state.companyInfo.abstract}</Text>
              </View>
            }
            
      </View>
    )
  }
  contentsChange(contents){
    _this.setState({contents})
  }

  _renderItem({item,index}){
      return (
        <View style={styles.itemstyle}>
           <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei12}>序号</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{index+1}</Text>
                </View>
            </View>
            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei12}>货品名称</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{item.project_list_name}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei12}>规格</Text>
                </View>
                <View style={styles.itemRight}> 
                    <Text style={text.hei10}>{item.size}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei12}>品牌</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{item.brand}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei12}>单位</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{item.unit}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei12}>数量</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{item.num}</Text>
                </View>
            </View>
            
            <View style={styles.tableLabel}>
                <View style={styles.itemLeft}>
                      <Text style={text.qianhei12}>备注</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text style={text.hei10}>{item.remark}</Text>
                </View>
            </View>

            <View style={styles.tableLabel}>
              <View style={styles.itemLeft}>
                    <Text style={text.qianhei12}>价格</Text>
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
           <View style={[styles.projectInfo,{paddingBottom:20*scale}]}>
            { _state.listMoreShow?
              <TouchableOpacity style={styles.listFoot} onPress={()=>_this.loadMore()}>
                  <Text style={{fontSize:10,color:color.bluebg}}>加载更多</Text>
                  <Image source={require('../../images/dropDown_icon.png')} style={{width:34*scale,height:19*scale}}/>
              </TouchableOpacity>
              :
            null}
                <View style={[styles.textbox,{paddingTop:20*scale}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>税率 </Text>
                  <Text numberOfLines={1} style={[text.qianhei12,{color:"#1d1d1d"}]}> {_state.tax_rate}%</Text>
                </View>
                <View style={styles.textbox}>
                  <Text numberOfLines={1} style={text.qianhei12}>总计 </Text>
                  <Text numberOfLines={1} style={[text.qianhei12,{color:"#1d1d1d"}]}> ￥{_state.total_price}</Text>
                </View>
                <TouchableOpacity onPress={()=>_this.downLoad()}>
                  <Text numberOfLines={1} style={[text.qianhei12,{color:color.bluebg}]}>查看附件</Text>
                </TouchableOpacity>
          </View>  
    )
  }
  loadMore(){
    _this.setState({
        dataSource:_state.data,
        listMoreShow:false
    })
  }
  downLoad(){
    if(_state.filePath){
      var format=_state.filePath.split(".")[_state.filePath.split(".").length-1]
      if(format=="jpg"||format=="jpeg"||format=="png"||format=="gif"){
        _this.setState({
          fileShow:true
        })
      }else{
        toastShort("请在电脑端下载该附件")
      }
    }else{
      toastShort("请在电脑端下载该附件")
    }
     
    // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)

        // 图片
        // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.jpg`;
        // const formUrl = 'http://img.kaiyanapp.com/c7b46c492261a7c19fa880802afe93b3.png?imageMogr2/quality/60/format/jpg';

        // 文件
        // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.zip`;
        // const formUrl = 'http://files.cnblogs.com/zhuqil/UIWebViewDemo.zip';

        // 视频
        // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.mp4`;
        // http://gslb.miaopai.com/stream/SnY~bbkqbi2uLEBMXHxGqnNKqyiG9ub8.mp4?vend=miaopai&
        // https://gslb.miaopai.com/stream/BNaEYOL-tEwSrAiYBnPDR03dDlFavoWD.mp4?vend=miaopai&
        // const formUrl = 'https://gslb.miaopai.com/stream/9Q5ADAp2v5NHtQIeQT7t461VkNPxvC2T.mp4?vend=miaopai&';
        // console.log(RNFS.DocumentDirectoryPath)
        // console.log("绝对路径")
        // // 音频
        // const downloadDest =`${RNFS.DocumentDirectoryPath}/1.jpg`;
        // http://wvoice.spriteapp.cn/voice/2015/0902/55e6fc6e4f7b9.mp3
        // const formUrl = 'http://47.104.95.55/data/require/0_20180105jzxiyt.jpg';
        // console.log(RNFS.DocumentDirectoryPath)
        // const options = {
            // fromUrl: formUrl,
            // toFile: "file:///storage/emulated/0/1.jpg",
            // background: true,
            // begin: (res) => {
                // console.log('begin', res);
                // console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
            // },
            // progress: (res) => {
                // let pro = res.bytesWritten / res.contentLength;
                // _this.setState({
                    // progressNum: pro,
                // });
            // }
        // };
        // try {
      //       const ret = RNFS.downloadFile(options);
        //     ret.promise.then(res => {
        //       console.log('success', res);
        //       _this.setState({
        //         testPath:'file://' +downloadDest
        //       })
        //       console.log('file://' + downloadDest)

        //     }).catch(err => {
        //         console.log('err', err);
        //     });
        // }
        // catch (e) {
        //     console.log(error);
        // }
   }
}



