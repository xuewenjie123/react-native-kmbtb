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
  containerStyle:{
    backgroundColor: color.write,
    width:width,
    paddingHorizontal:20*scale,
    alignItems:"center"
  },
  interval:{
    height:70*scale,
    width:width,
    paddingHorizontal:20*scale,
    justifyContent:"center",
    backgroundColor:color.main
  },
  justify:{
    flexDirection:"row",
    flex:1,
    justifyContent:"space-between",
    alignItems:"center"
  },
  regicon:{
    width:14*scale,
    height:26*scale,
    marginLeft: 20*scale
  },
  label: {
    height: 98*scale,
    width:width-40*scale,
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'center',
  },
  inputBox:{
    width:width-40*scale,
    flexDirection: "row",
    height: 98*scale,
    borderColor: "#ddd",
    borderBottomWidth:1,
    // paddingBottom: 30*scale,
    alignItems:"center",
  },
  input:{
    flex:1,
    padding: 0,
    paddingLeft:30*scale,
    fontSize:15,
    justifyContent: "center",
    color:'#999999',
  },
  payBox:{
    width:width,
    flex:1,
    alignItems:"center"
 },
 payVal:{
   width:width-40*scale,
   height:110*scale,
   alignItems:"center",
   flexDirection:"row",
   borderColor:color.qianhui,
   borderBottomWidth:1
 },
 weImg:{
   width:60*scale,
   height:60*scale,
   marginRight:20*scale
 }
});

module.exports = styles
