import React, { Component } from 'react';
import {Platform,Text,Image, ToastAndroid,TouchableOpacity,View,StatusBar} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import PropTypes from 'prop-types';


var statusBarHeight = Platform.select({android: DeviceInfo.getAPILevel()>= 23 ? StatusBar.currentHeight:0,default: StatusBar.currentHeight });
var titleBarheight = Platform.select({android: 56 + statusBarHeight,default: 44 + StatusBar.currentHeight }) ;
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;




/**
 * 头部组件
 * 
 * 
 *  属性说明：
 * 
 *   backgroundColor:背景色
 * 
 *  leftStyle:PropTypes.shape({iconSize:PropTypes.number,fontSize: PropTypes.number,textColor:PropTypes.string}),左边样式
 *   rightStyle:PropTypes.shape({iconSize:PropTypes.number,fontSize: PropTypes.number,textColor:PropTypes.string}), 右边样式
 *   titleStyle:PropTypes.shape({fontSize: PropTypes.number,textColor:PropTypes.string}) 标题样式

 *   leftSrc:PropTypes.shape({text:PropTypes.string, source: PropTypes.fuc, listener:PropTypes.func}), 左边按钮资源
 *   rightSrc: PropTypes.shape({text:PropTypes.string, source: PropTypes.fuc, listener:PropTypes.func}), 右边按钮资源
 * 
 *   title:标题
 * 
 *   leftCustomCpt:左边自定义视图
 *   centerCustomCpt:中间自定义视图
 *   rightCustomCpt:右边自定义视图
 * 
 *  activeOpacity:透明度
 * 
 *   使用方式demo：
 *   <Header
 *       title = {'我的标题'} 
 *       leftSrc = {
 *       { text:'我的撒对话框', 
 *           source: require('./res/img/icon_cash_return.png') , 
 *           listener:()=>{ToastAndroid.show('back',3000)}
 *       }
 *       }
 *       />
 *
 * @export
 * @class Header
 * @extends {Component}
 * @author zme
 * @date 2019-04-28
 */
export default class Header extends Component {


    render() {
        return(
                
            <View style={{height: titleBarheight, alignItems: "center", flexDirection: 'row', backgroundColor:this.props.backgroundColor,
                paddingLeft:this.props.marginLeft,paddingRight:this.props.marginRight,paddingTop:statusBarHeight}}>
                
                {/* 状态栏 */}
                <StatusBar hidden= {false} translucent={true} animated={false} backgroundColor = {'#00000000'} />

                <View style= {{flex:2,flexDirection: 'row',alignItems: "center"}}>
                    {this.leftComponent()}
                </View>
            
                <View style= {{flex:8,alignItems: "center",justifyContent:'center'}}>
                    {this.centerComponent()}
                </View>
            
                <View style= {{flex:2,flexDirection: 'row',alignItems: "center",justifyContent:'flex-end'}}>
                    {this.rightComponent()}
                </View>
            </View>
        )
    }

    /**
     * 左边的组件
     *
     * @returns
     * @memberof Header
     */
    leftComponent(){

        if(this.props.leftCustomCpt){
            return (this.props.leftCustomCpt);
        }else{
            if(this.props.leftSrc.source) {
                return(
                    <TouchableOpacity activeOpacity = {this.props.activeOpacity} onPress={this.props.leftSrc.listener}>
                            <Image style={{width: this.props.leftStyle.iconSize, height: this.props.leftStyle.iconSize}}
                                source= {this.props.leftSrc.source}
                            />   
                    </TouchableOpacity>
                );
            } else if(this.props.leftSrc.text){
                return(
                    <TouchableOpacity activeOpacity = {this.props.activeOpacity} onPress={this.props.leftSrc.listener}>
                        <Text style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center', textAlignVertical: 'center',
                        fontSize: this.props.leftStyle.fontSize, color: this.props.leftStyle.textColor}}>{this.props.leftSrc.text}</Text>
                    </TouchableOpacity>
                );
            } else {
                return null;
            }
        }  
    }



    /**
     * 中间组件
     *
     * @returns
     * @memberof Header
     */
    centerComponent(){
        if(this.props.centerCustomCpt){
            return this.props.centerCustomCpt;
        }else{
            return(
                <Text style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', textAlignVertical: 'center',
                fontSize:  this.props.titleStyle.fontSize, color: this.props.titleStyle.textColor}}>{this.props.title}</Text>
            );
        }
    }


    
    /**
     * 右边组件
     *
     * @returns
     * @memberof Header
     */
    rightComponent(){
        if(this.props.rightCustomCpt){
            return this.props.rightCustomCpt;
        }else{
            if(this.props.rightSrc.source) {

            return(
                <TouchableOpacity activeOpacity = {this.props.activeOpacity} onPress={ this.props.rightSrc.listener}>
                        <Image style={{width: this.props.rightStyle.iconSize, height:  this.props.rightStyle.iconSize}}
                            source= {this.props.rightSrc.source}
                        />   
                </TouchableOpacity>
            );
        } else if(this.props.rightSrc.text){
            return(
                <TouchableOpacity activeOpacity = {this.props.activeOpacity} onPress={this.props.rightSrc.listener}>
                    <Text style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center', textAlignVertical:
                     'center',fontSize:  this.props.rightStyle.fontSize, color: this.props.rightStyle.textColor }}>{this.props.rightSrc.text}</Text>
                </TouchableOpacity>
            );
        } else {
            return null;
        }
        }
    }

}


Header.propTypes = {

    leftStyle:PropTypes.shape({iconSize:PropTypes.number,fontSize: PropTypes.number,textColor:PropTypes.string}),
    rightStyle:PropTypes.shape({iconSize:PropTypes.number,fontSize: PropTypes.number,textColor:PropTypes.string}),
    titleStyle:PropTypes.shape({fontSize: PropTypes.number,textColor:PropTypes.string}),

    leftSrc:PropTypes.shape({text:PropTypes.string, source: PropTypes.fuc, listener:PropTypes.func}),
    rightSrc:PropTypes.shape({text:PropTypes.string, source: PropTypes.fuc, listener:PropTypes.func}),
    title:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),

    backgroundColor:PropTypes.string,

    leftCustomCpt:PropTypes.element,
    centerCustomCpt:PropTypes.element,
    rightCustomCpt:PropTypes.element,

    marginLeft:PropTypes.number,
    marginRight:PropTypes.number,
    activeOpacity:PropTypes.number,
};


  /**
     * 默认属性
     *
     * @static
     * @memberof Header
     */
    Header.defaultProps = {
        leftStyle:{iconSize:25,fontSize:16,textColor:'#FFFFFF'},
        leftSrc:{text:'',source: null,listener:null},
        titleStyle:{fontSize: 18,textColor:'#FFFFFF'},
        rightStyle:{iconSize:30,fontSize:16,textColor:'#FFFFFF'},
        rightSrc:{text:'',source: null, listener:null},
        backgroundColor:'#0E264A',
        title:'Title',
        leftComponent:null,
        centerComponent:null,
        rightComponent:null,
        marginLeft:12,
        marginRight:12,
        activeOpacity:0.6,
    }