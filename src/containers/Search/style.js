'use strict';
import { StyleSheet, Platform} from 'react-native';
import { width, height,scale } from '../../components/common/Dimensions';
import color from '../../constant/color';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    width:width,
    height:height,
    backgroundColor: color.back1C,
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
    height: 54*scale,
     flex:1,
     padding: 0,
     color:color.write
   },

  hisBox:{
    justifyContent:'flex-start',
    width:width,
    flexWrap:"wrap",
    flexDirection:"row"
  },
  similarBtn:{
    marginBottom:30*scale,
    marginLeft:19*scale,
    marginRight:19*scale,
    borderColor:color.shenhui,
    borderWidth:1,
    borderRadius:6*scale,
    justifyContent:"center",
    alignItems:"center",
    width:142*scale,
    height:58*scale
  },
  clearBtn:{
    width:width,
    height:100*scale,
    alignItems:"center",
    justifyContent:"center"
  }
})

export default styles;
