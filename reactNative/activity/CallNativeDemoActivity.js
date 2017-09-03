import React, {Component} from 'react';
import Dialog from './DialogUtils';
import {View, Button} from 'react-native';

class CallNativeDemoActivity extends Component{
    render() {
        return (
            <Button onPress={this.callNative} title="调用原生模块" />
        );
    }

    callNative(){
        //调用原生的Dialog
        Dialog.showDialog("温馨提示","这是RN调用原生的Dialog","取消","确定");
    }
}

export default CallNativeDemoActivity