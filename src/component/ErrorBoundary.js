'use strict';

import React, { Component } from 'react';
import { View,Text } from 'react-native';
import RNExitApp from 'react-native-exit-app';


export default class ErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state = {hasError:false,}
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

    componentDidCatch(error, info){
        // Display fallback UI
        // this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        console.log('ErrorBoundary-error:', error);
        RNExitApp.exitApp()
    }

    render() {
        if(this.state.hasError){
            return(
                <Text style = {{flex:1,color:'#FF00FF',alignItems:"center",textAlignVertical:"center"}}>
                     Something went wrong.
                </Text>
            );
        }
        return this.props.children;
    }
}
