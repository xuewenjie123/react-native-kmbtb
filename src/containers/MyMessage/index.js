import React, { Component } from 'react';
import { FlatList, View,Alert,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,InteractionManager, DeviceEventEmitter} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style'
import color from '../../constant/color'
import text from '../../constant/text'
import { date1str } from '../../constant/constants';
import {NavigationActions} from '../../components/common/navigation'
import {getMyOrderList} from '../../services/shopServer'
import {confirmReceipt} from '../../services/order'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {toastShort} from '../../constant/toast'
import {makeMsgIsRead,getSystemMessage,updateSystemMsgStatus} from '../../services/myMsg'
var _this,_state,_navigator;

export default class MyOrderList extends Component {
  constructor(props){
        super(props)
        this.state={
          dataSource:[],//数据
          loading:true,//是否加载中动画
          failLoad:true,//网络失败
          refreshing:false,//是否显示刷新状态
          edit:false,//是否在编辑状态
          disabled:true,//是否禁掉点击删除键
          allSelect:false//是否全部选中
        }
        this.selCount=0;//选中的数量
        this.onLoad=false
  }
  
  componentDidMount(){
    // console.log(Geolocation)
    InteractionManager.runAfterInteractions(() => {
      _this.fetchUI()
    
    });
  }
  //获取我的消息接口
  fetchUI(){
    getSystemMessage("",_this.getMsgListResult,_this.failFuc)
  }
  //失败函数
  failFuc(){
    toastShort("网络似乎有点问题哦")
    _this.setState({
      loading:false,
      failLoad:false,
      refreshing:false
    })
  }
  //获取消息接口回调
  getMsgListResult(result){
    if(result.returnCode==200){
      let msg_str=[];
      result.msg_list.forEach((item)=>{
         item.select=false
         if(!item.is_read){
          msg_str.push(item.msg_id)
         }
      })
        _this.setState({
          dataSource:result.msg_list,
          loading:false,
          refreshing:false
        })
        if(!_this.onLoad){
          updateSystemMsgStatus(`operation_type=0`,_this.fetchUI)
          _this.onLoad=true
        }
       
    }
  }
  //删除消息
  delMsg(){
      let msg_str=[]
      _state.dataSource.forEach(item=>{
        if(item.select){
          msg_str.push(item.msg_id)
        }
      })
      updateSystemMsgStatus(`msg_str=${msg_str}&operation_type=2`,_this.fetchUI,_this.failFuc)
  }
  //是否在编辑状态
  _editMsg(){
    _this.setState({
      edit:!_state.edit
    })
  }
  //返回
  backRouter(){
    DeviceEventEmitter.emit("MySelfUI")
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
      title:"我的消息",
      rightView: (
        _state.dataSource.length?
        <TouchableOpacity  style={{flex: 1}}
          onPress={()=>_this._editMsg()}>
          <View style={{flex: 1,flexDirection: 'row-reverse',alignItems: 'center'}}>
            <Text style={{fontSize:13,color:'#fff',marginRight:15}}>{_state.edit?"完成":"编辑"}</Text>
          </View>
        </TouchableOpacity>:null
      ),
    };
   
