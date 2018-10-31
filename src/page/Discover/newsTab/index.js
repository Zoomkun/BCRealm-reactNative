import React, { Component } from "react";
import {
    View
} from 'native-base';
import {
    FlatList,
    Text
} from 'react-native';
import { NewsItem, OldNewsItem } from '../../../components';
import HttpUtils from "../../../api/Api";
//import styles from "./styles";



const data = [
    { gameUrl: "www.baidu.com", title: '哎呦', star: 111, read: 111 },
    { gameUrl: "www.baidu.com", title: '哎呦', star: 111, read: 111 },
    { gameUrl: "www.baidu.com", title: '哎呦', star: 111, read: 111 },
    { gameUrl: "www.baidu.com", title: '哎呦', star: 111, read: 111 },
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
                        return <OldNewsItem
                            {...this.props}
                            title={item.title}
                            time={item.createTimestamp}
                            read={item.readQuantity}
                            onPress={() => this.props.navigation.navigate("News", { id: item.id })}
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

