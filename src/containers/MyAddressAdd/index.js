'use strict';
import React, { Component, } from 'react';
import {View, Text,Image, ScrollView,TextInput,Switch, TouchableOpacity, ToastAndroid, InteractionManager,ListView, DeviceEventEmitter, Platform} from 'react-native';
import styles from './styles'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import {NavigationActions} from '../../components/common/navigation';
import AddressModal from '../../components/citySelect/AddressModal';
import color from '../../constant/color'
import text from '../../constant/text'
import {updateReceivingAddress} from '../../services/myAdress'
var _navigator,_this,_state,_props;

export default class MineAddressAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',//姓名
      phone:'',//手机号
      address:'',//地址
      default:0,//是否默认
      provinceId:'',//省id
      cityId:'',//市id
      countyId:'',//区id
      detail:'',//详细地址
      userId:'',//userid
      country:"1",//国家id
      placeSelect:'请选择地址',//选择地址的显示
      visible:false,//显示modal与否
      address_id:0,//地址id
    }
  }
  //设为默认
  setIsDefault(value){
    _this.setState({isDefault:value})
  }
  //取上级传过来的值
  componentDidMount(){
      if (_this.props.navigation.state.params) {
        let {address_id,consignee,mobile,country,province,city,district,address,country_name,province_name,city_name,district_name,default_flag}=_this.props.navigation.state.params.item
        _this.setState({
          address_id:address_id,
          name:consignee,
          phone:mobile,
          placeSelect:country_name+""+province_name+""+city_name+""+district_name,
          detail:address,
          provinceId:province,
          cityId:city,
          countyId:district,
          isDefault:default_flag
        })
    }
  }

  closeModal(){
    _this.setState({
      visible:false
    })
  }
  getModal(){
    _this.setState({
      visible:true
    })
  }

  getPalceSelect(place,proval,cityval,counval){
    _this.setState({
      placeSelect:place,
      provinceId:proval,
      cityId:cityval,
      countyId:counval,
      visible:false
    })
  }

  //保存
  finshedChange(){
    var resultFu = (response)=>{
        if(response.success){
            if(_props.navigation.state.params.id){
              Alert.alert("温馨","修改成功",[{text:"确定"}])
            }else{
              Alert.alert("温馨","添加成功",[{text:"确定"}])
            }
             _navigator.navigate("MineAddress");
        }else{
            ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
        }
    };

   if(!_state.name){
    Alert.alert("温馨","请输入收货人",[{text:"确定"}])
     return false;
   }else if (!_state.phone) {
    Alert.alert("温馨","请输入联系电话",[{text:"确定"}])
     return false;
   }else if (!_state.placeSelect) {
    Alert.alert("温馨","请选择区域",[{text:"确定"}])
     return false;
   }else if (!_state.detail) {
    Alert.alert("温馨","请输入详细地址",[{text:"确定"}])
     return false;
   }else {
       let {address_id,name,phone,country,provinceId,cityId,countyId,detail,isDefault}=_state
       updateReceivingAddress(`address_id=${address_id}&consignee=${name}&mobile=${phone}&country=${country}&province=${provinceId}&city=${cityId}&district=${countyId}&address=${detail}&default_flag=${isDefault}`,_this.upAddressResult)      
     }
  }
  //修改地址回调
  upAddressResult(result){
      if(result.returnCode==200){
        DeviceEventEmitter.emit("MyAddressUI")
        _navigator.dispatch(NavigationActions.back())
      }
  }
 
  render() {
    _this = this;
    _props=this.props;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "新增收货地址",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 20*scale,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width:40*scale, height: 40*scale,}} source={require('../../images/back.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      rightView: (
        <TouchableOpacity  style={{flex: 1}}
          onPress={()=>_this.finshedChange()}>
          <View style={{flex: 1,flexDirection: 'row-reverse',alignItems: 'center'}}>
            <Text style={{fontSize:13,color:'#fff',marginRight:15}}>保存</Text>
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
      countyId:_state.countyId,
    }

    return (
        <View style={styles.main}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            <View style={styles.info_box}>
                <View style={styles.list_b}>
                    <Text style={text.hei15}>收  货  人：</Text>
                    <TextInput  underlineColorAndroid="transparent"  style={styles.list_input}
                    onChangeText={(text) => _this.setState({name:text})} value={_this.state.name}
                    placeholder="请输入收货人" placeholderTextColor='#dddddd'/>
                </View>
                <View style={styles.list_b}>
                    <Text style={text.hei15}>联系电话：</Text>
                    <TextInput maxLength={11} keyboardType='numeric' underlineColorAndroid="transparent" style={styles.list_input}
                    onChangeText={(text) => _this.setState({phone:text})} value={_this.state.phone}
                    placeholder="请输入联系电话" placeholderTextColor='#dddddd'/>
                </View>
                <View style={styles.list_b}>
                    <Text style={text.hei15}>地        址：</Text>
                    <TouchableOpacity style={{height:50,paddingLeft:12,flex:1,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}} onPress={()=>_this.getModal()}>
                      <Text style={[styles.text,_state.placeSelect=="请选择地址"?{color:"#ddd"}:{}]} numberOfLines={1}>{_state.placeSelect}</Text>
                      <Image source={require('../../images/next_demand.png')} style={{height:26*scale,width:14*scale}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.list_c}>
                     <Text style={[text.hei15,Platform.OS=="android"?{marginTop: 20*scale}:{marginTop: 25*scale}]}>详细地址：</Text>
                      <TextInput underlineColorAndroid="transparent" style={styles.list_input_a}
                      onChangeText={(text) => _this.setState({detail:text})} value={_this.state.detail}
                      placeholder='请输入详细地址' placeholderTextColor='#dddddd' multiline={true}  maxLength={200}/>
                </View>

            </View>
           
              <View style={styles.list_box_a}>
                  <Text style={text.hei15}>设为默认</Text>
                  {/* <Switch onValueChange={(val)=>this.setState({isDefault:!this.state.isDefault})} value={this.state.isDefault} thumbTintColor={color.write} onTintColor={color.bluebg}/> */}
                  {_state.isDefault==1?
                  <TouchableOpacity
                    onPress={()=>_this.setIsDefault("0")} style={{paddingLeft:20,paddingVertical:20}}>
                    <Image style={{width: 94*scale, height: 50*scale,}} source={require('../../images/opend.png')}></Image>
                  </TouchableOpacity>
                  :<TouchableOpacity
                    onPress={()=>_this.setIsDefault("1")} style={{paddingLeft:20,paddingVertical:20}}>
                    <Image style={{width: 94*scale, height: 50*scale,}} source={require('../../images/closed.png')}></Image>
                  </TouchableOpacity>
                }
              </View>
           

            <AddressModal {...AddressModalProps}/>
        </View>
    );
  }


















};
