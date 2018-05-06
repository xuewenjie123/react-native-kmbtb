'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import { width, height,scale } from '../../components/common/Dimensions'
import color from '../../constant/color'

const styles = StyleSheet.create({
  main: {
     flex: 1,
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:color.write,
   },
   posMsgBox:{
    width:300*scale,
    height:100*scale,
    backgroundColor: "transparent",
    position: "absolute",
    top:height/2-100*scale,
    left:width/2-150*scale,
    justifyContent: "center",
    alignItems: "center",
    zIndex:999,
  },
  posMsg2:{
    width:300*scale,
    height:100*scale,
    borderRadius: 20*scale,
    position: "absolute",
    zIndex:100,
    justifyContent: "center",
    alignItems: "center"
  },
  posMsg:{
    width:300*scale,
    height:100*scale,
    borderRadius: 20*scale,
    backgroundColor: "#000",
    position: "absolute",
    zIndex:100,
    opacity:0.8,
    justifyContent: "center",
    alignItems: "center"
  },
   itemStyle:{
      width:width,
      paddingHorizontal: 20*scale 
   },
   itemTop:{
      width:width-40*scale,
      flexDirection: "row",
      alignItems: "center",
      height: 60*scale,
      justifyContent: "space-between"
   },
   btnChange:{
    width:40*scale,
    height: 59*scale,
    justifyContent: "center"
   },
   selectIcon:{
    width:24*scale,
    height:24*scale,
   },
   noSelect:{
      width:24*scale,
      height:24*scale,
      borderRadius: 12*scale,
      borderWidth:1,
      borderColor: "#ddd"
   },
   itemBottom:{
    borderTopWidth:1,
    borderColor:"#ddd"
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
   dChange:{
    width:40*scale,
    height: 150*scale,
    justifyContent: "center",
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
      width:width-310*scale,
      height: 44*scale,
      alignItems: "center"
   },
   changeBox:{
    alignItems: "center",
    height: 44*scale,
    width:150*scale,
    flexDirection: "row",
    justifyContent: "space-between",
   },
   changeA:{
    width:30*scale,
    height: 30*scale,
   },
   numBox:{
    width:60*scale,
    height: 40*scale,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ddd",
    borderWidth:1,
   },
  interval:{
    width:width,
    alignItems:"center",
    justifyContent:"center",
    height:96*scale,
    backgroundColor: color.main
  },
  footer_btn:{
    width:width,
    borderColor:"#ddd",
    borderTopWidth:1,
    height:99*scale,
    backgroundColor:color.write,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingLeft:20*scale,
  },
  gorupf:{
    flexDirection:"row",
    alignItems:"center",
  },
  finsh_btn:{
    width:208*scale,
    height:99*scale,
    backgroundColor:color.bluebg,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:10,
  },
});

export default styles