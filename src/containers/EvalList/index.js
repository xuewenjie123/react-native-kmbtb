'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image, TextInput,DeviceEventEmitter,InteractionManager, Text,TouchableOpacity ,FlatList} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {date1str} from '../../constant/constants'
import {NavigationActions} from '../../components/common/navigation'
import {getCommentList} from '../../services/shopServer'
import { width, height,scale } from '../../components/common/Dimensions';
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
var _navigator,_this,_state;
var evalList=[
  {url:require('../../images/home_1.png'),tel:"18919802283",content:"过一次，卖家态度特别好，点",time:"149845233",spec:"100dun"},
  {url:require('../../images/home_1.png'),tel:"18919802283",content:"过一次，卖家态度特别好，点",time:"149845233",spec:"100dun"},
  {url:require('../../images/home_1.png'),tel:"18919802283",content:"过一次，卖家态度特别好，点",time:"149845233",spec:"100dun"}
]
export default class EvalList extends Component {

  constructor(props) {
    super(props);
    this.state={
      dataSource:[],
      page:1,//当前页
      reset:true,//是否加载分页第一页
      loading:true,//是否显示加载中状态
      size:10,
      total:0,
      failLoad:true,
      goods_id:this.props.navigation.state.params.goods_id
    }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      getCommentList(`good_id=${_state.goods_id}&page=${_state.page}`,_this.getListResult,_this.failFuc)       
    });
  }
  getListResult(result){
    if(result.item_list.length){
            if(_state.reset){
                _this.setState({
                    dataSource:result.item_list,
                    total: Number(result.count),
                    page: Number(result.page),
                    footLoad: false,
                    reset: false,
                    loading:false,
                    refreshing:false,
                    size:Number(result.page_count)||10
                });
            }else{
                _this.setState({
                    dataSource:_state.dataSource.concat(result.item_list),
                    total: Number(result.count),
                    refreshing:false,
                    page: Number(result.page),
                    footLoad: false,
                    loading:false,
                    size:Number(result.page_count)||10
                });
            }
    }else{
        _this.setState({
          loading:false,
          total: 0,
          page: 1,
          reset: false,
          refreshing:false
        })
    }
  }
  FailFuc(){
    _this.setState({
      loading:false,
      failLoad:false
    })
  }
  render() {
    _this = this;
    _state=this.state;
    _navigator = this.props.navigation;
    let NavigatorTopBarProps={
      visible:true,
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/cancel2.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      title:"全部评价"
    };
   
    return (
      <View style={styles.main}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
          <FlatList
              contentContainerStyle={{paddingVertical:15*scale,width:width,paddingHorizontal: 20*scale,backgroundColor: "#FFFFFF"}}
              ref={ ref => this.flatList1 = ref }
              data={ _state.dataSource }
              extraData={_state.dataSource}
              keyExtractor={(item, index) => index+"i"}
              renderItem={ this._renderItem }
              ListHeaderComponent={ this._renderHeader }
              ListFooterComponent={ this._renderFooter }
              ItemSeparatorComponent={ this._SeparatorComponent }
          />
      </View>
    );
  }
  _renderItem({item,index}){
    let {headimg,user_name,content,add_time,goods_attr}=item
    return(
        <View style={styles.Box}>
          <View style={styles.personBox}>
            <View style={styles.personImgBox}>
              <Image source={{uri:headimg}} style={styles.personImg}/>          
            </View>
            <Text style={text.hei10}>{user_name}</Text>
          </View>
            <Text style={text.hei10}>{content}</Text>
            <View style={[styles.personBox,{marginTop:20*scale}]}>
              <Text style={text.shenhui10}>{date1str(add_time,"yyyy年MM月dd日")} &nbsp; &nbsp; </Text>
              <Text style={text.shenhui10}>{goods_attr}</Text>
            </View>
          </View>  
    )
  }
};
