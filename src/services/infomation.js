
  import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';

export const getArticleList=(params,callback,callbackFail)=> {
  return ApiGet('getArticleList&',params,callback,callbackFail);
}//资讯-资讯列表-getArticleList

export const getArticleDetail=(params,callback,callbackFail)=> {
  return ApiGet('getArticleDetail&',params,callback,callbackFail);
}//资讯-资讯详情-getArticleDetail

export const getInformationList=(params,callback,callbackFail)=> {
  return ApiPost('getInformationList',params,callback,callbackFail);
}// 询价-获取资讯信息-



export const getRegionList=(params,callback,callbackFail)=> {
  return ApiPost('getRegionList',params,callback,callbackFail);
}// 询价-获取地区列表-

export const getInformationTypeList=(params,callback,callbackFail)=> {
  return ApiPost('getInformationTypeList',params,callback,callbackFail);
}// 资讯-获取分类-

export const getPriceTrend=(params,callback,callbackFail)=> {
  return ApiPost('getPriceTrend',params,callback,callbackFail);
}// 资讯-获取统计图-

export const collectArticle=(params,callback,callbackFail)=> {
  return ApiPost('collectArticle',params,callback,callbackFail);
}// 资讯-资讯收藏-

export const cancelArticleCollect=(params,callback,callbackFail)=> {
  return ApiGet('cancelArticleCollect&',params,callback,callbackFail);
}//我-我的收藏-取消收藏咨询-