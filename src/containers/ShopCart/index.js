import React, { Component } from 'react';
import {View,FlatList,TouchableOpacity,Image,Text, ScrollView ,InteractionManager,DeviceEventEmitter,Alert} from 'react-native';
import styles from './style';
import color from '../../constant/color'
import { width, height,scale } from '../../components/common/Dimensions'
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import RenderShop from '../../components/common/RenderShop';
import Navwait from '../../components/common/NavWait';
import {getCartList,updateCatGoodsNum,removieGoodsFromCart} from '../../services/shopServer'//购物车接口
import text from '../../constant/text'
import {NavigationActions} from '../../components/common/navigation'
import {getHomeInfo} from '../../services/home'
import {toastShort} from '../../constant/toast'

var _this,_state,_navigator;
export default class ShopCart extends Component {
  constructor(props){
        super(props)
        this.state={
          shopList:[],//底部商品list
          dataSource:[],//数据
          loading:true,//是否页面加载中
          allShow:false,//全选状态
          shoploading:true//是否购物车加载中
        }
        this.selCount=0
  }
  //请求购物车数据
  fetchUI(){
    getCartList(``,_this.getCartListResult,_this.failFuc)
  }
  componentDidMount(){
   //请求购物车数据
    InteractionManager.runAfterInteractions(() => {
      this.scriptOption=DeviceEventEmitter.addListener("ShopCartUI",_this.fetchUI)
      getHomeInfo(``,_this.getInfoResult,_this.failFuc)
      _this.fetchUI()
    });
  }
  //为你推荐接口
  getInfoResult(result){
    _this.setState({
      shopList:result.shopList?result.shopList:[],
      shoploading:false
    })
  }
  //购物车接口
  getCartListResult(result){
    if(result.returnCode==200){
      _this.setState({
        dataSource:result.return_result,
        loading:false
      })
    }
  }

