import React, { Component } from "react";
import {
    Icon,
    Button,
    Container,
} from 'native-base';
import {
    FlatList
} from 'react-native';
import { NewsItem } from '../../../components';
import styles from "./styles";
import HttpUtils from "../../../api/Api";

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

/**
 * 话题
 */
export default class TopicTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buttonShow: '',
            data: []
        }
    }


    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this._getTopic();
    }

    render() {
        const { navigate } = this.props.navigation;
        let items = this.state.data;
        console.log(items)
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
                            avatar={item.headUrl}
                            title={item.title}
                            time={item.sendDate}
                            like={item.tsan}
                            read={item.readVal}
                            onPress={() => this.props.navigation.navigate("Content", { url: item.html5Url })}
                        />
                    }} />
                <Button style={styles.addButtonStyle} onPress={() => { navigate("SendTopic") }}>
                    <Icon name="md-add" style={{ color: 'white', }} />
                </Button>
            </Container>
        );
    }

    _getTopic() {
        let self = this
        HttpUtils.getRequest(
            'appUrl',
            'topicList',
            '',
            function (data) {
                self.setState({
                    data: data.list
                })
            }
        )
    }
}

