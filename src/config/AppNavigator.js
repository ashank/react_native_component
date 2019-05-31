import React, {
  Component
} from 'react';
import {
  Easing,
  Animated
}
from 'react-native';
import StackNavigator, {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
// import { Transition } from 'react-native-reanimated';
// import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import HomePage from '../page/HomePage';
import WelComePage from '../page/WelComePage';
import DetailPage from '../page/DetailPage';


/**
 * navigation导航
 */
const AppNavigator = createStackNavigator({
    Home: {
      screen: HomePage,
      path: 'main/:home',
      //提供默认参数:
      params: {
        product: 'Home'
      },

      //标题配置，覆盖页面配置
      // navigationOptions: ({ navigation }) => ({
      //   title: `${navigation.state.params.name}'s Profile'`,
      // }),
    },

    Detail: {
      screen: DetailPage,
      path: 'main/:detail',
      //提供默认参数:
      params: {
        product: 'Detail'
      },

      //标题配置，覆盖页面配置
      // navigationOptions: ({ navigation }) => ({
      //   title: `${navigation.state.params.name}'s Profile'`,
      // }),
    },

  },

  {
    //堆栈的初始路由，默认页面
    initialRouteName: 'Home',
    mode: 'card',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const {
          layout,
          position,
          scene
        } = sceneProps;
        const {
          index
        } = scene;
        const Width = layout.initWidth;
        //沿X轴平移
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [Width, 0, -(Width - 10)],
        });
        //透明度
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });
        return {
          opacity,
          transform: [{
            translateX
          }]
        };
      }
    }),
  }


);


const WelComeNavigator = createStackNavigator(

  {
    WelCome: {
      screen: WelComePage,
    },

  }, {
    mode: 'card',
    headerMode: 'none',
  }

);

//组合,是一次只显示一个屏幕。默认情况下，它不处理回退操作，并在您切换时将路由重置为默认状态. 
const App = createSwitchNavigator({

    WelComeStack: WelComeNavigator,
    AppStack: AppNavigator,

  },

  {
    //堆栈的初始路由，默认页面
    initialRouteName: 'WelComeStack',
    mode: 'card',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const {
          layout,
          position,
          scene
        } = sceneProps;
        const {
          index
        } = scene;
        const Width = layout.initWidth;
        //沿X轴平移
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [Width, 0, -(Width - 10)],
        });
        //透明度
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });
        return {
          opacity,
          transform: [{
            translateX
          }]
        };
      }
    }),

  },

);


//   {
//     //堆栈的初始路由，默认页面
//     initialRouteName: 'WelCome',
//     //初始路由的参数
//     initialRouteParams:'sds',
//     //初始路由的可选标识符
//     initialRouteKey:'',
//     //If true, the keyboard will NOT automatically dismiss when navigating to a new screen. Defaults to false. This is ignored in the web platform.
//     disableKeyboardHandling:false,

//     //全局默认的导航配置：标题栏
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//       mode:'card',
//       headerMode:'screen ',
//       headerBackTitleVisible:true,
//       headerLayoutPreset:'center',
//       headerBackTitle:'返回',

//       },
// },
// 
// {
//   // The previous screen will slide to the bottom while the next screen will fade in
//   transition: (
//     <Transition.Together>
//       <Transition.Out
//         type="slide-bottom"
//         durationMs={400}
//         interpolation="easeIn"
//       />
//       <Transition.In type="fade" durationMs={500} />
//     </Transition.Together>
//   ),
// },
// 
// );

const AppContainer = createAppContainer(App);

export default AppContainer;