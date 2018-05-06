import {getStorage,setStorage,removeStorage} from './storage';

 export const setHistory=(key,searchContent)=>{
    getStorage(key,(error,data)=>{
        if(data){
            for(let i=0;i<data.search.length;i++){
                if(data.search[i]===searchContent){
                  data.search.splice(i,1)
                }
            }
            if(data.search.length>7){
              data.search.splice(7,1)
            }
          data.search.unshift(searchContent)
          setStorage(key,{search:data.search},()=>{})
        }else{
          setStorage(key,{search:[searchContent]},()=>{})
        }
    })
  }
