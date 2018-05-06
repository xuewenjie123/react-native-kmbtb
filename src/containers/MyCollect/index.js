import React, { Component } from 'react';
import {  FlatList,View,TextInput,DeviceEventEmitter,TouchableOpacity,Image,Text, ScrollView ,InteractionManager,ToastAndroid} from 'react-native';
import styles from './style';
import color from '../../constant/color'
import text from '../../constant/text'
import {NavigationActions} from '../../components/common/navigation'
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import { width, height,scale } from '../../components/common/Dimensions'
import {date1str,delHtmlTag} from '../../constant/constants'
import Swipeout from 'react-native-swipeout';
import {isCollectShop} from '../../services/shopServer'
import {getMyArticleList,cancelArticleCollect,getMyGoodsCollectionList} from '../../services/myCollect'//我的收藏
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
var _this,_state,_navigator;
let shopList=[
  {name:"南玻（成都）白玻",spec:"2440*1830mm",price:"4150.0",sales:"2405",stock:"219"},
  {name:"南玻（成都）白玻",spec:"2440*1830mm",price:"4150.0",sales:"2405",stock:"219"},
  {name:"南玻（成都）白玻",spec:"2440*1830mm",price:"4150.0",sales:"2405",stock:"219"},
  {name:"南玻（成都）白玻",spec:"2440*1830mm",price:"4150.0",sales:"2405",stock:"219"}
]
let infoList=[
  {describe:"北方主要城市空气质量逐步转差，邯郸、石家庄中度污染，北京轻度污染石家庄中度污染...",title:"郎永淳：特朗普欲救美国钢企",createTime:"2017/09/28",source:"网易研究局",imgUrl:require('../../images/house.png')},
  {describe:"北方主要城市空气质量逐步转差，邯郸、石家庄中度污染，北京轻度污染石家庄中度污染...",title:"郎永淳：特朗普欲救美国钢企",createTime:"2017/09/28",source:"网易研究局",imgUrl:require('../../images/house.png')},
  {describe:"北方主要城市空气质量逐步转差，邯郸、石家庄中度污染，北京轻度污染石家庄中度污染...",title:"郎永淳：特朗普欲救美国钢企",createTime:"2017/09/28",source:"网易研究局",imgUrl:require('../../images/house.png')}
]
export default class MyCollect extends Component {
  constructor(props){
        super(props)
        this.state={
          dataSource:[],
          dataSource2:[],
          refreshing:false,
          footLoad:false,
          loading:true,
          failLoad:true,
          option:this.props.navigation.state.params.option
        }
  }

  componentDidMount(){   
    InteractionManager.runAfterInteractions(() => {
      if(_state.option=="shop"){
        getMyGoodsCollectionList("",_this.getListResult,_this.FailFuc)
      }else{
        getMyArticleList("",_this.getListResult,_this.FailFuc)
      }
    });
  }

  FailFuc(){
    _this.setState({
      loading:false,
      failLoad:false
    })
  }
  
  getListResult(result){
      if(result.returnCode==200){
        _this.setState({
          loading:false,
          refreshing:false
        })
        let resultList=_state.option=="shop"?result.goods_list:result.article_list
        
          if(_state.option=="shop"){
            _this.setState({dataSource:resultList})
          }else{
            _this.setState({dataSource2:resultList})
          }
      }else{
        _this.setState({
          loading:false,
          refreshing:false
        })
      }
  }

  tabOption(option){
    this.setState({option,loading:true})
    if(option=="shop"){
      getMyGoodsCollectionList("",_this.getListResult,_this.FailFuc)
    }else{
      this.setState({refreshing:true})
      getMyArticleList("",_this.getListResult,_this.FailFuc)
    }
  }

  _renderRefresh(){
    _this.setState({refreshing:true})//开始刷新
    if(_state.option=="shop"){
      getMyGoodsCollectionList("",_this.getListResult,_this.FailFuc)
    }else{
      this.setState({refreshing:true})
      getMyArticleList("",_this.getListResult,_this.FailFuc)
    }
  };

