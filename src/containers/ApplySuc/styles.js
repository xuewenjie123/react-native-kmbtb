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
    backgroundColor: color.main,
  },
  inputBox:{
    width:width-40*scale,
    flexDirection: "row",
    height: 98*scale,
    borderColor: "#ddd",
    borderBottomWidth:1,
    paddingBottom: 30*scale,
    alignItems:"flex-end",
  },
  input:{
    flex:1,
    padding: 0,
    paddingLeft:30*scale,
    fontSize:15,
    justifyContent: "center",
    color:'#999999',
  },
  label:{
    borderBottomWidth:1,
    borderColor:"#ddd",
    height:100*scale,
    justifyContent:"space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textA:{
    fontSize: 10,
    color:"#1d1d1d",
    marginBottom: 10*scale
  }
});

module.exports = styles
