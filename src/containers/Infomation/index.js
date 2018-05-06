import React, { Component } from 'react';
import { FlatList, Alert,View,TouchableOpacity,Image,Text, ScrollView ,InteractionManager} from 'react-native'
import SwiperBox from '../../components/common/SwiperBox'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style'
import color from '../../constant/color'
import text from '../../constant/text'
import {date1str,delHtmlTag} from '../../constant/constants'
import Echarts from 'native-echarts';
import Picker from 'react-native-picker';
import Lost from '../../components/common/Lost';//丢失页面
import Naviwait from '../../components/common/NavWait';
import BuildClass from '../../components/common/BuildClass'
var _this,_state,_navigator;
import {getArticleList,getArticleDetail,getInformationList,getRegionList,getPriceTrend} from '../../services/infomation'
import CityList from '../../components/common/CityList'
 //轮播图假数据
var imgList=[
  {url:require('../../images/person.png')},
  {url:require('../../images/house.png')},
  {url:require('../../images/house.png')},
]

let buildList=[
  {title:"普卷",spec:"3.75*1500C",classT:"热卷",address:"北京",unit:"￥4859.00/ton",companyName:"北京一线天贸易有限公司"},
  {title:"普卷",spec:"3.75*1500C",classT:"热卷",address:"北京",unit:"￥4859.00/ton",companyName:"北京一线天贸易有限公司"},
  {title:"普卷",spec:"3.75*1500C",classT:"热卷",address:"北京",unit:"￥4859.00/ton",companyName:"北京一线天贸易有限公司"},
  {title:"普卷",spec:"3.75*1500C",classT:"热卷",address:"北京",unit:"￥4859.00/ton",companyName:"北京一线天贸易有限公司"}
]
export default class Infomation extends Component {
  constructor(props){
        super(props)
        this.state={
          imgList:[],//轮播图
          footLoad:false,//底部是否显示资讯
          dataSource:[],//资讯数据
          refreshing:false,//是否现实刷新状态资讯
          titleList:[],//咨询筛选项的列表
          titleOrder:0,//咨讯筛选项的索引
          InquiryOrder:"new",//询盘 最新报价或者价格趋势
          option:"consultation",//行情或者询盘
          page:1,//当前页咨讯
          total:10,//资讯总页数
          reset:true,//是否加载分页第一页
          loading:true,//是否显示加载中状态
          size:10,//咨讯每页显示几条
          failLoad:true,//是否联网
          cat_id:"",//科技，文化，等分类的id
          placeList:[],//地区列表

          dateShowText1:"",//询盘价格趋势显示时间
          dateShowText2:"",//询盘最新报价显示时间
          placeSelect:"",///选择城市
          visibleCity:false,//城市列表的显示与隐藏

          PriceDataY:[],//价格趋势数据y轴
          PriceDataX:[],//价格趋势数据x轴
          goodsData:[],//询盘最新报价询盘数据
          buildShowText:"",//建材分类
          goodsLoad:false,//询盘上拉加载
          pageGoods:1,//询盘页码
          sizeGoods:10,//询盘每页显示几条
          totalGoods:10,//询盘总页数
          refreshingGoods:false,//询盘刷新

          classVisible:false,
          classList:[]
        }
  }
  componentWillReceiveProps(newProps){
    if(newProps.option){
      _this.setState({option:"Inquiry"})
      getInformationList(`region_name=${_state.placeSelect}&sec_cate=${_state.buildShowText}&date_time=${_state.dateShowText2}&page=${_state.pageGoods}`,_this.getInformationResult,_this.failFuc)
    }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      if(this.props.option){
        this.setState({option:"Inquiry"})
        getInformationList(`region_name=${_state.placeSelect}&sec_cate=${_state.buildShowText}&date_time=${_state.dateShowText2}&page=${_state.pageGoods}`,_this.getInformationResult,_this.failFuc)
      }else{
        getArticleList(`page_num=${_state.page}&cat_id=${_state.cat_id}`,_this.getListResult,_this.failFuc)
      }
      //统计图
      getPriceTrend(`region_name=${_state.placeSelect}&sec_cate=${_state.buildShowText}&date_time=${_state.dateShowText1}`,_this.getPriceTrendResult,_this.failFuc)
      //地区列表
      getRegionList(``,_this.getRegionListResult,_this.failFuc);

    });
  }
 
  //获取地区列表接口
  getRegionListResult(result){
    if(result.returnCode==200){
      _this.setState({
        placeList:result.region_list
      })
    }
  
  }
  //咨讯获取后的回调
    getListResult(result){
      if(result.returnCode==200){
          if(result.cat_list){
            _this.setState({
              titleList:result.cat_list,
              imgList:result.ad_list
            })
          }
          if(result.article_list){
              _this.setState({
                  dataSource:_state.reset?result.article_list:_state.dataSource.concat(result.article_list),
                  total: Number(result.total_count),
                  page: Number(result.page_num),
                  footLoad: false,
                  reset: false,
                  loading:false,
                  refreshing:false,
                  size:Number(result.page_count)||10
              });
         }
      }else{
        _this.setState({
          loading:false,
          total: 0,
          page: 1,
          footLoad: false,
          reset: false,
          refreshing:false
        })
      }
  }
  //失败函数
  failFuc(){
     _this.setState({loading:false,failLoad:false})
  }

  componentWillUnmount(){
    this.timer&&clearTimeout(this.timer)
  }
