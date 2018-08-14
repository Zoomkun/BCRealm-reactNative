import React, { Component } from "react";
import {
    View,
    Text,
} from 'native-base';
import {
    FlatList
} from 'react-native';
import styles from'./styles';

/**
 * 信息
 */

const m = [
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻4654dad阿桑打算654654阿桑打算大所65465465", time: 1533802501000, like: 10086, read: 9999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻465465465465465465465", time: 1533802501000, like: 10086, read: 9999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻465465465465465465465", time: 1533802501000, like: 10086, read: 99999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻4654dad阿桑打算654654阿桑打算大所65465465", time: 1533802501000, like: 10086, read: 999999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻465465465465465465465", time: 1533802501000, like: 10086, read: 9999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻465465465465465465465", time: 1533802501000 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻4654dad阿桑打算654654阿桑打算大所65465465", time: 1533802501000, like: 10086, read: 9999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻465465465465465465465", time: 1533802501000, like: 10086, read: 9999 },
]
export default class InformationTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    static navigationOptions = {

        header: null
    };

    render() {
        let items = m;
        return (
            <View>
                <Text>信息</Text>
                {/* <FlatList data={items}
                    enableEmptySections={true}
                    //refreshing={this.state.refreshing}
                    onEndReachedThreshold={10}
                    // onRefresh={() => this._loadData(true)}
                    //onEndReached={() => this._loadData(false)}
                    keyExtractor={(item, key) => key}
                    renderItem={({ item, index }) => {
                        return <NewsItem
                            avatar={item.avatar}
                            title={item.title}
                            time={item.time}
                            like={item.like}
                            read={item.read}
                        />
                    }} /> */}
            </View>
        );
    }
}

