import ApiPost from '../utils/ApiPostShop';
import ApiGet from '../utils/ApiGetShop';

export const searchShop=(params,callback,callbackFail)=>{
  return ApiGet('search_api.php?',params,callback,callbackFail);
}//商品分类
