'use strict';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  BackHandler,
  StyleSheet,
  StatusBar,
  Text,
  Button,
  View,
  ToastAndroid,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Header from '../component/Header';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import BackActionHandler from '../component/BackActionHandler';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class HomePage extends Component {

  static navigationOptions = {
    title: '首页',
  }


  //标题配置
  // static navigationOptions = {
  //     title: '首页',
  //     //头部样式
  //     headerStyle: {
  //       backgroundColor: '#f4511e',
  //     },
  //     //标题颜色
  //     headerTintColor: '#fff',
  //     //标题样式
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  // };

  //标题配置另一种方式,可覆盖，优先于默认配置
  // 可使用自定义组件替换标题 组件
  // static navigationOptions = ({ navigation }) => {
  //   return {

  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //     //头部样式
  //     headerStyle: {
  //       backgroundColor: '#FF00FF',
  //     },
  //     //标题颜色
  //     headerTintColor: '#000',
  //     //标题样式
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },

  //     headerRight: (
  //       <Button
  //         onPress={() => alert('This is a button!')}
  //         title="Info"
  //         color="#000000"
  //       />
  //     ),
  //   };
  // };

   constructor(props){
     super(props);
   }

   componentDidMount(){

    Platform.select({
      android:()=> {
        //亮色模式
        StatusBar.setBarStyle('light-content');
        //暗色模式
        // StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('#FF00FF');
      }
    });

   }




  onBackButtonPressAndroid = () => {
  
      ToastAndroid.show('我是首页返回键',3000);

    return true;
  };

  

  render() {

    console.log('render---->');
    return (
        <BackActionHandler onBackListener = { this.onBackButtonPressAndroid}>
          <View style={styles.container} >
            {/* <Header 
            title = {'我的标题'}
            leftSrc = {{ source: require('../../res/img/icon_cash_return.png') ,listener:()=>{ToastAndroid.show('back',3000)}}}/> */}
            <View style={styles.container}>
              <Text style={styles.welcome}>Welcome to React Native!sdsdsdsd</Text>
              <Text style={styles.instructions}>To get started, edit App.js</Text>
              <TouchableOpacity onPress= {()=>{ this.props.navigation.navigate('Detail')}}>
                <Text style={styles.instructions}>{instructions}</Text>
              </TouchableOpacity>
            
            </View>
          </View>
        </BackActionHandler>
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
