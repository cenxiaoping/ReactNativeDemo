import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import StyleDemo from './activity/StyleDemoActivity'
import ViewDemo from './activity/ViewsDemoActivity'
import ListViewDemo from './activity/ListViewDemoActivity'
import ListViewDemo2 from './activity/ListViewDemo2'

class Index extends Component {
    render() {
        return (

            <View style={{flex:1}}>

                <ListViewDemo/>

            </View>

        );
    }
}


export default Index