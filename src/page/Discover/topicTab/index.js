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
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "紫光阁-中央和国家机关工作委员会", time: 1533802501000, like: 10086, read: 9999, s: "http://www.zgg.org.cn" },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "网易新闻", time: 1533802501000, like: 10086, read: 9999, s: "https://news.163.com/" },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "腾讯新闻", time: 1533802501000, like: 10086, read: 9999, s: "https://news.qq.com/" },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "百度", time: 1533802501000, like: 10086, read: 99999, s: "https://www.baidu.com/" },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "新浪新闻", time: 1533802501000, like: 10086, read: 999999, s: "https://news.sina.com.cn/" },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "CCTV新闻", time: 1533802501000, s: "http://news.cctv.com/" },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "环球新闻", time: 1533802501000, like: 10086, read: 9999, s: "http://www.huanqiu.com/" },
    { avatar: { uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }, title: "新华社", time: 1533802501000, like: 10086, read: 9999, s: "http://www.xinhuanet.com/" },
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
                            {...this.props}
                            avatar={item.avatar}
                            title={item.title}
                            time={item.time}
                            like={item.like}
                            read={item.read}
                            onPress={() => this.props.navigation.navigate("Content", { url: item.s })}
                        />
                    }} />
                <Button style={styles.addButtonStyle} onPress={() => { navigate("SendTopic") }}>
                    <Icon name="md-add" style={{ color: 'white', }} />
                </Button>
            </Container>
        );
    }
}

