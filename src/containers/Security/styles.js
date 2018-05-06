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
    backgroundColor: color.write,
  },
  infoBox:{
    flexDirection: "row",
    borderColor: "#dcdcdc",
    borderBottomWidth:1,
    width: width-40*scale,
    height: 100*scale,
    justifyContent: "space-between",
    alignItems: "center"
  },
  nextImg:{
    marginLeft: 20*scale,
    width:14*scale,
    height: 26*scale
  },
  myInfo:{
    height: 100*scale,
    justifyContent:"space-around"
  },
})

module.exports = styles;
