import React, { Component } from 'react';
import { FlatList, View,TextInput,TouchableOpacity,Image,Text, ScrollView ,InteractionManager,Linking} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style';
import WebViewAutoHeight from '../../components/common/WebViewAutoHeight'
import color from '../../constant/color'
import text from '../../constant/text'
import {NavigationActions} from "../../components/common/navigation";
import {getLogisticsDetail} from '../../services/logisitic'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
import {toastShort} from '../../constant/toast'
var _this,_state,_navigator;
export default class Logistics extends Component {
  constructor(props){
        super(props)
        this.state={
          company_name:"",
          region_list:[],
          start_money:"",
          company_msg:"",
          fixed_line:"",
          tel:"",
          contact:"",
          companyLogo:"",
          logistics_id:this.props.navigation.state.params.logistics_id,
          loading:true,
          failLoad:true
        }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      //请求物流详情接口
      getLogisticsDetail(`logistics_id=${_state.logistics_id}`,_this.getDetailResult,_this.failFuc)
    });
  }
  //获取物流信息详情
  getDetailResult(result){
    if(result.returnCode==200){
      let {company_name,region_list,start_money,company_msg,fixed_line,tel,contact,company_logo}=result.logistics_info
      _this.setState({
        company_name,
        region_list,
        start_money,
        company_msg,
        fixed_line,
        tel,
        contact,
        companyLogo:company_logo,
        loading:false
      })
    }
  }

  //请求失败
  failFuc(){
    toastShort("服务器请求失败")
    _this.setState({loading:false,failLoad:false})
  }

  
  render() {
    _this=this;
    _navigator=this.props.navigation;
    _state=this.state;
    let NavigatorTopBarProps={
      visible:true,
      title:"物流详情",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
          </View>
        </TouchableOpacity>
      )
    };
    let {companyLogo,company_name,region_list,bearing,start_money,series,company_msg,fixed_line,tel,contact}=_state;
    return (
      <View style={styles.main}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        {
        company_name?
        <ScrollView>
          <View style={styles.itemstyle}>
            <Image source={{uri:companyLogo}} style={styles.itemImg}/>
            <View style={styles.itemInfo}>
                <View style={styles.textbox}>
                  <Text numberOfLines={1} style={text.hei15}>{company_name}</Text>
                </View>

                <View>
                  <View style={styles.textbox}>
                    <Text numberOfLines={1} style={text.qianhei12}>运输路线：</Text>
                    <Text numberOfLines={1} style={text.hei12}>{region_list.length?region_list.join("、"):null}</Text>
                  </View>
                  <View style={[styles.textbox,{marginTop:5*scale}]}>
                    <Text numberOfLines={1} style={text.qianhei12}>起送价：</Text>
                    <Text numberOfLines={1} style={text.hei12}>{start_money}</Text>
                  </View>
                </View>
            </View>
          </View>
          <View style={{height:10*scale,width:width}}></View>
          <View style={styles.personBox}>
            <View style={styles.perLeft}>
              <View style={styles.textbox}>
                <Text numberOfLines={1} style={text.qianhei12}>联系人：</Text>
                <Text numberOfLines={1} style={text.hei12}>{contact}</Text>
              </View>

              <View style={[styles.textbox,{marginTop:5*scale}]}>
                <Text numberOfLines={1} style={text.qianhei12}>固话：</Text>
                <Text numberOfLines={1} style={text.hei12}>{fixed_line}</Text>
              </View>

              <View style={[styles.textbox,{marginTop:5*scale}]}>
                <Text numberOfLines={1} style={text.qianhei12}>手机号码：</Text>
                <Text numberOfLines={1} style={text.hei12}>{tel}</Text>
              </View>
            </View>
            <View style={styles.perRight}>
                <TouchableOpacity style={styles.telBtn} onPress={()=>{Linking.openURL(`tel:${tel}`)}}>
                  <Text numberOfLines={1} style={text.bai12}>马上联系</Text>
                </TouchableOpacity>
            </View>
          </View>

          <View style={{height:10*scale,width:width}}></View>

          <View style={{width:width,paddingHorizontal:20*scale,backgroundColor:color.write,flex:1}}>

              <Text numberOfLines={1} style={[text.zuihei12,{fontWeight:"400",marginVertical:20*scale}]}>公司简介</Text>
              <WebViewAutoHeight
                    style={{ width: width}}
                    minHeight={180}
                    contentInset={{top: 0, right:0, bottom: 0, left:0}}
                    source={{html:`<!DOCTYPE html><html><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="initial-scale=1, minimal-ui," id="viewport"><body style="scroll:no;">${company_msg}</body></html>`
                  }}
              />
            </View>
          </ScrollView> :
          _state.loading?<Naviwait/>:
            <Lost title={_state.failLoad?"暂时还没有需求":"您的网络不给力哦~~~"}
              imgUrl={require('../../images/loadFail.gif')}
              imgStyle={{width:240*scale,height:240*scale}}    
            />
          }
      </View>
    )
  }
}



