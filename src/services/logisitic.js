
import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';

export const getLogisticsList=(params,callback,callbackFail)=> {
  return ApiGet('getLogisticsList&',params,callback,callbackFail);
}//物流-物流列表-

export const getLogisticsDetail=(params,callback,callbackFail)=> {
  return ApiGet('getLogisticsDetail&',params,callback,callbackFail);
}//物流-物流详情-

 