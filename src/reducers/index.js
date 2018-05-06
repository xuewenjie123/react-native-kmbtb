'use strict';
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import StackReducer from './StackReducer'
//合并reducer
const rootReducer = combineReducers({
    loginReducer,
    StackReducer
});
export default rootReducer;
