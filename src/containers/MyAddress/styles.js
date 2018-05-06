'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import { width, height,scale } from '../../components/common/Dimensions'
import color from '../../constant/color'
const styles = StyleSheet.create({
  main: {
     position:'relative',
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:'#f7f8fc',
   },
   itemStyle:{
    width:width-40*scale,
    flexDirection: "row",
    height: 125*scale,
    alignItems: "center",
    justifyContent: "space-between"
   },
   selectedImg:{
    width:24*scale,
    height: 24*scale,
   },
   noSelectImg:{
    width:24*scale,
    height: 24*scale,
    borderRadius: 12*scale,
    borderColor: "#dddddd",
    borderWidth:1
   },
   itemR:{
    height: 125*scale,
    flex:1,
    justifyContent:"center"
   },
   itemRT:{
     width:width-40*scale,
     justifyContent: "space-between",
     flexDirection: "row"
   },
   itemF:{
    flexDirection: "row",
   },
   addBtn:{
     width:width,
     height: 90*scale,
     backgroundColor: color.bluebg,
     alignItems: "center",
     justifyContent: "center",
    //  borderRadius: 10*scale
   },
});

export default styles
