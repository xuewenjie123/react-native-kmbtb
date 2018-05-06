
import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';
  export const cancelArticleCollect=(params,callback,callbackFail)=> {
    return ApiGet('cancelArticleCollect&',params,callback,callbackFail);
  }//我-我的收藏-取消收藏-
  export const getMyArticleList=(params,callback,callbackFail)=> {
    return ApiGet('getMyArticleList&',params,callback,callbackFail);
  }//我-我的收藏-资讯收藏列表-

  export const getMyGoodsCollectionList=(params,callback,callbackFail)=> {
    return ApiGet('getMyGoodsCollectionList&',params,callback,callbackFail);
  }//我-我的收藏-商品收藏-
  
