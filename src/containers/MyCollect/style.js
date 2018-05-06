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
     backgroundColor:color.main,
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
   swiperItem:{
    width:140*scale,
    height: 206*scale,
    backgroundColor:color.bluebg,
    justifyContent: "center",
    alignItems: "center"
   },
  itemstyle:{
    width:width,
    paddingHorizontal: 20*scale,
    height: 206*scale,
    backgroundColor: color.write,
    flexDirection: "row",
    alignItems: "center"
  },
  itemImg:{
    width: 266*scale,
    height: 166*scale,
    marginRight: 20*scale
  },
  itemRight:{
    width: width-206*scale,
    height: 206*scale,
    justifyContent: "space-around"
  },
  itemstyleb:{
    width:width,
    paddingHorizontal: 20*scale,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 246*scale,
    backgroundColor: "#FFFFFF"
  },
  itemInfob:{
    width:340*scale,
    marginRight: 10*scale,
    height:246*scale,
    justifyContent: "center"
  },
  textboxb:{
    width:340*scale,
    marginBottom: 15*scale
  },
  itemRightb:{
    width:330*scale,
    height:246*scale,
    alignItems: "center",
    justifyContent: "center"
  },
  
});

export default styles