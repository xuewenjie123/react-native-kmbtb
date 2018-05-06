
import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';

  export const getMyInfomation=(params,callback,callbackFail)=> {
    return ApiGet('getMyInfomation&',params,callback,callbackFail);
  }//我-账户管理-获取个人信息-
  export const updateUserInfo=(params,callback,callbackFail)=> {
    return ApiPost('updateUserInfo',params,callback,callbackFail);
  }//我-账户管理-修改个人信息-
  