import React, { PureComponent } from 'react';
import {Alert, FlatList,Image, TouchableOpacity, Text,DeviceEventEmitter, View, TextInput ,ToastAndroid} from 'react-native';
import styles from './styles'
import text from '../../constant/text'
import { width, height,scale } from '../../components/common/Dimensions';
import NavigatorTopBar from '../../components/common/NavigatorTopBar'
import {NavigationActions} from '../../components/common/navigation'
import {getAddressList,updateReceivingAddress,delReceivingAddress,setDefaultAddress} from '../../services/myAdress'
import Lost from '../../components/common/Lost'//丢失页面
import Naviwait from '../../components/common/NavWait'
let _this,_navigator,_state;
var dataContainer=[
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:true},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false},
  {name:"文龙",tel:18929394832,address:"四惠东可是大家快来飞机斯库拉多夫",default:false}
]
export default class MyAddress extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataSource : [],
            refreshing:false,
            failLoad:true,
            loading:true
        }
    }
    
    _fetchUI(){
      getAddressList("",_this.getListResult,_this.FailFuc)
    }
    getListResult(result){
      if(result.returnCode==200){
        _this.setState({
          loading:false,
          dataSource:result.address_list
        })
      }else{
        _this.FailFuc()
      }
    }
    FailFuc(){
      _this.setState({
        loading:false,
        failLoad:false
      })
    }
    componentDidMount() {
      this.subscript=DeviceEventEmitter.addListener("MyAddressUI",_this._fetchUI)
    
      _this._fetchUI()
    }
    componentWillUnmount(){
      this.subscript.remove()
    }
    // 自定义分割线
    _renderItemSeparatorComponent = ({highlighted}) => (
        <View style={{ height:1, backgroundColor:'#dcdcdc' }}></View>
    );

    render() {
      _this = this;
      _props=this.props;
      _state = _this.state;
      _navigator = _this.props.navigation;
      let NavigatorTopBarProps = {
        visible: true,
        title: "添加地址",
        leftView: (
          <TouchableOpacity style={{flex: 1}}
            underlayColor='transparent'
            onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
            <View style={{flex: 1, paddingLeft:20*scale,flexDirection: 'row',alignItems: 'center'}}>
              <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
            </View>
          </TouchableOpacity>
        )
      }
        return(
          <View style={styles.main}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            {
              _state.dataSource.length?
              <FlatList
                  style={{flex:1}}
                  contentContainerStyle={{width:width,alignItems:"center",backgroundColor: "#FFFFFF"}}
                  ref={ ref => this.flatList = ref }
                  data={ this.state.dataSource }
                  extraData={ this.state }
                  keyExtractor={ (item, index) => index}
                  renderItem={ this._renderItem }
                  ItemSeparatorComponent={ this._renderItemSeparatorComponent }
              />
              :
              _state.loading?<Naviwait/>:
              <Lost title={_state.failLoad?"快来添加您的地址吧":"您的网络不给力哦~~~"}
                  imgUrl={require('../../images/loadFail.gif')}
                  imgStyle={{width:240*scale,height:240*scale}}    
              />
            }
           
            <TouchableOpacity underlayColor='transparent' activeOpacity={0.9} style={styles.addBtn} onPress={()=>_navigator.navigate("MyAddressAdd")}>
              <Text style={text.bai15}>+ 添加地址</Text>
            </TouchableOpacity>
          </View>
            
        );
    }
    backFetch(item){
      if(_this.props.navigation.state.params){
        DeviceEventEmitter.emit("ConfirmOrderAddressUI",item)
        _navigator.dispatch(NavigationActions.back())
      }
    }
    _renderItem({item,index}){
      let {address_id,consignee,mobile,country,province,city,district,address,default_flag,country_name,province_name,city_name,district_name}=item
      return(
        <TouchableOpacity style={styles.itemStyle} activeOpacity={0.8} onPress={()=>{_this.backFetch(item)}}>
            <View style={styles.itemR}>
              <View style={styles.itemRT}>
                <View style={[styles.itemF,{marginBottom:20*scale}]}>
                  <Text style={[text.hei12,{marginRight:20*scale}]}>{consignee}</Text>
                  <Text style={text.hei12}>{mobile}</Text>
                </View>
                <View style={styles.itemF}>
                 <TouchableOpacity onPress={()=>_navigator.navigate("MyAddressAdd",{item})}>
                    <Text style={[text.lan12,{marginRight:40*scale}]}>编辑</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>_this.deleteAction(address_id)}>
                    <Text style={text.lan12}>删除</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:10*scale}}>
                <Text style={text.hei12} numberOfLines={1}>{country_name}{province_name}{city_name}{district_name}{address}</Text>
                  <TouchableOpacity style={{flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}} onPress={()=>_this.setDefault(address_id)} disabled={item.default}>
                      {
                        default_flag==1?
                        <Image source={require('../../images/selected.png')} style={styles.selectedImg}/>
                        :<View style={styles.noSelectImg}></View>
                      }
                    <Text style={[text.hei12,{marginLeft:10*scale}]}>{default_flag==1?"默认地址":"设为默认"}</Text>
                  </TouchableOpacity>
              </View>
            </View>
        </TouchableOpacity>
      )
    }
    //设为默认方法
    setDefault(address_id){
      setDefaultAddress(`address_id=${address_id}`,_this.setDefaultResult,_this.failFucSet)
    }
    //设为默认结果
    setDefaultResult(result){
        if(result.returnCode==200){
          _this._fetchUI()
        }
    }
    //删除动作
    deleteAction(address_id){
      Alert.alert("温馨提示","确定要删除吗？",[{text:"确定",onPress:()=>{
        delReceivingAddress(`address_id=${address_id}`,_this.delResult,_this.FailFucSet)
      }},{text:"取消"}])
    }
    //网路失败
    FailFucSet(){
      Alert.alert("温馨提示","网络异常，请稍后再试")
    }
    //删除结果
    delResult(result){
      if(result.returnCode==200){
        _this._fetchUI()
      }
    }
}
