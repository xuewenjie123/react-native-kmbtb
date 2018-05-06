
import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';
export const getSystemMessage=(params,callback,callbackFail)=>{
    return ApiPost('getSystemMessage',params,callback,callbackFail);
}//我-我的消息-
export const makeMsgIsRead=(params,callback,callbackFail)=>{
    return ApiPost('makeMsgIsRead',params,callback,callbackFail);
}//我-消息读取

export const updateSystemMsgStatus=(params,callback,callbackFail)=>{
    return ApiPost('updateSystemMsgStatus',params,callback,callbackFail);
}//我-消息读取
