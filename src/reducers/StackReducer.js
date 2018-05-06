
import  Router  from '../Router';
import { AppNavigator } from '../Router'
//这里主要是集成react-navigation与redux因为这样我去太爽了，安卓返回键难以处理，哈哈小问题，想返回指定路由，哈哈问题不大
//想要在每个页面内都能获取到路由信息，或者说在主页可以随时监听，处理些你想做的坏事情，小keys
//把所有路由信息引进来，在底下把路由信息return出去
var StackReducer=(state , action)=>{
    let nextState={};
    // switch (action.routeName) {
    //     case "Home":
    //      nextState =  AppNavigator.router.getStateForAction(action, state)
    //      nextState.routes[0].routeName="Home"
    //      break;
    //      case "Demand":
    //      nextState =  AppNavigator.router.getStateForAction(action, state)
    //      nextState.routes[0].routeName="Demand"
    //      break;
    //      case "Infomation":
    //      nextState =  AppNavigator.router.getStateForAction(action, state)
    //      nextState.routes[0].routeName="Infomation"
    //      break;
    //      case "Logistics":
    //      nextState =  AppNavigator.router.getStateForAction(action, state)
    //      nextState.routes[0].routeName="Logistics"
    //      break;
    //      case "MySelf":
    //      nextState =  AppNavigator.router.getStateForAction(action, state)
    //      nextState.routes[0].routeName="MySelf"
    //      break;
    //     default:
    //         nextState =  AppNavigator.router.getStateForAction(action, state)
    //         break;
    // }
    nextState =  AppNavigator.router.getStateForAction(action, state)
    return nextState || state;
}
export default StackReducer