'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, } from 'react-native';
import { scale } from './Dimensions';
import text from '../../constant/text'
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator,_state,_this,_props;
import color from '../../constant/color'
export default class ModalSelectType2 extends Component {
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
          <TouchableOpacity style={{flex:1}} onPress={() => _props.closeModal()}>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
            <View style={styles.box}>
              <TouchableOpacity style={styles.button_box} onPress={() => {_props.confirm("增值税普通发票",2)}}>
                <Text style={[styles.button,text.hei15]}>增值税普通发票</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button_box,{borderBottomWidth:0}]} onPress={() => {_props.confirm("增值税专用发票",1)}}>
                <Text style={[styles.button,text.hei15]}>增值税专用发票</Text>
              </TouchableOpacity>
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
  box: {
    width:500*scale,
    height: 200*scale,
    backgroundColor: '#fff',
  },
  button:{
    textAlign:'center',
  },
  button_box:{
    width:500*scale,
    height:100*scale,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    borderBottomWidth:0.5,
    borderColor: "#ddd"
  },
});

