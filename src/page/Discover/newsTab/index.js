import React, { Component } from "react";
import {
    View
} from 'native-base';
import {
    FlatList
} from 'react-native';
import { NewsItem } from '../../../components';
import HttpUtils from "../../../api/Api";
//import styles from "./styles";



const data = [
    { uri: "www.baidu.com", title: '哎呦', star: 111, read: 111 },
    { uri: "www.baidu.com", title: '哎呦', star: 111, read: 111 },
    { uri: "www.baidu.com", title: '哎呦', star: 111, read: 111 },
    { uri: "www.baidu.com", title: '哎呦', star: 111, read: 111 },
]
/**
 * 新闻
 */
export default class NewsTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    static navigationOptions = {
        header: null
    };


    componentDidMount() {
        console.log(11121)
        this._getNewsList();
    }

    render() {
        let items = this.state.data;
        return (
            <View>
                <FlatList data={items}
                    enableEmptySections={true}
                    onEndReachedThreshold={10}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return <NewsItem
                            {...this.props}
                            uri={item.uri}
                            title={item.title}
                            star={item.star}
                            read={item.read}
                            onPress={() => this.props.navigation.navigate("News", { id: item.uri })}
                        />
                    }} />
            </View>
        );
    }

    _getNewsList() {
        let self = this
        HttpUtils.getRequest(
            'getNews',
            '',
            function (data) {
                console.log(data)
                self.setState({
                    data: data.newsList
                })
            }
        )
    }
}

