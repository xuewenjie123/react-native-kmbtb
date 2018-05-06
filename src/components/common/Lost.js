'use strict';
import React, { Component, } from 'react';
import { StyleSheet, View,Text,Image   } from 'react-native';
import Dimensions from 'Dimensions';
var { width, height } = Dimensions.get('window');
import color from '../../constant/color';
import text from '../../constant/text'
import { scale } from './Dimensions';
var _props;
export default class Lost extends Component {
  render() {
    _props=this.props;
    return (
        <View style={{flex:1,width:width,alignItems:"center",justifyContent:"center",backgroundColor:_props.backgroundColor||"#fff"}}>
            {_props.imgUrl?<Image source={_props.imgUrl} style={_props.imgStyle}/>:null}
            <Text style={[text.hui15,{marginTop:20*scale}]}>{_props.title}</Text>
        </View>
    )
  }
};

