'use strict';
import React, { Component, } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, } from 'react-native';
import Swiper from 'react-native-swiper';
import color from '../../constant/color';
import { width, height,scale } from '../../components/common/Dimensions'
var _navigator,_this,_state,_props;


export default class SwiperBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  onpushRouter(id){
   // _navigator.navigate('JournalismDetail',{archivesId:id})
  }
  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator=_props._navigator;
    let SwiperProps = {
      showsPagination: true,
      autoplay: true,
      autoplayTimeout:10,
      loop:true,
      showsButtons:false,
      paginationStyle: {position: "absolute",bottom: 10*scale,height:10,width:width},
      dot: (
        <View style={{backgroundColor:'rgba(0,0,0,.3)', width: 22, height: 3, marginLeft: 4, marginRight: 4, marginTop: 3, marginBottom: 3,}} />
      ),
      activeDot: (
        <View style={{backgroundColor: color.bluebg, width: 22, height: 3, marginLeft: 4, marginRight: 4, marginTop: 3, marginBottom: 3,}} />
      ),
    }
    return (
        <Swiper {...SwiperProps}>
          {_props.imgList.map((d,index)=>(
            <TouchableOpacity key={index} style={styles.slide} onPress={()=>{_this.onpushRouter()}}>
              {d.url?<Image style={{width:width,height:270*scale,}} source={d.url} />:null}
            </TouchableOpacity>
          ))}
        </Swiper>
    );
  }

};

const styles = StyleSheet.create({
  slide: {
    width:width,
    height:270*scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width:width,
    height:270*scale,
    overflow: "hidden",
  },
});
