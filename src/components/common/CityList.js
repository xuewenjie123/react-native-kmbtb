'use strict';
import React, { Component, } from 'react';
import {StyleSheet,TextInput,View,TouchableOpacity,Image,Text,Modal,ListView} from 'react-native';
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import Constants from '../../constant/constants'
import Dimensions from 'Dimensions';
import { scale } from './Dimensions';
let { width, height } = Dimensions.get('window');
var _navigator,_state,_this,_props;

export default class CityList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
        this.state = {
          dataSource:ds.cloneWithRows(this.props.placeList),
          placeList:this.props.placeList,
          selectIndex:0
        };
     }
    componentWillReceiveProps(newProps){
        if(newProps.placeList!=_state.placeList){
          _this.setState({
            dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(newProps.placeList),
            placeList:newProps.placeList,
          })
        }
    }
    _renderHeader(){
      return (
         <View style={styles.header_bar}>
             <View style={{flex:1}}>
             </View>
             <View style={{flex:1,alignItems:"center",}}>
               <Text style={{fontSize:20,color:"#222"}} numberOfLines={1}>选择城市</Text>
             </View>
             <TouchableOpacity style={{flex:1,alignItems:"flex-end",paddingRight:20*scale}} onPress={()=>{_props.closeModal()}}>
                <Image source={require('../../images/rightClose.png')} style={{width:36*scale,height:36*scale}}/>
             </TouchableOpacity>
         </View>
       )
     }
     
     confim(rowContent,rowID){
      _this.setState({
        selectIndex:rowID,
        itemContent:rowContent.region_name,
        dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(this.props.placeList)
      })
        _this.props.confirm(rowContent.region_name)
     }
     _renderRow(rowContent,sectionID,rowID){
       return (
         <TouchableOpacity style={styles.info_a1} key={rowID} onPress={() => {_this.confim(rowContent,rowID)}}>
            <Text style={_state.selectIndex==rowID?text.lan12:text.hei12}>{rowContent.region_name}</Text>
         </TouchableOpacity>
       )
     }
     _selectList(rowID,region_name){
        _this.setState({
          selectIndex:rowID,
          itemContent:region_name,
          dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(this.props.placeList)
        })
     }

     render(){
       _this=this;
       _state=this.state;
       _props=this.props;
       _navigator=this.props._navigator;
       return(
         <Modal
           animationType="fade"
           transparent={true}
           visible={_props.visible}
           style={{alignItems:"center"}}
           onRequestClose={() => {_props.closeModal()}}
           >
             <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000", opacity: .7}}>
               <TouchableOpacity style={{flex:1}} onPress={() => {_props.closeModal()}}>
               </TouchableOpacity>
             </View>
             <View style={{width:width,height:500*scale,backgroundColor:"#fff",alignItems:"center",position:"absolute",bottom:0,left:0}}>
               {_this._renderHeader()}
               <ListView
               enableEmptySections={true}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(_this)}
                 initialListSize={10}
                 contentContainerStyle={styles.contentViewStyle}
               />
             </View>
          </Modal>

       )
     }
   }
   const styles = StyleSheet.create({
     main: {
       width:width,
       height:200,
       backgroundColor: color.mainBg2C,
       position:"absolute",
       bottom:0,
     },
   
     info_a1:{
       flex:1,
       height:50,
       paddingTop:10,
       paddingBottom:10,
       width:width,
       alignItems:"center"
     },
     header_bar:{
      height:50,
      width:width,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:"space-between",
      borderBottomWidth:0.5,
      borderColor:"#ccc",
      backgroundColor:color.write,
     },
     contentViewStyle:{
       width:width,
       alignItems:"center",
       backgroundColor:color.write,
     }
   });
