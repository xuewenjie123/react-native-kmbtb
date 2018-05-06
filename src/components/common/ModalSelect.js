'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, } from 'react-native';
import { scale } from './Dimensions';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator,_state,_this,_props;
import color from '../../constant/color';
import text from '../../constant/text'
export default class ModalSelect extends Component {
  constructor(props) {
   super(props);
  }
  render() {
    _this=this;
    _state=this.state;
    _props=this.props;
    _navigator=this.props._navigator;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={_props.visible}
        style={{alignItems:"center",justifyContent:"center",}}
        onRequestClose={() => {_props.closeModal()}}
        >
        <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000000", opacity: .3,}}>
          <TouchableOpacity style={{flex:1}} onPress={() => {_props.closeModal()}}>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
            <View style={styles.title}>
          {_props.title?<Text style={{fontSize:15,color:'#303030',marginTop:15,textAlign:'center',lineHeight:16}}>{_props.title}</Text>:null}    
              <Text style={{fontSize:15,color:'#1e1e1e',marginTop:50*scale,textAlign:'center'}}>{_props.content}</Text>
                <View style={styles.again}>
                    <TouchableOpacity style={styles.button_box} onPress={() => {_props.closeModal()}}>
                      <Text style={[styles.button,text.bai15]}>取消</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_box_a} onPress={() => {_props.confirm()}}>
                      <Text style={[styles.button,text.bai15]}>确定</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width:500*scale,
    height: 276*scale,
    backgroundColor: 'white',
    borderRadius : 10,
    position:'relative'
  },
  again: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  button:{
    textAlign:'center',
  },
  button_box:{
    width:180*scale,
    height:66*scale,
    backgroundColor: "#e6e6e6",
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10*scale
  },
  button_box_a:{
    width:180*scale,
    height:66*scale,
    backgroundColor:color.bluebg,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10*scale
  }
});

