import React, {Component} from 'react';
import {View, Alert, Text, Image, Button, TextInput, StyleSheet} from 'react-native';


const onButtonPress = () => {
    Alert.alert('这是Button的点击事件');
};

 class ViewsDemoActivity extends React.Component {
    render() {
        return (
            <View style={Styles.style_rootview}>
                <Text style={Styles.style_textview}>这是一个Text控件</Text>
                <Button onPress={onButtonPress} color="#770ab9" title="这是Button"/>
                <Image style={Styles.style_image} source={{uri: 'https://dummyimage.com/1200x600/f4bee6)'}}/>
                <TextInput
                    maxLength={5}
                    placeholderTextColor="#ff0000"
                    placeholder="请输入用户名"
                    underlineColorAndroid="transparent"
                    style={Styles.style_textInput}
                />
                <TextInput
                    autoCapitalize="sentences"
                    placeholder="请输入密码"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    style={Styles.style_textInput}
                />
            </View>
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

export default ViewsDemoActivity
