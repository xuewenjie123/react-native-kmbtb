import React, { Component } from 'react';
import { FlatList,View,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,DeviceEventEmitter,InteractionManager} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import SwiperBox from '../../components/common/SwiperBox';
import styles from './style'
import color from '../../constant/color';
import text from '../../constant/text'
import {NavigationActions} from '../../components/common/navigation';
import {date1str} from '../../constant/constants'
import {getMyRequireList} from '../../services/myPublish'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
var _this,_state,_navigator;
import ModalScreen from '../../components/common/ModalScreen'
import {updateSystemMsgStatus} from '../../services/myMsg'

export default class MyPublish extends Component {
  constructor(props){
        super(props)
        this.state={
          footLoad:false,
          dataSource:[],
          refreshing:false,
          order:0,
          titleList:["全部","审核中","报价中","选择中","交易中","已完成"],
          titleOrder:0,
          orderList:["按标签","按时间","按地址"],
          page:1,//当前页
          reset:true,//是否加载分页第一页
          loading:true,//是否显示加载中状态
          size:10,
          failLoad:true,//网络
          notice_list:[]
        }
  }

  componentDidMount(){
    //这里注册刷新事件
    _this.scrtiptOption=DeviceEventEmitter.addListener("MyPublishUI",_this._renderRefresh)
    InteractionManager.runAfterInteractions(() => {
      getMyRequireList(`page_num=${_state.page}&stage=${_state.titleOrder}`,_this.getPublishListResult,_this.failFuc)
    });
  }
  componentWillUnmount(){
    this.scrtiptOption.remove()
  }
  //失败函数
  failFuc(){
      _this.setState({loading:false,failLoad:false})
  }
  //获取我的发布回调
  getPublishListResult(result){
        if(result.returnCode==200){
          _this.setState({
            total: Number(result.total_count),
            page: Number(result.page_num),
            footLoad: false,
            loading:false,
            refreshing:false,
            size:Number(result.page_count)||10,
            notice_list:result.notice_list,
            dataSource:_state.reset?result.require_list:_state.dataSource.concat(result.require_list),
            reset: false,
          })
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
  //返回刷新
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
      title:"我的发布"
    };
    return (
      <View style={styles.main}>
        
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        <View style={styles.selectBox} ref={(selectBox)=>this.selectBox=selectBox}>
              {_state.titleList.length?
                  _state.titleList.map((item,index)=>(
                    <TouchableOpacity style={styles.btnBox} onPress={()=>{_this.tabtitleList(index)}} key={index}>
                     <View style={[{height:70*scale,alignItems:"center",justifyContent:"center",flexDirection:"row"},_state.titleOrder==index?{borderBottomColor:color.bluebg,borderBottomWidth:1}:null]}>
                              <Text style={text.hei12}>{item}</Text>
                              {
                                _state.notice_list.indexOf(index+"")!=-1?
                              <View style={{width:10*scale,height:10*scale,backgroundColor:color.red,borderRadius:5*scale,marginBottom:10*scale,marginLeft:10*scale}}></View>                                
                                :null
                              }
                      </View>
                </TouchableOpacity>
                  ))
                :null}
        </View>
      {_state.dataSource.length?
          <FlatList
            ref={(flatList)=>this._flatList = flatList}
            extraData={_state.dataSource}
            keyExtractor={(item, index) => index}
            data={_state.dataSource}
            renderItem={(item)=>this._renderItem(item)}
            ItemSeparatorComponent={ ()=>this._renderItemSeparatorComponent() }
            onRefresh={()=>this._renderRefresh()}
            refreshing={ this.state.refreshing }
            // ListHeaderComponent={()=>this._renderHeader() }
            onEndReached={()=>this._onEndReached() }
            onEndReachedThreshold={0.1}
            ListFooterComponent={this._renderFooter}
          />  
          :
           _state.loading?<Naviwait/>:
          <Lost title={_state.failLoad?"暂时还没有您的发布":"服务器异常，请稍后再试~~~"}
              imgUrl={require('../../images/loadFail.gif')}
              imgStyle={{width:240*scale,height:240*scale}}    
          />}
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
      getMyRequireList(`page_num=${_state.page+1}&stage=${_state.titleOrder}`,_this.getPublishListResult,_this.failFuc)
    }
  }
    // 下拉刷新
  _renderRefresh(){
    _this.setState({reset: true,refreshing:true})//开始刷新
    if(_state.notice_list.indexOf(_state.titleOrder+"")!=-1){
      updateSystemMsgStatus(`operation_type=1&type=4&stage=${_state.titleOrder}`,()=>{
        getMyRequireList(`page_num=1&stage=${_state.titleOrder}`,_this.getPublishListResult,_this.failFuc)
      })
    }else{
      getMyRequireList(`page_num=1&stage=${_state.titleOrder}`,_this.getPublishListResult,_this.failFuc)
    }
  };
  // taborderList(order){
  //   _this.setState({order})
  // }
  //切换状态  并且如果有未读状态设为已读
  tabtitleList(titleOrder){
    _this.setState({titleOrder,reset: true,refreshing:true,loading:true})//开始刷新
    if(_state.notice_list.indexOf(titleOrder+"")!=-1){
      updateSystemMsgStatus(`operation_type=1&type=4&stage=${titleOrder}`,()=>{
        getMyRequireList(`page_num=1&stage=${titleOrder}`,_this.getPublishListResult,_this.failFuc)
      })
    }else{
      getMyRequireList(`page_num=1&stage=${titleOrder}`,_this.getPublishListResult,_this.failFuc)
    }
  }
  // _renderHeader(){
  //   return (
  //     <View>
  //       {/* <View style={styles.selectBox} ref={(selectBox)=>this.selectBox=selectBox}>
  //             {_state.orderList.length?
  //                 _state.orderList.map((item,index)=>(
  //                   <TouchableOpacity style={styles.btnBox} onPress={()=>{_this.taborderList(index)}} key={index}>
  //                   <View style={styles.selectBtn}>
  //                             <Text style={[text.hei12,{marginRight:10*scale}]}>{item}</Text>
  //                             {
  //                             _state.order==index?
  //                                 <Image source={require('../../images/s_icon.png')} style={styles.seicon}/>
  //                                 :
  //                                 <Image source={require('../../images/no_s_icon.png')} style={styles.seicon}/>
  //                             }
  //                     </View>
  //                     {
  //                       index==2?null: <Image source={require('../../images/logiLine.png')} style={styles.line}/>
  //                     }
  //               </TouchableOpacity>
  //                 ))
  //               :null}
  //       </View> */}
  //     </View>
  //   )
  // }
  _renderItemSeparatorComponent(){
    return <View style={{height:10*scale,width:width}}></View>
  }
  
