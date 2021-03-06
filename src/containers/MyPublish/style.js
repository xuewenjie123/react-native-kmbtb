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
     position: "relative"
   },
   drawerBox:{
    flexDirection: "row",
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
  interLeft:{
    flexDirection: "row",
    alignItems: "center"
  },
  labelTextBox:{
    width:54*scale,
    height: 24*scale,
    alignItems: "center",
    justifyContent: "center",
    borderColor: color.bluebg,
    borderWidth:1,
    marginRight: 10*scale
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
  itemImg:{
    width:230*scale,
    height: 186*scale,
  },
  itemInfo:{
    flex:1,
  },
  stateBox:{
    width:80*scale,
    height:30*scale,
    borderWidth:1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5*scale
  },
  textbox:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20*scale
  },
  seriesbox:{
    width:36*scale,
    borderRadius:2*scale,
    height:20*scale,
    backgroundColor: "#ff6600",
    alignItems: "center",
    justifyContent: "center",
  },
  optBtn:{
    flex:1,
    justifyContent: "center"
  },
  itemRight:{
    width:150*scale,
    alignItems: "center",
    justifyContent: "center"
  },
  offerNum:{
    width:150*scale,
    height: 48*scale,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5*scale,
    backgroundColor: color.bluebg
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
});

export default styles