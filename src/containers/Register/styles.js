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
  loginBtn:{
    marginTop:60*scale,
    marginBottom:38*scale,
    height:82*scale,
    alignItems:'center',
    justifyContent:'center',
    width:width-160*scale,
    borderRadius: 5*scale,
    backgroundColor:color.bluebg,
  },
  logoStyle:{
    marginTop: 50*scale,
    marginBottom: 20*scale,
    width:92*scale,
    height:92*scale
  },
  inputBox:{
    width:width-160*scale,
    flexDirection: "row",
    height: 106*scale,
    paddingTop:10*scale,
    borderColor: color.bluebg,
    borderBottomWidth:1,
    alignItems:"center",
  },
  input:{
    flex:1,
    padding: 0,
    fontSize:15,
    height: 90*scale,
    justifyContent: "center",
    color:'#999999',
  },
  hengxian:{
    width:148*scale,
    height: 1
  },
  threeIcon:{
    width:50*scale,
    height:50*scale,
  },
  textBox:{
    flexDirection: "row",
    alignItems: "center",
  },
  randStyle:{
    width:170*scale,
    height: 60*scale,
    borderRadius: 10*scale,
    backgroundColor: color.bluebg,
    alignItems: "center",
    justifyContent: "center"
  },
});

module.exports = styles
