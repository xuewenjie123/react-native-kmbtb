'use strict';
import React, { Component, } from 'react';
import { View,Alert, Image, ScrollView,DeviceEventEmitter, TouchableOpacity, Text,StatusBar,TextInput,InteractionManager,BackHandler} from 'react-native';
import styles from './style'
import color from '../../constant/color';
import text from '../../constant/text';
import { width, height,scale } from '../../components/common/Dimensions';
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import {setHistory} from '../../constant/localHistory';
import {NavigationActions} from '../../components/common/navigation'

var _navigator,_this,_state,_props;
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent:"",
      records:[],
    }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      this.scriptOption = DeviceEventEmitter.addListener("SearchUI",this.getHisotryList)
      this.getHisotryList()
    });
  }
  //取历史记录
  getHisotryList(){
      getStorage("shopSearch",(error,data)=>{
          if(data){
            _this.setState({records:data.search})
          }
      })
  }

  componentWillUnmount(){
    this.scriptOption.remove()
  }

  //搜索
  _search(searchContent){
    _this.textInput.blur();
    const trim=(str)=>{
      return str.replace(/(^\s*)|(\s*$)/g,"");
    }
    if (searchContent!="") {
      //存储历史记录
      setHistory("shopSearch",searchContent)
      _navigator.navigate("SearchContent",{keywords:searchContent})
    }else {
      Alert.alert('温馨提示',"请输入您要搜索的内容",[{text: '确认'},])
    }
  }

  failFuc(){
    Alert.alert('温馨提示',"请检查您的网络",[{text: '确认'},])
  }
  //删除历史记录
  _deleteHistory(){
    removeStorage("shopSearch",()=>_this.setState({records:[]}))
  }
  //返回路由
  navigateBack(){
    _this.refs.textInput.blur();
    _navigator.dispatch(NavigationActions.back())
  }

  searchContentChange(searchContent){
    _this.setState({searchContent})
  }

  backRouter(){
    _this.textInput.blur();
    _navigator.dispatch(NavigationActions.back())
  }
  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator=_this.props.navigation;
    return (
      <View style={styles.wrapper}>
          
         <View style={styles.header}>
            <TouchableOpacity underlayColor='transparent'
            onPress={() => {_this.backRouter()}}>
                <Image style={{width: 44*scale, height: 44*scale,marginRight:25*scale}} source={require('../../images/back.png')}/>
            </TouchableOpacity>
            <View style={styles.input}>
                <TouchableOpacity style={styles.serachiconBox} onPress={()=>_this._search(_state.searchContent)}>
                   <Image source={require('../../images/home_head_search.png')} style={styles.search_icon}/>
                </TouchableOpacity>
                <TextInput 
                  ref={(ref)=>{_this.textInput=ref}}
                  underlineColorAndroid="transparent" 
                  style={styles.textInput} 
                  multiline = {true} 
                  onChangeText={(text)=> _this.searchContentChange(text)} 
                  value={_this.state.searchContent}
                  returnKeyType="search"
                  returnKeyLabel="搜索"
                  blurOnSubmit={true}
                  onSubmitEditing={()=>_this._search(_state.searchContent)}
                  />
            </View>
        </View>

         <View style={{width:width,height:60*scale,justifyContent:"center",paddingHorizontal:20*scale}}>
            <Text style={text.hei12}>历史搜索</Text>
        </View>

          {_state.records.length?
                <View style={styles.hisBox}>
                        {_state.records.map((item,index)=>(
                            <TouchableOpacity key={index} style={styles.similarBtn} underlayColor='transparent' onPress={()=>_this._search(item)}>
                            <Text numberOfLines={1} style={text.shenhui12}>
                                {item}
                            </Text>
                            </TouchableOpacity>
                        ))}
                </View>
          :null}
          {
              _state.records.length?
              <TouchableOpacity style={styles.clearBtn} underlayColor='transparent' onPress={()=>_this._deleteHistory()}>
                    <Text style={text.lan12}>清空历史记录</Text>
            </TouchableOpacity>
              :null
          }
           
        
      </View>
    )
  }
  
};
