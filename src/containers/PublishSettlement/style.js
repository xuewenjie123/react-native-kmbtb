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
   },
   projectInfo:{
    width:width,
    paddingHorizontal: 20*scale,
    backgroundColor: "#FFFFFF"
   },
   titlebar:{
    flexDirection: "row",
    width:width,
    justifyContent: "center",
    height:90*scale,
    alignItems: "center"
   },
   centerView:{
     width:350*scale,
     height: 90*scale,
     alignItems: "center",
     flexDirection: "row",
     justifyContent: "center"
   },
   stateBox:{
     width:80*scale,
     height:30*scale,
     borderRadius: 4*scale,
     borderWidth:1,
     alignItems: "center",
     justifyContent: "center"
   },
   textbox:{
     width:width-40*scale,
     marginBottom: 20*scale,
      flexDirection: "row",
      alignItems: "center"
  },
  interval:{
    width:width,
    height: 70*scale,
    justifyContent: "center",
    paddingHorizontal: 20*scale,
  },
  itemstyle:{
    width:width-40*scale,
    backgroundColor: "#FFFFFF",
    borderColor: "#c8c8c8",
    borderWidth:1,
    borderBottomWidth:0,
  },
  itemLeft:{
    width:170*scale,
    height:40*scale,
    borderColor:"#c8c8c8",
    borderRightWidth:1,
    alignItems: "center",
    justifyContent: "center",
  },
  tableLabel:{
    width:width,
    height:40*scale,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    borderColor:"#c8c8c8",
    borderBottomWidth:1,
  },
  itemRight:{
    flex:1,
    borderColor:"#c8c8c8",
    borderRightWidth:1,
    height:40*scale,
    alignItems: "center",
    justifyContent: "center",
  },
  listHeader:{
    width:width-40*scale,
    height: 76*scale,
    justifyContent: "flex-end",
    paddingBottom: 20*scale
  },
  listFoot:{
    width:width,
    height:50*scale,
    paddingTop: 30*scale,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row"
  },
  footer_1:{
    width:width-40*scale,
    height:60*scale,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10*scale,
    alignItems: "center"
  },
  rowFooter:{
    marginBottom: 10*scale,
      flexDirection: "row",
  },
  itemstyle2:{
    width:width-40*scale,
    height: 100*scale,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  selectFooter:{
    width:width,
    height: 126*scale,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom:0
  },
  selectBtn:{
    width:170*scale,
    borderRadius: 5*scale,
    height: 45*scale,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3d74c0",
    marginLeft: 20*scale
  }
});

export default styles