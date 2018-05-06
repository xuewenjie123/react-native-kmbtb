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
      imgList:[]
    }
  }
  onpushRouter(id){
   // _navigator.navigate('JournalismDetail',{archivesId:id})
  }
  componentDidMount(){

    _this.setState({
      imgList:_this.props.imgList
    })
  }
  componentWillReceiveProps(newProps){
    // console.log(newProps)
      if(newProps.imgList!==_state.imgList){
          _this.setState({
            imgList:newProps.imgList
          })
      }
  } 
  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator=_props._navigator;
    let SwiperProps = {
      showsPagination: true,
      horizontal:true,
      autoplay: true,
      autoplayTimeout:5,
      loop:true,
      showsButtons:false,
      paginationStyle: {position: "absolute",bottom: _props.bottom?_props.bottom:60*scale,height:10,width:width},
      dot: (
        <View style={{backgroundColor:'rgba(0,0,0,.3)', width: 16*scale, height: 16*scale,borderRadius:8*scale, marginLeft: 4, marginRight: 4, marginTop: 3, marginBottom: 3,}} />
      ),
      activeDot: (
        <View style={{backgroundColor: color.bluebg,width: 16*scale, height: 16*scale,borderRadius:8*scale, marginLeft: 4, marginRight: 4, marginTop: 3, marginBottom: 3,}} />
      ),
    }
    // console.log("我事自组建")
    // console.log(_state.imgList)
    return (
        <Swiper {...SwiperProps}>
          {_state.imgList.map((d,index)=>(
            <TouchableOpacity activeOpacity={1} key={index} style={styles.slide} onPress={()=>{_this.onpushRouter()}}>
              {
                d.image?<Image style={{width:width,height:270*scale,}} source={{uri:d.image}} />
                :<Image style={{width:width,height:270*scale,}} source={{uri:d.ad_code}} />
              }
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
