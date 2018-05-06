import * as types from '../typeDispatch/loginTypes';

export const loginIng = ()=>{
  return {
    type: types.LOGIN_IN_DOING,
  }
}

export const login = (payLoad)=>{
  // console.log(payLoad)
  return {
    type: types.LOGIN_IN_DONE,
    payLoad
  }
}

export const loginError=()=>{
  return {
    type: types.LOGIN_IN_ERROR,
  }
}