  failFuc(){
    _this.setState({
      loading:false,
      failLoad:false
    })
    toastShort("服务器异常，请稍后再试")
  }

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
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      title:"购物车"
    };
    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
            <ScrollView>
            { _state.dataSource.length?
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{width:width,backgroundColor: "#fff"}}
                    ref={ ref => this.flatList = ref }
                    data={ _state.dataSource }
                    extraData={_state.dataSource}
                    keyExtractor={(item, index) => index+"i"}
                    renderItem={ this._renderItem }
                    ItemSeparatorComponent={ this._SeparatorComponent }
                />  :
                  _state.loading?
                  <Navwait/>
                    :
                  _this._renderEmptyView()
              }
              {_state.shopList.length?
              <View style={styles.interval}><Text style={[text.lan15,{fontWeight:"500"}]}>为／您／推／荐</Text></View>
              :null}
            {_state.shopList.length?
             <RenderShop shopList={_state.shopList} navigation={_navigator}/>
             :
                  null
            }

             
           </ScrollView>
       

       {
         _state.dataSource.length?
         <View style={styles.footer_btn}>
            <TouchableOpacity style={styles.gorupf} onPress={()=>_this.allShowChange()}>
                  {_state.allShow?(
                      <Image source={require('../../images/selected.png')} style={styles.selectIcon}/>
                  ):(
                      <View style={styles.noSelect}></View>
                  )}
                <Text style={[text.hei12,{marginLeft:20*scale}]}>全选</Text>
            </TouchableOpacity>
            <View style={styles.gorupf}>
                  <View style={styles.gorupf}>
                    <Text style={text.hei12}>总计：</Text>
                    <Text style={text.hei12}>￥{_state.dataSource.length?this.sumPrice():""}</Text>
                  </View>
                  <TouchableOpacity style={styles.finsh_btn} onPress={()=>_this.shopSth()}>
                      <Text style={text.bai15}>结算</Text>
                  </TouchableOpacity>
            </View>
        </View>
         :null
       }
          
      </View>
    )
  }
  _renderEmptyView(){
    return (
      <View style={{paddingBottom:100*scale,width:width,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
          <Image source={require('../../images/loadFail.gif')} style={{width:240*scale,height:240*scale}}/>
          <Text style={text.hui12}>购物车是空的</Text>
          <TouchableOpacity style={{width:310*scale,height:60*scale,alignItems:"center",justifyContent:"center",backgroundColor:color.bluebg,borderRadius:10*scale,marginTop:30*scale}}
          onPress={()=>{_navigator.navigate("ShopClass")}}
          >
            <Text style={text.bai15}>去购物</Text>
          </TouchableOpacity>
      </View>
    )
  }
     
//点击结算
  shopSth(){
      let list=[]
      _state.dataSource.forEach((item,i)=>{
        let outSide={}
        let onOff=false
        item.company_info.cart_list.forEach(element=>{
          if(element.isSelect){
            onOff=true;
              outSide.company_name=item.company_info.company_name;
              outSide.cart_list=[];
            }
          })
          if(onOff){
            item.company_info.cart_list.forEach(element=>{
              if(element.isSelect){
                outSide.cart_list.push(element)
              }
            })
            list.push(outSide)
          }
      })
     if(list.length){
      _navigator.navigate("ConfirmOrder",{shopList:list,router:"ShopCart"})
     }else{
      Alert.alert("温馨提示","请选择你要结算的商品",[{text:"确认"}])
     }
  }
//分割线
  _SeparatorComponent(){
    return(
        <View style={{height:10*scale,backgroundColor:"#f0f0f0"}}></View>
    )
  }
//点击全选
  allShowChange(){
    const changeALl=(onOff)=>{
      _state.dataSource.forEach(element => {
        element.isShow=onOff
        element.company_info.cart_list.forEach(item=>{
            item.isSelect=onOff
        })
      });
    }

    if(!_state.allShow){
      changeALl(true)
      _this.selCount=_state.dataSource.length;
    }else{
      changeALl(false)
      _this.selCount=0;
    }
    _this.setState({allShow:!_state.allShow,dataSource:_state.dataSource})
  }
  //总价
  sumPrice(){
    var priceNum=0;
    if(_state.dataSource.length){
      _state.dataSource.forEach(element => {
        element.company_info.cart_list.forEach(item=>{
          if(item.isSelect){
            priceNum+=parseFloat(item.shop_price)*parseFloat(item.goods_number)
          }
        })
      });
    }
    return priceNum.toFixed(2)
  }
  //选一整条
  isSelectChange(list,item){
    if(list.isSelect){
      list.isSelect=false
    }else{
      list.isSelect=true
    }
    let selCount=0
    item.company_info.cart_list.forEach(item=>{
        if(item.isSelect){
          selCount++
        }
    })
    //如果列表中每一条都选中了  那么把列表的选中状态边为true
    if(selCount==item.company_info.cart_list.length){
       item.isShow=true
       _this.selCount++
       if(_this.selCount==_state.dataSource.length){
          _this.setState({allShow:true})
       }
    }else{
      if(item.isShow){
        item.isShow=false
        _this.selCount--
        _this.setState({allShow:false})
      }
    }
    _this.setState({
      dataSource:_state.dataSource
    })
  }
//选一小条
  isShowChange(item){
    if(item.isShow){
      item.isShow=false
      item.company_info.cart_list.map((item,i)=>{
        item.isSelect=false
        return item
      })
      _this.selCount--
    }else{
      item.isShow=true
      item.company_info.cart_list.map((item,i)=>{
        item.isSelect=true
        return item
      })
      _this.selCount++
    }
    if(_this.selCount==_state.dataSource.length){
      _this.setState({allShow:true})
    }else{
      _this.setState({allShow:false})
    }
    _this.setState({
      dataSource:_state.dataSource
    })
  }
  //减数量
  delList(list){
    let result=(res)=>{
      if(res.returnCode==200){
        list.goods_number--
        _this.setState({
          dataSource:_state.dataSource
        })
        // _this.fetchUI()
      }else{
        Alert.alert("温馨提示",res.returnMsg)
      }
   }
  
   updateCatGoodsNum(`rec_id=${list.rec_id}&goods_id=${list.goods_id}&goods_num=${list.goods_number-1}`,result,_this.failNum)
  }

  //加数量
  addList(list){
    let result=(res)=>{
      if(res.returnCode==200){
        list.goods_number=parseInt(list.goods_number)+1
        _this.setState({
          dataSource:_state.dataSource
        })
        // _this.fetchUI()
      }else{
        Alert.alert("温馨提示",res.returnMsg)
      }
   }
    updateCatGoodsNum(`rec_id=${list.rec_id}&goods_id=${list.goods_id}&goods_num=${parseInt(list.goods_number)+1}`,result,_this.failNum)
  }

  //加减数量失败
  failNum(){
    Alert.alert("温馨提示","网络请求失败，请检查您的网络")
  }
//删除商品
  deleteShop(item){
    // console.log(item)
    let idList=[]
    item.company_info.cart_list.forEach((list,i)=>{
          idList.push(list.rec_id)
    })
      Alert.alert("温馨提示","确定要删除该商品吗？",[{text:"取消",},{text:"确定",onPress:()=>{
        removieGoodsFromCart(`removie_id_str=${idList}`,_this.deleteShopResult,_this.failFuc)
      }}])
  }
//删除商品回调
  deleteShopResult(result){
      if(result.returnCode==200){
        _this.fetchUI()
      }
  }

  _renderItem({item,index}){
    return (
      item.company_info?
      <View style={styles.itemStyle} >
          <View style={styles.itemTop}>
              <View style={{flexDirection:"row",alignItems:"center",height: 59*scale}}>
                <TouchableOpacity style={styles.btnChange} onPress={()=>{_this.isShowChange(item)}}>
                    {item.isShow?(
                        <Image source={require('../../images/selected.png')} style={styles.selectIcon}/>
                    ):(
                        <View style={styles.noSelect}></View>
                    )}
                </TouchableOpacity>
                <Text style={text.hei12}>{item.company_info.company_name}</Text>
              </View>
              

              <TouchableOpacity onPress={()=>{_this.deleteShop(item)}}><Text style={text.lan12}>删除</Text></TouchableOpacity>
          </View>
          <View style={styles.itemBottom}>
              {
                item.activity?
                  <Text style={[text.hong10,{marginLeft: 40*scale,marginTop:10*scale}]}>{item.activity}</Text>
                :null
              }
              {
                item.company_info.cart_list.map((list,i)=>(
                  <TouchableOpacity style={[styles.listStyle,i!=0?{borderTopWidth:1,borderColor:"#ddd"}:{}]} key={i+"1"} onPress={()=>_navigator.navigate("ShopDetail",{goods_id:list.goods_id})} >
                      <TouchableOpacity style={styles.dChange} onPress={()=>{_this.isSelectChange(list,item)}}>
                          {
                               list.isSelect?
                                <Image source={require('../../images/selected.png')} style={styles.selectIcon}/>
                                :
                                <View style={styles.noSelect}></View>
                          }
                      </TouchableOpacity>
                        <Image source={{uri:list.goods_thumb}} style={styles.listImg}/>
                        <View style={styles.listRight}>
                          <Text style={text.hei15} numberOfLines={1} >{list.goods_name}</Text>
                          <Text style={text.shenhui12} numberOfLines={1}>规格：{list.goods_attr}</Text>
                          <View style={styles.listRB}>
                            <Text style={text.lan15}>¥{list.shop_price}</Text>
                            <View style={styles.changeBox}>
                            {
                              list.goods_number==1?
                              <TouchableOpacity style={{padding:10*scale}} disabled>
                                <Image source={require('../../images/jian2.png')} style={styles.changeA}/>
                              </TouchableOpacity>
                              :
                              <TouchableOpacity style={{padding:10*scale}} onPress={()=>_this.delList(list)}>
                                 <Image source={require('../../images/jian1.png')} style={styles.changeA}/>
                              </TouchableOpacity>
                            }
                              <View style={styles.numBox}>
                                <Text style={text.hei15}>{list.goods_number}</Text>
                              </View>
                              <TouchableOpacity style={{padding:10*scale}} onPress={()=>_this.addList(list)}>
                                 <Image source={require('../../images/addS1.png')} style={styles.changeA}/>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                  </TouchableOpacity>
                ))
              }
          </View>
      </View> :null
    )
  }
}

