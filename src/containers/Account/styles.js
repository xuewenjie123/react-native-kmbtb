'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import { width, height, scale } from '../../components/common/Dimensions'
import color from '../../constant/color'
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    width:width,
    height:height,
    backgroundColor: color.main,
  },
  infoBox:{
    backgroundColor:color.write,
    width:width,
    alignItems:'center'
  },
  inputBox:{
    width:width-40*scale,
    flexDirection: "row",
    height: 98*scale,
    borderColor: "#ddd",
    borderBottomWidth:1,
    justifyContent: "space-between",
    alignItems:"center",
  },
  creditBox:{
    width: 158*scale,
    height: 36*scale,
    borderRadius: 4*scale,
    backgroundColor: "#ff6600",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10*scale
  },
  input:{
    flex:1,
    padding: 0,
    paddingLeft:30*scale,
    fontSize:15,
    justifyContent: "center",
    color:color.qianhei,
  },
  headBox:{
    width:width,
    height:160*scale,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:20*scale,
    backgroundColor:color.write,
    marginBottom:30*scale
  },
  headImg:{
    width:100*scale,
    height:100*scale,
    borderRadius:50*scale,
    marginRight:20*scale
  },
  nextImg:{
    width:12*scale,
    height:26*scale,
  },
  imgBox:{
    flexDirection:"row",
    alignItems:"center",
    height:160*scale,
  },
  loginOut:{
    width:width-80*scale,
    height: 90*scale,
    backgroundColor: color.bluebg,
    borderRadius: 20*scale,
    alignItems: "center",
    justifyContent: "center",
    marginTop:40*scale
  }
})

module.exports = styles;
