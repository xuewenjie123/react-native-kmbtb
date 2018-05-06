import React, { Component } from 'react';
import { View,TextInput,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,InteractionManager} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import {NavigationActions} from '../../components/common/navigation'
import styles from './style'
import color from '../../constant/color'
import text from '../../constant/text'
import {toastShort} from '../../constant/toast'
import {submitOrderComment} from '../../services/order'
var _this,_state,_navigator;
export default class MyOfferAssess extends Component {
  constructor(props){
        super(props)
        this.state={
          stars1:0,
          stars2:0,
          order_id:this.props.navigation.state.params.orderId,
          evalDetail:"",//评价内容
          goods_id:this.props.navigation.state.params.goods_id,
          select:false
        }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
    
    });
  }

  choose(i,type){
    if(type==1){
      _this.setState({stars1:i+1})
    }else{
      _this.setState({stars2:i+1})
    }
  }
  _getStartlist(start,type){
    var quan = Math.floor(start);
    var kong = 5-quan;
    var startList = [];
    if(quan>0){
        for(let i=0;i<quan;i++){
            startList.push(
            <TouchableOpacity style={{paddingRight:20*scale}} key={i} onPress={()=>_this.choose(i,type)}>
              <Image  style={styles.start} source={require('../../images/talk2.png')}/>
            </TouchableOpacity>)
        }
    }
    if (kong>0) {
        for(let i= 0; i< kong; i++){
          startList.push(
            <TouchableOpacity style={{paddingRight:20*scale}} key={quan+i} onPress={()=>_this.choose(i+quan,type)}>
              <Image  style={styles.start} source={require('../../images/talk1.png')}/>
            </TouchableOpacity>
          )
        }
      }
    return startList
  }
  //提交评价
  submitAssessResult(result){
    if(result.returnCode==200){
      toastShort("评价成功")
      const resetAction = NavigationActions.reset({
        index:1,
        actions:[
          NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
          NavigationActions.navigate({ routeName:'MyOrderList'})
        ]
      })
        _navigator.dispatch(resetAction)
    }else{
      toastShort(result.returnMsg)
    }
  }
  failFuc(){
    toastShort("网络请求失败，请检查您的网络")
  }
  submitAssess(){
    let isHide=_state.select?1:0
    let content=_state.evalDetail===""?"好评":_state.evalDetail
    submitOrderComment(`order_info_id=${_state.orderId}&content=${content}&comment_rank=${_state.stars1+_state.stars2}&goods_id=${_state.goods_id}&hide_username=${isHide}`,_this.submitAssessResult,_this.failFuc)
  }
  render() {
    _this=this;
    _navigator=this.props.navigation;
    _state=this.state;
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
      title:"评价"
    };
    return (
      <View style={styles.main}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
      
    
        <View style={{width:width,flex:1,backgroundColor:"#fff",padding:20*scale}}>
           <Text style={text.hei12}>货品相符度</Text>
           <View style={[styles.textbox,{marginVertical:20*scale}]}>
              {_this._getStartlist(_state.stars1,1)}
              <Text style={[text.hei12,{fontSize:10,marginLeft:20*scale}]}>比较符合</Text>
           </View>

           <Text style={text.hei12}>买家服务态度</Text>
           <View style={[styles.textbox,{marginVertical:20*scale}]}>
              {_this._getStartlist(_state.stars2,2)}
              <Text style={[text.hei12,{fontSize:10,marginLeft:20*scale}]}>比较符合</Text>
           </View>

           <Text style={[text.hei15,{marginBottom:10*scale}]}>评价</Text>
           <TextInput underlineColorAndroid="transparent" style={styles.eval}
                      onChangeText={(text) => _this.setState({evalDetail:text})} defaultValue={_this.state.evalDetail}
                      placeholder='请输入评价' placeholderTextColor='#dddddd' multiline={true}  maxLength={200}/>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginTop:10*scale,height:50*scale}}>
            <Text style={[text.hei12,{marginRight :10*scale}]}>匿名评价</Text>
              <TouchableOpacity onPress={()=>_this.tabSelect()} style={{justifyContent:"center",flex:1,height:50*scale}}>
                  {
                    _state.select?
                    <Image source={require('../../images/selected.png')} style={{width:24*scale,height:24*scale}}/>
                    :
                    <Image source={require('../../images/noSelect.png')} style={{width:24*scale,height:24*scale}}/>
                  }
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.selectFooter}>
                <TouchableOpacity style={styles.selectBtn} onPress={()=>_this.submitAssess()} >
                  <Text style={text.bai15}>提交评价</Text>
                </TouchableOpacity>
          </View>
      </View>
    )
  }
  tabSelect(){
    _this.setState({
      select:!_state.select
    })
  }
}



