import { baseURI } from '../constant/url';
import { NetInfo } from 'react-native';
const ApiUploadFile = (path,  params , callback,callbackFail) => {
        var options = {};
        options.headers = {
            'Content-Type':'multipart/form-data',
        }
        options.method = "POST";
        options.body = params;
        console.log(options.body)
        console.log(params)
        var methodsFunc=()=>{
          fetch(baseURI + path,options)
            .then((response) => {console.log(response);return response.json()})
            .then((response) => {
              console.log(response)
              callback&&callback(response)
            })
            .catch((error) => {
              console.log(error)
              callbackFail&&callbackFail()
            });
        }
          return methodsFunc()
}

export default ApiUploadFile;