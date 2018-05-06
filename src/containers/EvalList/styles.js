'use strict';
import { StyleSheet, } from 'react-native';
import { width, height,scale } from '../../components/common/Dimensions';
import color from '../../constant/color';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    width:width,
    height:height,
    backgroundColor: color.write,
  },
  Box:{
    width:width,
    paddingHorizontal:20*scale,
    backgroundColor:color.write,
  },
  personBox:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:20*scale,
    width:width,
    height: 70*scale
  },
  personImgBox:{
    width:70*scale,
    height:70*scale,
    marginRight:20*scale
  },
  personImg:{
    width:70*scale,
    height:70*scale,
  },
});

module.exports = styles
