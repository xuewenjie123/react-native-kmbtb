'use strict';
import React, { Component, } from 'react';
import { View,Alert, Image, ScrollView,DeviceEventEmitter, TouchableOpacity, Text,StatusBar,TextInput,InteractionManager,FlatList} from 'react-native';
import styles from './style'
import color from '../../constant/color';
import text from '../../constant/text';
import {date1str,delHtmlTag} from '../../constant/constants'
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import { width, height,scale } from '../../components/common/Dimensions';
import {NavigationActions} from "../../components/common/navigation";
import Lost from '../../components/common/Lost'//丢失页面
import {getArticleList,getArticleDetail} from '../../services/infomation'
import Naviwait from '../../components/common/NavWait'
var _navigator,_this,_state,_props;
export default class HelpCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records:["如何注册账号","实名认证","购买商品","实名认证","购买商品"],
      selectIndex:0,//选中索引
      page:1,//当前页
      reset:true,//是否加载分页第一页
      loading:true,//是否显示加载中状态
      size:10,//每页条数
      failLoad:true,//网络
      cat_id:"",//分类id
      refreshing:false
    }
  }
  componentDidMount(){
    getArticleList(`page_num=${_state.page}&cat_id=${_state.cat_id}&type=帮助中心`,_this.getListResult,_this.failFuc)
  }
  //获取帮助中心的内容
  getListResult(result){
    if(result.returnCode==200){
            if(result.cat_list){
              _this.setState({
                records:result.cat_list,
              })
            }
            if(result.article_list){
              _this.setState({
                total: Number(result.total_count),
                refreshing:false,
                page: Number(result.page_num),
                footLoad: false,
                loading:false,
                size:Number(result.page_count)||10,
                dataSource:_state.reset?result.article_list:_state.dataSource.concat(result.article_list),
                reset:false,
              })
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
  //网络请求失败
  failFuc(){
    _this.setState({loading:false,failLoad:false})
  }
  //上拉加载
  _onEndReached(){
    if(_state.page*_state.size<_state.total && !_state.footLoad){
      _this.setState({footLoad: true,});
      getArticleList(`page_num=${_state.page+1}&cat_id=${_state.cat_id}&type=帮助中心`,_this.getListResult,_this.failFuc)
    }
  }
    // 下拉刷新
  _renderRefresh = () => {
      _this.setState({reset: true,refreshing:true})//开始刷新
      getArticleList(`page_num=${_state.page}&cat_id=${_state.cat_id}&type=帮助中心`,_this.getListResult,_this.failFuc)
  };
  //选择此时的标签
  selectLabel(selectIndex,cat_id){
    _this.setState({
      selectIndex,
      reset: true,
      refreshing:true,
      loading:true,
      cat_id
    })
    getArticleList(`page_num=${_state.page}&cat_id=${cat_id}&type=帮助中心`,_this.getListResult,_this.failFuc)
  }

  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator=_this.props.navigation;
    let NavigatorTopBarProps={
      visible:true,
      title:"帮助中心",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
    };
    
    return (
      <View style={styles.wrapper}>
          <NavigatorTopBar {...NavigatorTopBarProps}/>
          {_state.records.length?
          <FlatList
          style={{flex:1}}  
          contentContainerStyle={styles.Box}
          ref={(flatList)=>this._flatList = flatList}
          extraData={_state}
          keyExtractor={(item, index) => index}
          data={_state.dataSource}
          renderItem={(item)=>this._renderItem(item)}
          ItemSeparatorComponent={ this._renderItemSeparatorComponent }
          onRefresh={this._renderRefresh}
          refreshing={ this.state.refreshing }
          // ListHeaderComponent={ this._renderHeader }
          onEndReached={ this._onEndReached }
          onEndReachedThreshold={0.1}
          ListFooterComponent={this._renderFooter}
          ListEmptyComponent={ this._renderEmptyView }
        />
          :
            _state.loading?<Naviwait/>:
            <Lost title={_state.failLoad?"暂时还没有问题":"您的网络不给力哦~~~"}
                imgUrl={require('../../images/loadFail.gif')}
                imgStyle={{width:240*scale,height:240*scale}}    
            />
        }
           
      </View>
    )
  }
  _renderHeader(){
    return (
      <View style={[styles.labelBox,{marginTop:20*scale}]}>
            {_state.records.map((item,index)=>(
                <TouchableOpacity key={index}
                  style={[styles.label,_state.selectIndex==index?{backgroundColor:color.bluebg}:{}]}
                  underlayColor='transparent'
                  onPress={()=>_this.selectLabel(index,item.cat_id)}>
                <Text numberOfLines={1} style={_state.selectIndex==index?text.bai12:text.shenhui12}>
                    {item.cat_name}
                </Text>
                </TouchableOpacity>
            ))}
      </View>
    )
  }
  _renderItem({item,index}){
    let {title,article_id}=item
      return (
        <TouchableOpacity style={styles.inputBox} onPress={() => {_navigator.navigate("InfomationDetail",{article_id})}}>
          <Text numberOfLines={1} style={text.hei15}>{title}</Text>
          <Image source={require('../../images/next_demand.png')} style={styles.nextImg} />
        </TouchableOpacity>
      )
  }
  _renderItemSeparatorComponent(){
    return (
      <View style={{width:width-40*scale,height:1*scale,backgroundColor:color.qianhui}}></View>
    )
  }
  _renderEmptyView(){
    return (
      <View style={{flex:1,height:height-44-340*scale}}>
        {
          _state.loading?<Naviwait/>:
          <Lost title={_state.failLoad?"暂时还没有问题":"您的网络不给力哦~~~"}
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

};
