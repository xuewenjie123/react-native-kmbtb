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
import Picker from 'react-native-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {realNameAuthentication} from '../../services/loginInfo'
import {uploadeFiles} from '../../services/offerPrice'
import {toastShort} from '../../constant/toast'
import {connect} from '../../components/common/connect';
import TextInputs from '../../components/common/TextInput'
import * as loginAction from '../../actions/loginAction'
var _navigator,_this,_state;
class RealNameInfo extends Component {

  constructor(props) {
    super(props);
    this.state={
      name:"",//姓名
      code:"",//身份证号码
      dateLong:"请选择",//有效期  
      IDpositive:"",//身份证正面
      IDside:"",//身份证反面
      person:"",//身份证手持照
      startTime:"",
      endTime:""
    }
  }
  componentDidMount(){
    _this.props.login({
      MySelfKey:this.props.nav.routes[this.props.nav.routes.length-1].key
    })
  }

  submitAction(){
      let {name,code,dateLong,IDpositive,IDside,person}=_state
      if(name==""){
        toastShort("请输入姓名")
        return false;
      }else if(code==""){
        toastShort("请输入身份证号码")
        return false;
      }else if(!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(code))){
        toastShort("请输入正确的身份证号码")
        return false
      }
      // else if(dateLong){
      //   Alert.alert('温馨提示',"请输入证件有限期",[{text: '确认'},])
      //   return false;
      // }
      else if(IDpositive==''){
        toastShort("请上传身份证正面照")
        return false;
      }else if(IDside==''){
        toastShort("请上传身份证背面照")
        return false;
      }else if(person==''){
        toastShort("请上传身份证手持照")
        return false;
      }else{
        realNameAuthentication(`real_name=${name}&card=${code}&face_card=${IDpositive}&back_card=${IDside}&hand_card=${person}&dateLong=${dateLong}`,_this.submitResult,_this.failFuc)
      }
  }

  submitResult(result){
      if(result.returnCode==200){
        DeviceEventEmitter.emit("MySelfUI")
        _navigator.navigate("RealNameSuc")
      }
  }

  failFuc(){
    Alert.alert('温馨提示',"网路异常请稍后再试",[{text: '确认'},])
  }
  openMycamera(num){
    if(num==1){
      _this.setState({load1:true})
    }else if(num==2){
      _this.setState({load2:true})
    }else if(num==3){
      _this.setState({laod3:true})
    }
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
        data.append("save_path", "1");
        uploadeFiles(data,_this.uploadeFilesResult)
    });
  }
  uploadeFilesResult(result){//上传图片结果
    if(result.returnCode==200){
        if(_this.num==1){
            _this.setState({
              load1:false,
              IDpositive:result.upload_url
            })
      }else if(_this.num==2){
            _this.setState({
              load2:false,
              IDside:result.upload_url
            })
      }else{
          _this.setState({
            laod3:false,
            person:result.upload_url
          })
      }
    }else{
      Alert.alert('温馨提示',result.returnMsg,[{text: '确认'},])
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
            <Image style={{width: 44*scale, height: 44*scale,marginRight:40*scale}} source={require('../../images/cancel2.png')}/>
            <Text style={{fontSize:12,color:"#fff"}}>上一步</Text>
          </View>
        </TouchableOpacity>
      ),
      title:"实名认证",
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this.submitAction()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>下一步</Text>
          </View>
        </TouchableOpacity>
      ),
    };

    return (
      <View style={styles.main}>
       <NavigatorTopBar {...NavigatorTopBarProps}/>
      <ScrollView  keyboardShouldPersistTaps={'handled'}>
      <View style={{backgroundColor: color.write,width:width,paddingHorizontal:20*scale,alignItems:"center"}}>
            <View style={{width:width-212*scale,height:30*scale,alignItems:"center",marginTop:30*scale,flexDirection:"row"}}>
              <SmallCir />
              <SmallLine />
              <SmallCir />
              <SmallLine backgroundColor="#c8c8c8"/>
              <SmallCir num={3}/>
            </View>
            <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={text.lan10}>签订协议</Text>
              <Text style={text.lan10}>基本信息</Text>
              <Text style={text.hui10}>等待审核</Text>
            </View>
            <View style={styles.inputBox}>
                <Text style={text.hei15}>真实姓名</Text>
              <TextInputs maxLength={11}  style={styles.input} 
                        onChangeText={(text)=> _this.setState({name:text})} defaultValue={_this.state.name}
                        placeholder="请输入姓名" placeholderTextColor='#c8c8c8'/>
            </View>
            <View style={styles.inputBox}>
                <Text style={text.hei15}>身份证号码</Text> 
              <TextInputs maxLength={18}  keyboardType='numeric'  style={styles.input}
                        onChangeText={(text)=> _this.setState({code:text})} defaultValue={_this.state.code}
                        placeholder="请输入身份证号码" placeholderTextColor='#c8c8c8'/>
            </View>
            {/* <View style={styles.label}>
                <Text style={text.hei15}>证件有限期</Text>  
                <TouchableOpacity activeOpacity={0.7} style={styles.inputRight} onPress={()=>{this._showTimePicker()}}>
                    <Text style={text.hui15}>{_state.dateLong}</Text>
                  <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
                </TouchableOpacity>
            </View> */}
            <View style={styles.label}>
                <Text style={text.hei15}>身份证正面</Text>  
                <TouchableOpacity activeOpacity={0.7} style={styles.inputRight} onPress={()=>_this.openMycamera("1")}>
                    <Text style={text.hui15}>{_state.IDpositive?"已上传":_state.load1?"上传中，请勿做其他操作":"请上传"}</Text>
                  <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.label}>
                <Text style={text.hei15}>身份证背面</Text>  
                <TouchableOpacity activeOpacity={0.7} style={styles.inputRight} onPress={()=>{_this.openMycamera("2")}}>
                    <Text style={text.hui15}>{_state.IDside?"已上传":_state.load2?"上传中，请勿做其他操作":"请上传"}</Text>
                  <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.label}>
                <Text style={text.hei15}>身份证手持照</Text>  
                <TouchableOpacity activeOpacity={0.7} style={styles.inputRight} onPress={()=>{_this.openMycamera("3")}}>
                    <Text style={text.hui15}>{_state.person?"已上传":_state.load3?"上传中，请勿做其他操作":"请上传"}</Text>
                  <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
                </TouchableOpacity>
            </View>

         </View>
         <View style={{width:width,paddingHorizontal:20*scale,paddingTop:10*scale}}>
           <Text style={styles.textA}>1. 仅支持JPG、PNG图片文件，且文件小于2MB；</Text>
           <Text style={styles.textA}>2. 扫描件需包含身份证正面和背面两面信息；</Text>
           <Text style={styles.textA}>3. 必须为清晰的彩色原件扫描件或数码照；</Text>
           <Text style={styles.textA}>4. 身份证必须在有效期内</Text>
         </View>
      </ScrollView>
     
      </View>
    );
  }
  // _showTimePicker() {
  //   let oldYear = [],
  //       newYear = [],
  //       yearWord = ["年"],
  //       oldMonths = [],
  //       newMonths = [],
  //       monthsWord = ["月"],
  //       oldDays = [],
  //       newDays = [],
  //       dayssWord = ["日"],
  //       connect = ["~"],
  //       between =new Date().getFullYear()-2014,
  //       nowMonth = new Date().getMonth()+2;
  //   for(let i=0;i<between;i++){
  //       oldYear.push(i+2015);
  //       newYear.push(i+2015);
  //   }
  //   for(let i=1;i<13;i++){
  //       if(i<10){
  //         oldMonths.push("0"+i);  
  //         newMonths.push("0"+i);
  //       }else{
  //         oldMonths.push(i);
  //         newMonths.push(i);
  //       }
  //   }
  //   for(let i=1;i<32;i++){
  //     if(i<10){
  //       oldDays.push("0"+i);  
  //       newDays.push("0"+i);
  //     }else{
  //       oldDays.push(i);  
  //       newDays.push(i);
  //     }
  //   }
  //   let pickerData =[oldYear,yearWord, oldMonths,monthsWord, oldDays,dayssWord,connect,newYear,yearWord,newMonths,monthsWord,newDays,dayssWord]
  //   let date = new Date();
  //   console.log(pickerData)
  //   console.log("wo lai show le ")
  //   Picker.init({
  //       pickerData,
  //       pickerConfirmBtnText:"完成",
  //       pickerCancelBtnText:"取消",
  //       pickerCancelBtnColor:[153,153,153,1],
  //       pickerConfirmBtnColor:[71,145,255,1],
  //       pickerToolBarBg:[247,247,249,1],
  //       pickerBg:[246,246,246,1],
  //       pickerFontSize:13,
  //       selectedValue:[date.getFullYear(),"年",date.getMonth()+1,"月",date.getDate(),"日",4,date.getFullYear(),"年",date.getMonth()+1,"月",date.getDate(),"日"],
  //       pickerTitleText: '选择时间段',
  //       wheelFlex: [15,7,10,7,10,7,10,15,7,10,7,10,10],
  //       onPickerConfirm: pickedValue => {
  //           console.log( pickedValue);
  //           let first = pickedValue.join('').split("~")[0].replace(/年|月/g, "/").replace(/日/g,"")
  //           let second =pickedValue.join('').split("~")[1].replace(/年|月/g, "/").replace(/日/g,"")
  //           console.log(first)
  //           console.log(second)
  //           _this.setState({
  //               startTime:first,
  //               endTime:second,
  //               dateLong:first+"~"+second
  //           })
           
  //       },
  //       onPickerCancel: pickedValue => {
  //           Picker.hide()
  //       },
  //       onPickerSelect: pickedValue => {
  //         let targetValue = [...pickedValue];
  //         if(parseInt(targetValue[2]) === 2){
  //             if(targetValue[0]%4 === 0 && targetValue[4] > 29){
  //               Alert.alert('温馨提示',"本月只有29天，请选择29号",[{text: '确认'},])
  //                 targetValue[4] = 29;
  //             }
  //             else if(targetValue[0]%4 !== 0 && targetValue[4] > 28){
  //               Alert.alert('温馨提示',"本月只有28天，请选择28号",[{text: '确认'},])
  //                 targetValue[4] = 28;
  //             }
  //         }
  //         if(parseInt(targetValue[9]) === 2){
  //             if(targetValue[7]%4 === 0 && targetValue[11] > 29){
  //               Alert.alert('温馨提示',"本月只有29天，请选择29号",[{text: '确认'},])
  //                 targetValue[11] = 29;
  //             }
  //             else if(targetValue[7]%4 !== 0 && targetValue[11] > 28){
  //               Alert.alert('温馨提示',"本月只有28天，请选择28号",[{text: '确认'},])
  //                 targetValue[11] = 28;
  //             }
  //         }

  //         if(targetValue[2] in {4:1, 6:1, 9:1, 11:1} && targetValue[4] > 30){
  //             Alert.alert('温馨提示',"本月只有30天，请选择30号",[{text: '确认'},])
  //             targetValue[4] = 30;                         
  //         }
  //         if(targetValue[9] in {4:1, 6:1, 9:1, 11:1} && targetValue[11] > 30){
  //             Alert.alert('温馨提示',"本月只有30天，请选择30号",[{text: '确认'},])
  //             targetValue[11] = 30;
  //         }
  //         var firstSelect = new Date(targetValue.join('').split("~")[0].replace(/年|月/g, "/").replace(/日/g,""))
  //         var secondSelect = new Date(targetValue.join('').split("~")[1].replace(/年|月/g, "/").replace(/日/g,""))
  //         if(firstSelect>secondSelect){
  //             targetValue[7]=targetValue[0];
  //             targetValue[9]=targetValue[2];
  //             targetValue[11]=targetValue[4];
  //             Alert.alert('温馨提示',"您选择的时间段有误，请重新选择",[{text: '确认'},])
  //         }
 
  //         // forbidden some value such as some 2.29, 4.31, 6.31...
  //         if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
  //             // android will return String all the time，but we put Number into picker at first
  //             // so we need to convert them to Number again
  //             targetValue.map((v, k) => {
  //                 if(k !== 3){
  //                     targetValue[k] = parseInt(v);
  //                 }
  //             });
  //             Picker.select(targetValue);
  //             pickedValue = targetValue;
  //         }
  //       }
  //   });
  //   Picker.show();
  // }
};
export default connect((state)=>({
  nav:state.StackReducer
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(RealNameInfo)