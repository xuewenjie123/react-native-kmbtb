'use strict';
import React, { Component, } from 'react';
import {StyleSheet, ListView,View, TouchableOpacity,Image,Text,Modal,FlatList} from 'react-native';
import Constants from '../../constant/constants'
import text from '../../constant/text'
import { width, height,scale } from '../common/Dimensions';
var _navigator,_state,_this,_props;
export default class CompanyAddress1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataSource:Constants.regionoptions,
          list_a_key:'',
          list_b_key:'',
          list_c_key:'',
          city:[],
          placeText:"请选择",
          cityText:"请选择",
          placeShow:true,
          cityShow:false,
          placeMenu:true,
          cityMenu:false,
        };
     }
     componentWillReceiveProps(newProps){
       if(newProps.cityId !== _state.cityId){
          Constants.regionoptions.forEach((element,i )=> {
            if(element.value==this.props.provinceId){
              _this.setState({
                list_a_key:i,
                placeText:element.lable,
              })
              element.children.forEach((item,j) => {
                if(item.value==this.props.cityId){
                  _this.setState({
                    list_b_key:j,
                    cityText:item.lable,
                  })
                }
              })
            }
          });
       }
     }

     selectPlace(id,content){
       _this.setState({
         cityShow:true,
         placeShow:false,
         cityMenu:true,
         placeText:content.lable,
         list_b_key:'',
         list_a_key: id,
         city:content.children,
         dataSource:Constants.regionoptions,
       })
     }

     selectTwo(id,content){
        _this.setState({
          list_b_key: id,
        })
      var proval=_state.dataSource[_state.list_a_key].value;
      var cityval=_state.city[id].value;
      // var place=_state.placeText+content.lable;
      var place = content.lable
      _props.getPalceSelect(place,proval,cityval,_state.placeText,content.lable)
     }
    
     _renderRowOne({item,index}){
       return(
           <TouchableOpacity style={styles.labels} key={index+"one"} onPress={()=>_this.selectPlace(index,item)}>
                <Text style={_state.list_a_key == index?text.lan15:text.hei15}>{item.lable}</Text>
           </TouchableOpacity>
       )
     }
     _renderRowTwo({item,index}){
       return(
           <TouchableOpacity style={styles.labels} key={index} onPress={()=>_this.selectTwo(index,item)}>
                <Text style={_state.list_b_key == index?text.lan15:text.hei15} numberOfLines={1}>{item.lable}</Text>
           </TouchableOpacity>
       )
     }
  
     changeStateOne(){
       _this.setState({
         cityShow:false,
         placeShow:true,
       })
     }
     changeStateTwo(){
       _this.setState({
         cityShow:true,
         placeShow:false,
       })
     }


     render(){
       _this=this;
       _state=this.state;
       _props=this.props;
       _navigator=this.props.navigation;
       return(
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
           <View style={{flex:1,height:300,position:"absolute",bottom:0,backgroundColor:'#ffffff'}}>
               <View style={{height:50,width:width,flexDirection: 'row',alignItems: 'center',justifyContent:"space-between",borderBottomWidth:0.5,borderColor:"#ccc"}}>
                   <View style={{flex:1}}>
                   </View>
                   <View style={{flex:1,alignItems:"center",}}>
                     <Text style={{fontSize:20,color:"#222"}} numberOfLines={1}>所在地区</Text>
                   </View>
                   <TouchableOpacity style={{flex:1,alignItems:"flex-end",}} onPress={()=>{_props.closeModal()}}>
                     <Text style={{fontSize:30,color:"#ccc",marginRight:12}} numberOfLines={1}>×</Text>
                   </TouchableOpacity>
               </View>

             <View style={{height:50,width:width,paddingLeft:24,flexDirection: 'row',borderBottomWidth:0.5,borderColor:"#ddd"}}>
                  <View style={{flex:1}}>
                   <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-start"}} onPress={()=>_this.changeStateOne()}>
                      <View style={_state.placeShow?{height:50,justifyContent:"center",borderColor:'#5986ff',borderBottomWidth:2,}:{height:50,justifyContent:"center",}}>
                        <Text style={_state.placeShow?{fontSize:15,color:'#5986ff'}:text.hei15} numberOfLines={1}>{_state.placeText}</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                  {_state.cityMenu?
                    <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-start"}} onPress={()=>_this.changeStateTwo()}>
                        <View style={_state.cityShow?{height:50,justifyContent:"center",borderColor:'#5986ff',borderBottomWidth:2,}:{height:50,justifyContent:"center",}}>
                          <Text style={_state.cityShow?{fontSize:15,color:'#5986ff'}:text.hei15} numberOfLines={1}>{_state.cityText}</Text>
                        </View>
                     </TouchableOpacity>
                    :null}
                </View>
          
             </View>

            <View style={{height:200,}}>
              <View style={styles.containerBox}>
              {
                _state.placeShow?
                <FlatList
                style={{width:width}}
                data={ this.state.dataSource }
                contentContainerStyle={styles.container}
                extraData={ this.state }
                keyExtractor={ (item, index) => index}
                renderItem={this._renderRowOne}
            />
                :
                null
              }

               {
                 _state.cityShow?
                 <FlatList
                    style={{width:width}}
                    data={ _state.city }
                    contentContainerStyle={styles.container}
                    extraData={ this.state }
                    keyExtractor={ (item, index) => index}
                    renderItem={this._renderRowTwo}
                />
                 :null
               }
             

                      </View>
                    </View>
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
     labels:{
       height:40,
       justifyContent:"center",
       flex:1,
       alignItems:"flex-start"
     },
     container:{
       paddingLeft:24,
     },
     containerBox:{
       alignItems:"flex-start",
       flex:1,
     },

   });
