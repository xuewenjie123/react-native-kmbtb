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
    paddingHorizontal: 20*scale,
    justifyContent:'flex-start',
    width:width,
    flexWrap:"wrap",
    flexDirection:"row"
  },
  label:{
    marginBottom:30*scale,
    marginRight:30*scale,
    borderColor:color.shenhui,
    borderWidth:1,
    borderRadius:6*scale,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal: 30*scale,
    height: 60*scale
  },
  inputBox: {
		width: width - 40 * scale,
		flexDirection: 'row',
		height: 98 * scale,
		justifyContent: 'space-between',
		alignItems: 'center'
  },
  nextImg: {
		width: 12 * scale,
		height: 26 * scale
  },
  Box:{
    width:width,
    paddingHorizontal: 20*scale,
    backgroundColor: color.write
  }
})

export default styles;
