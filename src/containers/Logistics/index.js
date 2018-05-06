import React, { Component } from 'react';
import { FlatList, View,TextInput,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,findNodeHandle,InteractionManager,UIManager} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import SwiperBox from '../../components/common/SwiperBox';
import styles from './style';
import AddressModal from '../../components/citySelect/companyAddress';
import AddressModal1 from '../../components/citySelect/companyAddress.1';
import color from '../../constant/color';
import text from '../../constant/text';
import {getLogisticsList} from '../../services/logisitic';
import Lost from '../../components/common/Lost';//丢失页面
import Naviwait from '../../components/common/NavWait';
import {toastShort} from '../../constant/toast'
var _this,_state,_navigator;
// var weightOption=[
//   {name:"4吨",id:"1"},{name:"5吨",id:"1"},{name:"8吨",id:"1"},{name:"24吨",id:"1"}
// ]
// var priceOption=[
//   {name:"1444",id:"1"},{name:"2333",id:"1"},{name:"43545",id:"1"},{name:"4354365",id:"1"}
// ]
let imgList=[
  {url:require('../../images/home_4.png')},
  {url:require('../../images/home_1.png')},
  {url:require('../../images/home_3.png')},
]
let logList=[
  {series:5,imgUrl:require("../../images/home_3.png"),companyName:"北京露营公司科技",transportRoute:"北京-广州",bearing:"1000kg以内",price:"50元-200元"},{series:5,imgUrl:require("../../images/home_3.png"),companyName:"北京露营公司科技",transportRoute:"北京-广州",bearing:"1000kg以内",price:"50元-200元"},{series:5,imgUrl:require("../../images/home_3.png"),companyName:"北京露营公司科技",transportRoute:"北京-广州",bearing:"1000kg以内",price:"50元-200元"},{series:5,imgUrl:require("../../images/home_3.png"),companyName:"北京露营公司科技",transportRoute:"北京-广州",bearing:"1000kg以内",price:"50元-200元"}
]
export default class Logistics extends Component {
  constructor(props){
        super(props)
        this.state={
          imgList:[],//轮播图
          // priceOption:[],
          // weightOption:[],
          footLoad:false,
          failLoad:true,
          dataSource:[],//数据列表
          placeSelect1:"",
          provinceId1:"",//装载地址
          cityId1:"",//装载地址
          placeSelect2:"",
          provinceId2:"",
          cityId2:"",
          visible1:false,//装载地址显示
          visible2:false,//卸载地址显示
          // w_show:false,
          // p_show:false,
          refreshing:false,
          province1:"",
          municipality1:"",//装载地市级名称
          province2:"",//装载地省名称
          municipality2:"",//卸载地市级
          page:1,//当前页
          reset:true,//是否加载分页第一页
          loading:true,//是否显示加载中状态
          size:10,
          qisong:false,

          // wpt:undefined,
          // ppt:undefined
        }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      getLogisticsList(`page_num=${_state.page}&start_money=${_state.qisong?0:1}&from_place=${_state.cityId1}&to_place=${_state.cityId2}`,_this.getListResult,_this.failFuc)
        // _this.setState({
        //   // priceOption:priceOption,
        //   // weightOption:weightOption,
        //   // dataSource:logList,
        //   // imgList:imgList
        // })
    });
  }
  getListResult(result){
        if(result.returnCode==200&&result.logistics_list){
          _this.setState({
              imgList:result.ad_list,
              dataSource:_state.reset?result.logistics_list:_state.dataSource.concat(result.logistics_list),
              total: Number(result.total_count),
              page: Number(result.page_num),
              footLoad: false,
              reset: false,
              loading:false,
              refreshing:false,
              size:Number(result.page_count)||10
          });
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

  failFuc(){
    toastShort("服务器连接失败")
    _this.setState({loading:false,failLoad:false})
  }

  // tabWshow() {
  //   _this.setState({
  //     w_show:!_state.w_show,
  //     p_show:false,
  //   })
  // }
  // tabPshow() {
  //   _this.setState({
  //     p_show:!_state.p_show,
  //     w_show:false,
  //   })
  // }
  //让modal消失
  closeModal(){
      _this.setState({
        visible1:false,
        visible2:false
      })
  }
  //显示选择地址moadl1
  showAdress1(){
    _this.setState({
        visible1:true,
        // w_show:false,
        // p_show:false,
    })
  }
//显示选择地址moadl2
  showAdress2(){
    _this.setState({
        visible2:true,
        // w_show:false,
        // p_show:false,
    })
  }
  //选择起始地点
  getPalceSelect1(place,proval,cityval,province1,municipality1,county1){
    if(cityval!=_state.cityId1){
      _this.setState({reset:true,refreshing:true})
      getLogisticsList(`page_num=1&start_money=${_state.qisong?0:1}&from_place=${cityval}&to_place=${_state.cityId2}`,_this.getListResult,_this.failFuc)
    }
    _this.setState({
      placeSelect1:place,
      provinceId1:proval,
      cityId1:cityval,
      visible1:false,
      province1,
      municipality1,
      reset:true,
      loading:true
    })
  }

 //选择结束地点
  getPalceSelect2(place,proval,cityval,province2,municipality2,county2){
    if(cityval!=_state.cityId2){
      _this.setState({reset:true,refreshing:true})
      getLogisticsList(`page_num=1&start_money=${_state.qisong?0:1}&from_place=${_state.cityId1}&to_place=${cityval}`,_this.getListResult,_this.failFuc)
    }
    _this.setState({
      placeSelect2:place,
      provinceId2:proval,
      cityId2:cityval,
      visible2:false,
      province2,
      municipality2,
      reset:true,
      loading:true
    })
   
  }
  render() {
    _this=this;
    _navigator=this.props.navigation;
    _state=this.state;
    let NavigatorTopBarProps={
      visible:true,
      title:"找物流"
    };

    let AddressModalProps1={
      visible:_state.visible1,
      closeModal:_this.closeModal,
      getPalceSelect:_this.getPalceSelect1,
      provinceId:_state.provinceId1,
      cityId:_state.cityId1,
    };
    let AddressModalProps2={
      visible:_state.visible2,
      closeModal:_this.closeModal,
      getPalceSelect:_this.getPalceSelect2,
      provinceId:_state.provinceId2,
      cityId:_state.cityId2,
    };
    return (
      <View style={styles.main}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
          <AddressModal {...AddressModalProps1}/>
          <AddressModal1 {...AddressModalProps2}/>
      {_state.dataSource.length?
          <FlatList
            ref={(flatList)=>this._flatList = flatList}
            extraData={this.state}
            removeClippedSubviews={false} 
            keyExtractor={(item, index) => index}
            data={_state.dataSource}
            renderItem={(item)=>this._renderItem(item)}
            ItemSeparatorComponent={ this._renderItemSeparatorComponent }
            onRefresh={()=>this._renderRefresh()}
            refreshing={ this.state.refreshing }
            ListHeaderComponent={ ()=>this._renderHeader() }
            onEndReached={ ()=>this._onEndReached() }
            onEndReachedThreshold={0.1}
            ListFooterComponent={()=>this._renderFooter()}
          />:
       _state.loading?<Naviwait/>:
       <Lost title={_state.failLoad?"暂时还没有需求":"您的网络不给力哦~~~"}
           imgUrl={require('../../images/loadFail.gif')}
           imgStyle={{width:240*scale,height:240*scale}}    
       />}
          {/* {_state.w_show?_this.renderDropDown1():null}           
          {_state.p_show?_this.renderDropDown2():null}*/}
      </View>
    )
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
  //上拉加载
  _onEndReached(){
    if(_state.page*_state.size<_state.total && !_state.footLoad){
      _this.setState({footLoad: true,});
      getLogisticsList(`page_num=${_state.page+1}&start_money=${_state.qisong?0:1}&from_place=${_state.cityId1}&to_place=${_state.cityId2}`,_this.getListResult,_this.failFuc)
    }
  }
    // 下拉刷新
  _renderRefresh(){
    this.setState({reset: true,refreshing:true,loading:true})//开始刷新
    getLogisticsList(`page_num=1&start_money=${_state.qisong?0:1}&from_place=${_state.cityId1}&to_place=${_state.cityId2}`,_this.getListResult,_this.failFuc)
  };

  //分割线
  _renderHeader(){
    let SwiperBoxProps = {
        _navigator:_navigator,
        imgList:_state.imgList,
        type:"4",
        bottom:40*scale
    }
    return (
      <View>
          <View style={styles.banner}>
          {/* 这里一定要判断一下length  否则SwiperBox 可能会不显示 swiper内部源码的问题吧 */}
          {_state.imgList.length?
            <SwiperBox {...SwiperBoxProps} />:
            null
          }
          </View>
          <View style={styles.selectBox} ref={(selectBox)=>this.selectBox=selectBox}>
              <TouchableOpacity style={styles.btnBox} onPress={()=>_this.showAdress1()}>
                <View style={styles.selectBtn}>
                      <Text style={[text.hei12,{marginRight:10*scale}]}>{_state.placeSelect1?_state.placeSelect1:"装载地点"}</Text>
                      {
                        _state.visible1?
                        <Image source={require('../../images/s_icon.png')} style={styles.seicon}/>
                          :
                        <Image source={require('../../images/no_s_icon.png')} style={styles.seicon}/>
                      }
                  </View>
                  <Image source={require('../../images/logiLine.png')} style={styles.line}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBox} onPress={()=>_this.showAdress2()}>
                <View style={styles.selectBtn}>
                          <Text style={[text.hei12,{marginRight:10*scale}]}>{_state.placeSelect2?_state.placeSelect2:"卸载地点"}</Text>
                          {
                            _state.visible2?
                              <Image source={require('../../images/s_icon.png')} style={styles.seicon}/>
                              :
                              <Image source={require('../../images/no_s_icon.png')} style={styles.seicon}/>
                          }
                  </View>
                  
                  <Image source={require('../../images/logiLine.png')} style={styles.line}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBox} onPress={()=>_this.tabqisong()}>
                  <View style={styles.selectBtn}>
                          <Text style={[text.hei12,{marginRight:10*scale}]}>起送价</Text>
                          {/* 显示样式 */}
                          {
                            _state.qisong?
                              <Image source={require('../../images/arow1.png')} style={{width:24*scale,height:24*scale}}/>
                              :
                              <Image source={require('../../images/arow2.png')} style={{width:24*scale,height:24*scale}}/>
                          }
                  </View>
                  
                  <Image source={require('../../images/logiLine.png')} style={styles.line}/>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.btnBox} onPress={()=>_this.tabWshow()}>
                  <View style={styles.selectBtn}>
                          <Text style={[text.hei12,{marginRight:10*scale}]}>{_state.wptText?_state.wptText:"货物重量"}</Text>
                          {
                            _state.w_show?
                              <Image source={require('../../images/no_s_icon.png')} style={styles.seicon}/>
                              :
                              <Image source={require('../../images/s_icon.png')} style={styles.seicon}/>
                          }
                  </View>
                  
                  <Image source={require('../../images/logiLine.png')} style={styles.line}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBox} onPress={()=>_this.tabPshow()}>
                <View style={styles.selectBtn}>
                          <Text style={[text.hei12,{marginRight:10*scale}]}>{_state.pptText?_state.pptText:"价格"}</Text>
                          {
                            _state.p_show?
                              <Image source={require('../../images/s_icon.png')} style={styles.seicon}/>
                              :
                              <Image source={require('../../images/no_s_icon.png')} style={styles.seicon}/>
                          }
                  </View>
                  <Image source={require('../../images/logiLine.png')} style={styles.line}/>
            </TouchableOpacity> */}
          </View>
         
      </View>
    )
  }
  //按照起送价排序
  tabqisong(){
    getLogisticsList(`page_num=1&start_money=${!_state.qisong?0:1}&from_place=${_state.cityId1}&to_place=${_state.cityId2}`,_this.getListResult,_this.failFuc)
    _this.setState({
      qisong:!_state.qisong,
      reset:true,
      loading:true,
      refreshing:true
    })
  }
  //分割线
  _renderItemSeparatorComponent(){
    return <View style={{height:10*scale,width:width}}></View>
  }
  
  _renderItem({item}){
    let {company_logo,series,company_name,region_list,start_money,logistics_id}=item
    let region = region_list.length?region_list.join("、"):""
    return (
      <TouchableOpacity style={styles.itemstyle} onPress={()=>_navigator.navigate("LogisiticInfo",{logistics_id})}>
          <Image source={{uri:company_logo?company_logo:"http://47.104.95.55/mobile1/images/201603/1458379366066881920.png"}} style={styles.itemImg}/>
          <View style={styles.itemInfo}>
              <View style={[styles.textbox,{marginBottom: 30*scale}]}>
                {/* <View style={styles.seriesbox}>
                    <Text numberOfLines={1} style={text.bai10}>lv{"11"}</Text>
                </View> */}
                <Text numberOfLines={1} style={text.hei15}>{company_name}</Text>
              </View>
              <View style={[styles.textbox,{marginBottom: 5*scale}]}>
                <Text numberOfLines={1} style={text.qianhei12}>运输范围：</Text>
                <Text numberOfLines={1} style={text.hei12}>{region}</Text>
              </View>
                {/* <View style={[styles.textbox,{marginBottom: 5*scale}]}>
                  <Text numberOfLines={1} style={text.qianhei12}>承重范围：</Text>
                  <Text numberOfLines={1} style={text.hei12}>{bearing}</Text>
                </View> */}
              <View style={styles.textbox}>
                <Text numberOfLines={1} style={text.qianhei12}>起送价：</Text>
                <Text numberOfLines={1} style={text.hei12}>{start_money}</Text>
              </View>
          </View>
      </TouchableOpacity>
    )
  }





  // renderDropDown1(){
  //   // const handle = findNodeHandle(this.selectBox);
  //   // let pageY=0
  //   // UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
  //   //     pageY=pageY
  //   // })
  //     return (
  //       <View style={{position:"absolute",top:430*scale,zIndex:100,height:height-430*scale}}>
  //           <View style={styles.modalWeight}>
  //             {_state.weightOption.length?
  //               _state.weightOption.map((item,i)=>(
  //                 <TouchableOpacity style={styles.optBtn} key={i+"w"} onPress={()=>_this.selectWeight(item,i)}>
  //                      <Text numberOfLines={1} style={_state.wpt==i?styles.activetext:styles.generaltext}>{item.name}</Text>
  //                 </TouchableOpacity>
  //               ))
  //             :null}
  //           </View>
  //           <TouchableOpacity style={{flex:1,backgroundColor:"#000",opacity:.3}} onPress={()=>_this.tabWshow()}></TouchableOpacity>    
  //       </View>                
  //   )
  // }
  // renderDropDown2(){
  //       return (
  //         <View style={{position:"absolute",top:430*scale,zIndex:100,height:height-430*scale}}>
  //             <View style={styles.modalWeight}>
  //               {_state.priceOption.length?
  //                   _state.priceOption.map((item,i)=>(
  //                     <TouchableOpacity style={styles.optBtn} key={i+"p"} onPress={()=>_this.selectPrice(item,i)}>
  //                         <Text numberOfLines={1} style={_state.ppt==i?styles.activetext:styles.generaltext}>{item.name}</Text>
  //                     </TouchableOpacity>
  //                   ))
  //                 :null}
  //             </View>
  //             <TouchableOpacity style={{flex:1,backgroundColor:"#000",opacity:.3}} onPress={()=>_this.tabPshow()}></TouchableOpacity>    
  //         </View>                
  //     )
  // }
  // selectWeight(item,i){
  //   _this.setState({
  //       wpt:i,
  //       wptText:item.name
  //   })
  //   _this.tabWshow()
  // }
  // selectPrice(item,i){
  //   _this.setState({
  //       ppt:i,
  //       pptText:item.name
  //   })
  //   _this.tabPshow()
  // }

}



