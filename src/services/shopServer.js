import ApiPostshop from '../utils/ApiPostShop';
import ApiGetShop from '../utils/ApiGetShop';
import ApiPost from '../utils/ApiPost';
import ApiGet from '../utils/ApiGet';
export const getClassInfo=(params,callback,callbackFail)=> {
  return ApiGetShop('catalog_api.php?',params,callback,callbackFail);
}//商品分类

export const getListnfo=(params,callback,callbackFail)=> {
    return ApiGetShop('category_api.php?',params,callback,callbackFail);
  }//分类列表

export const getDetailnfo=(params,callback,callbackFail)=> {
  return ApiGetShop('goods_api.php?',params,callback,callbackFail);
}//商品详情

export const addto_cart=(params,callback,callbackFail) =>{
  return ApiPost('addGoodsToCart',params,callback,callbackFail);
}//加入购物车

export const getCartList=(params,callback,callbackFail) =>{
  return ApiPost('getCartList',params,callback,callbackFail);
}//获取购物车列表
export const tabAttr=(params,callback,callbackFail) =>{
  return ApiGetShop('goods_api.php?',params,callback,callbackFail);
}//属性切换

export const updateCatGoodsNum=(params,callback,callbackFail) =>{
  return ApiPost('updateCatGoodsNum',params,callback,callbackFail);
}//属性切换
export const getCommentList=(params,callback,callbackFail) =>{
  return ApiGetShop('comment_api.php?',params,callback,callbackFail);
}//属性切换

export const isCollectShop=(params,callback,callbackFail) =>{
  return ApiGetShop('goods_api.php?',params,callback,callbackFail);
}//商品 收藏 和 取消收藏

export const removieGoodsFromCart=(params,callback,callbackFail) =>{
  return ApiPost('removieGoodsFromCart',params,callback,callbackFail);
}//商城-购物车-移除商品-

export const getGoodsAndSupplierInfo=(params,callback,callbackFail) =>{
  return ApiPost('getGoodsAndSupplierInfo',params,callback,callbackFail);
}//立即购买

export const addGoodsToOrder=(params,callback,callbackFail) =>{
  return ApiPost('addGoodsToOrder',params,callback,callbackFail);
}//商城-订单-结算-

export const getMyOrderList=(params,callback,callbackFail) =>{
  return ApiPost('getMyOrderList',params,callback,callbackFail);
}//我-我的订单列表