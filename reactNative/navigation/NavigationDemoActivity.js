import React from 'react';
import {
    Text,
    View,Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginActivity from "../activity/LoginActivity"


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'DemoApp',
    };

    render() {
        //这行代码一定要写，否者会报错
        const { navigate } = this.props.navigation;
        return (
            <View >
                <Text style={{height:100}}>这是内容部分</Text>
                <Button title="打开登陆界面" onPress={()=>navigate('Chat',{name:'登陆界面'})}/>
            </View>
        );
    }
}

const DemoApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: { screen: LoginActivity },
});

export default DemoApp
