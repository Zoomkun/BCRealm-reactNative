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
                        return <NewsItem
                            {...this.props}
                            avatar={item.headUrl}
                            title={item.title}
                            time={item.createDate}
                            like={item.tsan}
                            read={item.readVal}
                            onPress={() => this.props.navigation.navigate("News", { url: item.html5Url })}
                        />
                    }} />
            </View>
        );
    }

    _getNewsList() {
        let self = this
        HttpUtils.getRequest(
            'appUrl',
            'newsList',
            '',
            function (data) {
                console.log(data)
                self.setState({
                    data: data.list
                })
            }
        )
    }
}

