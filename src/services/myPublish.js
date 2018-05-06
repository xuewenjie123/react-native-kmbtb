import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';

export const getMyRequireList=(params,callback,callbackFail)=> {
  return ApiGet('getMyRequireList&',params,callback,callbackFail);
}//我-我的发布


export const getMyRequireDetail=(params,callback,callbackFail)=> {
  return ApiGet('getMyRequireDetail&',params,callback,callbackFail);
}//我-我的发布详情

export const getRequireOfferDetail=(params,callback,callbackFail)=> {
  return ApiGet('getRequireOfferDetail&',params,callback,callbackFail);
}//我-我的发布详情-报价清单

export const submitComfirmRequireOrder=(params,callback,callbackFail)=> {
  return ApiGet('submitComfirmRequireOrder&',params,callback,callbackFail);
}//我-我的发布-选择中-结算-

export const applicationForRefund=(params,callback,callbackFail)=> {
  return ApiGet('applicationForRefund&',params,callback,callbackFail);
}//我-我的报价-申请退款-

export const confirmationOfReceipt=(params,callback,callbackFail)=> {
  return ApiGet('confirmationOfReceipt&',params,callback,callbackFail);
}//我-我的报价-确认收货-
