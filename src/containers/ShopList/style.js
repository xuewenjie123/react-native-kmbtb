'use strict';
import { StyleSheet, Platform} from 'react-native';
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
   },
   selectBox:{
    width:width,
    flexDirection:"row",
    height: 70*scale,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#ddd",
    borderBottomWidth:1
  },
  btnBox:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row"
  },
  line:{
    width:1,
    height: 30*scale,
    justifyContent:"flex-end"
  },
  selectBtn:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  seicon:{
    width:24*scale,
    height:24*scale
  }, 
  itemstyle:{
    width:width,
    paddingHorizontal: 20*scale,
    height: 206*scale,
    backgroundColor: color.write,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImg:{
    width: 266*scale,
    height: 166*scale,
    marginRight: 20*scale
  },
  itemRight:{
    width: width-266*scale-60*scale,
    height: 206*scale,
    justifyContent: "center"
  },
});

export default styles