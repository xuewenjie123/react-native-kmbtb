'use strict';
import React, { Component, } from 'react';
import { StyleSheet,Platform, View, Image, TouchableOpacity, Text,} from 'react-native';
import Swiper from 'react-native-swiper';
import color from '../../constant/color';
import Dimensions from 'Dimensions';
import { scale } from '../common/Dimensions';
var { width, height } = Dimensions.get('window');
var _navigator,_this,_state,_props;


class SwiperTwo extends Component {

  constructor(props) {
    super(props);
    this.state={
        titleList:[]
    }
  }
  componentDidMount(){
    _this.setState({
      titleList:this.props.titleList
    })
  }
  componentWillReceiveProps(newProps){
      if(newProps.titleList!=_state.titleList){
          _this.setState({
            titleList:newProps.titleList
          })
      }
  }
  onpushRouter(id){
   // _navigator.navigate('JournalismDetail',{archivesId:id})
  }
  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator=_this.props._navigator;
    let SwiperProps = {
      showsPagination: false,
      horizontal:false,
      loop: true,
      autoplay: true,
      showsHorizontalScrollIndicator: false,
      autoplayTimeout:3,
    }
    return (
      _state.titleList.length?
        <Swiper style={Platform.OS=="android"?styles.wraper:null} {...SwiperProps}>
          {_state.titleList.map((d,index)=>(
              <TouchableOpacity key={index} style={styles.slide}  underlayColor="transparent" 
                  onPress={()=>_navigator.navigate("InfomationDetail",{article_id:d.article_id})}
                >
                <Text style={styles.text1} numberOfLines={1} >"热"</Text>
                <Text style={styles.text} numberOfLines={1}>{d.title}</Text>
              </TouchableOpacity>
          ))}
        </Swiper>
        :null
    );
  }
};

const styles = StyleSheet.create({
  wraper:{
    width:width-300*scale,
    height: 60*scale,
  },
  slide: {
    width:Platform.OS=="ios"?width-390*scale:width-310*scale,
    height: 60*scale,
    flexDirection: "row",
    paddingLeft: 20*scale,
    alignItems: "center"
  },
  text1:{
    fontSize: 13,
    color:"red",
    fontWeight: "400",
    marginRight: 30*scale
  },
  text: {
    fontSize: 12,
    color: color.font1,
  },
});

export default SwiperTwo
