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
     backgroundColor:color.write,
     position: "relative"
   },
   topBox:{
      width:width,
      height:405*scale,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:color.write
   },
   sucImg:{
      width:240*scale,
      height:240*scale
   },
   tbBox:{
      width:width,
      paddingHorizontal:20*scale,
      alignItems:"center",
      flexDirection:"row",
      height:66*scale,
      justifyContent:"flex-end"
   },
   interBox:{
    width:width,
    paddingHorizontal:20*scale,
    justifyContent:"center",
    backgroundColor:color.main,
    height:70*scale
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
     width:50*scale,
     height:50*scale,
     marginRight:20*scale
   }
});

export default styles