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
  textlogin:{
    fontSize:15,
    color:color.write
  },
  logoStyle:{
    marginTop: 100*scale,
    marginBottom: 20*scale,
    width:92*scale,
    height:92*scale
  },
  inputBox:{
    width:width-160*scale,
    flexDirection: "row",
    height: 106*scale,
    borderColor: color.bluebg,
    borderBottomWidth:1,
    paddingTop: 15*scale,
    alignItems:"center",
  },
  input:{
    flex:1,
    padding: 0,
    fontSize:15,
    height: 91*scale,
    justifyContent: "center",
    color:'#999999',
  },
  textBox:{
    width:width-160*scale,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  hengxian:{
    width:148*scale,
    height: 1
  },
  textBox2:{
    width:width-160*scale,
    marginTop: 50*scale,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 36*scale
  },
  threeIcon:{
    width:50*scale,
    height:50*scale,
  },
  textBox3:{
    flexDirection: "row",
    alignItems: "center",
  }
});

module.exports = styles
