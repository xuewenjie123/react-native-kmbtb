'use strict';
import { StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
import color from "../../constant/color"
import { width, height,scale } from '../../components/common/Dimensions';

const styles = StyleSheet.create({
    main:{
        width:width,
        height:height,
        position:"relative",
        alignItems:"center",
        justifyContent: "center"
    },
    contentContainer: {
        width: width*3,
        height: height,
    },
    backgroundImage: {
        width: width,
        height: height,
    },
    buttonBox:{
        width:width,
        height:500*scale,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:0,
    }
});

module.exports = styles
