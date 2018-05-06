'use strict';
import * as types from '../typeDispatch/loginTypes';

const initialState = {
    user_id:"",//用户ID
    user_name:"",//用户名称
    mobile_phone:"",//手机号
    rank_points:"",//	int	Y	信用值
    headimg:"",//	string	Y	头像
    rank_name:"",//	string	Y	信用等级
    collect_article_num:"",//	int	Y	收集手机数量
    collect_goods_num:"",//收集物品数量
    status:0,//是否个人认证0 未认证 1 已认证 2 审核中 3 审核未通过
    qq:"",
    email:"",
    supplier_flag:"2",//是不是商家 0 审核中 1 通过 -1 失败 2 未申请、不是商家
    MySelfKey:"",
    passWord:"",
    LoginTopKey:false,//login页的上一页的路由key
    msg_count:"",//总未读消息条数
    stystem_msg:[],//哪类消息有未读
    registrationId:"",//极光设备id
    user_device_id:""//德强返回来的id 获取用户信息的时候用的
  }

  var loginReducer=(state=initialState, action)=>{
    switch (action.type) {
      case types.LOGIN_IN_DONE:
      //这里因为引用比较小，除了路由就只有登录信息这块儿用到redux的地方多，所以没有定义各类type，原因是虽然增加了可读性，但是不觉得代码多了n多吗，
        return {
          ...state,
          ...action.payLoad
        }
        break;
      default:
        return state;
    }
  };
export default loginReducer
  