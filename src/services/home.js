
import ApiPost from '../utils/ApiPostShop';
import ApiGet from '../utils/ApiGetShop';

export const getHomeInfo=(params,callback,callbackFail)=> {
  return ApiGet('index_api.php?',params,callback,callbackFail);
}//首页

