'use strict';
import React, { Component, } from 'react';
import { View,Image,TextInput,DeviceEventEmitter,Alert,TouchableOpacity,ToastAndroid,Text,BackHandler,InteractionManager} from 'react-native';
import {httpURI} from '../../constant/url'
import NavigatorTopBar from '../../components/common/NavigatorTopBar.js';
import color from '../../constant/color.js';
import text from '../../constant/text.js';
import styles from './styles.js';
import Dimensions from 'Dimensions';
import {NavigationActions} from '../../components/common/navigation'
import { width, height,scale } from '../../components/common/Dimensions';
import {connect} from '../../components/common/connect';
import * as loginAction from '../../actions/loginAction'
import {toastShort} from '../../constant/toast'
import {uploadeFiles} from '../../services/offerPrice'
import {updateUserInfo} from '../../services/myInfo'
import ImagePicker from 'react-native-image-crop-picker';
var _this,_state,_navigator;
class MySelfInfo extends Component {
    constructor(props) {
        super(props);
        let {user_id,user_name,mobile_phone,rank_points,collect_article_num,supplier_flag,collect_goods_num,rank_name,headimg,status,qq,email}=this.props.loginProps
        this.state = {
            name:user_name,
            tel:mobile_phone,
            email:email,
            QQ:qq,
            headimg:headimg,
            upHeadimg:""
        };
     }
  
      backRouter(){
        _navigator.dispatch(NavigationActions.back())
      }

      openMycamera(num){
        _this.num=num
        ImagePicker.openPicker({
          width:300,
          height:300,
          cropping: true,
          includeBase64: true,
        }).then(image => {
            let data = new FormData();
            let name = image.path.split("/")
            let file = { uri: image.path, type: "multipart/form-data", name: name[name.length-1] };
            data.append("picture", file);
            data.append("save_path", "3");
            uploadeFiles(data,_this.uploadeFilesResult)
        });
      }

    uploadeFilesResult(result){//上传图片结果
      if(result.returnCode==200){
          _this.setState({
            headimg:httpURI+'/'+result.upload_url,
            upHeadimg:result.upload_url
          })
      }else{
        Alert.alert('温馨提示',result.returnMsg,[{text: '确认'},])
      }
    }

    updateInfo(){
      var regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
      let { name,email,QQ,upHeadimg}=_state
        if(name===""){
          Alert.alert('温馨提示',"请输入联系人姓名",[{text: '确认'},])
          return false
        }
        if(email!=""&&!regEmail.test(email)){
            Alert.alert('温馨提示',"请输入正确的邮箱",[{text: '确认'},])
            return false
        }
        if(QQ!==""){
          if(!(/^[1-9]\d{4,8}$/.test(QQ))){ //qq号正则匹配
            Alert.alert('温馨提示',"请输入联系人正确的QQ号码",[{text: '确认'},])
            return false;
           }
        }
        else{
          updateUserInfo(`email=${email}&qq=${QQ}&headimg=${upHeadimg}&user_name=${name}`,_this.undateSuc,_this.failFuc)
        }
    }
    undateSuc(result){
      let {qq,email,headimg,user_name}=result.user_info
      if(result.returnCode==200){
        _this.props.login({
          qq,email,headimg:httpURI+'/'+headimg,user_name
        });
        _this.backRouter()
      }
    }
    failFuc(){

    }
    requestStr(text){
      var reg =/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
      if (reg.test(text)){
        toastShort('联系人不能输入中文');
        
        return false;   
      }
      _this.setState({name:text})
    }
  
     render(){

       _this=this;
       _state = this.state;
       _navigator=this.props.navigation;
      //  console.log(_state.headimg)
       let NavigatorTopBarProps = {
           visible: true,
           title: "账号信息",
           leftView: (
             <TouchableOpacity style={{flex: 1}}
               underlayColor='transparent'
               onPress={() => {_this.backRouter()}}>
               <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
               <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
               </View>
             </TouchableOpacity>
           ),
           rightView: (
            <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
              underlayColor='transparent'
              onPress={() => {_this.updateInfo()}}>
              <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
                  <Text style={{fontSize:12,color:"#fff"}}>保存</Text>
              </View>
            </TouchableOpacity>
          )
       };
       return(
         <View style={styles.main}>
             <NavigatorTopBar {...NavigatorTopBarProps}/>

            <TouchableOpacity onPress={()=>_this.openMycamera()} style={styles.headBox}>
              <Text style={text.hei15}>头像</Text> 
              <View style={styles.imgBox}>
                <View style={styles.headImg}>
                {/* <Image source={require('../../images/defaultImg.png')} style={styles.headImg}/> */}
                   <Image source={_state.headimg!=""?{uri:_state.headimg}:require('../../images/defaultImg.png')} style={styles.headImg}/>
                </View>
                <Image source={require('../../images/next_demand.png')} style={styles.nextImg}/>
              </View>
            </TouchableOpacity>

            <View style={styles.infoBox}>
             <View style={styles.inputBox}>
              <Text style={text.hei15}>联系人</Text> 
                <TextInput 
                  maxLength={18} 
                  underlineColorAndroid="transparent"
                  style={styles.input}
                  onChangeText={(text)=> {_this.requestStr(text)}}
                  value={_state.name}
                  placeholder="请输入联系人姓名"
                  placeholderTextColor={color.qianhei}/>
             </View>

             <View style={styles.inputBox}>
                <Text style={text.hei15}>联系电话</Text> 
                <Text style={[text.qianhei15,{marginLeft:10*scale}]}>{_state.tel}</Text> 
             </View>
            
            <View style={styles.inputBox}>
              <Text style={text.hei15}>邮箱</Text> 
                  <TextInput 
                    maxLength={18} 
                    underlineColorAndroid="transparent"
                    style={styles.input}
                    onChangeText={(text)=> _this.setState({email:text})}
                    value={_state.email}
                    placeholder="请输入邮箱"
                    placeholderTextColor={color.qianhei}/>
              </View>

              <View style={[styles.inputBox,{borderBottomWidth:0}]}>
                <Text style={text.hei15}>QQ</Text> 
                  <TextInput 
                    maxLength={18} 
                    underlineColorAndroid="transparent"
                    style={styles.input}
                    onChangeText={(text)=> _this.setState({QQ:text})}
                    value={_state.QQ}
                    placeholder="请输入QQ"
                    placeholderTextColor={color.qianhei}/>
              </View>

            </View>
            
          </View>
       )
     }
   }
   export default connect((state)=>({
    loginProps:state.loginReducer,
    nav: state.StackReducer,
   }),(dispatch)=>({
    login:(payLoad)=>dispatch(loginAction.login(payLoad))
   }))(MySelfInfo)