//切换咨询或者询盘
  tabOption(option){
      _this.setState({option,loading:true,reset:true})
      Picker.hide()
      if(option=="Inquiry"){
        getInformationList(`page=1&region_name=${_state.placeSelect}&sec_cate=${_state.buildShowText}&date_time=${_state.dateShowText1}`,_this.getInformationResult,_this.failFuc)
      }else{
        getArticleList(`page_num=${_state.page}&cat_id=${_state.cat_id}`,_this.getListResult,_this.failFuc)
      }
  }
  //询盘获取后的回调函数
  getInformationResult(result){
        if(result.returnCode==200){
          if(result.return_result.information_list){
                _this.setState({
                    goodsData:_state.reset?result.return_result.information_list:_state.goodsData.concat(result.return_result.information_list),
                    totalGoods: Number(result.total_count),
                    pageGoods: Number(result.page_num),
                    goodsLoad: false,
                    reset: false,
                    loading:false,
                    refreshingGoods:false,
                    sizeGoods:Number(result.page_count)||10
                });
          }
       }else{
         _this.setState({
            loading:false,
            totalGoods: 0,
            pageGoods: 1,
            goodsLoad: false,
            reset: false,
            refreshingGoods:false
          })
       }
  }
  //切换全部，科技，金融，文化tab
  tabtitleList(titleOrder,cat_id){
    _this.setState({loading:true,titleOrder,cat_id,reset:true,refreshing:true})
    getArticleList(`page_num=${_state.page}&cat_id=${cat_id}`,_this.getListResult,_this.failFuc)
  }
//切换最新报价或这价格趋势
  tabInquirOrder(InquiryOrder){
      Picker.hide()
      _this.setState({InquiryOrder})
  }
  //统计图回调
  getPriceTrendResult(result){
    if(result.returnCode==200&&result.return_result){
          _this.setState({
            PriceDataX:result.return_result.key,
            PriceDataY:result.return_result.value
          })
    }else{
      _this.setState({
        PriceDataX:[],
        PriceDataY:[]
      })
    }
  }
  closeModal(){
    _this.setState({visibleCity:false,classVisible:false})
  }
