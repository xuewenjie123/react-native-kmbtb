'use strict';
import React, { Component, } from 'react';
import {StyleSheet, ListView,View, TouchableOpacity,Image,Text,Modal,FlatList} from 'react-native';
import Constants from '../../constant/constants'
import text from '../../constant/text'
import { width, height,scale } from '../common/Dimensions';
var _navigator,_state,_this,_props;
import {getInformationTypeList} from '../../services/infomation'
export default class BuildClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
          classList:[],
          list_a_key:'',
          list_b_key:'',
          classTwoList:[],
          classoneShow:"请选择",
          classTwoShow:"请选择",
          classOneMenu:true,
          classTwoMenu:false,
        };
     }
     componentDidMount(){
      getInformationTypeList(``,_this.getInfomationTyperesult)
     }
      //获取分类接口回调
      getInfomationTyperesult(result){
        if(result.returnCode==200){
            _this.setState({
              classList:result.return_result
            })
        }
      }

     chooseOne(index,content){
       _this.setState({
         classOneMenu:false,
         classTwoMenu:true,
         classoneShow:content.top_cate,
         list_b_key:'',
         list_a_key: index,
         classTwoList:content.sec_list,
       })
     }

     selectTwo(index,content){
        _this.setState({
          list_b_key: index,
        })
      var classOneText=_state.classList[_state.list_a_key].top_cate;
      var classTwoText=content;
      _props.confirmSelectClass(classTwoText)
     }
    
     _renderRowOne({item,index}){
       return(
           <TouchableOpacity style={styles.labels} key={index+"one"} onPress={()=>_this.chooseOne(index,item)}>
                <Text style={_state.list_a_key == index?text.lan15:text.hei15}>{item.top_cate}</Text>
           </TouchableOpacity>
       )
     }
     _renderRowTwo({item,index}){
       return(
           <TouchableOpacity style={styles.labels} key={index} onPress={()=>_this.selectTwo(index,item)}>
                <Text style={_state.list_b_key == index?text.lan15:text.hei15} numberOfLines={1}>{item}</Text>
           </TouchableOpacity>
       )
     }
  
     changeStateOne(){

       _this.setState({
         classOneMenu:true,
         classTwoMenu:false,
       })
     }
     
     changeStateTwo(){
      //  _this.setState({
      //    classOneMenu:true,
      //    classTwoMenu:false,
      //  })
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
                     <Text style={{fontSize:20,color:"#222"}} numberOfLines={1}>建材分类</Text>
                   </View>
                   <TouchableOpacity style={{flex:1,alignItems:"flex-end",}} onPress={()=>{_props.closeModal()}}>
                     <Text style={{fontSize:30,color:"#ccc",marginRight:12}} numberOfLines={1}>×</Text>
                   </TouchableOpacity>
               </View>

             <View style={{height:50,width:width,paddingLeft:24,flexDirection: 'row',borderBottomWidth:0.5,borderColor:"#ddd"}}>
                  <View style={{flex:1}}>
                   <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-start"}} onPress={()=>_this.changeStateOne()}>
                      <View style={_state.classOneShow?{height:50,justifyContent:"center",borderColor:'#5986ff',borderBottomWidth:2,}:{height:50,justifyContent:"center",}}>
                        <Text style={_state.classOneShow?{fontSize:15,color:'#5986ff'}:text.hei15} numberOfLines={1}>{_state.classoneShow}</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1,marginLeft:20*scale}}>
                  {_state.classTwoMenu?
                    <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-start"}} onPress={()=>_this.changeStateTwo()}>
                        <View style={_state.classTwoList?{height:50,justifyContent:"center",borderColor:'#5986ff',borderBottomWidth:2,}:{height:50,justifyContent:"center",}}>
                          <Text style={_state.classTwoList?{fontSize:15,color:'#5986ff'}:text.hei15} numberOfLines={1}>{_state.classTwoShow}</Text>
                        </View>
                     </TouchableOpacity>
                    :null}
                </View>
          
             </View>

            <View style={{height:200,}}>
              <View style={styles.containerBox}>
              {
                _state.classOneMenu?
                <FlatList
                style={{width:width}}
                data={ this.state.classList }
                contentContainerStyle={styles.container}
                extraData={ this.state }
                keyExtractor={ (item, index) => index}
                renderItem={this._renderRowOne}
             />
                :
                null
              }

               {
                 _state.classTwoMenu?
                 <FlatList
                    style={{width:width}}
                    data={ _state.classTwoList }
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
