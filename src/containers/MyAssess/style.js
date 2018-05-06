'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import { width, height,scale } from '../../components/common/Dimensions'
import color from '../../constant/color'
const styles = StyleSheet.create({
  main: {
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:color.main,
   },
   projectInfo:{
    width:width,
    paddingHorizontal: 20*scale,
    backgroundColor: "#FFFFFF"
   },
   titlebar:{
    flexDirection: "row",
    width:width,
    height:90*scale
   },
   centerView:{
     width:350*scale,
     height: 90*scale,
     alignItems: "center",
     flexDirection: "row",
     justifyContent: "center"
   },

   textbox:{
     width:width-40*scale,
     marginBottom: 20*scale,
      flexDirection: "row",
      alignItems: "center"
  },
  interval:{
    width:width,
    height: 70*scale,
    justifyContent: "center",
    paddingHorizontal: 20*scale,
  },
  start:{
    width:40*scale,
    height: 40*scale,
  },
  selectFooter:{
    width:width,
    height: 126*scale,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom:0
  },
  selectBtn:{
    width:410*scale,
    borderRadius: 5*scale,
    height: 66*scale,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.bluebg
  },
  eval:{
    padding:20*scale,
    borderWidth:1,
    borderColor:color.qianhui,
    textAlignVertical:"top",
    height:200*scale
  }
});

export default styles