'use strict';
import React, { Component, } from 'react';
import { Image,Animated,ScrollView,StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import { width, height,scale } from '../../components/common/Dimensions';
import {NavigationActions} from '../../components/common/navigation'
import styles from './styles'
var _navigator,_this,_state,_props;

import {getStorage,setStorage} from '../../constant/storage';
export default class ChargesDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
        Img:[require('../../images/bootPage1.png'),require('../../images/bootPage2.png'),require('../../images/bootPage3.png')],
        currentPage:0,
        opacity:0,
        bounceValue: new Animated.Value(0)
    }
  }

  componentDidMount(){
    Animated.timing(
        this.state.bounceValue, { toValue:1, duration: 300 }
    ).start();
  }

  _renderImg(){
      return (
        _state.Img.map((item,index)=>(
         <Image key={index} source={item} style={styles.backgroundImage}/>
        ))
    )
  }

  startRouter(){
   const resetAction = NavigationActions.reset({
       index:0,
       actions:[NavigationActions.navigate({ routeName: 'Home',params:{router:"首页"}})]
     })
     _navigator.dispatch(resetAction)
  }

  onAnimationEnd(e){
    var offsetX = e.nativeEvent.contentOffset.x;
    var currentPage = Math.round(offsetX/width);
    _this.setState({currentPage});
  }
  render() {
    const spin = this.state.bounceValue.interpolate({
        inputRange: [0, 1],
        outputRange: [width, 0]
    })
    _this = this;
    _state = this.state;
    _navigator = this.props.navigation;
    return (
        <Animated.View style={[styles.main,{transform:[{ translateX: spin }]}]}>
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                bounces={false}
                pagingEnabled={true}
                onMomentumScrollEnd={this.onAnimationEnd}
                horizontal={true}>
                {this._renderImg()}
            </ScrollView>
            {
                _state.currentPage==2?
                <TouchableOpacity underlayColor='transparent' style={styles.buttonBox} onPress={()=>_this.startRouter()}>
                </TouchableOpacity>
                :null
            }
          
        </Animated.View>

    );
  }

};
