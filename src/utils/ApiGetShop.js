import { baseURIShop } from '../constant/url';
import { NetInfo } from 'react-native';
import {getStorage} from '../constant/storage'
let userId;
  // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
const ApiGet = (path,  params , callback,callbackFail) => {
    return getStorage("login",(error,data)=>{
        var options = {};
        options.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        if(data){
            userId = data.userId;
        }else{
            userId=""
        }
        options.method ="GET";
        console.log(params)
        var methodsFunc=()=>{
            fetch(baseURIShop + path+`user_id=${userId}&`+params,options)
            .then((response) => { console.log(response);return response.json()})
            .then((response) => {
                console.log(response)
              callback(response)
            })
            .catch((error) => {
                console.log(error)
                callbackFail&&callbackFail()
            });
        }
          return methodsFunc()
    })
}

export default ApiGet;