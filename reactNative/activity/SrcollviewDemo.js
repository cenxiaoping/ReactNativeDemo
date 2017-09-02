import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View,StyleSheet } from 'react-native'

export  default class SrcollviewDemo extends Component {
    render() {
        return(
            <ScrollView>
                <Text style={{fontSize:36}}>Scroll me plz</Text>
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Text style={{fontSize:36}}>If you like</Text>
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Text style={{fontSize:36}}>Scrolling down</Text>
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Text style={{fontSize:36}}>What's the best</Text>
                <Image style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image  style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Text style={{fontSize:36}}>Framework around?</Text>
                <Image style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Image style={Styles.style_image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                <Text  style={{fontSize:36}}>React Native</Text>
            </ScrollView>
        );
    }
}

let Styles = StyleSheet.create({
    style_rootview: {
        flex: 1,
        backgroundColor: "#c2daf5"
    },
    style_textview: {
        margin: 10,
        color: "#770ab9",//文字颜色
        fontSize: 26,//字体尺寸
        fontStyle: "italic",//字体样式
        // fontFamily:"", //设置字体
        fontWeight: "900",//文字粗细，100——900范围，值越大，字体越粗
        textDecorationLine: "underline",//可以设置下划线，删除线，
        textAlign: "center",//文字显示位置，center,left,right
        borderColor: "#e8e",
        borderWidth: 2,
        borderRadius: 25,
        padding: 15,
    },
    style_image: {
        marginTop: 10,
        width: 150,
        height: 150
    },
    style_textInput: {
        margin: 10,
        height: 40,
        paddingLeft: 15,
        borderColor: "#770ab9",
        borderWidth: 2,
        borderRadius: 15,
        borderWidth: 1
    }
})