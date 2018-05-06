'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler, InteractionManager,findNodeHandle} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text';
import {NavigationActions} from '../../components/common/navigation'
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import SmallCir from '../../components/common/SmallCir'
import SmallLine from '../../components/common/SmallLine'
import AddressModal from '../../components/citySelect/AddressModal'
import ModalZtype from '../../components/common/ModalZtype'
import ImagePicker from 'react-native-image-crop-picker';
import TextInputs from '../../components/common/TextInput'
import {uploadeFiles} from '../../services/offerPrice'
var _navigator,_this,_state;
export default class ApplyShopInfo extends Component {

  constructor(props) {
    super(props);
    this.state={
      country:"1",//国家id
      province:"",//省ID
      city:"",//城市ID
      district:"",//区ID
      visible:false,
      visible2:false,
      company_name:"",//企业名称
      placeSelect:"请选择地区",//企业地址
      address:"",//详细地址
      label_list:"",//企业标签
      contacts_name:"",//联系人
      contacts_phone:"",//联系电话
      type:"three",//三证合一  或者five企业五证
      bank_licence:"",//开户许可证
      f_yyzzImg:"",//营业执照
      f_zzjgzImg:"",//组织机构代码证
      f_swdjzImg:"",//税务登记证
      
      t_szhyImg:"",//三证合一
      
      company_logo:"",//企业logo
      companyInfo:"",
      zhizhao:""
    }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(()=>{
      this.scriptOption1=DeviceEventEmitter.addListener("ApplyShopInfoUIlabels",_this.changeLabel)
      this.scriptOption2=DeviceEventEmitter.addListener("ApplyShopInfoUIcompanyInfo",_this.changeCompanyInfo)
    })
  }
  componentWillUnmount(){
    this.scriptOption1.remove()
    this.scriptOption2.remove()
  }
  changeLabel(label_list){
    _this.setState({
      label_list:label_list
    })
  }
  changeCompanyInfo(companyInfo){
    _this.setState({
      companyInfo:companyInfo
    })
  }

