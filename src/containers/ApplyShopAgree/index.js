'use strict';
import React, { Component, } from 'react';
import { ScrollView, Alert, View, Image,DeviceEventEmitter, Text,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './styles'
import NavigatorTopBar from '../../components/common/NavigatorTopBar';
import color from '../../constant/color';
import text from '../../constant/text'
import {NavigationActions} from '../../components/common/navigation'
import {getStorage,setStorage,removeStorage} from '../../constant/storage';
import { width, height,scale } from '../../components/common/Dimensions';
import SmallCir from '../../components/common/SmallCir'
import SmallLine from '../../components/common/SmallLine'
import {connect} from '../../components/common/connect';
import * as loginAction from '../../actions/loginAction'
var _navigator,_this,_state;
class ApplyShopAgree extends Component {
  constructor(props) {
    super(props);
    this.state={
      select:false
    }
  }
  componentDidMount(){
    _this.props.login({
      MySelfKey:this.props.nav.routes[this.props.nav.routes.length-1].key
    })
  }

  render() {
    _this = this;
    _state=this.state;
    _navigator = this.props.navigation;
    let NavigatorTopBarProps={
      visible:true,
      title:"申请开店",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.dispatch(NavigationActions.back())}}>
          <View style={{flex: 1, paddingLeft: 12,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 44*scale, height: 44*scale,}} source={require('../../images/back.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
    };

    return (
      <View style={styles.main}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            <View style={{width:width-212*scale,height:30*scale,alignItems:"center",marginTop:30*scale,flexDirection:"row"}}>
                <SmallCir />
                <View style={{width:(width-362*scale)/4,height:8*scale,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                  <SmallLine/>
                  <SmallLine backgroundColor="#c8c8c8"/>
                </View>
                <SmallCir num={2}/>
                <SmallLine backgroundColor="#c8c8c8"/>
                <SmallCir num={3}/>
                <SmallLine backgroundColor="#c8c8c8"/>
                <SmallCir num={4}/>
                <SmallLine backgroundColor="#c8c8c8"/>
                <SmallCir num={5}/>
            </View>
            <View style={{width:width-160*scale,height:70*scale,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={text.lan10}>签订协议</Text>
              <Text style={text.hui10}>基本信息</Text>
              <Text style={text.hui10}>补充信息</Text>
              <Text style={text.hui10}>缴纳入住费</Text>
              <Text style={text.hui10}>等待审核</Text>
            </View>
            <View style={{height:1,backgroundColor:"#c8c8c8",width:width}}></View>
            <ScrollView style={{flex:1}} contentContainerStyle={styles.inputBox}>
            
            <Text style={[text.hei10,{lineHeight:20}]}>使用本公司服务所须遵守的条款和条件。</Text>
            <Text style={[text.hei10,{lineHeight:20}]}>声明</Text>
            <Text style={[text.hei10,{lineHeight:20}]}>《潞盈建材商城商家管理细则》（以下简称“本细则”）是潞盈电商平台（以下简称"本平台"）在《潞盈建材商城交易总则》的基础上向贵单位就本平台服务等相关事宜所发出的告知，请贵单位仔细阅读《潞盈建材商城交易总则》及本细则，《潞盈建材商城交易总则》及本细则即构成对双方有约束力的法律文件。</Text>


                  <Text style={[text.hei10,{lineHeight:20}]}>第一章 总则</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第一条 为规范本平台的交易活动，维护线上交易秩序，根据《中华人民共和国民法通则》、《中华人民共和国合同法》等法律、法规、政策及商务主管部门的有关规定，及《潞盈建材商城交易总则》，制定本细则。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第二条 本平台根据公平原则及诚实信用原则，依托本平台网站（www.luyingjc.com），运用安全、高效、便捷、先进的电子商务信息技术，为本平台会员提供货物的交易、交收及相关信息服务。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第三条 本细则适用于本平台内会员的商家资格管理及商家线上货物销售服务。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第四条 本平台有权对会员通过平台网站发生的线上交易进行监管，并有权对会员之间的款项支付、货物交收的合法性及真实性进行核实。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第五条 本平台有权依据本细则调整商家资格管理及货物销售服务的具体操作流程及要求。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第二章 商家管理</Text>

                  <Text style={[text.hei10,{lineHeight:20}]}>第六条 商家的权利：</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>1、通过关联的用户在本平台进行货物销售；</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>2、本平台规定商家可享有的其他权利。</Text>

                  <Text style={[text.hei10,{lineHeight:20}]}>第七条 商家的义务：</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>1、遵守国家法律、法规、政策及商业道德、各类合同及本平台各项规则等的规定进行线上交易，接受本平台的监督与管理，配合本平台的工作；</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>2、遵循诚实信用原则及公平原则，履行交易过程中的各项义务，若用户违反本细则进行交易活动，由此引起的一切法律后果由商家承担。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>3、就用户向本平台提供的证件、文件等各种会员资料的真实性、合法性、有效性承担相应法律后果；如有变更，应及时联系本平台客服进行修改（客服热线：400-800-9790），并承担因未及时通知本平台作相应变更而导致的法律后果。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>4、维护本平台声誉，协助本平台处理各种突发或异常事件；</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>5、承担发布虚假或带有误导性质的信息引起的一切法律后果；</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>6、其他应向本平台承担的义务及责任。</Text>
                 

                  <Text style={[text.hei10,{lineHeight:20}]}>第八条 会员申请商家入驻应具备以下条件：</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>1、具备从事与建材及相关商品有关的生产或经营的资质；</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>2、指定专门的业务联系人员及对账人员；</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>3、本平台要求具备的其他条件。</Text>


                  <Text style={[text.hei10,{lineHeight:20}]}>第九条 符合申请商家入驻条件的会员，应委托代理人通过用户账号进行操作，申请商家入驻，由本平台进行资质及材料的审核；审核通过后，该会员正式获得商家资格。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第十条 商家存在下列情况之一的，本平台有权暂停或取消其商家资格：</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>1、会员资格被暂停或注销；</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>2、丧失从事与建材及相关商品有关的生产或经营的资质；</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>3、本平台无法与商家指定的业务联系人员及对账人员取得联系，或该等人员拒绝配合本平台工作的；</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>4、商家出现交易违约情形的；</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>5、商家出现交易违约情形的；商家资格暂停或取消后，不能通过本平台进行货物销售活动。如已排除影响其商家资格的事由，经本平台核准，可恢复商家资格。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第三章 商家销售服务</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第十一条 会员在通过商家入驻申请后，可以在本平台进行货物销售活动。 </Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第四章 附则</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第十二条 本平台有权根据法律、法规、政策、交易习惯、客观条件等对本细则进行修订，并按修订后的细则进行管理。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第十三条 本细则与《潞盈建材商城交易总则》及其它以本平台名义发布的制度、办法、规定等均属不可分割的整体。</Text>
                  <Text style={[text.hei10,{lineHeight:20}]}>第十四条 未尽事宜以《潞盈建材商城交易总则》为准。</Text>
            </ScrollView>
            <View style={{width:width,alignItems:"center",height:260*scale,paddingBottom:20*scale}}>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",height:120*scale}}>
                  <TouchableOpacity onPress={()=>this.setState({select:!_state.select})}>
                    {_state.select?<Image source={require('../../images/selected.png')} style={styles.selected}/>:<View style={styles.noSelect}></View>}
                  </TouchableOpacity>
                  <Text style={[text.hei10,{lineHeight:10}]}>阅读并同意此协议</Text>
                </View>
                <TouchableOpacity style={styles.nextBtn} 
                // disabled={_state.select?false:true}
                onPress={()=>{_this.nextPage()}}>
                    <Text style={text.bai15}>下一步</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  }
  nextPage(){
    if(_state.select){
      _navigator.navigate("ApplyShopInfo")
    }else{
      Alert.alert("温馨提示","请先同意协议",[{text:"确定"}])
    }
  }
};
export default connect((state)=>({
  nav:state.StackReducer
}),
(dispatch)=>({
  login:(payLoad)=>dispatch(loginAction.login(payLoad))
}))(ApplyShopAgree)