'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler,findNodeHandle, Platform} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import TextInputs from '../../components/common/TextInput'
import {NavigationActions} from '../../components/common/navigation'
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import AddressModal from '../../components/citySelect/AddressModal'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import BankType from '../../components/common/BankType'
var _navigator,_this,_state;
export default class FillBill extends Component {

  constructor(props) {
    super(props);
    this.state={
      placeSelect:"请选择",//送货地址
      provinceId:"",//省ID
      cityId:"",//城市ID
      countyId:"",//区ID
      visible:false,
      companyName:"",//单位名称
      code:"",//纳税人识别号
      registPlace:"",//注册地址
      registTel:"",//注册电话
      bankCode:"",//开户银行账号
      address:"",//详细地址
      name:"",//联系人
      tel:"",//联系电话
      province:"",//省
      municipality:"",//市
      county:"",//区
      bankType:"",//银行类型
      // bankList:[{bankName:"工商银行",}]
    }
  }
  componentDidMount(){
    if(this.props.navigation.state.params)
      if(this.props.navigation.state.params.invoice_info){
        let {tax_no,reg_addr,bank_type,reg_tel,bank_no,province,municipality,county,area,contact,contact_info,company_name}=this.props.navigation.state.params.invoice_info
        this.setState({
          placeSelect:municipality?county?province+municipality+county+"":province+municipality+"":"请选择",//送货地址
          companyName:company_name,//单位名称
          code:tax_no,//纳税人识别号
          registPlace:reg_addr?reg_addr:"",//注册地址
          registTel:reg_tel?reg_tel:"",//注册电话
          bankCode:bank_no?bank_no:"",//开户银行账号
          address:area,//详细地址
          name:contact,//联系人
          tel:contact_info,//联系电话
          province:province,//省
          municipality:municipality,//市
          county:county,//区
          bankType:bank_type?bank_type:"",//银行类型
        })
      }
  }

  telChange(tel){
    _this.setState({tel})
  }
  submitAction(){
    let {companyName,code,bank_type,registPlace,registTel,bankCode,placeSelect,address,name,tel,provinceId,cityId,countyId,province,municipality,county}=_state
    if(companyName==""){
      Alert.alert('温馨提示',"请输入单位名称",[{text: '确认'}])
      return false;
    }else if(code==""){
      Alert.alert('温馨提示',"请输入纳税人识别号",[{text: '确认'}])
      return false;
    }else if(address==""){
      Alert.alert('温馨提示',"请输入详细地址",[{text: '确认'}])
      return false;
    }else if(name==""){
      Alert.alert('温馨提示',"请输入联系人姓名",[{text: '确认'}])
      return false;
    }else if(tel==""){
      Alert.alert('温馨提示',"请输入联系电话",[{text: '确认'}])
      return false;
    }

    if(this.props.navigation.state.params.invoice_type==1){//专用发票
        if(registPlace==""){
          Alert.alert('温馨提示',"请输入注册地址",[{text: '确认'}])
          return false;
        }else if(registTel==""){
          Alert.alert('温馨提示',"请输入注册电话",[{text: '确认'}])
          return false;
        }else if(bank_type==""){
          Alert.alert('温馨提示',"请输入开户银行",[{text: '确认'}])
          return false;
        }else if(bankCode==""){
          Alert.alert('温馨提示',"请输入开户银行账号",[{text: '确认'}])
          return false;
        }
    }
    
    if(_this.props.navigation.state.params.router=="ConfirmOrder"){
      DeviceEventEmitter.emit("ConfirmOrderUIbills",{tax_no:code,reg_addr:registPlace,reg_tel:registTel,bank_no:bankCode,provinceId,cityId,countyId,area:address,contact:name,contact_info:tel,company_name:companyName,bank_type:bank_type})
    }else{
      DeviceEventEmitter.emit("PublishDemandUIbills",{tax_no:code,reg_addr:registPlace,reg_tel:registTel,bank_no:bankCode,province,municipality,county,area:address,contact:name,contact_info:tel,company_name:companyName,bank_type:bank_type})
    }
    _navigator.dispatch(NavigationActions.back())
  }
  //关掉所有modal
  closeModal(){
    _this.setState({
      visible:false,
      visible2:false
    })
  }
  //获取modal城市text和城市id
  getPalceSelect(place,proval,cityval,counval,province,municipality,county){
    _this.setState({
      placeSelect:place,//城市全
      provinceId:proval,//省id
      cityId:cityval,//市id
      countyId:counval,//区id
      visible:false,
      visible2:false,
      province,
      municipality,
      county
    })
  }
  //打开城市modal
  
  openAddressModal(){
    _this.setState({visible:true})
  }

