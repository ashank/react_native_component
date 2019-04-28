import React, { Component } from 'react';
import { Text,Image, TouchableOpacity,View} from 'react-native';



/**
 * 头部组件
 *
 * @export
 * @class Header
 * @extends {Component}
 * @author zme
 * @date 2019-04-28
 */
export default class Header extends Component {


    /**
     * 默认属性
     *
     * @static
     * @memberof Header
     */
    static defaultProps = {

        backgroundColor:'',
        leftText:'返回',
        leftRes: '../../res/img/icon_cash_return.png',
        rightRes: '',
        title:'标题',
        leftComponent:null,
        centerComponent:null,
        rightComponent:null,
    }

    constructor(props){
        super(props);
    }


    state = {  }
    
    render() {
        if(this.props.children == null||this.props.children == undefined|| this.props.children.length == 0){
            return(
                <View style={{flex:1,height: 50, alignItems: "center", flexDirection: 'row',backgroundColor:'#0E264A'}}>
                    {/* 返回 */}
                    {/* <TouchableOpacity activeOpacity = {0.6} onPress={() => this.back()}>
                        <Image style={{width: 20, height: 20, marginLeft: 10}}
                            source={this.props.backRes == null || this.props.backRes==undefined ? require( backRes): require( this.props.backRes)}
                        />
                    </TouchableOpacity> */}
                    {this.leftComponent()}
                    {/* 标题 */}
                    <Text style={{flex:1 , textAlign: 'center', alignItems: 'center', justifyContent: 'center', textAlignVertical: 'center',
                        fontSize: 18, color: '#ffffff'}}>{this.props.title}</Text>

                    {/* 右边按钮 */}
                    <View style= {{flexDirection: 'row'}}>
                    </View>

                </View>
            )

        } else {
            return (
                <View/>
            );
        }
    }



    /**
     * 左边的组件
     *
     * @returns
     * @memberof Header
     */
    leftComponent(){
        if(this.props.leftText && this.props.leftRes){
            return(
                <TouchableOpacity activeOpacity = {0.6} onPress={() => this.back()}>
                        <View  style ={{flexDirection:'row', alignItems: "center"}}>
                            <Image style={{width: 20, height: 20, marginLeft: 10}}
                                source={ require('../../res/img/icon_cash_return.png')}
                            />
                            <Text style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center', textAlignVertical: 'center',
                            fontSize: 18, color: '#ffffff'}}>{this.props.leftText}</Text>
                        </View>  
                </TouchableOpacity>
            );

        } else if(this.props.leftRes) {

            return(
                <TouchableOpacity activeOpacity = {0.6} onPress={() => this.back()}>
                        <Image style={{width: 20, height: 20, marginLeft: 10}}
                            source= {require('../../res/img/icon_cash_return.png')}
                        />   
                </TouchableOpacity>
            );
        } else if(this.props.leftText){
            return(
                <TouchableOpacity activeOpacity = {0.6} onPress={() => this.back()}>
                    <Text style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center', textAlignVertical: 'center',
                    fontSize: 18, color: '#ffffff'}}>{this.props.leftText}</Text>
                </TouchableOpacity>
            );

        }
    }



}
