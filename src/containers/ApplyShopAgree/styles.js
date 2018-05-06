'use strict';
import { StyleSheet, } from 'react-native';
import { width, height,scale } from '../../components/common/Dimensions';
import color from '../../constant/color';
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    width:width,
    height:height,
    backgroundColor: color.main,
  },
  inputBox:{
    width:width,
    paddingHorizontal: 60*scale,
    paddingTop:10*scale
  },
  noSelect:{
    width:24*scale,
    height: 24*scale,
    backgroundColor: "#FFFFFF",
    borderWidth:1,
    borderColor: color.bluebg,
    marginRight: 20*scale
  },
  selected:{
    width:24*scale,
    height: 24*scale,
    marginRight: 20*scale
  },
  nextBtn:{
    width:410*scale,
    height: 66*scale,
    backgroundColor: color.bluebg,
    borderRadius: 10*scale,
    alignItems: "center",
    justifyContent: "center"
  }
});

module.exports = styles
