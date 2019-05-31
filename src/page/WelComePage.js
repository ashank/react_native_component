'use strict';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, BackHandler,StyleSheet, Text,Button, View,ToastAndroid,Image,Alert,TouchableOpacity} from 'react-native';
import Header from '../component/Header';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class WelComePage extends Component {

  static navigationOptions = {
    title: '欢迎页',
  }


   constructor(props){
     super(props);
   }
  

   componentDidMount(){
      this.timer = setTimeout(
        () => {  this.props.navigation.navigate('AppStack'); },
        10000
      );
  }

   componentWillUnmount(){
      // 如果存在this.timer，则使用clearTimeout清空。
      // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
      this.timer && clearTimeout(this.timer);
  }



  render() {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress= {()=>{ this.props.navigation.setParams({otherParam: 'Updated!'})}}>
              <Text style={styles.instructions}>{instructions}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
