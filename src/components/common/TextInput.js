'use strict';
import React, { Component, } from 'react';
import {  TextInput} from 'react-native';
export default class TextInputs extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <TextInput
                underlineColorAndroid="transparent"
                blurOnSubmit={true}
                returnKeyType='done'
                placeholderTextColor='#c8c8c8'
                {...this.props}/>
        )
    }
}