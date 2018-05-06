'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, } from 'react-native';
import { scale } from './Dimensions';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator,_state,_this,_props;
import color from '../../constant/color'
import text from '../../constant/text'
export default class ModalZtype extends Component {
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
            <View style={styles.box}>
              <TouchableOpacity style={styles.button_box} onPress={() => {_props.confirm("three")}}>
                <Text style={[styles.button,text.hei15]}>三证合一</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_box} onPress={() => {_props.confirm("five")}}>
                <Text style={[styles.button,text.hei15]}>企业五证</Text>
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

