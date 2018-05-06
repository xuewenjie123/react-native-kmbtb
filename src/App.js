import { AppRegistry } from 'react-native';
import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import configStore from './store/configStore'
const store = configStore();//创建store
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
};

AppRegistry.registerComponent('kmbtb', () => App);  