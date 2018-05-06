'use strict';
import React, { Component, } from 'react';
import {StyleSheet, ListView,View, TouchableOpacity,Image,Text,Modal,FlatList} from 'react-native';
import Constants from '../../constant/constants'
import text from '../../constant/text'
import { width, height } from '../../components/common/Dimensions';
var _navigator,_state,_this,_props;
export default class AddressModal extends Component {
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
          areaText:"请选择",
          placeShow:true,
          cityShow:false,
          areaShow:false,
          placeMenu:true,
          cityMenu:false,
          areaMenu:false,
          area:[],
          countyId:this.props.countyId
        };
     }
     componentWillReceiveProps(newProps){
       if(newProps.cityId !== _state.cityId&&newProps.countyId==""){
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
        return false
      }
      


       if(newProps.countyId !== _state.countyId){
          Constants.regionoptions.forEach((element,i)=> {
            if(element.value==this.props.provinceId){
              _this.setState({
                list_a_key:i,
                placeText:element.lable,
              })
              element.children.forEach((item,j)=> {
                if(item.value==this.props.cityId){
                  _this.setState({
                    list_b_key:j,
                    cityText:item.lable,
                  })
                }
                item.children.forEach((list,k) => {
                  if(list.value==this.props.countyId){
                    _this.setState({
                      list_c_key:k,
                      areaText:list.lable,
                    })
                  }
                })
              })
          }
        });
 
        // if(_this.fl3){
        //   _this.timer=setTimeout(()=>{
        //     _this.fl1.scrollToIndex({viewPosition:0,index:_state.list_a_key})
        //     _this.fl2.scrollToIndex({viewPosition:0,index:_state.list_b_key})
        //     _this.fl3.scrollToIndex({viewPosition:0,index:_state.list_c_key})
        //   },1500)
        // }
       
       }
     }

    componentWillUnmount(){
      this.timer&&clearTimeout(this.timer)
    }
     selectPlace(id,content){
       _this.setState({
         cityShow:true,
         placeShow:false,
         areaShow:false,
         cityMenu:true,
         areaMenu:false,
         areaText:"请选择",
         placeText:content.lable,
         list_b_key:'',
         list_a_key: id,
         city:content.children,
         dataSource:Constants.regionoptions,
       })
      //  console.log(Constants.regionoptions[id])
     }

     selectTwo(id,content){
       _this.setState({
         placeShow:false,
         cityText:content.lable,
         list_b_key: id,
         list_c_key:'',
         city:_state.city
       })
     
       if(content.children){
        // console.log(content.children)
         _this.setState({
          cityShow:false,
          areaShow:true,
          areaMenu:true,
          area:content.children
         })
       }else{
        //  console.log("---")
        _this.setState({
          areaShow:false,
          areaMenu:false,
         })
         var proval=_state.dataSource[_state.list_a_key].value;
         var cityval=_state.city[id].value;
         var counval=""
         var place=_state.placeText+content.lable;
         _props.getPalceSelect(place,proval,cityval,counval,_state.placeText,content.lable,"")
       }
     }
     selectThree(id,content){
      //  console.log()
       _this.setState({
         list_c_key: id,
         areaText:content.lable,
         area:_state.area,
       })
       var proval=_state.dataSource[_state.list_a_key].value;
       var cityval=_state.city[_state.list_b_key].value;
       var counval=_state.area[id].value;
       var place=_state.placeText+_state.cityText+content.lable;
       _props.getPalceSelect(place,proval,cityval,counval,_state.placeText,_state.cityText,content.lable)
     }
     _renderRowOne({item,index}){
       return(
           <TouchableOpacity style={styles.labels} key={index} onPress={()=>_this.selectPlace(index,item)}>
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
     _renderRowThree({item,index}){
       return(
           <TouchableOpacity style={styles.labels} key={index} onPress={()=>_this.selectThree(index,item)}>
                <Text style={_state.list_c_key == index?text.lan15:text.hei15} numberOfLines={1}>{item.lable}</Text>
           </TouchableOpacity>
       )
     }
     changeStateOne(){
       _this.setState({
         areaShow:false,
         cityShow:false,
         placeShow:true,
       })
     }
     changeStateTwo(){
       _this.setState({
         areaShow:false,
         cityShow:true,
         placeShow:false,
         areaText:"请选择",
       })
     }
     changeStateThree(){
       _this.setState({
         areaShow:true,
         cityShow:false,
         placeShow:false,
         areaText:"请选择",
       })
       if(_state.city[_state.list_b_key].children){
         _this.setState({
            area:_state.city[_state.list_b_key].children
         })
       }
     }

     render(){
       _this=this;
       _state=this.state;
       _props=this.props;
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
                        <Text style={_state.placeShow?text.lan15:text.hei15} numberOfLines={1}>{_state.placeText}</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                  {_state.cityMenu?
                    <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-start"}} onPress={()=>_this.changeStateTwo()}>
                        <View style={_state.cityShow?{height:50,justifyContent:"center",borderColor:'#5986ff',borderBottomWidth:2,}:{height:50,justifyContent:"center",}}>
                          <Text style={_state.cityShow?text.lan15:text.hei15} numberOfLines={1}>{_state.cityText}</Text>
                        </View>
                     </TouchableOpacity>
                    :null}
                </View>
                <View style={{flex:1}}>
                  {
                    _state.areaMenu?<TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-start"}} onPress={()=>_this.changeStateThree()}>
                       <View style={_state.areaShow?{borderColor:'#5986ff',borderBottomWidth:2,height:50,justifyContent:"center"}:{height:50,justifyContent:"center",}}>
                         <Text style={_state.areaShow?text.lan15:text.hei15} numberOfLines={1}>{_state.areaText}</Text>
                        </View>
                     </TouchableOpacity>
                    :null
                  }
                </View>




             </View>

            <View style={{height:200,}}>
              <View style={styles.containerBox}>
              {
                _state.placeShow?
                <FlatList
                ref={ref1=>_this.fl1=ref1}
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
                    ref={ref2=>_this.fl2=ref2}
                    style={{width:width}}
                    data={ _state.city }
                    contentContainerStyle={styles.container}
                    extraData={ this.state }
                    keyExtractor={ (item, index) => index}
                    renderItem={this._renderRowTwo}
                />
                 :null
               }
               {
                 _state.areaShow?

                 <FlatList
                 ref={ref3=>_this.fl3=ref3}
                 style={{width:width}}
                 data={_state.area}
                 contentContainerStyle={styles.container}
                 extraData={ this.state }
                 keyExtractor={ (item, index) => index}
                 renderItem={this._renderRowThree}
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
       backgroundColor:"#fff"
     },
     containerBox:{
       alignItems:"flex-start",
       flex:1,
     },

   });
