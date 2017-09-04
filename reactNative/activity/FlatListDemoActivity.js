import React, { Component } from 'react';
import { StatusBar, ToastAndroid,Button, TouchableHighlight, View } from 'react-native';

export default class ModalExample extends Component {

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor="#ff0000"
                    barStyle="light-content"
                />
            </View>
        );
    }

}