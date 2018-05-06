'use strict';
import { StyleSheet, StatusBar, AsyncStorage} from 'react-native';
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
   row:{
    width:width,
    backgroundColor:color.write,
    alignItems:"center",
    paddingBottom:10*scale
   },
   itemStyle:{
     width:width-40*scale,
    //  backgroundColor:color.write,
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"space-between"
   },
   showImg:{
     width:30*scale,
     height:30*scale
   },
  item_l:{
    width:50*scale,
    alignItems:"flex-start",
    justifyContent:"center"
   },
   item_r:{
      flex:1,
      
      // width:width-90*scale,
   },
   item_rt:{
    // width:width-90*scale,
    flexDirection:"row",
    height:70*scale,
    alignItems:"center",
    borderBottomWidth:1,
    borderColor:color.qianhui,
    justifyContent:"space-between"
   },
  item_rtl:{
     flexDirection:"row",
     alignItems:"center"
   },
   item_rb:{
      justifyContent:"space-around",
      flex:1,
   },
   noselect:{
     width:30*scale,
     height:30*scale,
     borderWidth:1,
     borderColor:color.qianhui,
     borderRadius:15*scale
   },
   redDot:{
    width:10*scale,
    height:10*scale,
    backgroundColor:color.red,
    borderRadius:5*scale,
    marginBottom:10*scale,
    marginLeft:5*scale
   },
   footer:{
     flexDirection:"row",
     justifyContent:"space-between",
     height:98*scale,
     borderTopWidth:1,
     borderColor:color.qianhui,
     width:width,
     alignItems:"center",
     paddingHorizontal:20*scale
   },
   btn:{
     height:98*scale,
     justifyContent:"center"
   }
  
});

export default styles