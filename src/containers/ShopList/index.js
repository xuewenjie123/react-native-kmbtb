import React, { Component } from 'react';
import {  FlatList,View,TextInput,TouchableOpacity,Image,Text, ScrollView ,InteractionManager,ToastAndroid} from 'react-native';
import styles from './style';
import color from '../../constant/color'
import text from '../../constant/text'
import { width, height,scale } from '../../components/common/Dimensions'
// import ModalScreen from '../../components/common/ModalScreen'
import {getListnfo} from '../../services/shopServer'
import {NavigationActions} from '../../components/common/navigation'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {toastShort} from '../../constant/toast'
var _this,_state,_navigator;
// let shopList=[
//   {name:"南玻（成都）白玻",spec:"2440*1830mm",price:"4150.0",sales:"2405",stock:"219",dispatch:"全国"},
//   {name:"南玻（成都）白玻",spec:"2440*1830mm",price:"4150.0",sales:"2405",stock:"219",dispatch:"全国"},
//   {name:"南玻（成都）白玻",spec:"2440*1830mm",price:"4150.0",sales:"2405",stock:"219",dispatch:"全国"},
//   {name:"南玻（成都）白玻",spec:"2440*1830mm",price:"4150.0",sales:"2405",stock:"219",dispatch:"全国"}
// ]
export default class ShopList extends Component {
  constructor(props){
        super(props)
        this.state={
          screenList:["买家信用","售量","库存","单价"],//排序项目
          order:"0",//默认选中
          dataSource:[],//数据源
          refreshing:false,//是否显示刷新状态
          // visible:false,//
          footLoad:false,
          id:this.props.navigation.state.params.id,//分类id
          page:1,//当前页
          reset:true,//是否加载分页第一页
          loading:true,//是否显示加载中状态
          size:10,//每页显示多少条，默认显示多少条
          failLoad:true,//是否连接成功
        };
        this.sort="rank_points";//按什么排序的字段
        this.orderHtai="ASC"//传给后台的升序降序字段
  }

  //进来就请求
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      getListnfo(`id=${_state.id}&page=${_state.page}&sort=${_this.sort}&order=${_this.orderHtai}`,_this.getListInfoResult,_this.failFuc)
    });
  }
//分页逻辑，reset做是不是第一页标识
  getListInfoResult(result){
      if(result.goodslist.length){
            _this.setState({
                dataSource:_state.reset?result.goodslist:_state.dataSource.concat(result.goodslist),
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
          dataSource:[]
        })
      }
  }
  //请求失败
  failFuc(){
    toastShort("服务器异常请稍后再试")
    _this.setState({
      loading:false,
      failLoad:false
    })
  }
