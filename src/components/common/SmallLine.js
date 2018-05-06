'use strict';
import React, { Component, } from 'react';
import { StyleSheet, View, Image,Text } from 'react-native';
import color from '../../constant/color';
import { width, height,scale } from '../../components/common/Dimensions'
export default class SmallLine extends Component {
  render() {
    return (
        <View style={{height:8*scale,flex:1,backgroundColor:"#c8c8c8",justifyContent:"center"}}>
            <View style={{height:4*scale,backgroundColor:this.props.backgroundColor||color.bluebg,width:this.props.width}}></View>
        </View>
    );
  }
};

