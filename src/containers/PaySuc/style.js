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
   row:{
     width:width-40*scale,
     flexDirection:"row",
     height:50*scale,
     justifyContent:"space-around"
   }
});

export default styles