//选择城市
  confirm(city){
    _this.setState({visibleCity:false,placeSelect:city,reset:true,refreshingGoods:true})
    if( _state.InquiryOrder=="new"){
      getInformationList(`page=1&region_name=${city}&sec_cate=${_state.buildShowText}&date_time=${_state.dateShowText1}`,_this.getInformationResult,_this.failFuc)
    }else{
      //统计图
      getPriceTrend(`region_name=${city}&sec_cate=${_state.buildShowText}&date_time=${_state.dateShowText2}`,_this.getPriceTrendResult,_this.failFuc)
    }
  }
  //选择分类
  confirmSelectClass(buildShowText){
      _this.setState({
        classVisible:false,
        buildShowText,
        reset:true,
        refreshingGoods:true
      })
      if(_state.InquiryOrder=="new"){
        getInformationList(`page=1&region_name=${_state.placeSelect}&sec_cate=${buildShowText}&date_time=${_state.dateShowText1}`,_this.getInformationResult,_this.failFuc)
      }else{
        getPriceTrend(`region_name=${_state.placeSelect}&sec_cate=${buildShowText}&date_time=${_state.dateShowText1}`,_this.getPriceTrendResult,_this.failFuc)//统计图
      }
  }
  renderConsultation(){
    return(
            <View>
              {
              _state.titleList.length?
                <View style={{width:width,height:70*scale}}>
                  <ScrollView horizontal={true} style={styles.ScrollView} showsHorizontalScrollIndicator={false}>
                      <View style={styles.ScrollView}>
                            {_state.titleList.length?
                                    _state.titleList.map((item,index)=>(
                                      <TouchableOpacity style={styles.titlebtnBox} onPress={()=>{_this.tabtitleList(index,item.cat_id)}} key={index}>
                                      <View style={[{height:50*scale,alignItems:"center",justifyContent:"center"},_state.titleOrder==index?{borderBottomColor:color.bluebg,borderBottomWidth:1}:null]}>
                                                <Text style={text.hei12}>{item.cat_name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    ))
                              
                              :null}
                      </View>
                  </ScrollView>
                </View>
                 :null
                }
                {
                  _state.dataSource.length?
                  <FlatList
                    style={{flex:1}}
                    contentContainerStyle={{paddingBottom:100*scale}}
                    ref={(flatList)=>this._flatList = flatList}
                    extraData={_state}
                    removeClippedSubviews={false} 
                    keyExtractor={(item, index) => index}
                    data={_state.dataSource}
                    renderItem={(item)=>this._renderItem(item)}
                    ItemSeparatorComponent={ this._renderItemSeparatorComponent }
                    onRefresh={this._renderRefresh}
                    refreshing={ this.state.refreshing }
                    ListHeaderComponent={ ()=>this._renderHeader() }
                    onEndReached={ this._onEndReached }
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={this._renderFooter}
                    ListEmptyComponent={_this._renderEmptyView}
                  />
                  :
                _state.loading?<Naviwait/>:
                <Lost title={_state.failLoad?"暂时还没有资讯":"您的网络不给力哦~~~"}
                    imgUrl={require('../../images/loadFail.gif')}
                    imgStyle={{width:240*scale,height:240*scale}}    
                />
                }
          </View>
         
    )
  }
  renderGoods(){
      return (
        <View style={{flex:1,backgroundColor:color.write,alignItems:"center"}}>
          <View style={[styles.selectBox,{borderBottomColor:color.qianhui,borderBottomWidth:1,paddingHorizontal:0}]}>
              <TouchableOpacity style={styles.btnBox} onPress={()=>{_this.tabInquirOrder("new")}} >
                <View style={[{height:70*scale,alignItems:"center",justifyContent:"center"},_state.InquiryOrder=="new"?{borderBottomColor:color.bluebg,borderBottomWidth:1}:null]}>
                          <Text style={_state.InquiryOrder=="new"?text.lan12:text.hei12}>最新报价</Text>
                  </View>
              </TouchableOpacity>
                <Image source={require('../../images/logiLine.png')} style={{width:1,height:30*scale}}/>
              <TouchableOpacity style={styles.btnBox} onPress={()=>{_this.tabInquirOrder("old_new")}}>
                <View style={[{height:69*scale,alignItems:"center",justifyContent:"center"},_state.InquiryOrder=="old_new"?{borderBottomColor:color.bluebg,borderBottomWidth:1}:null]}>
                        <Text style={_state.InquiryOrder=="old_new"?text.lan12:text.hei12}>价格趋势</Text>
                </View>
              </TouchableOpacity>
          </View>
        
          <View style={[styles.selectBox,{paddingHorizontal:0}]}>
          <TouchableOpacity style={styles.btnBox} onPress={()=>{_this.setState({classVisible:true})}}>
                <Text style={_state.InquiryOrder=="new"?text.lan12:text.hei12}>{_state.buildShowText?_state.buildShowText:"建材分类"}</Text>
                <Image source={require('../../images/no_s_icon.png')} style={styles.seiconStyle}/>
          </TouchableOpacity>
        
          <Image source={require('../../images/logiLine.png')} style={{width:1,height:30*scale}}/>

          <TouchableOpacity style={styles.btnBox} onPress={()=>{_this.cityShow()}}>
              <Text style={_state.InquiryOrder=="old_new"?text.lan12:text.hei12}>{_state.placeSelect?_state.placeSelect:"城市"}</Text>
              <Image source={require('../../images/no_s_icon.png')} style={styles.seiconStyle}/>
          </TouchableOpacity>

          <Image source={require('../../images/logiLine.png')} style={{width:1,height:30*scale}}/>
          
          <TouchableOpacity style={{width:360*scale,alignItems: "center",justifyContent: "center", flexDirection:"row"}} onPress={()=>_this._showTimePicker()}>
                <Text style={text.hei12} numberOfLines={1}>{_state.InquiryOrder!="old_new"?_state.dateShowText1?_state.dateShowText1:date1str(new Date().getTime()/1000,"yyyy-MM-dd"):_state.dateShowText2?_state.dateShowText2:date1str(new Date().getTime()/1000,"yyyy-MM-dd")+"~"+date1str(new Date().getTime()/1000,"yyyy-MM-dd")}</Text>
                <Image source={require('../../images/no_s_icon.png')} style={styles.seiconStyle}/>
          </TouchableOpacity>
        </View>
        {/* {_this._renderItemSeparatorComponent()} */}
        {
          _state.InquiryOrder=="new"?
          _this._renderInquiryList()
          :
          _state.PriceDataY?
          _this._renderPrice():
          <Lost title={_state.failLoad?"还没有数据":"服务器连接异常~~~"}
          imgUrl={require('../../images/loadFail.gif')}
          imgStyle={{width:240*scale,height:240*scale}}    
      />
        }
        
        </View>
      )
  }

  render() {
    _this=this;
    _navigator=this.props.navigation;
    _state=this.state;
    let NavigatorTopBarProps={
      visible:true,
      centerView:(
        <View style={{width:380*scale,height:48*scale,borderColor:"#fff",borderWidth:1,borderRadius:5*scale,flexDirection:"row"}}>
          <TouchableOpacity activeOpacity={0.7} style={_state.option=="consultation"?styles.activeBtn:styles.transBtn} onPress={()=>_this.tabOption("consultation")}>
              <Text style={_state.option=="consultation"?text.lan12:text.bai12}>资讯</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={_state.option=="Inquiry"?styles.activeBtn:styles.transBtn} onPress={()=>_this.tabOption("Inquiry")}>
            <Text style={_state.option=="Inquiry"?text.lan12:text.bai12}>询盘</Text>
          </TouchableOpacity>
        </View>
      )
    };

    let CityListProps={
      visible:_state.visibleCity,
      placeList:_state.placeList,
      closeModal:_this.closeModal,
      confirm:_this.confirm 
    }
   let BuildClassProps={
     visible:_state.classVisible,
     confirmSelectClass:_this.confirmSelectClass,
     closeModal:_this.closeModal
   }
    return (
      <View style={styles.main}>
        <CityList {...CityListProps}/>
        <BuildClass {...BuildClassProps}/>  
        <NavigatorTopBar {...NavigatorTopBarProps}/>

        {
          _state.option=="consultation"?
          _this.renderConsultation()
          :
          _this.renderGoods()
        }
    
        
      </View>
    )
  }
  _renderEmptyView(){
    return (
      <View style={{flex:1}}>
        {
          _state.loading?<Naviwait/>:
          <Lost title={_state.failLoad?_state.option=="consultation"?"暂时还没有资讯信息":"暂时还没有询盘信息":"您的网络不给力哦~~~"}
              imgUrl={require('../../images/loadFail.gif')}
              imgStyle={{width:240*scale,height:240*scale}}    
          />
        }
      </View>
     
    )
  }
  classShow(){
    Picker.hide()
  }

  cityShow(){
    Picker.hide()
    _this.setState({visibleCity:true})
  }
  _renderFooter(){
    return (
      _state.footLoad?
      <View style={{padding:15,justifyContent: 'center',alignItems: 'center',}}>
        <Text style={{fontSize:12,color:'#999',textAlign:'center',}}>
          '努力加载中...'
        </Text>
      </View> :
    <View style={{height:0}}></View>
    )
  }
  //上拉加载资讯
  _onEndReached(){
    if(_state.page*_state.size<_state.total && !_state.footLoad){
      _this.setState({footLoad: true,});
      getArticleList(`page_num=${_state.page+1}&cat_id=${_state.cat_id}`,_this.getListResult,_this.failFuc)
    }
  }
  //上拉加载询盘
  _onEndReachedGoods(){
    if(_state.pageGoods*_state.sizeGoods<_state.totalGoods && !_state.goodsLoad){
      _this.setState({goodsLoad: true});
      getInformationList(`page=1&region_name=${_state.placeSelect}&sec_cate=${_state.buildShowText}&date_time=${_state.dateShowText1}`,_this.getInformationResult,_this.failFuc)
    }
  }
    // 下拉刷新
  _renderRefresh (){
    _this.setState({reset: true,refreshing:true})//开始刷新
    if(_state.option=="consultation"){
      getArticleList(`page_num=${_state.page}&cat_id=${_state.cat_id}`,_this.getListResult,_this.failFuc)
    }else{
      getInformationList(`page=1&region_name=${_state.placeSelect}&sec_cate=${_state.buildShowText}&date_time=${_state.dateShowText1}`,_this.getInformationResult,_this.failFuc)
    }
  };

  _renderHeader(){
    let SwiperBoxProps = {
      _navigator:_navigator,
      imgList:_state.imgList,
      type:"4",
      bottom:40*scale
  }
    return (
      <View style={styles.banner}>
          {_state.imgList.length?
            <SwiperBox {...SwiperBoxProps} />:
            null
          }
      </View>
    )
  }
  _renderItemSeparatorComponent(){
    return <View style={{height:10*scale,width:width,backgroundColor:color.main}}></View>
  }
  
  _renderItem({item}){
    let {content,title,add_time,author,img_src,article_id}=item
    return (
      <TouchableOpacity style={styles.itemstyle} onPress={()=>_navigator.navigate("InfomationDetail",{article_id})}>
          <View style={styles.itemInfo}>
              <Text numberOfLines={2} style={[text.hei15,{marginBottom:10*scale}]}>{title}</Text>
              <Text numberOfLines={1} style={[text.shenhui10,{marginBottom:10*scale}]}>{date1str(add_time,"yyyy年MM月dd日")} 来源：{author}</Text>
              <Text numberOfLines={3} style={text.hei10}>{delHtmlTag(content)}</Text>
          </View>
          <View style={styles.itemRight}>
              <Image source={{uri:img_src}} style={{width:330*scale,height:188*scale}}/>
          </View>
      </TouchableOpacity>
    )
  }

  _renderGoodSeparatorComponent(){
    return (
      <View style={{width:width-40*scale,height:1,backgroundColor:color.qianhui}}></View>
    )
  }

  _renderFooterGoods(){
    return(
      _state.goodsLoad?
      <View style={{padding:15,justifyContent: 'center',alignItems: 'center',}}>
        <Text style={{fontSize:12,color:'#999',textAlign:'center',}}>
          '努力加载中...'
        </Text>
      </View> :
    <View style={{height:0}}></View>
    )
  }
  //询盘分类规格价格的每一项  item
  _renderGoods({item,index}){
    let {product_id,product_name,brand,model,caizhi,tax,unit,company,date_time,top_cate,sec_cate,place}=item
      return(
        <View style={styles.item2}>
            <View style={[styles.item2smallBox,{width:140*scale,borderRightWidth:1,borderColor:color.qianhui}]}>
              <Text numberOfLines={1} style={text.hei15}>{item.top_cate}</Text>
            </View>
            <View style={[styles.item2smallBox,{width:190*scale,borderRightWidth:1,borderColor:color.qianhui}]}>
              <Text  numberOfLines={1} style={text.hei12}>{item.model}</Text>
              <View style={styles.item2Cb}>
                 <Text numberOfLines={1} style={text.shenhui10}>{item.sec_cate} </Text>
                 <Text numberOfLines={1} style={text.shenhui10}>{item.place}</Text>
              </View>
            </View>
            <View style={[styles.item2smallBox,{flex:1}]}>
              <Text numberOfLines={1} style={text.hei12}>¥{item.han_shui}/{item.unit}</Text>
              <Text numberOfLines={1} style={text.shenhui10}> {item.company}</Text>
            </View>
        </View>
      )
  }
   //询盘分类规格价格
  _renderInquiryList(){
    return (
        <View style={{flex:1,backgroundColor:color.write}}>
             <FlatList
                style={{flex:1}}
                extraData={_state}
                removeClippedSubviews={true} 
                keyExtractor={(item, index) => index+"Inquiry"}
                data={_state.goodsData}
                renderItem={(item)=>_this._renderGoods(item)}
                ItemSeparatorComponent={()=>_this._renderGoodSeparatorComponent() }
                onRefresh={()=>_this._renderRefresh()}
                refreshing={_state.refreshingGoods }
                onEndReached={ ()=>_this._onEndReachedGoods() }
                onEndReachedThreshold={10}
                ListHeaderComponent={()=>_this.renderHeaderGoods()}
                ListFooterComponent={()=>_this._renderFooterGoods()}
                ListEmptyComponent={_this._renderEmptyView}
              />
        </View>
    )
  }
  renderHeaderGoods(){
    return(
        <View style={{height:40*scale,alignItems:"center",flexDirection:"row",}}>
            <View style={{paddingLeft:10*scale}}>
              <Text numberOfLines={1} style={text.hei15}>分类</Text>
            </View>
            <View style={{width:300*scale,alignItems:"center",justifyContent:"center"}}>
              <Text  numberOfLines={1} style={[text.hei15,{textAlign:"center"}]}>规格</Text>
            </View>
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
              <Text numberOfLines={1} style={text.hei15}>价格</Text>
            </View>
        </View>
    )
  }
  _showTimePicker() {
    let oldYear = [],
        newYear = [],
        yearWord = ["年"],
        oldMonths = [],
        newMonths = [],
        monthsWord = ["月"],
        oldDays = [],
        newDays = [],
        dayssWord = ["日"],
        connect = ["~"],
        between =new Date().getFullYear()-2014,
        nowMonth = new Date().getMonth()+2;
    for(let i=0;i<between;i++){
        oldYear.push(i+2015);
        newYear.push(i+2015);
    }
    for(let i=1;i<13;i++){
        oldMonths.push(i);
        newMonths.push(i);
    }
    for(let i=1;i<32;i++){
        oldDays.push(i);  
        newDays.push(i);
    }


    let pickerData =_state.InquiryOrder=="old_new"?[oldYear,yearWord, oldMonths,monthsWord, oldDays,dayssWord,connect,newYear,yearWord,newMonths,monthsWord,newDays,dayssWord]:[oldYear,yearWord, oldMonths,monthsWord, oldDays,dayssWord]
    let date = new Date();

    Picker.init({
        pickerData,
        pickerConfirmBtnText:"完成",
        pickerCancelBtnText:"取消",
        pickerCancelBtnColor:[153,153,153,1],
        pickerConfirmBtnColor:[71,145,255,1],
        pickerToolBarBg:[247,247,249,1],
        pickerBg:[246,246,246,1],
        pickerFontSize:13,
        selectedValue:_state.InquiryOrder=="old_new"?[date.getFullYear(),"年",date.getMonth()+1,"月",date.getDate(),"日","~",date.getFullYear(),"年",date.getMonth()+1,"月",date.getDate(),"日"]
        :[date.getFullYear(),"年",date.getMonth()+1,"月",date.getDate(),"日"]
        ,
        pickerTitleText:_state.InquiryOrder=="old_new"?'选择时间段':'选择时间',
        wheelFlex: _state.InquiryOrder=="old_new"?[15,7,10,7,10,7,10,15,7,10,7,10,10]:[2,1,2,1,2,1],
        onPickerConfirm: pickedValue => {
            if(_state.InquiryOrder=="old_new"){
              let first = pickedValue.join('').split("~")[0].replace(/年|月/g, "-").replace(/日/g,"")
              let second =pickedValue.join('').split("~")[1].replace(/年|月/g, "-").replace(/日/g,"")
              _this.setState({
                  startTime:Date.parse(new Date(first))/1000,
                  endTime:Date.parse(new Date(second))/1000,
                  dateShowText2:first+"~"+second
              })
              //刷新统计图
              getPriceTrend(`region_name=${_state.placeSelect}&sec_cate=${_state.buildShowText}&date_time=${first+"~"+second}`,_this.getPriceTrendResult,_this.failFuc)
            }else{
              let dataShowText=pickedValue.join('').replace(/年|月/g, "-").replace(/日/g,"")
              _this.setState({
                dateShowText1:dataShowText,
                newTime:Date.parse(new Date(dataShowText))/1000,
                refreshingGoods:true,
                reset:true,
                loading:true
              })
              //刷新询盘数据
              getInformationList(`page=1&region_name=${_state.placeSelect}&sec_cate=${_state.buildShowText}&date_time=${dataShowText}`,_this.getInformationResult,_this.failFuc)
            }
          
           
        },
        onPickerCancel: pickedValue => {
           Picker.hide()
        },
        onPickerSelect: pickedValue => {
            let targetValue = [...pickedValue];
            if(parseInt(targetValue[2]) === 2){
                if(targetValue[0]%4 === 0 && targetValue[4] > 29){
                    Alert.alert("温馨提示","本月只有29天，请选择29号",[{text:"确认"}])
                    targetValue[4] = 29;
                }
                else if(targetValue[0]%4 !== 0 && targetValue[4] > 28){
                     Alert.alert("温馨提示","本月只有28天，请选择28号",[{text:"确认"}])
                    targetValue[4] = 28;
                }
            }
           
            if(targetValue[2] in {4:1, 6:1, 9:1, 11:1} && targetValue[4] > 30){
                Alert.alert("温馨提示","本月只有30天，请选择30号",[{text:"确认"}])
                targetValue[4] = 30;                         
            }

           
            if(_state.InquiryOrder=="old_new"){
              if(parseInt(targetValue[9]) === 2){
                if(targetValue[7]%4 === 0 && targetValue[11] > 29){
                  Alert.alert("温馨提示","本月只有29天，请选择29号",[{text:"确认"}])
                    targetValue[11] = 29;
                }
                else if(targetValue[7]%4 !== 0 && targetValue[11] > 28){
                  Alert.alert("温馨提示","本月只有28天，请选择28号",[{text:"确认"}])
                    targetValue[11] = 28;
                }
             }
              if(targetValue[9] in {4:1, 6:1, 9:1, 11:1} && targetValue[11] > 30){
                Alert.alert("温馨提示","本月只有30天，请选择30号",[{text:"确认"}])
                  targetValue[11] = 30;
              }
              var firstSelect = new Date(targetValue.join('').split("~")[0].replace(/年|月/g, "/").replace(/日/g,""))
              var secondSelect = new Date(targetValue.join('').split("~")[1].replace(/年|月/g, "/").replace(/日/g,""))
              
              if(firstSelect>secondSelect){
                  targetValue[7]=targetValue[0];
                  targetValue[9]=targetValue[2];
                  targetValue[11]=targetValue[4];
                  Alert.alert("温馨提示","您选择的时间段有误，请重新选择",[{text:"确认"}])
              }
            }
          
   
            // forbidden some value such as some 2.29, 4.31, 6.31...
            if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                // android will return String all the time，but we put Number into picker at first
                // so we need to convert them to Number again
                targetValue.map((v, k) => {
                    if(k !== 3){
                        targetValue[k] = parseInt(v);
                    }
                });
                Picker.select(targetValue);
                pickedValue = targetValue;
            }
           
        }
    });
      Picker.show();
  }
