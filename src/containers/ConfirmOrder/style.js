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
    backgroundColor: "#FFFFFF" 
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
  footerB:{
    backgroundColor: color.write,
    // position: "absolute",
    // bottom:0,
    width:width,
    height: 88*scale,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderTopWidth:1
  },
  submitBtn:{
    marginLeft: 20*scale,
    width:174*scale,
    height: 46*scale,
    backgroundColor: color.bluebg,
    alignItems: "center",
    justifyContent: "center"
  },
  input:{
    flex:1,
    padding: 0,
    fontSize:15,
    paddingLeft: 30*scale,
    justifyContent: "center",
  },
});

export default styles