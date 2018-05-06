'use strict';
import React, { Component, } from 'react';
import { StyleSheet, View, Image,Text,TouchableOpacity,FlatList } from 'react-native';
import color from '../../constant/color';
import text from '../../constant/text';
import { width, height,scale } from './Dimensions'
var _navigator;
export default class RenderShop extends Component {
  render() {
    _navigator = this.props.navigation
    return (
      this.props.shopList.length?
      <FlatList
        style={{flex:1}}
        contentContainerStyle={{width:width,alignItems:"center",backgroundColor: "#FFFFFF"}}
        ref={ ref => this.flatList = ref }
        data={ this.props.shopList }
        extraData={ this.state }
        keyExtractor={ (item, index) => index}
        renderItem={ this._renderShop }
        ItemSeparatorComponent={ this._renderItemSeparatorComponent }
    />:null
    )
  }
  _renderShop({item,i}){
    let oneBigBox=item[0]
    let oneBottom=[]
    let rightBox=[];
    let leftBox=[];
    let twoBigBox={};
    let twoBottom=[];

    if(item[2]){
      for(let j=1;j<3;j++){
        oneBottom.push(item[j])
      }
    }else{
      if(item[1]){
        oneBottom.push(item[1])
      }
    }

    if(item[8]){
      for(let j=3;j<9;j++){
        rightBox.push(item[j])
      }
    }else{
      if(item[3]){
        for(let j=3;j<item.length;j++){
          rightBox.push(item[j])
        }
      }
    }

      if(item[14]){
        for(let j=9;j<15;j++){
          leftBox.push(item[j])
        }
      }else{
        if(item[9]){
          for(let j=9;j<item.length;j++){
            leftBox.push(item[j])
          }
        }
      }

      if(item[15]){
        twoBigBox=item[15]
      }

      if(item[17]){
        for(let j=16;j<18;j++){
          twoBottom.push(item[j])
        }
      }else{
        if(item[16]){
          twoBottom.push(item[16])
        }
      }

   if(item.length){
    return (
      <View style={styles.shopListBox} key={i}>
       
        <View style={{width:width/2-6*scale,marginBottom:10*scale}}>
            {
              oneBigBox.goods_name?
                <TouchableOpacity style={styles.bigshop} onPress={()=>_navigator.navigate("ShopDetail",{goods_id:oneBigBox.goods_id})}>
                    <Image source={{uri:oneBigBox.goods_img}} style={styles.big_img}/>
                    <View style={styles.bigTextBox}>
                      <Text numberOfLines={1} style={text.hei13}>{oneBigBox.goods_name}</Text>
                      <Text numberOfLines={1} style={text.lan13}>¥{oneBigBox.shop_price}</Text>
                    </View>
                </TouchableOpacity>
              :null
            }
            {oneBottom.length?
            <View style={{width:width/2-6*scale,height:185*scale,flexDirection:"row",justifyContent:"space-between",marginTop:10*scale}}>
              {
                oneBottom.map((item1,i1)=>(
                  <TouchableOpacity style={styles.smallshop} key={i1+"ob"} onPress={()=>_navigator.navigate("ShopDetail",{goods_id:item1.goods_id})}>
                      <Image source={{uri:item1.goods_img}} style={styles.small_img}/>
                      <View style={styles.smallTextBox}>
                        <Text numberOfLines={1} style={text.hei11}>{item1.goods_name}</Text>
                        <Text numberOfLines={1} style={text.lan11}>¥{item1.shop_price}</Text>
                      </View>
                  </TouchableOpacity>
                ))
              } 
            </View>
              :null}
        </View>

         {
           rightBox.length?
            <View style={styles.pubicBox}>
                {
                  rightBox.map((item1,i1)=>(
                    <TouchableOpacity style={styles.smallshop} key={i1+"rb"} onPress={()=>_navigator.navigate("ShopDetail",{goods_id:item1.goods_id})}>
                        <Image source={{uri:item1.goods_img}} style={styles.small_img}/>
                        <View style={styles.smallTextBox}>
                          <Text numberOfLines={1} style={text.hei11}>{item1.goods_name}</Text>
                          <Text numberOfLines={1} style={text.lan11}>¥{item1.shop_price}</Text>
                        </View>
                    </TouchableOpacity>
                  ))
                } 
              </View>
           :null
         }

         {
           leftBox.length?
           <View style={styles.pubicBox}>
               {
                 leftBox.map((item1,i1)=>(
                   <TouchableOpacity style={styles.smallshop} key={i1+"lb"} onPress={()=>_navigator.navigate("ShopDetail",{goods_id:item1.goods_id})}>
                       <Image source={{uri:item1.goods_img}} style={styles.small_img}/>
                       <View style={styles.smallTextBox}>
                         <Text numberOfLines={1} style={text.hei11}>{item1.goods_name}</Text>
                         <Text numberOfLines={1} style={text.lan11}>¥{item1.shop_price}</Text>
                       </View>
                   </TouchableOpacity>
                 ))
               } 
             </View>
          :null
         }

         {
          twoBigBox.goods_name?
          <View style={{width:width/2-6*scale,marginBottom:10*scale}}>
              <TouchableOpacity style={styles.bigshop} onPress={()=>_navigator.navigate("ShopDetail",{goods_id:twoBigBox.goods_id})}>
                  <Image source={{uri:twoBigBox.goods_img}} style={styles.big_img}/>
                  <View style={styles.bigTextBox}>
                    <Text numberOfLines={1} style={text.hei13}>{twoBigBox.goods_name}</Text>
                    <Text numberOfLines={1} style={text.lan13}>¥{twoBigBox.shop_price}</Text>
                  </View>
              </TouchableOpacity>
              {twoBottom.length?
              <View style={{width:width/2-6*scale,height:185*scale,flexDirection:"row",justifyContent:"space-between",marginTop:10*scale}}>
                {
                  twoBottom.map((item1,i1)=>(
                    <TouchableOpacity style={styles.smallshop} key={i1+"tb"} onPress={()=>_navigator.navigate("ShopDetail",{goods_id:item1.goods_id})}>
                        <Image source={{uri:item1.goods_img}} style={styles.small_img}/>
                        <View style={styles.smallTextBox}>
                          <Text numberOfLines={1} style={text.hei11}>{item1.goods_name}</Text>
                          <Text numberOfLines={1} style={text.lan11}>¥{item1.shop_price}</Text>
                        </View>
                    </TouchableOpacity>
                  ))
                } 
              </View>
                :null}
          </View>
          :null
         }
      </View>
    )
   }
     
  }

};

