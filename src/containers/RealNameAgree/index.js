'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text'
import {NavigationActions} from '../../components/common/navigation'
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import SmallCir from '../../components/common/SmallCir'
import SmallLine from '../../components/common/SmallLine'
import {connect} from '../../components/common/connect';
import * as loginAction from '../../actions/loginAction'
var _navigator,_this,_state;
class RealNameAgree extends Component {

  constructor(props) {
    super(props);
    this.state={
      select:false
    }
  }
  componentDidMount(){
    _this.props.login({
      MySelfInfoKey:this.props.nav.routes[this.props.nav.routes.length-1].key
    })
  }

  render() {
    _this = this;
    _state=this.state;
    _navigator = this.props.navigation;
    let NavigatorTopBarProps={
      visible:true,
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      title:"实名认证",
    };

    return (
          <View style={styles.main}>
                <NavigatorTopBar {...NavigatorTopBarProps}/>
                <View style={{width:width-212*scale,height:30*scale,alignItems:"center",marginTop:30*scale,flexDirection:"row"}}>
                  <SmallCir />
                  <View style={{width:(width-302*scale)/2,height:8*scale,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                    <SmallLine/>
                    <SmallLine backgroundColor="#c8c8c8"/>
                  </View>
                  <SmallCir num={2}/>
                  <SmallLine width={(width-302*scale)/2} backgroundColor="#c8c8c8"/>
                  <SmallCir num={3}/>
                </View>
                <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
                  <Text style={styles.text2}>签订协议</Text>
                  <Text style={[styles.text2,{color:"#c8c8c8"}]}>基本信息</Text>
                  <Text style={[styles.text2,{color:"#c8c8c8"}]}>等待审核</Text>
                </View>
                <View style={{height:1,backgroundColor:"#c8c8c8",width:width}}></View>
                <ScrollView style={{flex:1}} contentContainerStyle={styles.inputBox}>
                
                <Text style={[text.hei10,{lineHeight:20}]}>欢迎光临百度文库，请您仔细阅读以下条款，如果您对本协议的任何条款表示异议，您可以选择不进入百度文库；进入百度文库则意味着您将同意遵守本协议下全部规定，并完全服从于百度文库的统一管理。</Text>
                <Text style={[text.hei10,{lineHeight:20}]}>第一章 总则</Text>
                <Text style={[text.hei10,{lineHeight:20}]}>第1条 “百度”、“百度文库”为百度公司注册商标，任何人未经百度公司许可不得以任何形式擅自使用。</Text>
                <Text style={[text.hei10,{lineHeight:20}]}>第2条 百度文库是百度公司为网友提供的信息存储空间，是供网友在线分享文档、视频、音频的开放平台</Text>
                <Text style={[text.hei10,{lineHeight:20}]}>第3条 百度文库所有权、经营权、管理权均属百度公司。</Text>
                <Text style={[text.hei10,{lineHeight:20}]}>第4条 本协议最终解释权归属百度公司。</Text>
                <Text style={[text.hei10,{lineHeight:20}]}>第二章 文库用户</Text>

                <Text style={[text.hei10,{lineHeight:20}]}>第5条 凡是注册用户和浏览用户均为百度文库用户（以下统称“用户”）。</Text>
                <Text style={[text.hei10,{lineHeight:20}]}>第6条 用户享有言论自由的权利。</Text>
                <Text style={[text.hei10,{lineHeight:20}]}>第7条 用户的言行不得违反《计算机信息网络国际联网安全保护管理办法》、《互联网信息服务管理办法》、《互联网电子公告服务管理规定》、《维护互联网安全的决定》、《互联网新闻信息服务管理规定》等相关法律规定，不得在百度文库发布、传播或以其它方式传送含有下列内容之一的信息： 1） 反对宪法所确定的基本原则的； 2） 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的； 3） 损害国家荣誉和利益的； 4） 煽动民族仇恨、民族歧视、破坏民族仇恨、民族歧视、破坏民族团结的； 5） 破坏国家宗教政策，宣扬邪教和封建迷信的； 6） 散布谣言，扰乱社会秩序，破坏社会稳定的； 7） 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的； 8） 侮辱或者诽谤他人，侵害他人合法权利的； 9） 煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的；10）以非法民间组织名义活动的；11)含有虚假、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、或其它道德上令人反感的内容； 12） 含有中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其它内容的。</Text>
              
          </ScrollView>
          <View style={{width:width,alignItems:"center",height:260*scale,paddingBottom:20*scale}}>
              <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",height:120*scale}}>
                <TouchableOpacity onPress={()=>this.setState({select:!_state.select})}>
                  {_state.select?<Image source={require('../../images/selected.png')} style={styles.selected}/>:<View style={styles.noSelect}></View>}
                </TouchableOpacity>
                <Text style={[text.hei10,{lineHeight:10}]}>阅读并同意此协议</Text>
              </View>
              <TouchableOpacity style={styles.nextBtn} onPress={()=>{_this.nextPage()}}>
                  <Text style={text.bai15}>下一步</Text>
              </TouchableOpacity>
          </View>
      </View>
      );
    }
  nextPage(){
    if(_state.select){
      _navigator.navigate("RealNameInfo")
    }else{
      Alert.alert("温馨提示","请先同意协议",[{text:"确定"}])
    }
  }
};
export default connect((state)=>({
  loginProps:state.loginReducer,
  nav:state.StackReducer
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(RealNameAgree)