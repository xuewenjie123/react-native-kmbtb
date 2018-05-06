import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';
import ApiUploadFile from '../utils/ApiUploadFile'
  export const submitOffer=(params,callback,callbackFail) =>{
    return ApiPost('submitOffer',params,callback,callbackFail);
  }//需求-需求详情-报价-submitOffer
  
  export const uploadeFiles=(params,callback,callbackFail) =>{
    return ApiUploadFile('uploadePicture',params,callback,callbackFail);
  }//需求-需求详情-报价-submitOffer
   