  render() {
    _this=this;
    _state=this.state;
    _navigator=this.props.navigation;

    let NavigatorTopBarProps={
      visible:true,
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}/>
          </View>
        </TouchableOpacity>
      ),
      centerView:(
        <View style={{width:380*scale,height:48*scale,borderColor:"#fff",borderWidth:1,borderRadius:5*scale,flexDirection:"row"}}>
          <TouchableOpacity activeOpacity={0.7} style={_state.option=="shop"?styles.activeBtn:styles.transBtn} onPress={()=>this.tabOption("shop")}>
              <Text style={_state.option=="shop"?text.lan12:text.bai12}>商品收藏</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={_state.option=="info"?styles.activeBtn:styles.transBtn} onPress={()=>this.tabOption("info")}>
            <Text style={_state.option=="info"?text.lan12:text.bai12}>咨讯收藏</Text>
          </TouchableOpacity>
        </View>
      )
    };
    return (
      <View style={styles.main}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        {
          _state.option=="shop"&&_state.dataSource.length||_state.option=="info"&&_state.dataSource2.length?
            <FlatList
              ref={(flatList)=>this._flatList = flatList}
              extraData={_state.dataSource}
              onRefresh={()=>this._renderRefresh()}
              refreshing={ this.state.refreshing }
              keyExtractor={(item, index) => index}
              data={_state.option=="shop"?_state.dataSource:_state.dataSource2}
              renderItem={this._renderItem}
              ItemSeparatorComponent={ this._renderItemSeparatorComponent }
          />:
          _state.loading?<Naviwait/>:
          <Lost title={_state.failLoad?"您还没有过收藏哦~~~~":"您的网络不给力哦~~~"}
              imgUrl={require('../../images/loadFail.gif')}
              imgStyle={{width:240*scale,height:240*scale}}    
          />
        }
         
        
      </View>
    )
  }

  _renderItemSeparatorComponent(){
    return <View style={{height:10*scale,width:width}}></View>
  }


  //以下是商品

 
  SwiComponent() {
    return (
      <View style={[styles.swiperItem,_state.option!="shop"?{height:246*scale}:null]}>
          <Text style={text.bai12}>取消</Text>
          <Text style={text.bai12}>收藏</Text>
      </View>
    )
  }

  isCollectShopResult(result){
    if(result.returnCode==200){
      DeviceEventEmitter.emit("MySelfUI")
      getMyGoodsCollectionList("",_this.getListResult,_this.FailFuc)
    }
}

  _renderItem({item,index}){
    if(_state.option=="shop"){
      let {goods_name,thumb,shop_price,sales,stock,goods_id}=item
      let swipeoutBtns = [
        {
          component:_this.SwiComponent(),
          onPress: ()=>{
            isCollectShop(`id=${goods_id}&is_collect=1&act=collect`,_this.isCollectShopResult,_this.FailFuc)
          },
        }
      ]
      return (
        <Swipeout close={false} key={index+"1"} right={swipeoutBtns} autoClose={true} backgroundColor={color.write} buttonWidth={140*scale}>
         <TouchableOpacity style={styles.itemstyle} onPress={()=>_navigator.navigate("ShopDetail",{goods_id})}>
            <Image source={{uri:thumb}} style={styles.itemImg}/>
            <View style={styles.itemRight}>
                <Text numberOfLines={1} style={text.hei15}>{goods_name}</Text>
                {/* <Text numberOfLines={1} style={text.shenhui12}>规格：</Text> */}
                <Text numberOfLines={1} style={[text.lan15,{marginBottom:20*scale}]}>{shop_price}</Text>
                {/* <Text numberOfLines={1} style={text.shenhui10}>销售量：{sales}吨 库存：{stock}吨 </Text> */}
            </View>
        </TouchableOpacity>
      </Swipeout>
       
      )
    }else{
      let {content,title,add_time,author,img_src,article_id}=item
      let swipeoutBtns = [
        {
          component:_this.SwiComponent(),
          onPress: ()=>{
            cancelArticleCollect(`collect_id=${article_id}`,_this.cancelArticeResult,_this.cancelFail)
          },
        }
      ]
      return (
        <Swipeout  close={false} key={index+"2"} right={swipeoutBtns} autoClose={true} backgroundColor={color.write} buttonWidth={140*scale}>
          <TouchableOpacity style={styles.itemstyleb} onPress={()=>_navigator.navigate("InfomationDetail",{article_id})}>
              <View style={styles.itemInfob}>
                  <Text numberOfLines={2} style={[text.hei15,{marginBottom:10*scale}]}>{title}</Text>
                  <Text numberOfLines={1} style={[text.shenhui10,{marginBottom:10*scale}]}>{date1str(add_time,"yyyy年MM月dd日")} 来源：{author}</Text>
                  <Text numberOfLines={3} style={text.hei10}>{content?delHtmlTag(content):null}</Text>
              </View>
              <View style={styles.itemRightb}>
                  <Image source={{uri:img_src}} style={{width:330*scale,height:188*scale}}/>
              </View>
          </TouchableOpacity>
        </Swipeout>
      )
    }
  }
  cancelArticeResult(result){
    if(result.returnCode==200){
      DeviceEventEmitter.emit("MySelfUI")
      getMyArticleList("",_this.getListResult,_this.FailFuc)
    }
  }

  cancelFail(){
    Alert.alert("温馨提示","网络异常，请稍后再试",[{text:"确认"}])
  }
}


