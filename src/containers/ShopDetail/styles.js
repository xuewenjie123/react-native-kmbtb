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
  posMsgBox:{
    width:300*scale,
    height:100*scale,
    backgroundColor: "transparent",
    position: "absolute",
    top:height/2-100*scale,
    left:width/2-150*scale,
    justifyContent: "center",
    alignItems: "center",
    zIndex:999,
  },
  posMsg2:{
    width:300*scale,
    height:100*scale,
    borderRadius: 20*scale,
    position: "absolute",
    zIndex:100,
    justifyContent: "center",
    alignItems: "center"
  },
  posMsg:{
    width:300*scale,
    height:100*scale,
    borderRadius: 20*scale,
    backgroundColor: "#000",
    position: "absolute",
    zIndex:100,
    opacity:0.8,
    justifyContent: "center",
    alignItems: "center"
  },
  backView:{
    height:100*scale,
    width:width,
    backgroundColor: "transparent",
    position:"absolute",
    top:0,
    left:0,
    zIndex:1000,
  },
  backBtn:{
    width:200*scale,
    height:100*scale,
    paddingLeft: 20*scale,
    paddingTop:20*scale
  },
  shopDetailBox:{
    width:width,
    padding:20*scale,
    height:230*scale,
    justifyContent:"space-around",
    backgroundColor:color.write
  },
  textBox:{
    flexDirection:"row"
  },
  Box:{
    width:width,
    paddingHorizontal:20*scale,
    backgroundColor:color.write,
  },
  personBox:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:20*scale
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
  evalBtn:{
    width:190*scale,
    height:50*scale,
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1,
    borderRadius:5*scale,
    borderColor:color.bluebg
  },
  webViewHead:{
    width:width-40*scale,
    borderColor:color.qianhui,
    borderBottomWidth:1,
    flexDirection:"row",
    height:70*scale,
    alignItems:"center"
  },
  introBox:{
    flex:1,
    height:69*scale,
    alignItems:"center",
    justifyContent:"center",
    borderColor:color.bluebg
  },
  footerBox:{
      width:width,
      flexDirection:"row",
      alignItems:"center",
      height:100*scale,
      borderTopWidth:1,
      borderColor:color.qianhui
  },
  btnBox:{
    width:210*scale,
    height:100*scale,
    alignItems:"center",
    justifyContent:"center",
  },
  cleImg:{
      width:48*scale,
      height:48*scale,
      marginBottom:10*scale,
  },
  leftBox:{
    flex:1,
    height:100*scale,
    alignItems:"center",
    justifyContent:"space-around",
    backgroundColor:color.write
  }
})


export default styles;
