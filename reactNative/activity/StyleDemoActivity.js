import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export  default class StyleDemoActivity extends Component {
    render() {
        return (
            <View style={styles.rootview}></View>
        );
    }
}

let styles = StyleSheet.create({
    rootview: {
        backgroundColor: "#ea9879",
        flex:1,//相当于Weight
        padding:15,
        borderRadius:30,//边框圆角度数
        borderColor:"#ff0000",//边框颜色
        borderWidth:5,//边框高度
        shadowColor:"#343",//阴影颜色
        margin:50,
        shadowOpacity:0.4,//阴影透明度
        shadowRadius:2,//阴影偏移角度
        shadowOffset:{
            height:1,//垂直方向偏移值
            width:1//水平方向偏移值
        }
    }
})