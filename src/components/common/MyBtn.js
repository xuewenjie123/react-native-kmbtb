'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import text from '../../constant/text'
import { scale , width, height} from './Dimensions';
var _navigator,_state,_this,_props;
import color from '../../constant/color'
export default class MyBtn extends Component{
    render(){
        return(
            <TouchableOpacity style={[styles.infoBox,this.props.style?this.props.style:{}]} onPress={this.props.onPress}>
            
                <View style={styles.myInfo}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={text.hei15}>{this.props.title}<Text style={[text.hei15,{color:"#ff6600"}]}>{this.props.infoNum?" ("+this.props.infoNum+")":null}</Text></Text>
                        {this.props.showSpot?<View style={{width:10*scale,height:10*scale,borderRadius:5*scale,backgroundColor:"red",marginLeft:5*scale,marginBottom:10*scale}}></View>:null}
                    </View>
                    {
                       this.props.content?<Text style={text.shenhui10}>{this.props.content}</Text>:null
                    }
                </View> 
                <Image source={require('../../images/next_demand.png')} style={styles.nextImg}/>
            </TouchableOpacity>
        )
        
    }
}
const styles = StyleSheet.create({
    infoBox:{
        flexDirection: "row",
        borderColor: "#dcdcdc",
        borderBottomWidth:1,
        width: width-40*scale,
        height: 100*scale,
        justifyContent: "space-between",
        alignItems: "center",
      },
      myInfo:{
        height:100*scale,
        paddingVertical:5*scale,
        justifyContent:"space-around"
      },
      nextImg:{
        width:14*scale,
        height: 26*scale
      }
})