'use strict';
import React, { Component, } from 'react';
import { StyleSheet, View, Image,Text } from 'react-native';
import { scale } from './Dimensions';
import text from '../../constant/text'
class NavWait extends Component {
  render() {
    return (
      <View style={styles.bar}>
        <Image style={{width: 240*scale, height: 240*scale,margin:20}} source={require('../../images/loadWait.gif')} />
        <Text style={text.hei15}>
          {"  加载中..."}
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
    marginBottom:20,
  },
});

export default NavWait
