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
   selectBox:{
    width:width,
    paddingHorizontal:68*scale,
    flexDirection:"row",
    height: 70*scale,
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  ScrollView:{
    backgroundColor: "#FFFFFF",
    flexDirection:"row",
    height:70*scale
  },
  btnBox:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row"
  },
  titlebtnBox:{
    paddingHorizontal: 20*scale,
    height:70*scale,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row"
  },
   transBtn:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
   },
   activeBtn:{
      flex:1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF"
   },
   banner:{
    width:width,
    height: 270*scale
  },
  interval:{
    width:width,
    paddingHorizontal: 20*scale,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 74*scale,
    alignItems: "center"
  },
  itemstyle:{
    width:width,
    paddingHorizontal: 20*scale,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 246*scale,
    backgroundColor: "#FFFFFF"
  },
  itemInfo:{
    width:340*scale,
    marginRight: 10*scale,
    height:246*scale,
    justifyContent: "center"
  },
  textbox:{
    width:340*scale,
    marginBottom: 15*scale
  },
  itemRight:{
    width:330*scale,
    height:246*scale,
    alignItems: "center",
    justifyContent: "center"
  },
  seiconStyle:{
    width:10*scale,
    height:6*scale,
    marginLeft:10*scale
  },
  slide: {
    width:width,
    height:270*scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width:width,
    height:270*scale,
    overflow: "hidden",
  },
  item2:{ 
    width:width-40*scale,
    flexDirection:"row",
    height:140*scale
  },
  item2smallBox:{
    paddingLeft:10,
    alignItems:"center",
    justifyContent:"space-around",
    height:140*scale
  },
  item2Cb:{
    flexDirection:"row"
  },
});

export default styles