import React, { Component } from "react";
import {
    View,
    Icon,
    Button,
    Text,
    Container,
} from 'native-base';
import {
    FlatList
} from 'react-native';
import { NewsItem } from '../../../components';
import styles from "./styles";

/**
 * 话题
 */

const m = [
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻4654dad阿桑打算654654阿桑打算大所65465465", time: 1533802501000, like: 10086, read: 9999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻465465465465465465465", time: 1533802501000, like: 10086, read: 9999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻465465465465465465465", time: 1533802501000, like: 10086, read: 99999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻4654dad阿桑打算654654阿桑打算大所65465465", time: 1533802501000, like: 10086, read: 999999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻465465465465465465465", time: 1533802501000, like: 10086, read: 9999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻465465465465465465465", time: 1533802501000, like: 10086, read: 9999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻4654dad阿桑打算654654阿桑打算大所65465465", time: 1533802501000, like: 10086, read: 9999 },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻465465465465465465465", time: 1533802501000, like: 10086, read: 9999 },
]
export default class TopicTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buttonShow: ''
        }
    }
    static navigationOptions = {

        header: null
    };


    render() {
        const { navigate } = this.props.navigation;
        let items = m;
        return (
            <Container>
                <FlatList data={items}
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
                    }} />
                <Button style={styles.addButtonStyle} onPress={() => { navigate("SendTopic") }}>
                    <Icon name="md-add" style={{ color: 'white', }} />
                </Button>
            </Container>
        );
    }
}