//价格趋势
  _renderPrice(){
    const option =  {
      tooltip: {
          trigger: 'axis',
          // position:function (pt) {
          //     return [pt[0], '10%'];
          // }
      },
      dataZoom: [
        {   // 这个dataZoom组件，默认控制x轴。
            type: 'inside', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 0,      // 左边在 10% 的位置。
            end:100         // 右边在 80% 的位置。
        }
      //   , {
      //     start: 0,
      //     end: 10,
      //     handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      //     handleSize: '100%',
      //     handleStyle: {
      //         color: '#fff',
      //         shadowBlur: 3,
      //         shadowColor: 'rgba(0, 0, 0, 0.6)',
      //         shadowOffsetX: 2,
      //         shadowOffsetY: 2
      //     }
      // }
     ],
      title: {
          top: '24',
          left: '0',
          text: "测试标题",
          textStyle: {
              fontSize: 14
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data:_state.PriceDataX,
          splitLine:{
      　　　　show:false  
      　　 }
      },
      yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine:{
      　　　　show:false
      　　 }
      },
      series: [
          {
              name:'模拟数据',
              type:'line',
              smooth:true,
              symbol: 'none',
              sampling: 'average',
              itemStyle: {
                  normal: {
                      color: '#ff9fa4'
                  }
              },
              areaStyle: {
                  normal: {
                    color: 'rgba(245, 200, 203, 1)'
                  }
              },
              data: _state.PriceDataY
          }
      ]
  };
    return (
      <View style={{flex:1,backgroundColor:color.write}}>
         <Echarts option={option} width={width}/> 
      </View>
    )
  }
}


