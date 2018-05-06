'use strict';
import React, { Component, } from 'react';
import { StyleSheet, View, Image,Text } from 'react-native';
import color from '../../constant/color';
import { width, height,scale } from '../../components/common/Dimensions'
export default class SmallCir extends Component {
  render() {
    return (
        this.props.num?
        <View style={{width:30*scale,height:30*scale,backgroundColor:"#c8c8c8",borderRadius:15*scale,alignItems:"center",justifyContent:"center"}}>
               <Text style={{fontSize:10,color:color.write}}>{this.props.num}</Text>
        </View>
        :
        <View style={{width:30*scale,height:30*scale,backgroundColor:"#d8e3f2",borderRadius:15*scale,alignItems:"center",justifyContent:"center"}}>
             <Image style={{width: 24*scale, height: 24*scale}} source={require('../../images/selected.png')}/>
        </View>
    );
  }
};