  _renderItem({item,index}){
    let {project_name,project_id,province,municipality,county,area,stage,start_time,end_time,art_no,evalute_buyer,evalute_seller}=item
    let stateText=stage==2?"报价中":stage==1?"审核中":stage==4?"交易中":stage==3?"选择中":"已完成"
    let styleBoxState=stage==2||stage==1?{borderColor:"#ff7200"}:stage==4?{borderColor:"#ff5e84"}:stage==3?{borderColor:"#0eb8ff"}:{borderColor:"#cbcbcb"}
    let styleTextState=stage==2||stage==1?{color:"#ff7200"}:stage==4?{color:"#ff5e84"}:stage==3?{color:"#0eb8ff"}:{color:"#cbcbcb"}
    return (
      <View style={styles.itemstyle}>
          <TouchableOpacity style={styles.itemInfo} onPress={()=>_navigator.navigate("MyPublishInfo",{projectState:stateText,project_id,stateNum:stage})}>
              <View style={styles.textbox}>
                {/* <Text numberOfLines={1} style={text.hei15}>{project_name}</Text> */}
                <Text numberOfLines={1} style={[text.hei15,{marginRight:20*scale}]} numberOfLines={1} >{project_name}</Text>
                <View style={[styles.stateBox,styleBoxState]}>
                  <Text numberOfLines={1} style={[text.hei10,styleTextState]}>{stateText}</Text>
                </View>
              </View>
              <View style={styles.textbox}>
                <Text numberOfLines={1} style={text.qianhei12}>地点：</Text>
                <Text numberOfLines={1} style={text.hei12}>{province}{municipality}{county}{area}</Text>
              </View>
              <View style={styles.textbox}>
                <Text numberOfLines={1} style={text.qianhei12}>日期：</Text>
                <Text numberOfLines={1} style={text.hei12}>{date1str(start_time,"yyyy/MM/dd")}-{date1str(end_time,"yyyy/MM/dd")}</Text>
              </View>
              <View style={styles.textbox}>
                <Text numberOfLines={1} style={text.qianhei12}>项目编号</Text>
                <Text numberOfLines={1} style={text.hei12}>{art_no}</Text>
              </View>
          </TouchableOpacity>
          {
            stage==5?
              <View style={styles.itemRight}>
                {!evalute_buyer?
                 <TouchableOpacity style={styles.offerNum} onPress={()=>{_navigator.navigate("MyAssess",{project_id,router:"MyPublish"})}}>
                      <Text numberOfLines={1} style={text.bai12}>评价</Text>
                </TouchableOpacity>:
                !evalute_seller?
                <Text numberOfLines={1} style={[text.bai12,{color:color.bluebg}]}>我已评价</Text>
                :
                <Text numberOfLines={1} style={[text.bai12,{color:color.bluebg}]}>双方已评价</Text>
                }
               
            </View>
            :
            null
          }
          
      </View>
    )
  }
}