    return (
      <View style={styles.main}>

        <NavigatorTopBar {...NavigatorTopBarProps}/>
        
          {
            _state.dataSource.length?
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{width:width,flex:1}}
              contentContainerStyle={{backgroundColor: color.write,alignItems:"center",}}
              ref={ ref => this.flatList = ref }
              data={ _state.dataSource }
              extraData={_state.dataSource}
              keyExtractor={(item, index) => index+"i"}
              renderItem={ this._renderItem }
              onRefresh={()=>_this.fetchUI()}          
              refreshing={ this.state.refreshing }
              ItemSeparatorComponent={ this._SeparatorComponent }
          />
            :
            _state.loading?<Naviwait/>:
            <Lost title={_state.failLoad?"暂时还没有消息":"您的网络不给力哦~~~"}
                imgUrl={require('../../images/loadFail.gif')}
                imgStyle={{width:240*scale,height:240*scale}}    
            />
          }
          {
            
            _state.edit?
            <View style={styles.footer}>
            <TouchableOpacity style={styles.btn} onPress={()=>{_this.allSelect()}}>
              <Text style={text.lan15}> 全选</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} disabled={_this.selCount==0?true:false} onPress={()=>_this.delMsg()}>
              <Text style={_this.selCount==0?text.hui15:text.lan15}> 删除</Text>
            </TouchableOpacity>
          </View>
            :null
          }
        
      </View>
    )
  }
  //全选操作
  allSelect(){
    if(_state.allSelect){
      _this.selCount=0;
      _state.dataSource.forEach(item=>{
          item.select=false
      })
    }else{
      _this.selCount=_state.dataSource.length;
      _state.dataSource.forEach(item=>{
        item.select=true
      })
    }
   _this.setState({
     dataSource:_state.dataSource,
     allSelect:!_state.allSelect
   })
  }
  //选中每一条
  changeSelect(item){
      item.select=!item.select;
      if(item.select){
          _this.selCount--
      }else{
          _this.selCount++
      }
      if(_this.selCount==_state.dataSource.length){
        _this.setState({
          allSelect:true
        })
      }else{
        _this.setState({
          allSelect:false
        })
      }
     
  }
  //分割线
  _SeparatorComponent(){
    return(
        <View style={{height:10*scale,width:width,backgroundColor:"#f0f0f0"}}></View>
    )
  }
  //跳转到哪里
  navigateWhere(type,project_id,url){
    //如果类型为5则是订单id  
    if(type==6){
      _navigator.navigate("MyOrderList")
    }else if(type==4){
      _navigator.navigate("MyPublishInfo",{project_id})
    }else if(type==5){
      _navigator.navigate("MyOfferInfo",{project_id})
    }else if(type==1){
      if(url){
        _navigator.dispatch(NavigationActions.navigate({ routeName:'ShowWeb',params:{url}}))
      }
    }
  }
 
  _renderItem({item,index}){
    const {type,title,content,select,push_time,is_read,relation_id,item_num,item_title,url} = item;
    let height = type==4||type==5?240*scale:180*scale
    // 1 系统通知  2 实名认证  3 商家认证  4 需求消息 5报价  6 商城消息
    let imgSource = type==2?require('../../images/nameMsg.png'):type==3?require('../../images/shopAccout.png'):type==4?require('../../images/demandMsg.png'):type==5?require('../../images/demandMsg.png'):type==1?require('../../images/xitong.png'):require('../../images/shopMsg.png')
    let showtext = type==2?"实名认证":type==3?"商家认证":type==4?"需求消息":type==5?"需求消息":type==1?"系统消息":"商城消息"
    let showTouch = type==2||type==3?1:0.4
    return (
      <TouchableOpacity style={styles.row} activeOpacity={showTouch} onPress={()=>_this.navigateWhere(type,relation_id,url)} disabled={type==2||type==3?true:false} >
        <View style={styles.itemStyle}>
        {
          _state.edit?
          <TouchableOpacity style={styles.item_l} onPress={()=>_this.changeSelect(item)}>
            {
              select?
              <Image source={require('../../images/selected.png')} style={styles.showImg}/>
              :<View style={styles.noselect}></View>
            }
          </TouchableOpacity>
        :null}

          <View style={styles.item_r}>
           <View style={styles.item_rt}>
              <View style={styles.item_rtl}>
                <Image source={imgSource} style={[styles.showImg,{marginRight:5*scale}]}/>
                <Text style={text.shenhei15}>{showtext}</Text>
                {
                  is_read==0?
                  <View style={styles.redDot}></View>
                  :null
                }
              </View>
                <Text>{date1str(push_time, 'yyyy-MM-dd hh:mm:ss')}</Text>
            </View>

            <View style={styles.item_rb}>
              {type==4||type==5||type==6?
              <View style={{flexDirection:"row",marginTop:10*scale,justifyContent:"space-between"}}>
                <Text numberOfLines={1} style={text.shenhei12}>订单编号：{item_num}</Text>
               {item_title?<Text numberOfLines={1} style={text.shenhei12}>项目名称：{item_title}</Text>:null}  
              </View>
               :
                null
              } 
              <Text numberOfLines={1} style={[text.shenhei12,{marginTop:10*scale}]}>{title}</Text>
              <Text style={[text.shenhei12,{marginTop:10*scale}]}>{content}</Text>
            </View>
          </View>

        </View> 
      </TouchableOpacity>
     
    )
  }
}



