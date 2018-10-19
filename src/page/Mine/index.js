import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    AsyncStorage,
    ImageBackground
} from 'react-native';
import {
    Container,
    Content,
    Body,
    Right,
    List,
    ListItem,
    Thumbnail,
    Button,
    Icon
} from 'native-base';

import { ThemeHeader } from '../../components';
import CommonStyles from '../../css/commonStyle';
import styles from "./styles";
import * as CacheManager from 'react-native-http-cache';
import Toast, { DURATION } from 'react-native-easy-toast';
import HttpUtils from "../../api/Api";
import { Grid, Row, Col } from 'react-native-easy-grid';

const menus = [
    { icon: require('../../../images/wallet.png'), text: "钱包", arrows: require('../../../images/goIn.png'), uri: 'Wallet', line: true },
    { icon: require('../../../images/currency.png'), text: "货币", arrows: require('../../../images/goIn.png'), uri: 'Currency', line: true },
];

/**
 * 主页四:我
 */
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cacheSize: 0,
            showToast: false,
            data: [],
            accountNo: 0,
            unReads: 0,
            push: 0,
        };
    }

    componentDidMount() {
        CacheManager.getCacheSize().then((size) => {
            this.setState({ cacheSize: size })
        })
    }

    componentWillMount() {
        console.log("我")
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            console.log(datas)
            this.setState({
                data: datas,
            })
        })
        this._getUnReads(1);
    }

    static navigationOptions = ({ navigation }) => ({
        header: null,
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        tabBarLabel: '我',
        tabBarIcon: ({ tintColor }) => (
            <Icon name={"user-o"} type={"FontAwesome"}
                fontSize={5} style={CommonStyles.iconStyle} />
        ),
        headerTintColor: '#fff',
    })

    render() {
        const { navigate } = this.props.navigation;
        let data = this.state.data;
        return (
            <Container style={CommonStyles.container}>
                <ThemeHeader title={"我"} />
                <Content>
                    <List>
                        <ImageBackground resizeMode={"contain"}
                            source={require('../../../images/aboutme_bg.png')}
                            style={styles.imageStyle}
                        >
                            <Grid size={1}>
                                <Col size={1.5} >
                                    <Thumbnail source={{ uri: data.headUrl }} style={styles.headStyle} />
                                </Col>
                                <Col size={2} >
                                    <Text style={styles.userNameStyle}>{data.userName}</Text>
                                </Col>
                                <Col size={3}></Col>
                            </Grid>
                        </ImageBackground>

                        {/* 修改用户信息入口 */}
                        {/* <ListItem itemDivider style={{ height: 100, justifyContent: 'center', backgroundColor: '#ffffff' }}
                            button onPress={() => {
                                navigate("PersonalInfo", { returnData: this._returnData.bind(this), data: this.state.data })
                            }}>
                            <Thumbnail source={{ uri: data.headUrl }} />
                            <Body style={{ justifyContent: 'flex-start', paddingLeft: 10 }}>
                                <Text style={CommonStyles.textColor}>{data.userName}</Text>
                                <Text note>{data.accountNo}</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem> */}
                        {/* <View style={{ backgroundColor: '#F3F3F3', height: 20 }} /> */}

                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('Assets') }}>
                            <Icon name={"currency-cny"} type={"MaterialCommunityIcons"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={styles.textStyle}>资产</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={styles.line} />

                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('Notice', { returnData: this._upDataUnReads.bind(this) }) }}>
                            <Icon name={"message-circle"} type={"Feather"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={styles.textStyle}>私信</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={{ alignItems: 'center', marginRight: 10 }}{...console.log(this.state.unReads + 'unReads' + this.state.push + 'push')}>
                                    {this.state.unReads + this.state.push > 0 ?
                                        this.state.unReads + this.state.push : ""}
                                </Text>
                                {/* <Image
                                    source={require('../../../images/goIn.png')}
                                    style={CommonStyles.icon}
                                /> */}
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={styles.line} />

                        <ListItem
                            itemDivider
                            button
                            style={styles.listItemStyle}
                            onPress={() => {
                                data.certification > 0 ?
                                    this.refs.toast.show("您已认证", DURATION.LENGTH_LONG) :
                                    navigate('Authenticate', { returnData: this._returnData.bind(this) })

                            }}>
                            <Icon name={"wallet"} type={"SimpleLineIcons"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={styles.textStyle}>钱包认证</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={{ alignItems: 'center', marginRight: 10 }}>{data.certification > 0 ? "已认证 " : "未认证"}</Text>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={styles.line} />

                        <ListItem
                            itemDivider
                            button
                            style={styles.listItemStyle}
                            onPress={() => {
                                data.certification > 0 ?
                                    this.refs.toast.show("您已认证", DURATION.LENGTH_LONG) :
                                    navigate('Authenticate', { returnData: this._returnData.bind(this) })

                            }}>
                            <Icon name={"vcard-o"} type={"FontAwesome"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={styles.textStyle}>实名认证</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={{ alignItems: 'center', marginRight: 10 }}>{data.certification > 0 ? "已认证 " : "未认证"}</Text>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={{ backgroundColor: '#F3F3F3', height: 20 }} />

                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { this._cleanCache() }}>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={CommonStyles.textColor}>清除缓存</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={{ alignItems: 'center', marginRight: 10 }}>{0.15 >= (Math.round((this.state.cacheSize / 1024 / 1024) * 100) / 100) ? 0 : (Math.round((this.state.cacheSize / 1024 / 1024) * 100) / 100)}M</Text>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={styles.line} />

                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('AboutUs') }}>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={CommonStyles.textColor}>关于区世界</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                    </List>
                    <Row size={20} style={styles.rowStyle}>
                        <View>
                            <Button style={styles.buttonStyle} onPress={() => { this._loginOut() }}>
                                <Text style={styles.buttonTextStyle}>退出登录</Text>
                            </Button>
                        </View>
                    </Row>
                </Content>
                <Toast
                    ref="toast"
                    style={{ backgroundColor: '#434343' }}
                    position='center'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: '#ffffff' }}
                />
            </Container >
        );
    }

    _cleanCache() {
        if (this.state.cacheSize > 160000) {
            CacheManager.clearCache();
            CacheManager.getCacheSize().then((size) => {
                this.setState({ cacheSize: size })
                this.refs.toast.show('恭喜您，成功清除缓存!', DURATION.LENGTH_LONG);
            })
        } else {
            this.refs.toast.show('您的缓存已经清理!', DURATION.LENGTH_LONG);
        }

    }

    _returnData(data) {
        this.setState({
            data: data
        });
    }

    _upDataUnReads() {
        this.setState({
            push: 0
        })
        this._getUnReads();
    }

    /**
     * 获取指定用户的未读私信数量
     */
    _getUnReads() {
        let self = this
        HttpUtils.getRequest(
            'userUrl',
            'unreads',
            '',
            function (data) {
                self.setState({
                    unReads: data,
                })
            }
        )
    }

    _getImageSize() {

    }

    _loginOut() {
        let self = this
        HttpUtils.deleteRequest(
            'userUrl',
            'loginOut',
            '',
            function (data) {
                if (data.msg == '成功') {
                    self.refs.toast.show(data.msg, DURATION.LENGTH_LONG);
                    self._gologin();
                } else {
                    self.refs.toast.show(data.msg, DURATION.LENGTH_LONG);
                }

            }
        )
    }

    _gologin() {
        let { navigate } = this.props.navigation;
        navigate("Login");
    }

    receiveRemoteNotificationSub = NativeAppEventEmitter.addListener('receiveRemoteNotification', (notification) => {
        let self = this
        //Android的消息类型为payload 透传消息 或者 cmd消息
        switch (notification.type) {
            case "cid":
                console.log('初始化获取到cid', JSON.stringify(notification))
                break;
            case "cmd":
                console.log('cmd 消息通知', JSON.stringify(notification))
                break;
            case "payload":
                console.log('payload 消息通知', JSON.stringify(notification))
                this.setState({
                    push: this.state.push + 1
                })
                console.log(this.state.push)
                break;
            //新增回调通知到达，点击回调
            case 'notificationArrived':
                console.log('notificationArrived 通知到达', JSON.stringify(notification))
                break
            case 'notificationClicked':
                console.log('notificationArrived 通知点击', JSON.stringify(notification))
                break
            default:
        }
    }
    );
}

//订阅消息通知
var { NativeAppEventEmitter } = require('react-native');

var clickRemoteNotificationSub = NativeAppEventEmitter.addListener(
    'clickRemoteNotification',
    (notification) => {
        console.log('点击通知')
    }
);