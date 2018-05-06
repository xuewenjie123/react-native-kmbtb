'use strict';
import React, { Component, } from 'react';
import { StyleSheet,Platform, Text, View, Image, ScrollView, TextInput,Alert, TouchableOpacity, Modal, } from 'react-native';
import { scale } from './Dimensions';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator,_state,_this,_props;
import color from '../../constant/color'
export default class ModalLogistics extends Component {
  constructor(props) {
   super(props);
   this.state={
    carCode:"",
    tel:""
   }
  }
  submit(){
    if(_state.carCode==""){
        Alert.alert(
          '温馨提示',
          "请输入物流车牌号",[
            {text: '确认', onPress: () =>{}},
          ]
        )
      
    }else if(_state.tel==""){
      Alert.alert(
        '温馨提示',
        "请输入司机联系方式",[
          {text: '确认', onPress: () =>{}},
        ]
      )
    }else{
      _props.confirm({tel:_state.tel,carCode:_state.carCode})
    }
  }
  telChange(tel){
    _this.setState({tel})
  }
  carCodeChange(carCode){
      _this.setState({carCode})
  }
  render() {
    _this=this;
    _state=this.state;
    _props=this.props;
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
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <View style={styles.main}>
              <Text style={{fontSize:15,color:'#1e1e1e',marginTop:30*scale,marginBottom:10*scale,textAlign:'center'}}>物流信息</Text>
              <View style={styles.inputBox}>
                <Text style={{fontSize:10,color:color.font1}}>物流车牌号</Text>
              </View>
             
              <TextInput maxLength={20}  underlineColorAndroid="transparent" style={styles.input} onChangeText={(text)=> _this.carCodeChange(text)} value={_this.state.carCode} />

              <View style={styles.inputBox}>
                <Text style={{fontSize:10,color:color.font1}}>司机联系方式</Text>
              </View>
             
              <TextInput maxLength={20}  underlineColorAndroid="transparent" style={styles.input} onChangeText={(text)=> _this.telChange(text)} value={_this.state.tel} />
                

                <View style={styles.again}>
                    <TouchableOpacity style={styles.button_box} onPress={() => {_props.closeModal()}}>
                      <Text style={styles.button}>取消</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_box_a} onPress={() => _this.submit()}>
                      <Text style={styles.button}>确定</Text>
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
    width:500*scale,
    height: 380*scale,
    backgroundColor: 'white',
    borderRadius : 10,paddingLeft:20*scale
  },
  input:{
    width:460*scale,
    height: 40*scale,
    borderWidth:0.5,
    padding: 0,
    fontSize:10,
    justifyContent: "center",
    color:'#999999',
  },
  inputBox:{
    width:460*scale,
    backgroundColor:color.write,
    marginBottom: 10*scale,
    marginTop:20*scale,
  },
  randStyle:{
    width:150*scale,
    height: 50*scale,
    borderRadius: 10*scale,
    backgroundColor: color.bluebg,
    alignItems: "center",
    justifyContent: "center"
  },
  again: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  button:{
    fontSize:15,
    color:'#fff',
    textAlign:'center',
  },
  button_box:{
    width:170*scale,
    height:66*scale,
    backgroundColor: "#e6e6e6",
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10*scale
  },
  button_box_a:{
    width:170*scale,
    height:66*scale,
    backgroundColor:color.bluebg,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10*scale
  }
});

