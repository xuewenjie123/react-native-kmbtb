import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';


export const getCanOfferRequireList=(params,callback,callbackFail)=> {
  return ApiGet('getCanOfferRequireList&',params,callback,callbackFail);
}//需求-可报价需求列表

export const getRequireList=(params,callback,callbackFail)=> {
  return ApiGet('getRequireList&',params,callback,callbackFail);
}//需求-找需求

export const getRequireDetail=(params,callback,callbackFail)=> {
  return ApiGet('getRequireDetail&',params,callback,callbackFail);
}//需求-需求详情


export const getGoodsList=(params,callback,callbackFail)=> {
  return ApiGet('getGoodsList&',params,callback,callbackFail);
}//需求-获取货品列表


export const submitRequire=(params,callback,callbackFail)=> {
  return ApiPost('submitRequire',params,callback,callbackFail);
}//需求-需求-发布需求

export const getLabelList=(params,callback,callbackFail)=> {
  return ApiGet('getLabelList&',params,callback,callbackFail);
}//需求-需求-发布需求-获取标签列表

export const updateSupplierLabel=(params,callback,callbackFail)=> {
  return ApiPost('updateSupplierLabel',params,callback,callbackFail);
}//需求-可报价需求-修改我的标签-

export const submitEvaluate=(params,callback,callbackFail)=> {
  return ApiPost('submitEvaluate',params,callback,callbackFail);
}//我-需求提价评价-


