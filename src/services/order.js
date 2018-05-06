
import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';
import ApiUploadFile from '../utils/ApiUploadFile'
  export const confirmReceipt=(params,callback,callbackFail) =>{
    return ApiPost('confirmReceipt',params,callback,callbackFail);
  }//我-我的订单-确认收货
  export const submitOrderComment=(params,callback,callbackFail) =>{
    return ApiPost('submitOrderComment',params,callback,callbackFail);
  }//我-我的订单-提交评价
  