'use strict';
import React, { Component, } from 'react';
import {StyleSheet,View,TouchableOpacity,Image,Text,Modal} from 'react-native';
import color from '../../constant/color';
import {width,height,scale} from './Dimensions'
var _navigator,_state,_this,_props;

export default class ModalScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
     }


     render(){
       _this=this;
       _state=this.state;
       _props=this.props;
       _navigator=this.props._navigator;
       return(
         <Modal
           animationType="slide"
           transparent={true}
           visible={_props.visible}
           style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: "row"}}
           onRequestClose={() => {_props.closeModal()}}
           >
             <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000", opacity: .7,}}>
               <TouchableOpacity style={{flex:1}} onPress={() => {_props.closeModal()}}>
               </TouchableOpacity>
             </View>
              <View style={styles.main}>

              </View>
          </Modal>

       )
     }
   }
   const styles = StyleSheet.create({
     main: {
        width:width-200*scale,
       justifyContent: 'center',
       height: height,
       backgroundColor: "#FFFFFF",
       alignItems: 'center',
     },

   });