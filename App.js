'use strict';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import ErrorBoundary from './src/component/ErrorBoundary';
import RNExitApp from 'react-native-exit-app';
import {setJsExceptionHandler,getJsExceptionHandler}  from './src/component/ErrorHandlerUtils';
import AppContainer from './src/config/AppNavigator';


const errorHandler = (e) => {
  console.log('我的error------>',e);
  RNExitApp.exitApp();
};
setJsExceptionHandler(errorHandler,false);

export default class App extends Component {

  render() {
    return (
      // <ErrorBoundary>
         <AppContainer/>
      // </ErrorBoundary>
    );
  }
}




