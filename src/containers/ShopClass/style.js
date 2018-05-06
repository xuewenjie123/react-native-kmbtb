'use strict';
import { StyleSheet, Platform,StatusBar} from 'react-native';
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
    // height:88*scale,
    height:Platform.OS=="android"?88*scale:113*scale,
    paddingTop:Platform.OS=="android"?0:35*scale,
    backgroundColor: color.bluebg
   },
   input:{
    flex:1,
    height: 54*scale,
    borderRadius: 10*scale,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#36629f",
  },
  serachiconBox:{
   width:76*scale,
   height:54*scale,
   alignItems:"center",
   justifyContent:"center"
  },
  search_icon:{
   width:36*scale,
   height: 32*scale,
   opacity:0.4
  },
  textInput:{
    flex:1,
    padding: 0,
    backgroundColor:color.write
  },
  classLeft:{
    width:226*scale,
    height:height-StatusBar.currentHeight-88*scale,
    backgroundColor:color.write
  },
  leftItem:{
    width:226*scale,
    height:88*scale,
    alignItems:"center",
    justifyContent:"center"
  },
  itemheadImg:{
    width:width-260*scale,
    height:164*scale,
  },
  itemheadImgBox:{
    width:width-260*scale,
    height:164*scale,
    marginTop:10*scale
  },
  items:{
    marginTop:10*scale,
    width:148*scale,
    height:208*scale,
    marginLeft:5*scale,
    marginRight:5*scale
  },
  itemImg:{
    width:148*scale,
    height:148*scale,
  },

});

export default styles