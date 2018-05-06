import React, { Component } from 'react';
import { Alert, View,TouchableOpacity,Image,ToastAndroid,Text, ScrollView ,InteractionManager,DeviceEventEmitter,findNodeHandle, Platform} from 'react-native'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import styles from './style'
import AddressModal from '../../components/citySelect/AddressModal'
import color from '../../constant/color'
import text from '../../constant/text'
import Picker from 'react-native-picker';
import {date2str} from '../../constant/constants'
import ModalSelectType from '../../components/common/ModalSelectType2'
import {submitRequire} from '../../services/demand'
import {NavigationActions} from '../../components/common/navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-crop-picker';
import {toastShort} from '../../constant/toast'
import TextInputs from '../../components/common/TextInput'
import {uploadeFiles} from '../../services/offerPrice'

var _this,_state,_navigator;
 //轮播图假数据
export default class PublishDemand extends Component {
  constructor(props){
        super(props)
        this.state={
          placeSelect:"",//送货地址
          provinceId:"",//省ID、
          cityId:"",//城市ID
          countyId:"",//区级id
          visible:false,//城市modal
          visible2:false,//发票类型modal
          name:"",//名称
          billType:"增值税普通发票",
          dateShowText:"",//截止日期
          addressDetail:"",//详细地址
          goodsList:[],//货品清单
          label_text:"",//标签名
          label_id:"",//标签id
          invoice_info:{},//发票信息
          invoice_type:2,//发票类型
          open:false,//是否开具发票
          InfoFill:false,//是否填写发票信息
          newTime:"",//截止日期时间戳
          province:"",//省
          municipality:"",//市
          county:"",//区
          desc_text:"",//备注
          otherRequest:"",//其他要求
          upImgs:[]
        }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {

      //用户添加货品清单的注册事件
      this.scriptOption1=DeviceEventEmitter.addListener("PublishDemandUIgoods",(json)=>{
        // console.log("我进来DeviceEventEmitter的事件了")
        if(_this.lastBackPressed && _this.lastBackPressed + 1000 >= Date.now()){
          // console.log("我阻止了又一次触发这个事件")
          return false;
        }
        _this.lastBackPressed = Date.now()

        if(json.onoff){
          _state.goodsList.push(json.goodsInfo)
          _this.setState({goodsList:_state.goodsList})
        }else{
          _state.goodsList.splice(json.number,1,json.goodsInfo)
          _this.setState({goodsList:_state.goodsList})
        }
      })
      //用户选择标签的注册事件
      this.scriptOption2=DeviceEventEmitter.addListener("PublishDemandUIlabels",this.updateUIlabels)
      //用户填写发票的更新事件
      this.scriptOption3=DeviceEventEmitter.addListener("PublishDemandUIbills",this.updateUIbill)
    });
  }

  updateUIbill(json){
     json.invoice_type=_state.invoice_type
      _this.setState({
        invoice_info:json,
        InfoFill:true
      })
  }

  updateUIlabels(json){
      _this.setState({label_id:json.labelId,label_text:json.label_text})
  }
  updateUIgoods(json){
    // json.invoice_type=_state.invoice_type
    console.log(json)
   
  }

  deleteUIgoods(index){
    _state.goodsList.splice(index,1)
    _this.setState({goodsList:_state.goodsList})
  }

  componentWillUnmount(){
    this.scriptOption1.remove()
    this.scriptOption2.remove()
    this.scriptOption3.remove()
  }

  closeModal(){
      _this.setState({
        visible:false,
        visible2:false
      })
  }

  //获取用户选择的地址
  getPalceSelect(place,proval,cityval,counval,province,municipality,county){
    _this.setState({
      placeSelect:place,
      provinceId:proval,
      cityId:cityval,
      countyId:counval,
      province,
      municipality,
      county,
      visible:false
    })
  }

  componentWillUnmount(){
    this.timer&&clearTimeout(this.timer)
  }

  openAddressModal(){
    _this.setState({visible:true})
  }

  openChange(){
    _this.setState({
      open:!_state.open
    })
    
  }
  _submit(){
    console.log(_this.lastBackPressed && _this.lastBackPressed + 1500 >= Date.now())
    if(_this.lastBackPressed && _this.lastBackPressed + 1500 >= Date.now()){
      toastShort("您的操作过于频繁，请稍后再试")
      return false;
    }
    _this.lastBackPressed = Date.now();

    let {name,label_id,newTime,province,municipality,county,addressDetail,desc_text,goodsList,open,invoice_type,invoice_info,placeSelect,InfoFill,otherRequest}=_state
    let invoice=open?1:0
    if(!name){
      Alert.alert('温馨提示',"请输入名称",[{text: '确认'},])
      return false;
    }else if(!label_id){
      Alert.alert('温馨提示',"请选择标签",[{text: '确认'},])
      return false;
    }else if(!newTime){
      Alert.alert('温馨提示',"请选择截止日期",[{text: '确认'},])
      return false;
    }else if(!placeSelect){
      Alert.alert('温馨提示',"请选择送货地址",[{text: '确认'},])
      return false;
    }else if(!addressDetail){
      Alert.alert('温馨提示',"请输入详细地址",[{text: '确认'},])
      return false;
    }else if(!goodsList.length){
      Alert.alert('温馨提示',"请添加货品清单",[{text: '确认'},])
      return false;
    }else if(invoice==1){
      if(!InfoFill){
        Alert.alert('温馨提示',"请填写发票信息",[{text: '确认'},])
        return false;
      }
    }
    // (params)
    let require_list=goodsList.map((item,i)=>{
       return JSON.stringify(item)
    })
    let upPhpImg = _state.upImgs.join("|")
    let Strinfo=JSON.stringify(invoice_info)

    let params=`name=${name}&label_id=${label_id}&end_time=${newTime}&province=${province}&municipality=${municipality}&county=${county}&area=${addressDetail}&invoice=${invoice}&invoice_type=${invoice_type}&other_require=${otherRequest}&require_list=[${require_list}]&invoice_info=${Strinfo}&require_images=${upPhpImg}`
    
    submitRequire(params,_this.submitRequireResult,_this.FailFunc)
  }

  submitRequireResult(result){
    // const resetAction = NavigationActions.reset({
    //   index:0,
    //   actions:[NavigationActions.navigate({ routeName: 'Demand',params:{option:"Find"}})]
    // })
    const resetAction = NavigationActions.reset({
      index:1,
      actions:[
        NavigationActions.navigate({ routeName:'MySelf',params:{router:"我的"}}),
        NavigationActions.navigate({ routeName:'MyPublish'})
      ]
    })
    if(result.returnCode==200){
      Alert.alert('温馨提示',"发布成功",[{text: '确认', onPress: () =>{
        _navigator.dispatch(resetAction)
        // _navigator.navigate('MyPublish')
      }},])
    }else{
      Alert.alert('温馨提示',result.returnMsg,[{text: '确认', onPress: () =>{}},])
    }
  }

  FailFunc(){
    Alert.alert('温馨提示',"请检查您的网络",[{text: '确认', onPress: () =>{}},])
  }
  render() {
    // console.log("render")
    // console.log(this.state.goodsList)
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
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/cannel.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      title:"发布需求",
      rightView: (
        <TouchableOpacity style={{flex: 1,justifyContent: "center"}}
          underlayColor='transparent'
          onPress={() => {_this._submit()}}>
          <View style={{flex: 1, paddingRight: 12,flexDirection: 'row',alignItems: 'center',justifyContent: "flex-end"}}>
              <Text style={{fontSize:12,color:"#fff"}}>提交</Text>
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

    let ModalSelectTypeProps={//发票选择
      visible:_state.visible2,
      confirm:(billType,invoice_type)=>{
         _this.setState({visible2:false,billType,invoice_type,invoice_info:{},InfoFill:false})
      },
      closeModal:()=> _this.setState({visible2:false})
    }
    return (
      <View style={styles.main}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        <AddressModal {...AddressModalProps}/>
        <ModalSelectType {...ModalSelectTypeProps}/>
        {
          Platform.OS=="android"?
          <ScrollView ref={"scroller"} keyboardShouldPersistTaps={'handled'} contentContainerStyle={{width:width,alignItems:"center",backgroundColor:color.write}} >
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
      <View style={{width:width,alignItems:"center",backgroundColor:color.write}}>
    <View style={styles.label}>
            <Text style={text.hei15}>名称</Text>
            <TextInputs  
            style={{flex:1,padding:0,paddingLeft:40*scale}}
            placeholder={"请填写名称"}
            onFocus={()=>{Picker.hide()}}
            onChangeText={(text) => _this.setState({name:text})}
            value={_state.name}/>
        </View>
     

        <TouchableOpacity style={styles.label} onPress={()=>{_navigator.navigate("LabelSelectDemand");Picker.hide()}}>
          <View style={{flexDirection:"row"}}>
            <Text style={text.hei15}>标签</Text>
            <Text style={[text.hei15,{marginLeft:40*scale}]}>{_state.label_text}</Text>
          </View>
           <Image source={require('../../images/next_demand.png')} style={styles.regicon}/>
        </TouchableOpacity>
     
        <TouchableOpacity style={styles.label} onPress={()=>_this._showTimePicker()}>
          <View style={{flexDirection:"row"}}>
            <Text style={text.hei15}>截止日期</Text>
            <Text style={[text.hei15,{marginLeft:40*scale}]}>{_state.dateShowText}</Text>
          </View>
           <Image source={require('../../images/next_demand.png')} style={styles.regicon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.label} onPress={()=>_this.openAddressModal()}>
          <View style={{flexDirection:"row"}}>
            <Text style={text.hei15}>送货地址</Text>
            <Text style={[text.hei15,{marginLeft:40*scale}]}>{_state.placeSelect}</Text>
          </View>
           <Image source={require('../../images/next_demand.png')} style={styles.regicon}/>
        </TouchableOpacity>

        <View style={styles.label}>
            <Text style={text.hei15}>详细地址</Text>
            <TextInputs  
            style={{flex:1,padding:0,paddingLeft:40*scale}}
            placeholder={"请输入详细地址"}
            onFocus={()=>{Picker.hide()}}
            onChangeText={(text) => _this.setState({addressDetail:text})}
            value={_state.addressDetail}/>
        </View>

        <View style={[styles.label,{borderBottomWidth:0}]}>
            <Text style={text.hei15}>备注</Text>
            <TextInputs  
            style={{flex:1,padding:0,paddingLeft:40*scale}}
            placeholder={"请输入备注"}
            onFocus={()=>{Picker.hide()}}
            returnKeyType="done"
            onChangeText={(text) => _this.setState({desc_text:text})}
            value={_state.desc_text}/>
        </View>

        <View style={styles.interval}>
           <Text style={styles.text2}>货品清单</Text>
        </View>

      {_state.goodsList.length?_state.goodsList.map((item,i)=>(
        <View style={[styles.label,{borderBottomWidth:0}]} key={i}>
            <Text style={text.hei15}>货品名称: {item.good_name}</Text>
            <View style={styles.editBox}>
              <TouchableOpacity 
              style={{alignItems:"center",justifyContent:"center"}}
              onPress={()=>{_navigator.navigate("AddGoods",{goodsName:item.good_name,goodsSpec:item.size,goodsPin:item.brand,goodsDan:item.unit,goodsNum:item.num,goodsId:item.good_id,remark:item.remark,rowID:i});Picker.hide()}}>
                  <Text style={text.lan15}>编辑</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={{alignItems:"center",justifyContent:"center"}}
              onPress={()=>{_this.deleteUIgoods(i)}}>
                <Text style={text.hong15}>删除</Text>
              </TouchableOpacity>
            </View>
        </View>
      )):null}
        <TouchableOpacity style={[styles.interval,{alignItems:"center",flexDirection:"row"}]} onPress={()=>_navigator.navigate("AddGoods")}>
            <View>
              <Image source={require('../../images/addCir.png')} style={{width:30*scale,height:30*scale}}/>
              <Image source={require('../../images/cirAdd.png')} style={{width:16*scale,height:16*scale,position:"absolute",top:7*scale,left:7*scale}}/>
            </View> 
            <Text style={{fontSize:10,color:color.bluebg,marginLeft:10*scale}}>添加货品</Text>
        </TouchableOpacity>

        <View style={styles.interval}>
           <Text style={styles.text2}>其他信息</Text>
        </View>

    

        <View style={styles.label}>
             
                  <Text style={text.hei15}>开具发票</Text>
                  <TouchableOpacity activeOpacity={0.7} style={{height:99*scale,justifyContent:"center",backgroundColor:color.write}} onPress={()=>_this.openChange()}>
                    {
                      _state.open?
                      <Image source={require('../../images/opend.png')} style={{width:94*scale,height:50*scale}}/>
                      :
                      <Image source={require('../../images/closed.png')} style={{width:94*scale,height:50*scale}}/>
                    }
                  </TouchableOpacity>
        </View>
   
    {
      _state.open?
      <View>
        <View style={styles.label}>
              <Text style={text.hei15}>发票类型</Text>
              <TouchableOpacity activeOpacity={0.7} style={{height:99*scale,flexDirection:"row",alignItems:"center",paddingLeft:20}} onPress={()=>{_this.setState({visible2:true})}}>
                  <Text style={text.hei15}>{_state.billType}</Text>
                  <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
              </TouchableOpacity>
        </View>
        <View style={styles.label}>
              <Text style={text.hei15}>发票信息</Text>
              <TouchableOpacity activeOpacity={0.7} style={{height:99*scale,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} onPress={()=>{_navigator.navigate('FillBill',{invoice_info:_state.invoice_info,invoice_type:_state.invoice_type,router:"PublishDemand"});Picker.hide()}}>
                  <Text style={text.hei15}>{_state.InfoFill?"编辑":"请填写"}</Text>
                  <Image source={require('../../images/next_demand.png')} style={{marginLeft:20*scale,width:14*scale,height:26*scale}}/>
              </TouchableOpacity>
        </View>
       
      </View>
      :null
    }
    

        <View style={styles.label}>
            <Text style={text.hei15}>其他要求</Text>
            <TextInputs  
            style={{flex:1,padding:0,paddingLeft:40*scale}}
            placeholder={"请输入要求"}
            // ref="otherRequest" onFocus={()=>_this._onFocus('otherRequest')}
            onChangeText={(text) => _this.setState({otherRequest:text})}
            defaultValue={_state.otherRequest}/>
        </View>

        <TouchableOpacity style={[styles.label,{borderBottomWidth:0}]} onPress={()=>{_this.openMycamera();Picker.hide()}}>
          <View style={{flexDirection:"row"}}>
            <Text style={text.hei15}>上传图片</Text>
            <Text style={[text.hui15,{marginLeft:40*scale}]}>{_state.upImgs.length?"已上传":"未上传"}</Text>
          </View>
           <Image source={require('../../images/next_demand.png')} style={styles.regicon}/>
        </TouchableOpacity>
      </View>
    )
  }
  // _onFocus(refName) {
  //   setTimeout(()=> {
  //       let scrollResponder = this.scrollView.getScrollResponder();
  //       scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]), 0, true);
  //     }, 100);
  // }

  openMycamera(type){
    _this.type=type
    ImagePicker.openPicker({
      width:300,
      height:300,
      // cropping: true,
      includeBase64: true,
      multiple: true
    }).then(image => {
      console.log(image)
     
      image.forEach(element => {
        let data = new FormData();
        let name = element.path.split("/")
        let file = { uri: element.path, type: "multipart/form-data", name: name[name.length-1] };
        data.append("picture", file);
        data.append("save_path", "4");
        uploadeFiles(data,_this.uploadeFilesResult)
      });
     
    });
  }
  uploadeFilesResult(result){//上传图片结果
    console.log(_state.upImgs)
    if(result.returnCode==200){
      _state.upImgs.push(result.upload_url)
      _this.setState({upImgs:_state.upImgs})
    }else{
      Alert.alert('温馨提示',result.returnMsg,[{text: '确认'},])
    }
  }

  _showTimePicker() {
    let oldYear = [],
        oldMonths = [],
        oldDays = [],
        hours = [],
        minutes=[],
        seconds=[],
        between =new Date().getFullYear()-2014,
        nowMonth = new Date().getMonth()+2;
    for(let i=0;i<between;i++){
        oldYear.push(i+2015);
    }
    for(let i=1;i<13;i++){
        oldMonths.push(i);
    }
    for(let i=1;i<32;i++){
        oldDays.push(i);  
    }
    for(let i=0;i<24;i++){
      hours.push(i<10?"0"+i:i)
    }
    for(let i=0;i<60;i++){
      minutes.push(i<10?"0"+i:i)
      seconds.push(i<10?"0"+i:i)
    }


    let pickerData =[oldYear,["年"], oldMonths,["月"], oldDays,["日"],hours,["时"],minutes,["分"],seconds,["秒"]]
    let date = new Date();
    // console.log(pickerData)

    Picker.init({
        pickerData,
        pickerConfirmBtnText:"完成",
        pickerCancelBtnText:"取消",
        pickerCancelBtnColor:[153,153,153,1],
        pickerConfirmBtnColor:[71,145,255,1],
        pickerToolBarBg:[247,247,249,1],
        pickerBg:[246,246,246,1],
        pickerFontSize:13,
        selectedValue:[date.getFullYear(),"年",date.getMonth()+1,"月",date.getDate(),"日"],
        pickerTitleText:'选择时间',
        wheelFlex:[4,1,4,1,4,1,4,1,4,1,4,1],
        onPickerConfirm: pickedValue => {

              let dataShowText=pickedValue.join('').replace(/年|月/g, "/").replace(/日/g," ").replace(/时/g,":").replace(/分/g,":").replace(/秒/g,"")
              // date2str(new Date(dataShowText),"yyyy年MM月dd日")

              _this.setState({
                dateShowText:pickedValue,
                newTime:Date.parse(new Date(dataShowText))/1000
              })
        },
        onPickerCancel: pickedValue => {
           Picker.hide()
        },
        onPickerSelect: pickedValue => {
            let targetValue = [...pickedValue];
            if(parseInt(targetValue[2]) === 2){//
                if(targetValue[0]%4 === 0 && targetValue[4] > 29){
                    Alert.alert("温馨提示","本月只有29天，请选择29号",[{text:"确认",onPress:()=>{}}])
                    targetValue[4] = 29;
                }
                else if(targetValue[0]%4 !== 0 && targetValue[4] > 28){
                     Alert.alert("温馨提示","本月只有28天，请选择28号",[{text:"确认",onPress:()=>{}}])
                    targetValue[4] = 28;
                }
            }
           
            if(targetValue[2] in {4:1, 6:1, 9:1, 11:1} && targetValue[4] > 30){
                Alert.alert("温馨提示","本月只有30天，请选择30号",[{text:"确认",onPress:()=>{}}])
                targetValue[4] = 30;                         
            }

            // forbidden some value such as some 2.29, 4.31, 6.31...
            if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                // android will return String all the time，but we put Number into picker at first
                // so we need to convert them to Number again
                targetValue.map((v, k) => {
                    if(k !== 3){
                        targetValue[k] = parseInt(v);
                    }
                });
                Picker.select(targetValue);
                pickedValue = targetValue;
            }
           
        }
    });
      Picker.show();
  }

}



