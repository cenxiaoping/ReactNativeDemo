import React, {Component} from 'react';
import {ListView, Text,TouchableHighlight, StyleSheet} from 'react-native';

class ListViewDemoActivity extends React.Component {
    constructor(props) {
        super(props);

        //数据源
        let datas = ["列表数据1","列表数据2","列表数据3","列表数据4"];

        //设置notifyDataSetChanged
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        //dataSource就是遍历出的数组元素
        this.state = {
            dataSource: ds.cloneWithRows(datas),
        };
    }

    render() {
        return (
            <ListView
                initialListSize={3}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <TouchableHighlight underlayColor="#00ff00"  onPress={()=>{}}>
                    <Text style={styles.itemText}>{rowData}</Text>
                    </TouchableHighlight>
                }
            />
        );
    }
}

let styles = StyleSheet.create({
    itemText:{
        marginTop:10,
        backgroundColor:"#ff0000",
        paddingTop:15,
        paddingBottom:15,
        textAlign:"center",
        color:"#ffffff"
    }
})


export default ListViewDemoActivity