'use strict';
import { StyleSheet,Platform } from 'react-native';
import { width, height,scale } from '../../components/common/Dimensions'
import color from '../../constant/color'

const styles = StyleSheet.create({
  main: {
     flex: 1,
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:color.main,
   },
   header:{
    width:width,
    paddingHorizontal:20*scale,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    height:Platform.OS=="android"?88*scale:113*scale,
    paddingTop:Platform.OS=="android"?0:35*scale,
    backgroundColor: color.bluebg
   },
   header_icon:{
     width:36*scale,
     height:32*scale
   },
   input:{
     marginLeft:10*scale,
     marginRight: 10*scale,
     width:580*scale,
     height: 54*scale,
     borderRadius: 10*scale,
     alignItems: "center",
     justifyContent: "center",
     paddingLeft: 20*scale,
     flexDirection: "row",
     backgroundColor: "#36629f",
   },
   search_icon:{
    width:36*scale,
    height: 32*scale,
    opacity:0.4
   },
   textInput:{
     flex:1,
     padding: 0,
     paddingLeft: 5,
     color:color.write
   },
   banner:{
     width:width,
     height: 270*scale,
     position: "relative",
     zIndex:10000
   },
   imgPosBot:{
    width:width,
    height:44*scale,
    position:"absolute",
    bottom:0
   },
   sections:{
     width:width,
     alignItems: "center",
     backgroundColor:color.write
   },
   sectionHeader:{
     width:width,
     height:77*scale,
     flexDirection: "row",
     alignItems: "center",
     justifyContent:"center"
   },
   section_icon:{
     width:15*scale,
     height: 15*scale
   },
   section_iconBox:{
    width:25*scale,
    backgroundColor:color.bluebg,
    height:25*scale,
    borderRadius:5*scale,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:10*scale
  },
  sellList:{
    width:width,
    flexDirection: "row",
    flexWrap:"wrap",
    alignItems:"center",
    paddingHorizontal:20*scale,
    paddingTop:10*scale,
    paddingBottom:20*scale,
    backgroundColor:color.write
  },
  sellImgBox:{
    width:90*scale,
    height: 90*scale,
    marginBottom: 20*scale
  },
  sellImg:{
    width:90*scale,
    height: 90*scale,
  },
  sectBox:{
    alignItems: "center",
    width:(width-40*scale)/4,
    height:142*scale,
    marginBottom:30*scale,
    justifyContent:"center"
  },
  interval:{
    width:width,
    alignItems:"center",
    justifyContent:"center",
    height:96*scale,
  },
  inter_info:{
    width:width-40*scale,
    height:60*scale,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center",
    paddingHorizontal:40*scale,
    backgroundColor:color.write,
    borderRadius:30*scale
  },
  homeLine:{
    width:1,
    height:36*scale
  },
  advertImg:{
    width:width,
    height: 150*scale,
    marginBottom: 20*scale
  },
  askBox:{
    width:width,
    height: 356*scale,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ask_l:{
    width:width/2-5*scale,
    backgroundColor: "#FFFFFF",
    height:356*scale,
    alignItems: "center",
    justifyContent: "center"
  },
  askImg:{
    width:111*scale,
    height: 120*scale
  },
  askBtn:{
    marginTop: 46*scale,
    width:180*scale,
    height: 50*scale,
    backgroundColor: color.bluebg,
    borderRadius: 5*scale,
    alignItems: "center",
    justifyContent: "center"
  },
  classMore:{
    flex:1,
    // alignItems:"flex-end",
    justifyContent:"center",
    flexDirection:"row",
    alignItems:"center",
    paddingTop:5*scale
  },
  infoMationBox:{
    width:width-300*scale,
    height: 60*scale,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles