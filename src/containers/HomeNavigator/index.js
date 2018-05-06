import TabNavigator from 'react-native-tab-navigator';
import {View,StyleSheet,Image,Platform, DeviceEventEmitter } from 'react-native';
import React, { Component } from 'react'
import text from '../../constant/text'
import color from '../../constant/color'
import { width, height,scale } from '../../components/common/Dimensions';
import {getStorage} from '../../constant/storage'
import {getMyInfomation} from '../../services/myInfo'
import {connect} from '../../components/common/connect';
import * as loginAction from '../../actions/loginAction'
import {httpURI} from '../../constant/url'
import Demand from '../Demand'//需求
import Home from '../Home';//主页
import Infomation from '../Infomation';//资讯页
import Logistics from '../Logistics';//物流页
import MySelf from '../MySelf';//我的页
import {icons} from '../../Assets/icons'
let _this
class HomeNavigator extends Component {
  constructor(props){
        super(props)
        this.state={
            selectedTab:"首页",
            params:false
        }
  }

  componentDidMount(){
      //有没有路由参数传过来
      if(this.props.navigation.state.params){
          if(this.props.navigation.state.params.router)
            _this.setState({
                selectedTab:this.props.navigation.state.params.router
            })
      }
      //更新个人信息 如我的小红点
      getMyInfomation(`registration_id=${_this.props.loginProps.registrationId}`,_this.getInfo)
  }
  //获取个人信息回调
  getInfo(result){
    if(result.returnCode==200){
      _this.setState({loading:false})
      let {stystem_msg,msg_count} = result
      stystem_msg=stystem_msg.filter(item=>{
            return item!=1&&item!=2&&item!=3
        })

      let {user_id,user_name,supplier_flag,mobile_phone,rank_points,collect_article_num,collect_goods_num,rank_name,status,qq,email,headimg}=result.user_info
      _this.props.login({
        user_id,user_name,supplier_flag,mobile_phone,rank_points,collect_article_num,collect_goods_num,rank_name,status,qq,email,headimg:headimg?httpURI+'/'+headimg:"",stystem_msg,msg_count
      })
    }
  }
  //切换
  tabNavigator(page,onOff){
      _this.setState({
        selectedTab:page,
        option:onOff?true:false
      })
  }
  //小红点
  _renderBadge(badge){
      if(badge&&_this.props.loginProps.stystem_msg&&_this.props.loginProps.stystem_msg.length){
        return (
            <View style={{width:10*scale,height:10*scale,borderRadius:5*scale,backgroundColor:color.red,marginRight:10*scale,marginTop:10*scale}}></View>
          )
      }
  }
  //底部tab切换
  _renderTabarItems(selectedTab,icon,selectedIcon,Component,badge){
    //   console.log(_this)
    //   console.log(this)
        return (
        <TabNavigator.Item
            renderBadge={()=>_this._renderBadge(badge)}
            selected={_this.state.selectedTab === selectedTab} 
            title={selectedTab} 
            titleStyle={styles.tabText} 
            selectedTitleStyle={styles.selectedTabText} 
            renderIcon={() => <Image style={styles.icon} source={{uri:icon}} />} 
            renderSelectedIcon={() => <Image style={styles.icon} source={{uri:selectedIcon}} />} 
            onPress={() =>_this.tabNavigator(selectedTab)}
        >
         <Component tabNavigator={_this.tabNavigator} navigation={_navigator} option={_this.state.option}/>
        </TabNavigator.Item>
        )
    }   
    render() {
        _this=this;
        _navigator=this.props.navigation;
        _state=this.state;
        return (
        <View style={styles.container}>
            <TabNavigator tabBarStyle={{backgroundColor:"#fff"}}> 
                {this._renderTabarItems('首页',icons.tab_home,icons.tab_home_active,Home)}
                {this._renderTabarItems('需求',icons.tab_demand,icons.tab_demand_active,Demand)}
                {this._renderTabarItems('资讯',icons.tab_infomation,icons.tab_infomation_active,Infomation)}
                {this._renderTabarItems('物流',icons.tab_logistics,icons.tab_logistics_active,Logistics)}
                {this._renderTabarItems('我的',icons.tab_my,icons.tab_my_active,MySelf,true)}
            </TabNavigator>
        </View>
        )
      }
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    tabText:{
        color:'#000000',
        fontSize:10
    },
    selectedTabText:{
        color:'#3d74c0'
    },
    icon:{
        width: scale*48,
        height:scale*48
    }
})

export default connect((state)=>({
  loginProps:state.loginReducer,
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(HomeNavigator)