  submitAction(){

      if(_state.company_name==""){
        Alert.alert('温馨提示',"请输入企业名称",[{text: '确认'},])
        return false;
      }else if(_state.placeSelect=="请选择地区"||_state.placeSelect==""){
        Alert.alert('温馨提示',"请选择企业地址",[{text: '确认'},])
        return false;
      }else if(_state.address==""){
        Alert.alert('温馨提示',"请输入详细地址",[{text: '确认'},])
        return false;
      }else if(_state.label_list==""){
        Alert.alert('温馨提示',"请选择企业标签",[{text: '确认'},])
        return false;
      }else if(_state.contacts_name==""){
        Alert.alert('温馨提示',"请输入联系人姓名",[{text: '确认'},])
        return false;
      }else if(_state.contacts_phone==""){
        Alert.alert('温馨提示',"请选择联系电话",[{text: '确认'},])
        return false;
      }

      if(_state.type=="three"){
        if(_state.t_szhyImg==""){
          Alert.alert('温馨提示',"请上传营业执照",[{text: '确认'},])
          return false;
        }
      }else{
        if(_state.f_yyzzImg==""){
          Alert.alert('温馨提示',"请上传营业执照",[{text: '确认'},])
          return false;
        }else if(_state.f_zzjgzImg==""){
          Alert.alert('温馨提示',"请上传组织机构代码证",[{text: '确认'},])
          return false;
        }else if(_state.f_swdjzImg==""){
          Alert.alert('温馨提示',"请上传税务登记证",[{text: '确认'},])
          return false;
        }
      }

      if(_state.bank_licence==""){
        Alert.alert('温馨提示',"请上传开户许可证",[{text: '确认'},])
        return false;
      }
      // else if(_state.company_logo==""){
      //   Alert.alert('温馨提示',"请选择企业logo",[{text: '确认'},])
      //   return false;
      // }

    _navigator.navigate("ApplyShopInfoAdd",{option:_state})
      
  }
  openMycamera(type){
    _this.type=type
    ImagePicker.openPicker({
      width:300,
      height:300,
      cropping: true,
      includeBase64: true,
      // multiple: true
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
      switch(_this.type){
          case "three1":
            _this.setState({t_szhyImg:result.pic_url,zhizhao:result.pic_url})
          break;
          case "khxkz":
            _this.setState({bank_licence:result.pic_url})
          break;
          case "five1":
            _this.setState({f_yyzzImg:result.pic_url,zhizhao:result.pic_url})
          break;
          case "five2":
            _this.setState({f_zzjgzImg:result.pic_url})
          break;
          case "five3":
            _this.setState({f_swdjzImg:result.pic_url})
          break;
          default:
          // _this.setState({company_logo:result.pic_url})
          break ;
      }
    }else{
      Alert.alert('温馨提示',result.returnMsg,[{text: '确认'},])
    }
  }

  
  closeModal(){
    _this.setState({
      visible:false,
    })
  }

  getPalceSelect(place,proval,cityval,counval){
    _this.setState({
      placeSelect:place,
      province:proval,
      city:cityval,
      district:counval,
      visible:false
    })
  }
  openAddressModal(){
    _this.setState({visible:true})
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
    let AddressModalProps={
      visible:_state.visible,
      closeModal:_this.closeModal,
      getPalceSelect:_this.getPalceSelect,
      provinceId:_state.province,
      cityId:_state.city,
      countyId:_state.district
    };
    let ModalZtypeProps={
      visible:_state.visible2,
      confirm:(type)=>{
         _this.setState({visible2:false,type})
      },
      closeModal:()=>{
        _this.setState({visible2:false})
      }
    }
    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
       <AddressModal {...AddressModalProps}/>
       <ModalZtype {...ModalZtypeProps}/>
      <ScrollView contentContainerStyle={styles.containerStyle} ref={(ref)=>this.scroller=ref}  keyboardShouldPersistTaps={'handled'}>
           <View style={{width:width-212*scale,height:30*scale,alignItems:"center",marginTop:30*scale,flexDirection:"row"}}>
                <SmallCir />
                <SmallLine />
                <SmallCir />
                <View style={{width:(width-362*scale)/4,height:8*scale,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                  <SmallLine/>
                  <SmallLine backgroundColor="#c8c8c8"/>
                </View>
                <SmallCir num={3}/>
                <SmallLine backgroundColor="#c8c8c8"/>
                <SmallCir num={4}/>
                <SmallLine backgroundColor="#c8c8c8"/>
                <SmallCir num={5}/>
            </View>
            <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={text.lan10}>签订协议</Text>
                <Text style={text.lan10}>基本信息</Text>
                <Text style={text.hui10}>补充信息</Text>
                <Text style={text.hui10}>缴纳入住费</Text>
                <Text style={text.hui10}>等待审核</Text>
            </View>

            <View style={styles.interval}><Text style={text.hei12}>基本信息</Text></View>

       
       
        <View style={styles.inputBox}>
            <Text style={text.hei15}>企业名称</Text>
           <TextInputs maxLength={11}   style={styles.input}  
                    onChangeText={(text)=> _this.setState({company_name:text})} defaultValue={_this.state.company_name}
                    placeholder="请输入单位名称"/>
        </View>

        <TouchableOpacity style={styles.label} onPress={()=>_this.openAddressModal()}>
          <View style={styles.justify}>
            <Text style={text.hei15}>企业地址</Text>
            <Text style={[text.hui15,{marginLeft:20*scale}]}>{_state.placeSelect}</Text>
          </View>
           <Image source={require('../../images/next_demand.png')} style={styles.regicon}/>
        </TouchableOpacity>
        <View style={styles.inputBox}>
            <Text style={text.hei15}>详细地址</Text>
           <TextInputs maxLength={11}   style={styles.input} 
                    onChangeText={(text)=>_this.setState({address:text})} defaultValue={_this.state.address}
                    placeholder="请输入详细地址"/>
        </View>

        <TouchableOpacity style={[styles.label,{borderBottomWidth:0}]} onPress={()=>_navigator.navigate("LabelSelectCompany",{router:"ApplyShopInfo"})}>
          <View style={styles.justify}>
            <Text style={text.hei15}>企业标签</Text>
            <Text style={[text.hui15,{marginLeft:20*scale}]}>{_state.label_list?"已选择":"请选择"}</Text>
          </View>
           <Image source={require('../../images/next_demand.png')} style={styles.regicon}/>
        </TouchableOpacity>

        <View style={styles.interval}><Text style={text.hei12}>联系人</Text></View>

        <View style={[styles.label,{justifyContent:"flex-start"}]}>
          <Text style={text.hei15}>联系人</Text>
          <TextInputs maxLength={11}   style={styles.input} 
                    onChangeText={(text)=>_this.setState({contacts_name:text})} defaultValue={_this.state.contacts_name}
                    placeholder="请输入联系人" ref="contacts_name" 
                    // onFocus={()=>_this._onFocus('contacts_name')}
                  />
        </View>

        <View style={[styles.label,{borderBottomWidth:0,justifyContent:"flex-start"}]} >
           <Text style={text.hei15}>联系电话</Text>
           <TextInputs maxLength={11} keyboardType='numeric'  style={styles.input} 
                    onChangeText={(text)=>_this.setState({contacts_phone:text})} defaultValue={_this.state.contacts_phone}
                    placeholder="请输入联系电话" ref="contacts_phone" 
                    // onFocus={()=>_this._onFocus('contacts_phone')}
                    />
        </View>
        
         <View style={[styles.interval,{justifyContent:"space-between",flexDirection:"row",alignItems:"center"}]}>
          <Text style={{fontSize:12,color:color.font1}}>企业证件</Text>
          <Text style={text.hong12}>*所有证件需加盖公章</Text>
         </View>
         
           <TouchableOpacity style={styles.label} onPress={()=>_this.setState({visible2:true})}>
                <View style={styles.justify}>
                  <Text style={text.hei15}>证件类型</Text>
                  <Text style={[text.hui15,{marginLeft:20*scale}]}>{_state.type=="three"?"三证合一":"企业五证"}</Text>
                </View>
                <Image source={require('../../images/next_demand.png')} style={styles.regicon}/>
            </TouchableOpacity>

        
        {
          _state.type=="three"?
          <View style={{width:width,alignItems:"center"}}>

         
            <View style={styles.label}>
                <Text style={text.hei15}>营业执照</Text>  
                <TouchableOpacity activeOpacity={0.7} style={styles.inputRight} onPress={()=>_this.openMycamera("three1")}>
                    <Text style={text.hui15}>{_state.zhizhao?"已上传":"请上传"}</Text>
                  <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
                </TouchableOpacity>
            </View>

            
          </View>
        
          :

          <View style={{width:width,alignItems:"center"}}>

            <View style={styles.label}>
                <Text style={text.hei15}>营业执照</Text>  
                <TouchableOpacity activeOpacity={0.7} style={styles.inputRight} onPress={()=>_this.openMycamera("five1")}>
                    <Text style={text.hui15}>{_state.zhizhao?"已上传":"请上传"}</Text>
                  <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.label}>
                <Text style={text.hei15}>组织机构代码证</Text>  
                <TouchableOpacity activeOpacity={0.7} style={styles.inputRight} onPress={()=>_this.openMycamera("five2")}>
                    <Text style={text.hui15}>{_state.f_zzjgzImg?"已上传":"请上传"}</Text>
                  <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.label}>
                <Text style={text.hei15}>税务登记证</Text>  
                <TouchableOpacity activeOpacity={0.7} style={styles.inputRight} onPress={()=>_this.openMycamera("five3")}>
                    <Text style={text.hui15}>{_state.f_swdjzImg?"已上传":"请上传"}</Text>
                  <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
                </TouchableOpacity>
            </View>
        
            </View>
         }

   
        <View style={[styles.label,{borderBottomWidth:0}]}>
            <Text style={text.hei15}>开户许可证</Text>  
            <TouchableOpacity activeOpacity={0.7} style={styles.inputRight} onPress={()=>_this.openMycamera("khxkz")}>
                <Text style={text.hui15}>{_state.bank_licence?"已上传":"请上传"}</Text>
              <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
            </TouchableOpacity>
        </View>
        
        <View style={styles.interval}>
            <Text style={text.hei12}>企业介绍</Text>
        </View>

        {/* <View style={styles.label}>
            <Text style={text.hei15}>企业logo</Text>  
            <TouchableOpacity activeOpacity={0.7} style={styles.inputRight} onPress={()=>_this.openMycamera("logo")}>
                <Text style={text.hui15}>{_state.company_logo?"已上传":"请上传"}</Text>
              <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
            </TouchableOpacity>
        </View> */}

        <TouchableOpacity style={[styles.label,{borderBottomWidth:0}]} onPress={()=>_navigator.navigate("FillCompanyInfo")}>
          <View style={styles.justify}>
            <Text style={text.hei15}>企业简介</Text>
            <Text style={[text.hui15,{marginLeft:20*scale}]}>{_state.companyInfo?"已填写":"请填写"}</Text>
          </View>
           <Image source={require('../../images/next_demand.png')} style={styles.regicon}/>
        </TouchableOpacity>
      </ScrollView>
     
      </View>
    );
  }
  // _onFocus(refName) {
  //   setTimeout(()=> {
  //         let scrollResponder = this.scroller.getScrollResponder();
  //         scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]), 0, true);
  //       }, 100);
  //   }
};
