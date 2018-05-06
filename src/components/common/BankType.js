'use strict';
import React, { Component, } from 'react';
import {StyleSheet,TextInput,View,TouchableOpacity,Image,Text,Modal,FlatList} from 'react-native';
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import Constants from '../../constant/constants'
import Dimensions from 'Dimensions';
import { scale } from './Dimensions';
let { width, height } = Dimensions.get('window');
var _navigator,_state,_this,_props;
export default class BankType extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataSource:[],
          bankList:[],
          selectIndex:0
        };
     }

    componentDidMount(){
      _this.setState({
        dataSource:this.props.bankList,
        bankList:this.props.bankList
      })
    }
    componentWillReceiveProps(newProps){
      if(_state.bankList!=newProps.bankList){
        _this.setState({
          dataSource:newProps.bankList,
          bankList:newProps.bankList
        })
      }
    }
    _renderHeader(){
      return (
         <View style={styles.header_bar}>
             <View style={{flex:1}}>
             </View>
             <View style={{flex:1,alignItems:"center",}}>
               <Text style={{fontSize:20,color:"#222"}} numberOfLines={1}>选择银行</Text>
             </View>
             <TouchableOpacity style={{flex:1,alignItems:"flex-end",paddingRight:20*scale}} onPress={()=>{_props.closeModal()}}>
                <Image source={require('../../images/rightClose.png')} style={{width:36*scale,height:36*scale}}/>
             </TouchableOpacity>
         </View>
       )
     }
     
     confim(item,index){
      _this.setState({
        selectIndex:index,
        itemContent:item.bankName,
        dataSource:this.props.bankList
      })
        _this.props.confirm(item)
     }
     _renderRow({item,index}){
       return (
         <TouchableOpacity style={styles.info_a1} key={index} onPress={() => {_this.confim(item,index)}}>
            <Text style={_state.selectIndex==index?text.lan12:text.hei12}>{item.bankName}</Text>
         </TouchableOpacity>
       )
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
           style={{alignItems:"center"}}
           onRequestClose={() => {_props.closeModal()}}
           >
             <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000", opacity: .7}}>
               <TouchableOpacity style={{flex:1}} onPress={() => {_props.closeModal()}}>
               </TouchableOpacity>
             </View>
             <View style={{width:width,height:500*scale,backgroundColor:"#fff",alignItems:"center",position:"absolute",bottom:0,left:0}}>
               {_this._renderHeader()}
              <FlatList
                data={ this.state.dataSource }
                contentContainerStyle={styles.contentViewStyle}
                extraData={ this.state }
                keyExtractor={ (item, index) => index}
                renderItem={this._renderRow}
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
