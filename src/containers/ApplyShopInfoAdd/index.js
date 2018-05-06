'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image, TextInput,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation'
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import SmallCir from '../../components/common/SmallCir'
import SmallLine from '../../components/common/SmallLine'
import {shopAuthentication} from '../../services/loginInfo'
import {uploadeFiles} from '../../services/offerPrice'
import {toastShort} from '../../constant/toast'
import ImagePicker from 'react-native-image-crop-picker';
import TextInputs from '../../components/common/TextInput'
var _navigator,_this,_state;
export default class ApplyShopInfo extends Component {

  constructor(props) {
    super(props);
    this.state={
      bankName:"",//银行开户行
      bankCode:"",//公司银行账号
      bankChildName:"",//开户支行名称
      payCode:"",//支付关联号
      khxkzImg:"",//开户银行许可证电子版
    }
  }
  componentDidMount(){
  }

  submitAction(){
      if(_this.lastBackPressed && _this.lastBackPressed + 1500 >= Date.now()){
        return false;
      }
      _this.lastBackPressed = Date.now() 
      if(_state.bankName==""){
        Alert.alert('温馨提示',"请输入银行开户行",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.bankCode==""){
        Alert.alert('温馨提示',"请输入公司银行账号",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.bankChildName==""){
        Alert.alert('温馨提示',"请输入开户银行支行名称",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.payCode==""){
        Alert.alert('温馨提示',"请输入支行关联号",[{text: '确认', onPress: () =>{}},])
        return false;
      }else if(_state.khxkzImg==""){
        Alert.alert('温馨提示',"请输入开户银行许可证电子版",[{text: '确认', onPress: () =>{}},])
        return false;
      }else{
        let {bankName,bankCode,bankChildName,payCode,khxkzImg}=_state
        let {
          country,//国家id
          province,//省ID
          city,//城市ID
          district,//区ID
          company_name,//企业名称
          placeSelect,//企业地址
          address,//详细地址
          label_list,//企业标签
          contacts_name,//联系人
          contacts_phone,//联系电话
          type,//三证合一  或者five企业五证
          bank_licence,//开户许可证
          f_yyzzImg,//营业执照
          f_zzjgzImg,//组织机构代码证
          f_swdjzImg,//税务登记证
          t_szhyImg,//三证合一
          // company_logo,//企业logo
          companyInfo,//公司信息
          zhizhao,//营业执照
        }=this.props.navigation.state.params.option
        let licence_type= type=="three"?"1":"2"
        shopAuthentication(`contacts_name=${contacts_name}&contacts_phone=${contacts_phone}&company_name=${company_name}&country=${country}&province=${province}&city=${city}&district=${district}&address=${address}&abstract=${companyInfo}&label_list=${label_list}&bank_licence_electronic=${bank_licence}&zhizhao=${zhizhao}&licence_type=${licence_type}&organization_code_electronic=${f_zzjgzImg}&tax_registration_certificate=${f_swdjzImg}&bank_name=${bankChildName}&bank_code=${payCode}&bank_account_name=${bankName}&bank_account_number=${bankCode}&bank_licence_electronic=${khxkzImg}&licence_3in1="dleld"`,_this.submitResult,_this.failFuc)
      }
  }
  submitResult(result){
    if(result.returnCode==200){
      _navigator.navigate("ApplyShopMoney",{supplier_id:result.supplier_id})
    }else{
      toastShort(result.returnMsg)
    }
  }
  failFuc(){
    toastShort('网络异常请稍后再试')
  }

  openMycamera(){//打开相机
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
      data.append("save_path", "2");
      uploadeFiles(data,_this.uploadeFilesResult)
    });
  }
  uploadeFilesResult(result){//上传图片结果
    if(result.returnCode==200){
      _this.setState({
        khxkzImg:result.pic_url
      })
    }
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
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/cancel2.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      title:"申请开店",
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this.submitAction()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>下一步</Text>
          </View>
        </TouchableOpacity>
      )
    };


    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
   
      <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={styles.containerStyle} ref={(ref)=>this.scroller=ref}>
           <View style={{width:width-212*scale,height:30*scale,alignItems:"center",marginTop:30*scale,flexDirection:"row"}}>
                <SmallCir />
                <SmallLine />
                <SmallCir />
                <SmallLine/>
                <SmallCir/>
                <View style={{width:(width-362*scale)/4,height:8*scale,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                  <SmallLine/>
                  <SmallLine backgroundColor="#c8c8c8"/>
                </View>
                <SmallCir num={4}/>
                <SmallLine backgroundColor="#c8c8c8"/>
                <SmallCir num={5}/>
            </View>
            <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={text.lan10}>签订协议</Text>
                <Text style={text.lan10}>基本信息</Text>
                <Text style={text.lan10}>补充信息</Text>
                <Text style={text.hui10}>缴纳入住费</Text>
                <Text style={text.hui10}>等待审核</Text>
            </View>
      
        <View style={styles.inputBox}>
            <Text style={text.hei15}>银行开户行</Text>
           <TextInputs  style={styles.input}
                    onChangeText={(text)=> _this.setState({bankName:text})} value={_state.bankName}
                    placeholder="请输入银行开户行名"/>
        </View>

      
        <View style={styles.inputBox}>
            <Text style={text.hei15}>公司银行账号</Text>
           <TextInputs keyboardType='numeric'  style={styles.input}
                    onChangeText={(text)=>_this.setState({bankCode:text})} value={_state.bankCode} 
                    placeholder="请输入公司银行账号"/>
        </View>

        <View style={styles.inputBox}>
            <Text style={text.hei15}>开户银行支行名称</Text>
           <TextInputs  style={styles.input}
                    onChangeText={(text)=>_this.setState({bankChildName:text})} value={_state.bankChildName}
                    placeholder="请输入开户银行支行名称"/>
        </View>
        <View style={styles.inputBox}>
            <Text style={text.hei15}>支行关联号</Text>
           <TextInputs keyboardType='numeric' style={styles.input}
                    onChangeText={(text)=>_this.setState({payCode:text})} value={_state.payCode}
                    placeholder="请输入支行关联号"/>
        </View>
       

          <TouchableOpacity style={styles.label} onPress={()=>{_this.openMycamera()}}>
            <View style={styles.justify}>
              <Text style={text.hei15}>开户银行许可证电子版</Text>
              <Text style={[text.hui15,{marginLeft:20*scale}]}>{_state.khxkzImg?"已上传":"请上传"}</Text>
            </View>
            <Image source={require('../../images/next_demand.png')} style={styles.regicon}/>
          </TouchableOpacity>
          <View style={{backgroundColor:color.main,width:width,paddingHorizontal:20*scale}}>
           <Text style={[text.hong12,{marginTop:20*scale}]}>*所有证件需加盖公章</Text>
         </View>
         
         </ScrollView>
       
      </View>
    );
  }
};
