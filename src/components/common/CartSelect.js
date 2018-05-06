'use strict';
import React, { Component, } from 'react';
import {StyleSheet,View, TouchableOpacity,Image,Text,Modal, ScrollView} from 'react-native';
import { width, height,scale } from '../common/Dimensions';
import color from '../../constant/color.js';
import text from '../../constant/text.js';
var _navigator,_state,_this,_props;
export default class CartSelect extends Component {
  constructor(props) {
      super(props);
      this.state = {
        records:[],//规格属性的list
        price:"",
        goods_attr_number:false,
        goods_attr_thumb:"",
        shopInfo:{},
        showNum:1
      };
   }


    componentWillReceiveProps(newProps){
      _this.attrIds=newProps.attrIds
        if(_state.shopInfo!==newProps.shopInfo){
          _this.setState({
            records:newProps.records,
            shopInfo:newProps.shopInfo
          })
        }
         
    }
    //选中之后重新请求 
    _select(id,index,i,item){
      item.selectIndex=index
      _this.setState({
        records:_state.records
      })
      _this.attrIds.splice(i,1,id)
      _props._selectShop(_this.attrIds);
      //向父级传递数据获取对应商品属性
    } 
    //减购买数量
    delList(){
      _state.showNum--
      _this.setState({
        showNum:_state.showNum
      })
    }
    //加购买数量
    addList(){
      // _state.records[_state.selectIndex].showNum++;
      _state.showNum++
      _this.setState({
        showNum:_state.showNum
      })
    }
      
render(){
  _this=this;
  _state=this.state;
  _props=this.props;
  _navigator=this.props.navigation;
  let {result,goods_attr_number,goods_attr_thumb,goods_attr}=_state.shopInfo
  return (
  <Modal
      animationType="fade"
      transparent={true}
      visible={_props.visible}
      onRequestClose={() => {_props.closeModal()}}
      >
      <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000", opacity: .3,}}>
        <TouchableOpacity style={{flex:1}} onPress={() => {_props.closeModal()}}>
        </TouchableOpacity>
      </View>

          
    <View style={styles.bundBox}>
        <View style={styles.topBox}>
            <Image source={{uri:goods_attr_thumb}} style={styles.shopImg}/>
            <View style={styles.infoBox}>
              <Text style={text.lan18}>￥{result}</Text>
              <Text style={text.shenhei10}>库存：{goods_attr_number}</Text>
              <Text style={text.shenhei10} numberOfLines={1}>{goods_attr?goods_attr.replace("&nbsp;","  "):null}</Text>
            </View>
            <TouchableOpacity style={styles.closeBox} onPress={()=>_props.closeModal()}>
              <Image source={require('../../images/rightClose.png')} style={styles.closeImg}/>
            </TouchableOpacity> 
        </View>
        <View style={{flex:1}}>
          <ScrollView contentContainerStyle={{width:width,alignItems: "center"}}>
          {_state.records.length?
              _state.records.map((it,i)=>(
                <View style={styles.specBigBox} key={i+"1111"}>
                  <View style={{width:width,height:60*scale,justifyContent:"center",paddingHorizontal:20*scale}}>
                    <Text style={text.hei12}>{it.name}</Text>
                  </View>
                  <View style={styles.specBox}>
                          {it.values.length?it.values.map((item,index)=>(
                              <TouchableOpacity
                                  key={index+"2222"}
                                  style={[styles.listBtn,index==it.selectIndex?{borderColor:color.bluebg,borderWidth:0.5}:{}]}
                                  underlayColor='transparent' 
                                  onPress={()=>{_this._select(item.id,index,i,it)}}
                                >
                              <Text numberOfLines={1} style={[text.shenhei12,index==it.selectIndex?{color:color.bluebg}:{}]}>{item.label}</Text>
                              </TouchableOpacity>
                          )):null}
                    </View>
                </View>
            ))
            :null}
               
              
              <View style={[styles.numberBox,_state.records.length?{borderTopWidth:0.5}:{}]}>
                <Text style={text.lan15}>购买数量</Text>
                <View style={styles.changeBox}>

                    {
                      _state.showNum==1?
                      <TouchableOpacity disabled style={{padding:10*scale}}>
                        <Image source={require('../../images/jian2.png')} style={styles.changeA}/>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity onPress={()=>_this.delList()} style={{padding:10*scale}}>
                          <Image source={require('../../images/jian1.png')} style={styles.changeA}/>
                      </TouchableOpacity>
                    }

                    <View style={styles.numBox}>
                      <Text style={text.hei15}>{_state.showNum}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>_this.addList()} style={{padding:10*scale}}>
                        <Image source={require('../../images/addS1.png')} style={styles.changeA}/>
                    </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          </View>
          <TouchableOpacity style={styles.footerBox} onPress={()=>{_props.confirm(_state.showNum,_this.attrIds)}}>
              <Text style={text.bai15}>确定</Text>
          </TouchableOpacity>  
        </View>
      </Modal>

        )
      }
    }


   const styles = StyleSheet.create({
     main: {
       flex: 1,
       backgroundColor: '#f7f8fc',
       flexDirection: 'column',
       alignItems:"center",
     },
     bundBox:{
      width:width,
      height:780*scale,
      alignItems:"center",
      position:"absolute",
      bottom:0,
      backgroundColor:'#fff',
     },
     topBox:{
        width:width-40*scale,
        flexDirection:"row",
        height:280*scale,
        alignItems:"center",
        justifyContent:"space-between",
        borderColor:color.qianhui,
        borderBottomWidth:0.5
     },
     infoBox:{
        flex:1,
        justifyContent:"flex-end",
        height:240*scale
     },
     specBigBox:{
       width:width,
       alignItems: "center"
     },
     closeBox:{
      height:240*scale,
      width:36*scale
     },
     closeImg:{
      width:36*scale,
      height:36*scale,
     },
     shopImg:{
       width:240*scale,
       height:240*scale,
       marginRight:20*scale
     },
     specBox:{
      justifyContent:'flex-start',
      width:width,
      flexWrap:"wrap",
      flexDirection:"row",
      paddingHorizontal:15*scale
    },
    listBtn:{
      marginBottom:10*scale,
      marginLeft:5*scale,
      marginRight:5*scale,
      borderColor:color.qianhui,
      borderWidth:0.5,
      justifyContent:"center",
      alignItems:"center",
      paddingHorizontal:30*scale,
      height:58*scale
    },
    numberBox:{
      marginTop:10*scale,
      flexDirection: "row",
      justifyContent: "space-between",
      width:width-40*scale,
      height: 80*scale,
      borderColor:color.qianhui,
      alignItems: "center"
    },
    changeBox:{
      alignItems: "center",
      height: 44*scale,
      width:180*scale,
      flexDirection: "row",
      justifyContent: "space-between",
     },
     changeA:{
      width:30*scale,
      height: 30*scale,
     },
     footerBox:{
       width:width,
       height:88*scale,
       alignItems: "center",
       justifyContent: "center",
       backgroundColor:color.bluebg
     },

   });
