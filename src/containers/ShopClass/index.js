import React, { Component } from 'react';
import {FlatList,RefreshControl,View,TextInput,TouchableOpacity,Image,Text,StatusBar,ScrollView,InteractionManager} from 'react-native';
import styles from './style';
import color from '../../constant/color'
import text from '../../constant/text'
import { width, height,scale } from '../../components/common/Dimensions'
import {date2str} from '../../constant/constants'
import {getClassInfo} from '../../services/shopServer'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {NavigationActions} from '../../components/common/navigation'
var _this,_state,_navigator;
let shopList=[
  {name:"南玻d",imgUrl:require('../../images/home_1.png'),id:1},
  {name:"南玻d",imgUrl:require('../../images/home_1.png'),id:1},
  {name:"南玻d",imgUrl:require('../../images/home_1.png'),id:1},
  {name:"南玻d",imgUrl:require('../../images/home_1.png'),id:1}
]

export default class ShopClass extends Component {
  constructor(props){
        super(props)
        this.state={
          order:"0",
          dataSource:[],
          dataClass:[],
          refreshing:false,
          selectIndex:0,
          loading:true,
          failLoad:true
        }
  }
 
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      //获取分类信息
      getClassInfo(``,_this.getInfoResult,_this.failFuc)
      // _this.setState({
      //   dataSource:shopList,
      //   dataClass:dataClass
      // })
    });
  }
  //获取分类信息结果
  getInfoResult(result){
      _this.setState({
        dataClass:result,
        loading:false
      })
  }
  //获取失败结果
  failFuc(){
    _this.setState({
      loading:false,
      failLoad:false
    })
  }

  render() {
    _this=this;
    _state=this.state;
    _navigator=this.props.navigation;
    return (
      <View style={styles.main}>
           <View style={styles.header}>
              <TouchableOpacity  onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
                  <Image style={{width: 44*scale, height: 44*scale,marginRight:25*scale}} source={require('../../images/back.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.input}  onPress={() => {_navigator.navigate("Search")}}>
                  <View style={styles.serachiconBox}>
                    <Image source={require('../../images/home_head_search.png')} style={styles.search_icon}/>
                  </View>
                  <View style={styles.textInput}></View>
              </TouchableOpacity>
          </View>
      {
        _state.dataClass.length?
        <View style={{flex:1,flexDirection:"row"}}>
        <View style={styles.classLeft}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ref={(ref)=>this.clasList = ref}
                extraData={[_state.dataClass,_state.selectIndex]}
                keyExtractor={(item, index) => index+"class1"}  
                data={_state.dataClass}
                renderItem={(item)=>this._renderClass(item)}
            />
        </View>

        <ScrollView style={{flex:1,backgroundColor:color.write,marginLeft:10*scale}}
          contentContainerStyle={{alignItems:"center"}}
          refreshControl={
              <RefreshControl
                refreshing={_state.refreshing}
                onRefresh={_this._renderRefresh}
                colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                title= {this.state.load? '刷新中....':'下拉刷新'}
              />
            }
        >

            {
              _state.dataClass.length?
              this._renderHeader(_state.dataClass[_state.selectIndex])
              :null
            }
            {
              _state.dataClass.length?
              <FlatList
                columnWrapperStyle={{width:width-236*scale,paddingHorizontal:5*scale}}
                numColumns={3}
                horizontal={false}
                ref={(flatList)=>this._flatList = flatList}
                extraData={this.state}
                keyExtractor={(item, index) => index}
                data={_state.dataClass[_state.selectIndex].cat_id}
                renderItem={(item)=>this._renderItem(item)}
                ItemSeparatorComponent={ this._renderItemSeparatorComponent }
            />
              :null
            }
          
        </ScrollView>
      </View>
        : _state.loading?<Naviwait/>:
        <Lost title={_state.failLoad?"暂时还没有需求":"您的网络不给力哦~~~"}
            imgUrl={require('../../images/loadFail.gif')}
            imgStyle={{width:240*scale,height:240*scale}}    
        />
      }
      </View>
    )
  }


  
  //点击当前分类
  selectClass(index,id){
      this.setState({
          selectIndex:index
      })
  }
  //分类列表渲染
  _renderClass({item,index}){
    let itemStyle=_state.selectIndex==index?{backgroundColor:"#9eb9df"}:{}
    let textStyle=_state.selectIndex==index?text.bai15:text.hei15
      return(
        <TouchableOpacity style={[styles.leftItem,itemStyle]} onPress={()=>_this.selectClass(index,item.id)}>
            <Text style={textStyle} numberOfLines={1}>{item.name}</Text>
        </TouchableOpacity>
      )
  }
  //商品分类列表头部
  _renderHeader(item){
    return (
      <View style={styles.itemheadImgBox}>
          <Image  resizeMode="contain" source={{uri:item.img}} style={styles.itemheadImg}/>
      </View>
    )
  }
  //商品分类列表
  _renderItem({item}){
    return (
      <TouchableOpacity style={styles.items} onPress={()=>_navigator.navigate("ShopList",{id:item.id})}>
        <View style={styles.itemImg}>
          <Image source={{uri:item.img}} style={styles.itemImg}/>
        </View>
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
          <Text style={text.hei12} numberOfLines={1}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

