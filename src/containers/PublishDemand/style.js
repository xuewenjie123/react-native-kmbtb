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
   label: {
    height: 100*scale,
    width:width-40*scale,
    paddingHorizontal: 20*scale,
    borderBottomWidth:1,
    borderColor: '#d3d3d3',
    backgroundColor:color.write,
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'center',
  },
  textbox:{
    width:width-40*scale,
    flexDirection: "row",
    alignItems: "center"
  },
  regicon:{
    width:14*scale,
    height:26*scale
  },
  interval:{
    width:width-40*scale,
    paddingHorizontal: 20*scale,
    height: 74*scale,
    justifyContent: "center",
    backgroundColor:color.main
  },
  editBox:{
    flexDirection: "row",
    justifyContent: "space-between",
    width:160*scale
  },
});

export default styles