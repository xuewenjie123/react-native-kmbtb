import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';
  export const getAddressList=(params,callback,callbackFail)=>{
    return ApiGet('getAddressList&',params,callback,callbackFail);
  }//我-个人账户-获取地址列表-

  export const updateReceivingAddress=(params,callback,callbackFail)=>{
    return ApiPost('updateReceivingAddress',params,callback,callbackFail);
  }//我-账户管理-添加/修改收货地址-

  export const delReceivingAddress=(params,callback,callbackFail)=>{
    return ApiGet('delReceivingAddress&',params,callback,callbackFail);
  }//  我-账户管理-删除收货地址-

  export const setDefaultAddress=(params,callback,callbackFail)=>{
    return ApiGet('setDefaultAddress&',params,callback,callbackFail);
  }// 我-账户管理-地址管理-设置默认收货地址-
  