//切换头部标题
  tablist(order){
    //r如果在此点击切换升序降序
    if(order==_state.order){
      _this.orderHtai="DESC"
      _this.setState({order:"99",reset: true,refreshing:true})
    }else{
      _this.orderHtai="ASC"
      _this.setState({order,reset: true,refreshing:true})
    }
    
    switch(order){
      case "0":
      _this.sort="rank_points"
      break;
      case "1":
      _this.sort="salenum "
      break;
      case "2":
      _this.sort="goods_number"
      break;
      default :
      _this.sort="final_price"
      break;
    }
    // 切换后重新获取信息
    getListnfo(`id=${_state.id}&page=1&sort=${_this.sort}&order=${_this.orderHtai}`,_this.getListInfoResult,_this.failFuc)
  }
  // openModal(){
  //   _this.setState({
  //     visible:true
  //   })
  // }
  // closeModal(){
  //   _this.setState({
  //     visible:false
  //   })
  // }

  //知识点知识点，这里是什么呢，正常是这样也可以的_navigator.goBack(),可是这样如果连着进了两次这个页面，只能返回去一次，而你如果用到了NavigationActions的话，就可以为所欲为的返回
  backRouter(){
    _navigator.dispatch(NavigationActions.back())
  }
  render() {
    _this=this;
    _state=this.state;
    _navigator=this.props.navigation;
    // let ModalScreenProps={
    //   visible:_state.visible,
    //   closeModal:_this.closeModal
    // }
 
    return (
      <View style={styles.main}>
        {/* <ModalScreen {...ModalScreenProps} /> */}
        <View style={styles.header}>
          <TouchableOpacity  onPress={() => {_this.backRouter()}}>
           <Image style={{width: 44*scale, height: 44*scale}} source={require('../../images/back.png')}/>
          </TouchableOpacity>
           <TouchableOpacity style={styles.input}   onPress={() => {_navigator.navigate("Search")}}>
              <Image source={require('../../images/home_head_search.png')} style={styles.search_icon}/>
              <View style={styles.textInput}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{_navigator.navigate("ShopCart")}}>
              <Image source={require('../../images/shopingCart.png')} style={styles.header_icon}/>
           </TouchableOpacity>
        </View>

           <View style={styles.selectBox} ref={(selectBox)=>this.selectBox=selectBox}>
           {/* 排序的点击按钮 */}
           {_state.screenList.map((item,index)=>(
                <TouchableOpacity style={styles.btnBox} onPress={()=>{_this.tablist(index+"")}} key={index}>
                    <View style={styles.selectBtn}>
                          <Text style={[text.hei12,{marginRight:10*scale}]}>{item}</Text>
                          {
                            _state.order==index?
                            <Image source={require('../../images/arow1.png')} style={styles.seicon}/>
                              :
                            <Image source={require('../../images/arow2.png')} style={styles.seicon}/>
                          }
                      </View>
                      <Image source={require('../../images/logiLine.png')} style={styles.line}/>
                </TouchableOpacity>
            ))}
            {/* <TouchableOpacity style={styles.btnBox} onPress={()=>{_this.openModal()}}>
                <View style={styles.selectBtn}>
                        <Text style={[text.hei12,{marginRight:10*scale}]}>筛选</Text>
                        <Image source={require('../../images/demandScreen.png')} style={{width:30*scale,height:32*scale}}/>
                  </View>
                  <Image source={require('../../images/logiLine.png')} style={styles.line}/>
            </TouchableOpacity> */}
        </View>
        {
          _state.dataSource.length?
          <FlatList
          ref={(flatList)=>this._flatList = flatList}
          extraData={this.state}
          keyExtractor={(item, index) => index}
          data={_state.dataSource}
          renderItem={this._renderItem}
          ItemSeparatorComponent={ this._renderItemSeparatorComponent }
          onRefresh={this._renderRefresh}
          refreshing={ this.state.refreshing }
          ListHeaderComponent={ this._renderHeader }
          onEndReached={ this._onEndReached }
          onEndReachedThreshold={0.1}
          ListFooterComponent={this._renderFooter}
        />
          :
          _state.loading?<Naviwait/>:
          <Lost title={_state.failLoad?"暂时还没有商品":"您的网络不给力哦~~~"}
              imgUrl={require('../../images/loadFail.gif')}
              imgStyle={{width:240*scale,height:240*scale}}    
          />
        }
       
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
      getListnfo(`id=${_state.id}&page=${_state.page+1}&sort=${_this.sort}&order=${_this.orderHtai}`,_this.getListInfoResult,_this.failFuc)
    }
  }

// 下拉刷新
  _renderRefresh(){
    _this.setState({reset: true,refreshing:true})//开始刷新
    getListnfo(`id=${_state.id}&page=1&sort=${_this.sort}&order=${_this.orderHtai}`,_this.getListInfoResult,_this.failFuc)
  };
    
  //分割线
  _renderItemSeparatorComponent(){
    return <View style={{height:10*scale,width:width}}></View>
  }
  _renderItem({item}){
    let {goods_id,goods_name,final_price,goods_number,goods_thumb}=item
    return (
      <TouchableOpacity style={styles.itemstyle} onPress={()=>_navigator.navigate("ShopDetail",{goods_id})}>
          <Image source={{uri:goods_thumb}} style={styles.itemImg}/>
          <View style={styles.itemRight}>
             <Text numberOfLines={1} style={text.hei15}>{goods_name}</Text>
             {/* <Text numberOfLines={1} style={styles.text2}>规格：{spec}</Text> */}
             <Text numberOfLines={1} style={[text.lan15,{marginVertical:20*scale}]}>{final_price}</Text>
             <Text numberOfLines={1} style={text.shenhui10}> {goods_number}吨</Text>
          </View>
      </TouchableOpacity>
    )
  }
}

