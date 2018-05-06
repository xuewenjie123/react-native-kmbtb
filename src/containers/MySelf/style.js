'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import { width, height, scale } from '../../components/common/Dimensions'
import color from '../../constant/color'
const styles = StyleSheet.create({
  main: {
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:'#f7f8fc',
   },
  headerBox:{
    backgroundColor: "#FFFFFF",
    width:width,
    height: 344*scale,
    alignItems: "center",
    justifyContent: "center"
   },
   collectBoxSmall:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "row"
   },
  photoImg:{
    width: 122*scale,
    height: 122*scale,
    borderRadius: 61*scale,
    overflow:"hidden"
   },
  creditBox:{
    width: 158*scale,
    height: 36*scale,
    borderRadius: 4*scale,
    backgroundColor: "#ff6600",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10*scale
  },
  collectBox:{
    width: width,
    backgroundColor: "#FFFFFF",
    height: 108*scale,
    paddingHorizontal: 110*scale,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewBox:{
    backgroundColor: "#FFFFFF",
    width:width,
    alignItems: "center"
  },
  infoBox:{
    flexDirection: "row",
    borderColor: "#dcdcdc",
    borderBottomWidth:1,
    width: width-40*scale,
    height: 100*scale,
    justifyContent: "space-between",
    alignItems: "center",
  },
  myInfo:{
    height:100*scale,
    paddingVertical:5*scale,
    justifyContent:"space-around"
  },
  ShopInfo:{
    flexDirection: "row",
    alignItems: "center"
  },
  nextImg:{
    width:14*scale,
    height: 26*scale
  }
});

export default styles