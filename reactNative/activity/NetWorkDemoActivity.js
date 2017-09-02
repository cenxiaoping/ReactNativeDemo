import React, {Component} from 'react';
import {View, Text, Alert, Button, StyleSheet} from 'react-native';

class NewWorkDemoActivity extends Component {
    render() {
        return (
            <View style={styles.style_root}>
                <Text style={styles.style_text}>HelloWorldddd</Text>
                <Button onPress={request} title="发起网络请求"/>
            </View>
        );
    }
}

//请求网络
const request = () => {
    console.log("点击了事件");
    fetch('http://chenxiaoping.com/demo', {
        //请求方式，GET或POST
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => response.json()).then(
        (responseJson) => {
            console.log("请求回调：" + responseJson.current_user_url);
        })
};

let styles = StyleSheet.create({
    style_root: {
        backgroundColor: "#fae",
        flex: 1
    },
    style_text: {
        margin: 20,
    }
})

export default NewWorkDemoActivity