'use strict';
import React, { Component, } from 'react';
import { StatusBar,StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { width, height, scale } from '../../components/common/Dimensions'
import color from '../../constant/color';

export default class NavigatorTopBar extends Component {
  render() {
    var _props = this.props;
    var MsgProps = {
      navigator:_props.navigator
    }
    return (_props.visible)?(
      <View style={styles.bar}>
            <View style={styles.leftbar}>
              {_props.leftView?_props.leftView:null}
            </View>
            {_props.centerView?_props.centerView:
                <View style={styles.titlebar}>
                    <Text style={styles.title}>
                        {_props.title?_props.title:null}
                      </Text>
                </View>
            }
            <View style={styles.rightbar}>
              {_props.rightView?_props.rightView:(
               null
              )}
            </View>
          </View>
        ):(
          <View style={styles.nobar}>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  nobar: {
    flex: 0,
  },
  bar: {
    width: width,
    height: Platform.OS=="android"?44:44+35*scale,
    paddingTop:Platform.OS=="android"?0:35*scale,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: color.bluebg,
  },
  leftbar: {
    height: 44,
    flex: 1,
  },
  titlebar: {
    height: 44,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 18,
    color: color.write,
    textAlign: 'center',
  },
  rightbar: {
    height: 44,
    flex: 1,
  },
});
