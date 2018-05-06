import React, { Component } from 'react';
import { FlatList, View,TextInput,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,findNodeHandle,InteractionManager,UIManager} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import WebViewAutoHeight from '../../components/common/WebViewAutoHeight'
import color from '../../constant/color'
import text from '../../constant/text'
import {NavigationActions} from '../../components/common/navigation'
import Lost from '../../components/common/Lost';//丢失页面
import Naviwait from '../../components/common/NavWait';
import {getArticleDetail,collectArticle,cancelArticleCollect} from '../../services/infomation'
import {getMyInfomation} from '../../services/myInfo'
import {connect} from '../../components/common/connect';
import {toastShort} from '../../constant/toast'
import * as loginAction from '../../actions/loginAction'
import {getStorage} from '../../constant/storage'
var _this,_state,_navigator;
class InfomationDetail extends Component {
  constructor(props){
        super(props)
        this.state={
          article_id:this.props.navigation.state.params.article_id,
          failLoad:true,
          loading:true,
          collect_id:"",
          isCollect:false
        }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      getArticleDetail(`article_id=${_state.article_id}`,_this.getDetailResult)
    });
  }
  getDetailResult(result){
    if(result.returnCode==200){
      _this.setState({
        article_detail:result.article_detail.content,
        isCollect:result.article_detail.collect_flag,
        collect_id:result.article_detail.collect_id,
      })
    }
  }
  //收藏动作
  collectAction(){
    getStorage("login",(error,data)=>{
      if(data){
        if(!_state.isCollect){
          collectArticle(`article_id=${_state.article_id}`,_this.collectResult)
        }else{
          cancelArticleCollect(`collect_id=${_state.collect_id}`,_this.collectResult)
        }
      }else {
        Alert.alert('温馨提示',"请先登陆",[{text: '确认', onPress: () =>{
          _navigator.navigate('Login',{router:"InfomationDetail"})
        }},{text: '稍后登陆'},])
      }
  })
   
  }

  collectResult(result){
      if(result.returnCode==200){
        if(_state.isCollect){
          toastShort("取消收藏成功")
        }else{
          toastShort("收藏成功")
        }
        getArticleDetail(`article_id=${_state.article_id}`,_this.getDetailResult)
        getMyInfomation(`registration_id=${_this.props.loginProps.registrationId}`,_this.getInfo)
      }
  }

  getInfo(result){
    if(result.returnCode==200){
        let {collect_article_num,collect_goods_num}=result.user_info
        _this.props.login({
         collect_article_num,collect_goods_num
        })
      }
  }

  render() {
    _this=this;
    _navigator=this.props.navigation;
    _state=this.state;
    let NavigatorTopBarProps={
      visible:true,
      title:"咨讯详情",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this.collectAction()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>{_state.isCollect?"取消收藏":"收藏"}</Text>
          </View>
        </TouchableOpacity>
      ),
    };
    return (
      <View style={{flex:1,backgroundColor:color.write,alignItems: "center"}}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            <ScrollView style={{flex:1}}>
            {
              _state.article_detail?
              <WebViewAutoHeight
                    style={{ width: width}}
                    minHeight={height}
                    source={{html:`<!DOCTYPE html>
                    <html><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="initial-scale=1, minimal-ui," id="viewport"><body><div>
                    ${_state.article_detail}</div></body></html>`
                  }}
              />
              :
              _state.loading?<Naviwait/>:
              <Lost title={_state.failLoad?"暂时还没有需求":"您的网络不给力哦~~~"}
                  imgUrl={require('../../images/loadFail.gif')}
                  imgStyle={{width:240*scale,height:240*scale}}    
              />
            }
            </ScrollView>
          
           
      </View>
    )
  }
}

export default connect((state)=>({
  loginProps:state.loginReducer
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(InfomationDetail)

