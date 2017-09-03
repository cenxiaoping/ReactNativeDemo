import React, {Component} from 'react';
import Dialog from './DialogUtils'
import {View, Alert, Text, Image, Button, TextInput, DrawerLayoutAndroid,ActivityIndicator, StyleSheet} from 'react-native';


const onButtonPress = () => {

    Dialog.showDialog();
};

let navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
);

class ViewsDemoActivity extends React.Component {


    render() {
        return (

            <DrawerLayoutAndroid
                drawerWidth={200}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
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

                    <ActivityIndicator
                        style={[Styles.centering, {height: 80}]}
                        size="large"
                    />
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

let Styles = StyleSheet.create({
    style_rootview: {
        flex: 1,
        backgroundColor: "#faebd7"
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
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
