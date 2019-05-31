import React from 'react';
import {
    BackHandler,
} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
/**
 * 返回键的处理
 * 
 * 在需要的定义返回键的页面处理：
 * 
 * example:
 * 
 * render(){
 *    return(
 *         <BackActionHandler onBackListener= {()=>{back...}}>
 *              page render...
 *         </BackActionHandler>
 *      );
 * }
 * 
 * @author zhiyahan
 * @date 2019-05-31
 * @export
 * @class BackHandler
 * @extends {React.Component}
 */
 class BackActionHandler extends React.Component {

    constructor(props) {
        super(props);

        this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }


    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }


    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
        BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }

    onBackButtonPressAndroid = () => {
        return this.props.onBackListener();
    };


    render() {
        return this.props.children || null;
    }

}

BackActionHandler.defaultProps = {
    onBackListener: null,
}

BackActionHandler.propsType = {
    onBackListener: PropTypes.func,
}


export default withNavigation(BackActionHandler);