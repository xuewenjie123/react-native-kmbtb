'use strict';
import { StyleSheet, } from 'react-native';
import { width, height,scale } from '../../components/common/Dimensions'
import color from '../../constant/color';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: color.write,
    alignItems:"center"
  },
  textInput:{
    flex:1,
    color:'#666666',
    height: height-120,
    fontSize:15,
    textAlign:'left',
    margin:0,
    padding:0,
    textAlignVertical: 'top'
  },
  inputBox:{
    width:width-40*scale,
    height:448*scale,
    borderColor:color.qianhui,
    borderWidth:1,
    marginTop:20*scale
  }
});

module.exports = styles
