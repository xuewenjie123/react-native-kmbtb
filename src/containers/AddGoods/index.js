'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation'
import { width, height,scale } from '../../components/common/Dimensions';
import GoodsList from '../../components/common/GoodsList'
import {getGoodsList} from '../../services/demand'
import Lost from "../../components/common/Lost"; //丢失页面
import {toastShort} from '../../constant/toast'
import TextInputs from '../../components/common/TextInput'
import Naviwait from "../../components/common/NavWait";
var _navigator,_this,_state;
export default class AddGoods extends Component {
  constructor(props) {
    super(props);
    this.state={
      goodsName:"",
      goodsSpec:"",
      goodsPin:"",
      goodsDan:"",
      goodsNum:"",
      goodsId:"",
      goodsList:[],
      visible:false,
      number:"",
      remark:"",
      loading:true,
      failLoad:true
    }
  }
  componentDidMount(){
    if(this.props.navigation.state.params){
      let {goodsName,goodsSpec,goodsPin,goodsDan,goodsNum,remark,rowID}=this.props.navigation.state.params
        _this.setState({
          goodsName,
          goodsSpec,
          goodsPin,
          goodsDan,
          goodsNum,
          remark,
          number:rowID
        })
    }
    // getGoodsList("",_this.getGoodsListResult,_this.failFuc)
    // _this.setState({goodsList:[{good_name:"画卷",good_id:"1"},{good_name:"铁打",good_id:"1"},{good_name:"流水",good_id:"1"},{good_name:"计较",good_id:"1"}]})
  }

  getGoodsListResult(result){
    if(result.returnCode==200){
        _this.setState({
          goodsList:result.goods_list,
          loading:false
        })
    }else{
      _this.setState({
        loading:false,
        failLoad:false
      })
    }
  }
  failFuc(){
    _this.setState({failLoad:false})
    toastShort("网络似乎有点问题")
  }

  submitAction(){
      if(_state.goodsName==""){
        Alert.alert('温馨提示',"请填写货品名称",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.goodsSpec==""){
        Alert.alert('温馨提示',"请输入货品规格",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.goodsPin==""){
        Alert.alert('温馨提示',"请输入货品品牌",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.goodsDan==""){
        Alert.alert('温馨提示',"请输入货品单位",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.goodsNum==""){
        Alert.alert('温馨提示',"请输入货品数量",[{text: '确认', onPress: () =>{}},])
        return false;
      }else{
        let onoff=true;
        if(this.props.navigation.state.params){
          onoff=false
        }
        // console.log("我要触发了")
        _navigator.dispatch(NavigationActions.back());
       
        DeviceEventEmitter.emit("PublishDemandUIgoods",{onoff:onoff,number:_state.number,goodsInfo:{good_name:_state.goodsName,size:_state.goodsSpec,brand:_state.goodsPin,unit:_state.goodsDan,num:_state.goodsNum,remark:_state.remark}})
        
       
      }
  }

  // confirm(goods){
  //   _this.setState({
  //     goodsName:goods.good_name,
  //     goodsId:goods.good_id,
  //     visible:false
  //   })
  // }
  closeModal(){
    _this.setState({visible:false})
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
            <Image style={{width: 44*scale, height: 44*scale,marginRight:40*scale}} source={require('../../images/cancel2.png')}/>
          </View>
        </TouchableOpacity>
      ),
      title:"添加/修改货品",
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this.submitAction()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>确定</Text>
          </View>
        </TouchableOpacity>
      ),
    };
    // let GoodsListProps={
    //   visible:_state.visible,
    //   confirm:_this.confirm,
    //   closeModal:_this.closeModal,
    //   goodsList:_state.goodsList
    // }

    return (
      <View style={styles.main}>

       <NavigatorTopBar {...NavigatorTopBarProps}/>
       {/* {
         _state.goodsList.length? */}
         <ScrollView  keyboardShouldPersistTaps={'handled'}>
         {/* <TouchableOpacity style={styles.inputBox}
           disabled={_state.goodsList.length?false:true}
           onPress={()=>_this.setState({visible:true})}> 
           <Text style={text.hei15}>货品名称</Text>
           <View style={styles.input}>
             <Text style={text.shenhui15}>{_state.goodsName?_state.goodsName:"请选择"}</Text>
           </View>
           <Image source={require('../../images/next_demand.png')} style={styles.smallImg}/>
         </TouchableOpacity> */}
         <View style={styles.inputBox}>
             <Text style={text.hei15}>货品名称</Text> 
           <TextInputs  style={[styles.input,{fontSize:15}]} 
                     onChangeText={(text)=> _this.setState({goodsName:text})} value={_this.state.goodsName}
                     placeholder="请输入货品名称"/>
         </View>

         <View style={styles.inputBox}>
             <Text style={text.hei15}>货品规格</Text> 
           <TextInputs  style={[styles.input,{fontSize:15}]} 
                     onChangeText={(text)=> _this.setState({goodsSpec:text})} value={_this.state.goodsSpec}
                     placeholder="请输入货品规格"/>
         </View>

         <View style={styles.inputBox}>
             <Text style={text.hei15}>货品品牌</Text> 
           <TextInputs  style={[styles.input,{fontSize:15}]} 
                     onChangeText={(text)=> _this.setState({goodsPin:text})} value={_this.state.goodsPin}
                     placeholder="请输入货品品牌"/>
         </View>

         <View style={styles.inputBox}>
             <Text style={text.hei15}>货品单位</Text> 
           <TextInputs  style={[styles.input,{fontSize:15}]} 
                     onChangeText={(text)=> _this.setState({goodsDan:text})} value={_this.state.goodsDan}
                     placeholder="货品单位"/>
         </View>

         <View style={styles.inputBox}>
             <Text style={text.hei15}>货品数量</Text> 
           <TextInputs  style={[styles.input,{fontSize:15}]} 
                     onChangeText={(text)=> _this.setState({goodsNum:text})} value={_this.state.goodsNum}
                     placeholder="请输入货品数量"/>
         </View>

         <View style={styles.inputBox}>
             <Text style={text.hei15}>备注</Text> 
           <TextInputs  style={[styles.input,{fontSize:15}]} 
                     onChangeText={(text)=> _this.setState({remark:text})} value={_this.state.remark}
                     placeholder="填写备注"/>
         </View>

       {/* <TouchableOpacity onPress={()=>{}}>
           <Text style={[text.lan12,{textAlign:"center",marginTop:30*scale}]}>删除货品</Text>
       </TouchableOpacity> */}
   </ScrollView>
         {/* :
         _state.loading ? (
          <Naviwait />
        ) : (
          <Lost
            title={_state.failLoad ? "暂时还没有可以发布的货品，请耐心等待" : "您的网络不给力哦~~~"}
            imgUrl={require("../../images/loadFail.gif")}
            imgStyle={{ width: 240 * scale, height: 240 * scale }}
          />
        )
       } */}
       {/* <GoodsList {...GoodsListProps}/> */}
     
     
      </View>
    );
  }
 
};
