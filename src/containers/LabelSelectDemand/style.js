'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import { width, height,scale } from '../../components/common/Dimensions';
import color from '../../constant/color';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    width:width,
    height:height,
    backgroundColor: color.back1C,
  },
  limitBox:{
    width:width,
    paddingHorizontal: 20*scale,
    height:60*scale,
    justifyContent:"center"
  },
  labelBox:{
    justifyContent:'flex-start',
    width:width,
    flexWrap:"wrap",
    flexDirection:"row"
  },
  label:{
    marginBottom:30*scale,
    marginLeft:19*scale,
    marginRight:19*scale,
    borderColor:color.shenhui,
    borderWidth:1,
    borderRadius:6*scale,
    justifyContent:"center",
    alignItems:"center",
    width:142*scale,
    height:58*scale
  },
 
})

export default styles;
