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
  itemstyle:{
    width:width,
    paddingHorizontal: 20*scale,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 204*scale,
    backgroundColor: "#FFFFFF"
  },
  itemImg:{
    width:230*scale,
    height: 140*scale,
    marginRight: 20*scale
  },
  itemInfo:{
    width:width-290*scale,
    height: 140*scale,
    justifyContent:"space-between"
  },
  textbox:{
    flexDirection: "row",
    alignItems: "center"
  },
  personBox:{
    width:width,
    paddingHorizontal: 20*scale,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 152*scale,
    backgroundColor: "#FFFFFF"
  },
  perLeft:{
      flex:1,
      justifyContent:"center",
      alignItems:"flex-start"
  },
  perRight:{
    flex:1,
    justifyContent:"center",
    alignItems:"flex-end"
  },
  telBtn:{
    width:150*scale,
    height:48*scale,
    backgroundColor:color.bluebg,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5*scale
  }
});

export default styles