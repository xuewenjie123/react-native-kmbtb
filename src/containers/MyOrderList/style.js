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
    paddingHorizontal:20*scale,
    flexDirection:"row",
    height: 70*scale,
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  btnBox:{
    flex:1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
   projectInfo:{
    width:width,
    paddingHorizontal: 20*scale,
    backgroundColor: "#FFFFFF"
   },
   textbox:{
     width:width-40*scale,
      flexDirection: "row",
      alignItems: "center"
  },
  itemStyle:{
    width:width,
    paddingHorizontal: 20*scale,
    backgroundColor:color.write 
  },
  itemBottom:{
    borderTopWidth:1,
    borderColor:"#ddd"
  },
  itemTop:{
    width:width-40*scale,
    flexDirection: "row",
    alignItems: "center",
    height: 60*scale,
    justifyContent: "space-between"
 },
  listStyle:{
    height:190*scale,
    width:width-40*scale,
    flexDirection: "row",
    alignItems: "center"
  },
  listImg:{
    width:200*scale,
    height:150*scale
  },
  listRight:{
    width:width-280*scale,
    paddingLeft:20*scale,
    height: 150*scale,
    justifyContent: "space-between",
  },
  listRB:{
    flexDirection: "row",
    justifyContent: "space-between",
    width:width-260*scale,
    height: 44*scale,
    alignItems: "center"
  },
  actionBox:{
    flexDirection:"row",
    alignItems:"center",
    height:88*scale
  },
  actionBtn:{
    width:150*scale,
    height: 48*scale,
    backgroundColor: color.bluebg,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5*scale
  },
});

export default styles