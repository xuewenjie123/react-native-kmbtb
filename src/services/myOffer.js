import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';
  export const getMyOfferList=(params,callback,callbackFail)=>{
    return ApiGet('getMyOfferList&',params,callback,callbackFail);
  }//我-我的报价-报价-submitOffer

  export const getMyOfferDetail=(params,callback,callbackFail)=>{
    return ApiGet('getMyOfferDetail&',params,callback,callbackFail);
  }//我-我的报价-报价详情-submitOffer

  export const confirmRefund=(params,callback,callbackFail)=>{
    return ApiGet('confirmRefund&',params,callback,callbackFail);
  }//我-我的报价-确认退款-

  
  export const fillLogisticsInformation=(params,callback,callbackFail)=>{
    return ApiGet('fillLogisticsInformation&',params,callback,callbackFail);
  }//我-我的报价-发货-fillLogisticsInformation
