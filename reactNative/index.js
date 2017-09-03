import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import StyleDemo from './activity/StyleDemoActivity'
import ViewDemo from './activity/ViewsDemoActivity'
import ListViewDemo from './activity/ListViewDemoActivity'
import ListViewDemo2 from './activity/ListViewDemo2'
import LoginDemo from "./activity/LoginActivity"
import Srcollview from "./activity/SrcollviewDemo"
import NewWorkDemo from "./activity/NetWorkDemoActivity"
import AnimationDemo from "./activity/AnimationDemoActivity"
import FlatListDemo from "./activity/FlatListDemoActivity"
import CallNative from "./activity/CallNativeDemoActivity"

class Index extends Component {
    render() {
        return (

            <View style={{flex:1}}>

                <Srcollview/>

            </View>

        );
    }
}


export default Index