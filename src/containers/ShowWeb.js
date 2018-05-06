'use strict';
import React, { Component, } from 'react';
import { Image,ScrollView,Animated,StyleSheet,Text,View,TouchableOpacity,WebView,Linking} from 'react-native';
import { width, height,scale } from '../components/common/Dimensions';
import {NavigationActions} from '../components/common/navigation'
var _navigator,_this,_state,_props;
import NavigatorTopBar from '../components/common/NavigatorTopBar';
import {getStorage,setStorage} from '../constant/storage';

export default class ShowWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
        url:this.props.navigation.state.params.url||"",
        title:""
    }
}
  onShouldStartLoadWithRequest(event){
    if(event.url.startsWith('http://') || event.url.startsWith('https://')) {
        return true;
    }else{
        Linking.canOpenURL(event.url)
            .then(supported => {
                if(supported){
                  return Linking.openURL(url);
                }else{
                    return false;
                }
            }).catch(err => {
                return false;
        })
    }
  }
           
    onMessage(data){
        // console.log(data)
        _this.setState({
          title:data
        })
    }
  render() {
    _this = this;
    _state = this.state;
    _navigator = this.props.navigation;
    let NavigatorTopBarProps={
        visible:true,
        leftView: (
          <TouchableOpacity style={{flex: 1}}
            underlayColor='transparent'
            onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
            <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
              <Image style={{width: 44*scale, height: 44*scale,}} source={require('../images/back.png')}></Image>
            </View>
          </TouchableOpacity>
        ),
        title:_state.title
      };
    return (
        <View style={{flex:1}}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            <WebView
                ref={ref=>this.webview=ref} 
                // source={require('./1.html')}
                // injectedJavaScript={`window.postMessage(document.title);`}
                onMessage = {this.onMessage}
                source={{uri:_state.url,method: 'GET'}}
                scrollEnabled={true}                
                style={{height: height}}
                javaScriptEnabled={true}
                scalesPageToFit={true}
                onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                automaticallyAdjustContentInsets={true}
            />
        </View>
    );
  }

};
