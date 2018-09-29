import React, { Component } from 'react';
import {
    Image,
    FlatList,
    Alert
} from 'react-native';
import { Content, Container, View, Button, Icon } from 'native-base';
import Carousel from 'react-native-looped-carousel'
import CommonStyles from "../../css/commonStyle";
import { CardItems, ThemeHeader } from '../../components';
import styles from "./styles";
import Http from '../../api/Api';
import Getui from 'react-native-getui'
/**
 * 主页一:游戏
 */

export default class GamePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            bannerData: [],
            clientId: '',
            version: '',
            status: ''
        }

    }
    static not = 0;
    static navigationOptions = {
        header: null,
        //headerTitle: (<Text style={CommonStyles.title}>游戏</Text>),
        tabBarLabel: '游戏',
        tabBarIcon: ({ tintColor }) => (
            < Icon name={"gamepad-variant"} type={"MaterialCommunityIcons"} fontSize={5} style={CommonStyles.iconStyle} />
        ),
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
    };

    componentWillMount() {
        this._getBannerList();
        this._getGameList();
        this.updateComponentInfo();
    }

    render() {
        let items = this.state.data;
        let bannerData = this.state.bannerData;
        return (
            <Container>
                <ThemeHeader title={"游戏"} />
                <Content>
                    {
                        bannerData.length != 0 &&
                        <Carousel style={styles.wrapper} autoplay={true} bullets={true}>
                            {
                                bannerData.map((item, index) => (
                                    <Image style={styles.imageStyle}
                                        source={{ uri: item.bannerUrl }} key={index}
                                    />
                                ))
                            }
                        </Carousel>
                    }
                    <FlatList data={items}
                        enableEmptySections={true}
                        onEndReachedThreshold={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return <CardItems
                                {...this.props}
                                gameFeatureDTO={item.gameFeatureDTO}
                                url={item.gameImgUrl}
                                currency={item.gameFeatureDTO[0].featureName}
                                quantity={item.gameFeatureDTO[1].featureName}
                                onPress={() => this.props.navigation.navigate("GameWeb", { data: item })}
                            />
                        }} />
                </Content >
            </Container>
        )
    }

    _getGameList() {
        let self = this
        Http.getRequest(
            'appUrl',
            'gameList',
            '',
            function (data) {
                console.log(data)
                self.setState({
                    data: data.list
                })
            }
        )
    }

    _getBannerList() {
        let self = this
        Http.getRequest(
            'appUrl',
            'banner',
            '',
            function (data) {
                console.log(data)
                self.setState({
                    bannerData: data
                })
            }
        )
    }

    updateComponentInfo() {
        console.log(111)
        Getui.clientId((param) => {
            this.setState({ 'clientId': param })
            console.log(param)
        })

        Getui.version((param) => {
            this.setState({ 'version': param })
        })

        Getui.status((param) => {
            let status = ''
            switch (param) {
                case '0':
                    status = '正在启动'
                    break;
                case '1':
                    status = '启动'
                    break;
                case '2':
                    status = '停止'
                    break;
            }
            this.setState({ 'status': status })
        })
    }
}

//订阅消息通知
var { NativeAppEventEmitter } = require('react-native');

var receiveRemoteNotificationSub = NativeAppEventEmitter.addListener('receiveRemoteNotification', (notification) => {
    //Android的消息类型为payload 透传消息 或者 cmd消息
    switch (notification.type) {
        case "cid":
            //  console.log("receiveRemoteNotification cid = " + notification.cid)
            //Alert.alert('初始化获取到cid', JSON.stringify(notification))
            console.log('初始化获取到cid')
            break;
        case 'payload':
            console.log('消息通知', JSON.stringify(notification))
            this.not += 1;
            console.log(this.not);
            break
        case 'cmd':
            console.log('cmd消息通知')
            break
        case 'notificationArrived':
            console.log('通知到达', JSON.stringify(notification))
            break
        case 'notificationClicked':
            console.log('通知点击')
            break
        default:
    }
}
);

var clickRemoteNotificationSub = NativeAppEventEmitter.addListener(
    'clickRemoteNotification',
    (notification) => {
        console.log('点击通知')
    }
);

