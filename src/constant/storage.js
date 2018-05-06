import { AsyncStorage, } from 'react-native';
export const getStorage=(str,Fn)=>{
  if(typeof str == "string"){
    if(global["global_"+str]){
      return Fn(false,global["global_"+str]);
    }else{
      AsyncStorage.getItem(str,(error,text)=>{
        if(!error){
          var data = JSON.parse(text);
          global["global_"+str] = data;
           return Fn(false,data);
        }
      });
    }
  }
}

export const setStorage=(str,data,Fn)=>{
  if(typeof str == "string"){
    AsyncStorage.setItem(str,JSON.stringify(data),(error)=>{
      if(!error){
        global["global_"+str] = data;
        Fn(false);
      }else{
        Fn(error);
      }
    });
  }
}
export const removeStorage=(str,Fn)=>{
  if(typeof str == "string"){
    AsyncStorage.removeItem(str,(error)=>{
      if(!error){
        global["global_"+str] = null;
        Fn(false);
      }else{
        Fn(error);
      }
    });
  }
}