  confirm(bankType){
    _this.setState({
      bankType,
      visible:false
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
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/cancel2.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      title:"填写发票信息",
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this.submitAction()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>确定</Text>
          </View>
        </TouchableOpacity>
      ),
    };
    let AddressModalProps={
      visible:_state.visible,
      closeModal:_this.closeModal,
      getPalceSelect:_this.getPalceSelect,
      provinceId:_state.provinceId,
      cityId:_state.cityId,
      countyId:_state.countyId
    };
    // let BankTypeProps={
    //   visible:_state.visible2,
    //   confirm:_this.confirm,
    //   closeModal:_this.closeModal,
    //   bankList:_state.bankList
    // }
    return (
      <View style={styles.main}>
        {/* <BankType {...BankTypeProps}/> */}
       <NavigatorTopBar {...NavigatorTopBarProps}/>
       <AddressModal {...AddressModalProps}/>
       {
         Platform.OS=="android"?
         <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={{backgroundColor: color.write,width:width,paddingHorizontal:20*scale,alignItems:"center"}} ref={(ref)=>this.scroller=ref}>
         {_this._renderContent()}
       </ScrollView>
         :
         <KeyboardAwareScrollView>
          {_this._renderContent()}
         </KeyboardAwareScrollView>
       }
     
      </View>
    );
  }
  _renderContent(){
    return (
      <View style={{backgroundColor: color.write,width:width,paddingHorizontal:20*scale,alignItems:"center"}}>
      <View style={styles.inputBox}>
          <Text style={text.hei15}>单位名称</Text>
         <TextInputs   style={styles.input} 
                  onChangeText={(text)=> _this.setState({companyName:text})}
                  defaultValue={_this.state.companyName}
                  placeholder="请输入单位名称"/>
      </View>
      <View style={styles.inputBox}>
          <Text style={text.hei15}>纳税人识别号</Text>
         <TextInputs  style={styles.input} 
                  onChangeText={(text)=> _this.setState({code:text})} defaultValue={_this.state.code}
                  placeholder="请输入纳税人识别号"/>
      </View>
      <View style={styles.inputBox}>
          <Text style={text.hei15}>注册地址</Text>
         <TextInputs  style={styles.input} 
                  onChangeText={(text)=> _this.setState({registPlace:text})} defaultValue={_this.state.registPlace}
                  placeholder="请输入注册地址"/>
      </View>
      <View style={styles.inputBox}>
          <Text style={text.hei15}>注册电话</Text>
         <TextInputs keyboardType='numeric' maxLength={11}  style={styles.input} 
                  onChangeText={(text)=> _this.setState({registTel:text})} defaultValue={_this.state.registTel}
                  placeholder="请输入注册电话"/>
      </View>
      <View style={styles.inputBox}>
          <Text style={text.hei15}>开户银行</Text>
         <TextInputs  style={styles.input} 
                  onChangeText={(text)=>_this.setState({bank_type:text})} defaultValue={_this.state.bank_type}
                  placeholder="请输入开户银行"/>
      </View>
      <View style={[styles.inputBox,{borderBottomWidth:0}]}>
          <Text style={text.hei15}>开户银行账号</Text>
         <TextInputs keyboardType='numeric'  style={styles.input} 
                  onChangeText={(text)=>_this.setState({bankCode:text})} defaultValue={_this.state.bankCode}
                  placeholder="请输入开户银行账号" ref="bankCode" 
                  // onFocus={()=>_this._onFocus("bankCode")} 
                  />
      </View>
       <View style={{height:70*scale,width:width,paddingHorizontal:20*scale,justifyContent:"center",backgroundColor:color.main}}><Text style={{fontSize:12,color:color.font1}}>发票邮寄地址</Text></View>
       <TouchableOpacity style={styles.label} onPress={()=>_this.openAddressModal()}>
        <View style={{flexDirection:"row"}}>
          <Text style={text.hei15}>送货地址</Text>
          <Text style={[text.hei15,{marginLeft:20*scale}]}>{_state.placeSelect}</Text>
        </View>
         <Image source={require('../../images/next_demand.png')} style={styles.regicon}/>
      </TouchableOpacity>
      <View style={styles.inputBox}>
          <Text style={text.hei15}>详细地址</Text>
         <TextInputs maxLength={11}  style={styles.input} 
                  onChangeText={(text)=>_this.setState({address:text})} defaultValue={_this.state.address}
                  placeholder="请输入详细地址" ref="address" 
                  // onFocus={()=>_this._onFocus("address")} 
                  />
      </View>
      <View style={styles.inputBox}>
          <Text style={text.hei15}>联系人</Text>
         <TextInputs  style={styles.input} 
                  onChangeText={(text)=>_this.setState({name:text})} defaultValue={_this.state.name}
                  placeholder="请输入联系人姓名" ref="name" 
                  // onFocus={()=>_this._onFocus("name")} 
                  />
      </View>
      <View style={[styles.inputBox,{borderBottomWidth:0}]}>
          <Text style={text.hei15}>联系电话</Text>
         <TextInputs  keyboardType='numeric' maxLength={11}  style={styles.input} 
                  onChangeText={(text)=>_this.setState({tel:text})} defaultValue={_this.state.tel}
                  placeholder="请输入联系电话" ref="tel" 
                  // onFocus={()=>_this._onFocus('tel')}
                  />
      </View>
    </View>
    )
  }
  //   _onFocus(refName) {
  //     setTimeout(()=> {
  //         let scrollResponder = this.scroller.getScrollResponder();
  //         scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]), 0, true);
  //     }, 100);
  // }
};
