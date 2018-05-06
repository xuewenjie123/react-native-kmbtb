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
   banner:{
    width:width,
    height: 270*scale
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
    width:10*scale,
    height:7*scale
  }, 
  modalWeight:{
    width:width,
    paddingHorizontal: 20*scale,
    backgroundColor: "#fff",
    height: 220*scale,
    paddingBottom: 20*scale
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
    marginRight: 20*scale
  },
  itemInfo:{
    flex:1,
    height: 186*scale,
    justifyContent: "space-around"
  },
  textbox:{
    flexDirection: "row",
    alignItems: "center"
  },
  seriesbox:{
    borderRadius:2*scale,
    height:20*scale,
    backgroundColor: "#ff6600",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10*scale
  },
  optBtn:{
    flex:1,
    justifyContent: "center"
  },
  activetext:{
      fontSize: 12,
      color:"red"
  },
  generaltext:{
    fontSize: 12,
    color:color.font1
  }
});

export default styles