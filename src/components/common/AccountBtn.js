'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { scale , width, height} from './Dimensions';
import text from '../../constant/text'
var _navigator,_state,_this,_props;
import color from '../../constant/color'
export default class AccountBtn extends Component{
    render(){
        return(
            <TouchableOpacity style={[styles.inputBox,this.props.style?this.props.style:{}]} onPress={this.props.onPress}>
              <Text style={text.hei15}>{this.props.title}</Text>
              <Image source={require('../../images/next_demand.png')} style={styles.nextImg}/>
            </TouchableOpacity>
        )
        
    }
}
const styles = StyleSheet.create({
    inputBox:{
        width:width-40*scale,
        flexDirection: "row",
        height: 98*scale,
        borderColor: "#ddd",
        borderBottomWidth:1,
        justifyContent: "space-between",
        alignItems:"center",
      },
      nextImg:{
        width:12*scale,
        height:26*scale,
      },
})