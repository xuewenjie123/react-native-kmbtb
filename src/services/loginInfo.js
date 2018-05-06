
import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';


export const login=(params,callback,callbackFail)=> {
  return ApiPost('login',params,callback,callbackFail);
}//登录-login

export const resetPassword=(params,callback,callbackFail)=> {
    return ApiPost('resetPassword',params,callback,callbackFail);
  }//重置密码-login

export const updatePassword=(params,callback,callbackFail)=> {
return ApiPost('updatePassword',params,callback,callbackFail);
}//我-修改密码-login

export const sendCode=(params,callback,callbackFail)=> {
    return ApiPost('sendCode',params,callback,callbackFail);
}//发送验证码-

export const checkMobileCode=(params,callback,callbackFail)=> {
    return ApiPost('checkMobileCode',params,callback,callbackFail);
}//校验验证码

export const updateMobilePhone=(params,callback,callbackFail)=> {
    return ApiPost('updateMobilePhone',params,callback,callbackFail);
}//我-账号安全-更换手机号-

export const realNameAuthentication=(params,callback,callbackFail)=> {
    return ApiPost('realNameAuthentication',params,callback,callbackFail);
}//我-账户管理-实名认证

export const shopAuthentication=(params,callback,callbackFail)=> {
    return ApiPost('shopAuthentication',params,callback,callbackFail);
}//我-申请开店-

export const choosePayType=(params,callback,callbackFail)=> {
    return ApiPost('choosePayType',params,callback,callbackFail);
}//我-申请开店-

export const registerUser=(params,callback,callbackFail)=> {
    return ApiPost('registerUser',params,callback,callbackFail);
}//注册

export const recordActiveUser=(params,callback,callbackFail)=> {
    return ApiPost('recordActiveUser',params,callback,callbackFail);
}//如果登陆则调取此接口

export const recordDeviceInfo=(params,callback,callbackFail)=> {
    return ApiPost('recordDeviceInfo',params,callback,callbackFail);
}//第一次进app的时候调取此接口

export const logoutAPP=(params,callback,callbackFail)=> {
    return ApiPost('logoutAPP',params,callback,callbackFail);
}//退出登录接口



