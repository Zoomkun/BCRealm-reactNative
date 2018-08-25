import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    AsyncStorage
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
} from 'native-base';

import { Row, } from "react-native-easy-grid";
import CommonStyles from '../../css/commonStyle';
import styles from "./styles";
import * as CacheManager from 'react-native-http-cache';
import Toast, { DURATION } from 'react-native-easy-toast';
import HttpUtils from "../../api/Api";

const menus = [
    { icon: require('../../../images/wallet.png'), text: "钱包", arrows: require('../../../images/goIn.png'), uri: 'Wallet', line: true },
    { icon: require('../../../images/currency.png'), text: "货币", arrows: require('../../../images/goIn.png'), uri: 'Currency', line: true },
];

// { icon: require('../../../images/news.png'), text: "私信", arrows: require('../../../images/goIn.png'), uri: 'Notice', line: true, unReads: 1 },
// { icon: require('../../../images/authenticate.png'), text: "实名认证", arrows: require('../../../images/goIn.png'), uri: 'Authenticate', Certification: 1 },
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
        };
    }

    componentDidMount() {
        CacheManager.getCacheSize().then((size) => {
            this.setState({ cacheSize: size })
        })
    }

    componentWillMount() {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            this.setState({
                data: datas,
            })
        })
        this._getUnReads();
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (<Text style={CommonStyles.title}>我</Text>),
        // headerLeft: (<Image style={styles.headerLeft}>左边</Image>),
        // headerRight: (<Image style={styles.headerRight}>右边</Image>),
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        tabBarLabel: '我',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../../images/mine.png')}
                style={[CommonStyles.icon, { tintColor: tintColor }]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerTintColor: '#fff',

    })

    render() {
        const { navigate } = this.props.navigation;
        let data = this.state.data;
        return (
            <Container style={CommonStyles.container}>
                <Content>
                    <List>
                        <ListItem itemDivider style={{ height: 100, justifyContent: 'center', backgroundColor: '#ffffff' }}
                            button onPress={() => {
                                navigate("PersonalInfo", { returnData: this._returnData.bind(this), data: this.state.data })
                            }}>
                            <Thumbnail source={{ uri: data.headUrl }} />
                            <Body style={{ justifyContent: 'flex-start', paddingLeft: 10 }}>
                                <Text>{data.userName}</Text>
                                <Text note>{data.accountNo}</Text>
                            </Body>
                            <Right>
                                <Image
                                    source={require('../../../images/goIn.png')}
                                    style={CommonStyles.icon}
                                />
                            </Right>
                        </ListItem>

                        <View style={{ backgroundColor: '#F3F3F3', height: 20 }} />
                        {
                            menus.map((item, index) => (
                                <View key={index}>
                                    <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate(item.uri) }}>
                                        <Image
                                            source={item.icon}
                                            style={CommonStyles.icon}
                                        />
                                        <Body style={{ justifyContent: 'flex-start', }}>
                                            <Text style={styles.textStyle}>{item.text}</Text>
                                        </Body>
                                        <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                                            <Image
                                                source={item.arrows}
                                                style={CommonStyles.icon}
                                            />
                                        </Right>
                                    </ListItem>
                                    {item.line &&
                                        <View style={styles.line} />
                                    }
                                </View>
                            ))
                        }

                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('Notice') }}>
                            <Image
                                source={require('../../../images/news.png')}
                                style={CommonStyles.icon}
                            />
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={styles.textStyle}>私信</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={{ alignItems: 'center', marginRight: 10 }}>{this.state.unReads > 0 ? this.state.unReads : ""}</Text>
                                <Image
                                    source={require('../../../images/goIn.png')}
                                    style={CommonStyles.icon}
                                />
                            </Right>
                        </ListItem>
                        <View style={styles.line} />

                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { data.certification > 0 ? '' : navigate('Authenticate') }}>
                            <Image
                                source={require('../../../images/authenticate.png')}
                                style={CommonStyles.icon}
                            />
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={styles.textStyle}>实名认证</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={{ alignItems: 'center', marginRight: 10 }}>{data.certification > 0 ? "已认证 " : "未认证"}</Text>
                                <Image
                                    source={require('../../../images/goIn.png')}
                                    style={CommonStyles.icon}
                                />
                            </Right>
                        </ListItem>
                        <View style={{ backgroundColor: '#F3F3F3', height: 20 }} />

                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { this._cleanCache() }}>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text >清除缓存</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={{ alignItems: 'center', marginRight: 10 }}>{Math.round((this.state.cacheSize / 1024 / 1024) * 100) / 100}M</Text>
                                <Image
                                    source={require('../../../images/goIn.png')}
                                    style={CommonStyles.icon}
                                />
                            </Right>
                        </ListItem>
                        <View style={styles.line} />

                        {/* <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('AboutUs') }}> */}
                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('Login') }}>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text >关于区世界</Text>
                            </Body>
                            <Right>
                                <Image
                                    source={require('../../../images/goIn.png')}
                                    style={CommonStyles.icon}
                                />
                            </Right>
                        </ListItem>
                    </List>
                    <Row size={20} style={styles.row}>
                        <View>
                            <Button style={styles.button} onPress={() => { this._loginOut() }}>
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
        if (this.state.cacheSize > 0) {
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

}