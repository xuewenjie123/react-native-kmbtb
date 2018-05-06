import React, { Component } from 'react';
import { View,TextInput,TouchableOpacity,Image,ToastAndroid,Text,StatusBar, ScrollView ,InteractionManager, Platform} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import {NavigationActions} from '../../components/common/navigation'
import styles from './style'
import color from '../../constant/color'
import text from '../../constant/text'
import {date1str} from '../../constant/constants'
import {submitEvaluate} from '../../services/demand';
import {toastShort} from '../../constant/toast'
import {getMyRequireDetail} from '../../services/myPublish'
var _this,_state,_navigator;
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default class MyOfferAssess extends Component {
  constructor(props){
        super(props)
        this.state={
          project_id:this.props.navigation.state.params.project_id,//需求ID
          evalute_to:"",//评价标识1买家评价  发布需求者评价，2 报价方评价|
          stars1:0,
          stars2:0,
          evalute_content:"",//评价内容
          UProuter:this.props.navigation.state.params.router,//上页路由
          title:"",
          address:"",
          user_name:"",
          startTime:"",
          endTime:"",
          tel:""
        }
  }
  fetchUI(){
    getMyRequireDetail(`project_id=${_state.project_id}`,_this.getDetailResult,_this.failFuc)
   }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
        if(_this.props.navigation.state.params.router=="MyPublish"){
          _this.setState({
            evalute_to:2
          })
        }else{
          _this.setState({
            evalute_to:1
          })
        }
    });
    _this.fetchUI()
  }

  getDetailResult(result){
    if(result.returnCode==200){
      let {status,project_name,user_name,mobile_phone,province,municipality,county,area,start_time,end_time,invoice,invoice_type,other_require,stage}=result.project_info
        _this.setState({
          title:project_name, 
          isCheck:status==2?false:true,
          address:province+municipality+county+area,
          user_name:user_name,
          tel:mobile_phone,
          startTime:start_time,
          endTime:end_time,
          billing:invoice==0?false:true,
          invoice_type:invoice_type==1?"增值税专用发票":"增值税普通发票",
          loading:false,
          stateNum:stage,
          state:stage==2?"报价中":stage==1?"审核中":stage==4?"交易中":stage==3?"选择中":"已完成",
          other_require:other_require
        })
    }
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
  //提
  submitAssessResult(result){
    const resetAction1 = NavigationActions.reset({
      index:1,
      actions:[
        NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
        NavigationActions.navigate({ routeName:'MyPublish'})
      ]
    })
    const resetAction2 = NavigationActions.reset({
      index:1,
      actions:[
        NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
        NavigationActions.navigate({ routeName:'MyOffer'})
      ]
    })
    _this.textInput.blur()
    if(result.returnCode==200){
  
      if(_state.UProuter=="MyPublish"){
        _navigator.dispatch(resetAction1)
      }else{
        _navigator.dispatch(resetAction2)
      }
    }else{
      toastShort(result.returnMsg)
    }
  }
  
  submitAssess(){
    if(_this.lastBackPressed && _this.lastBackPressed + 2000 >= Date.now()){
      return false;
    }
    _this.lastBackPressed = Date.now() 
    let evalute_content;
    if(_state.stars1==0){
      toastShort("请您进行评分")
      return false
    }
    // else if(_state.stars2==0){
    //   toastShort("请您对卖家服务态度进行评分")
    //   return false
    // }
    else if(_state.evalute_content==""){
      evalute_content="好评"
    }
    submitEvaluate(`project_id=${_state.project_id}&evalute_to=${_state.evalute_to}&evalute_content=${_state.evalute_content?_state.evalute_content:evalute_content}&score=${_state.stars1+_state.stars1}`,_this.submitAssessResult,_this.failFuc)
  }
  failFuc(){
    toastShort("网络似乎有点问题，请检查您的网络")
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
        {
          Platform.OS=="android"?
          <ScrollView>
            {_this._renderContent()}
          </ScrollView>
          :
          <KeyboardAwareScrollView>
           {_this._renderContent()}
          </KeyboardAwareScrollView>
        }
         
       
      </View>
    )
  }
  _renderContent(){
    return (
      <View style={{height:Platform.OS=="android"?height-44-StatusBar.currentHeight:height-44}}>
      <View style={styles.projectInfo}>
            <View style={styles.titlebar}>
                <View style={{flex: 1}}></View>
                <View style={styles.centerView}>
                    <Text style={text.hei15}>{_state.title}</Text>
                </View>
                <View style={{flex: 1,justifyContent:"center"}}></View>
            </View>
          <View style={styles.textbox}>
            <Text numberOfLines={1} style={text.qianhei12}>买 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家：</Text>
            <Text numberOfLines={1} style={text.hei12}>{_state.user_name}</Text>
          </View>
          <View style={styles.textbox}>
            <Text numberOfLines={1} style={text.qianhei12}>地 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</Text>
            <Text numberOfLines={1} style={text.hei12}>{_state.address}</Text>
          </View>
          <View style={styles.textbox}>
            <Text numberOfLines={1} style={text.qianhei12}>联系电话：</Text>
            <Text numberOfLines={1} style={text.hei12}>{_state.tel}</Text>
          </View>

          <View style={[styles.textbox,{justifyContent:"space-between",marginTop:15*scale}]}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text numberOfLines={1} style={text.qianhei12}>发布日期：</Text>
                    <Text numberOfLines={1} style={text.hei12}>{date1str(_state.startTime,"yyyy年MM月dd日")}</Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text numberOfLines={1} style={text.qianhei12}>截止日期：</Text>
                    <Text numberOfLines={1} style={text.hei12}>{date1str(_state.endTime,"yyyy年MM月dd日")}</Text>
                </View>
          </View>
    </View>

      <View style={styles.interval}>
          <Text numberOfLines={1} style={text.hei12}>项目评分</Text>
      </View>
      <View style={{width:width,flex:1,backgroundColor:"#fff",padding:20*scale}}>
          {/* <Text style={text.hei12}>货品相符度</Text> */}
          <View style={[styles.textbox,{marginVertical:20*scale}]}>
              {_this._getStartlist(_state.stars1,1)}
              <Text style={[text.hei12,{fontSize:10,marginLeft:20*scale}]}>比较符合</Text>
          </View>

          {/* <Text style={text.hei12}>卖家服务态度</Text>
          <View style={[styles.textbox,{marginVertical:20*scale}]}>
              {_this._getStartlist(_state.stars2,2)}
              <Text style={[text.hei12,{fontSize:10,marginLeft:20*scale}]}>比较符合</Text>
          </View> */}
          <Text style={[text.hei15,{marginBottom:20*scale}]}>评价</Text>
            <TextInput
                ref={ref=>this.textInput=ref} 
                underlineColorAndroid="transparent" 
                style={styles.eval}
                onChangeText={(text) => _this.setState({evalute_content:text})} 
                defaultValue={_this.state.evalute_content}
                placeholder='请输入评价' 
                placeholderTextColor='#dddddd' 
                multiline={true}  
                maxLength={200} 
                returnKeyType="done"
                returnKeyLabel="提交"
                blurOnSubmit={true}
                onSubmitEditing={()=>_this.submitAssess()}
            />   
      </View>
      <View style={styles.selectFooter}>
            <TouchableOpacity style={styles.selectBtn} onPress={()=>_this.submitAssess()} >
              <Text style={text.bai15}>提交评分</Text>
            </TouchableOpacity>
      </View>
  </View>
    )
  }

}



