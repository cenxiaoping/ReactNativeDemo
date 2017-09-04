import React, {Component} from 'react';
import {TextInput, View, Text, Button, StyleSheet} from 'react-native';

export default class LoginActivity extends Component {
    static navigationOptions = ({navigation})=>({
       title: `${navigation.state.params.name}`,
     });

    render() {
       const { params } = this.props.navigation.state;
        return (
            <View style={styles.style_rootview}>
                <TextInput
                    placeholder="请输入登录账号"
                    underlineColorAndroid="#770ab9"
                    style={styles.style_textInput}
                />
                <TextInput
                    autoCapitalize="sentences"
                    placeholder="请输入密码"
                    secureTextEntry={true}
                    underlineColorAndroid="#770ab9"
                    style={styles.style_textInput}
                />
                <View style={{marginRight: 15, marginLeft: 15}}>
                    <Button style={{color: "#ff0000"}} title={params.name} onPress={() => this.login()}/>
                </View>
                <View style={{
                    flexDirection: "row",
                    paddingTop: 10,
                    justifyContent: 'space-between',
                    paddingLeft: 15,
                    paddingRight: 15
                }}>
                    <Text style={{color: "#0000ff"}}>忘记密码?</Text>
                    <Text style={{color: "#0000ff"}}>新用户注册</Text>
                </View>
            </View>
        );
    }

    login() {

    }
}

let styles = StyleSheet.create({
    style_rootview: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: "column"
    },
    style_textInput: {
        marginRight: 15,
        marginLeft: 15,
        margin: 10,
        height: 40,
        paddingLeft: 15,
    },
})