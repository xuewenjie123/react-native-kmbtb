
import ApiUploadFile from '../utils/ApiUploadFile'
  export const uploadeLicence=(params,callback,callbackFail) =>{
    return ApiUploadFile('uploadePicture',params,callback,callbackFail);
  }//需求-需求详情-报价-submitOffer