const styles=StyleSheet.create({
    shopListBox:{
      width:width,
      flexDirection: "row",
      flexWrap:"wrap",
      backgroundColor:color.main,
      justifyContent: "space-between",
    },
    bigshop:{
      width:width/2-6*scale,
      height: 380*scale,
      backgroundColor: color.write,
      alignItems: "center",
      justifyContent: "center"
    },
    smallshop:{
      width:(width/2-10*scale)/2-4*scale,
      height: 185*scale,
      marginBottom: 10*scale,
      backgroundColor: color.write,
      alignItems: "center",
      justifyContent: "center"
    },
    
    bigTextBox:{
      width:width/2-5*scale,
      paddingLeft:20*scale,
      alignItems: "flex-start"
    },
    smallTextBox:{
      width:(width/2-10*scale)/2-4*scale,
      paddingLeft:10*scale,
      alignItems: "flex-start"
    },
    text5:{
      marginTop: 20*scale,
      color:color.font1,
      fontSize:13,
      fontWeight: "bold"
    },
    text6:{
      marginTop: 10*scale,
      color:color.bluebg,
      fontSize:13,
      fontWeight: "bold"
    },
    text7:{
      marginTop: 10*scale,
      color:color.font1,
      fontSize:11,
      fontWeight: "bold"
    },
    text8:{
      marginTop: 5*scale,
      color:color.bluebg,
      fontSize:11,
      fontWeight: "bold"
    },
    big_img:{
      width:250*scale,
      height: 250*scale
    },
    small_img:{
      width:154*scale,
      height: 100*scale
    },
    pubicBox:{
      width:width/2-6*scale,
      flexDirection:"row",
      justifyContent:"space-between",
      flexWrap:"wrap"
    }
  })
  
  