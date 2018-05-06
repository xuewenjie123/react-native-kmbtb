'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import Dimensions from 'Dimensions';
import { scale } from '../../components/common/Dimensions';
let { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:'#f7f8fc',
   },
   info_box:{
     width:width,
     paddingHorizontal: 20*scale,
     flexDirection:'column',
     alignItems:'center',
     backgroundColor:'#ffffff',
   },
   list_a:{
     height:100*scale,
     width:width-40*scale,
     flexDirection:'row',
     alignItems:'center',
     borderBottomWidth:1,
     borderBottomColor:'#dddddd'
   },
   list_b:{
     height:100*scale,
     width:width-40*scale,
     flexDirection:'row',
     alignItems:'center',
     justifyContent: "center",
     borderBottomWidth:1,
     borderBottomColor:'#dddddd'
   },
  list_input:{
    flex:1,
    fontSize:13,
    padding:0,
    height: 100*scale,
    width:300*scale,
    justifyContent: "center",
    alignItems:"center",
    color:'#999999',
  },
  list_input_a:{
    textAlignVertical: 'top',
    padding:0,
    paddingTop: 25*scale,
    flex:1
  },
  list_c:{
    height:210*scale,
    width:width-40*scale,
    flexDirection:'row',
  },
  list_box_a:{
    width:width,
    paddingHorizontal: 20*scale,
    height:100*scale,
    backgroundColor:'#ffffff',
    marginTop:10,
    borderRadius:10,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15
  }
});

module.exports = styles
