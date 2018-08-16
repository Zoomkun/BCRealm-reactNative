import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Linking
} from 'react-native';

import {
    Container,
    Content,
    Body,
    Left,
    Right,
    List,
    ListItem,
    Icon,
    Thumbnail,
    Button,
} from 'native-base';

import { Grid, Row, Col } from "react-native-easy-grid";
import CommonStyles from '../../css/commonStyle';
import styles from "./styles";
import constants from '../constants';
import * as CacheManager from 'react-native-http-cache';
import Toast, { DURATION } from 'react-native-easy-toast'

const menus = [
    { icon: require('../../../images/wallet.png'), text: "钱包", arrows: require('../../../images/goIn.png'), uri: 'Wallet', line: true },
    { icon: require('../../../images/currency.png'), text: "货币", arrows: require('../../../images/goIn.png'), uri: 'Currency', line: true },
    { icon: require('../../../images/news.png'), text: "私信", arrows: require('../../../images/goIn.png'), uri: 'Notice', line: true },
    { icon: require('../../../images/authenticate.png'), text: "实名认证", arrows: require('../../../images/goIn.png'), uri: 'Authenticate', Certification: "未认证", },
];
// const m = [
//     { text: "清除缓存", arrows: require('../../../images/goIn.png'), uri: _this.cleanCache(), line: true },
//     { text: "关于区世界", arrows: require('../../../images/goIn.png'), uri: 'AboutUs', },
// ];
const me = [
    {
        name: "JayChou",
        id: "0118",
        posters: { thumbnail: "http://img5.imgtn.bdimg.com/it/u=2716432665,3069906192&fm=11&gp=0.jpg" },
        icon: '../../../images/goIn.png',
        uri: 'PersonalInfo',
    }
];
/**
 * 主页四:我
 */
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cacheSize: 0,
            showToast: false
        };
    }

    componentDidMount() {

        CacheManager.getCacheSize().then((size) => {
            this.setState({ cacheSize: size })
        })
    }

    //test code
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
        var e = me[0];
        const { navigate } = this.props.navigation;
        return (
            <Container style={CommonStyles.container}>
                <Content>
                    <List>
                        <ListItem itemDivider style={{ height: 100, justifyContent: 'center', backgroundColor: '#ffffff' }} button onPress={() => { navigate(e.uri) }}>
                            <Thumbnail source={constants.avatar} />
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text>{e.name}</Text>
                                <Text note>{e.id}</Text>
                            </Body>
                            <Right>
                                <Image
                                    source={require('../../../images/goIn.png')}
                                    style={CommonStyles.icon}// {tintColor: tintColor} 选中的图片和文字颜色
                                />
                            </Right>
                        </ListItem>
                        <View style={{ backgroundColor: '#F3F3F3', height: 20 }} />
                        {
                            menus.map((item, index) => (
                                //<ListItem key={index} button onPress={() => { this.props.navigation.navigate(item.uri) }}>
                                <View key={index}>
                                    <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate(item.uri) }}>
                                        <Image
                                            source={item.icon}
                                            style={CommonStyles.icon}// {tintColor: tintColor} 选中的图片和文字颜色
                                        />
                                        <Body style={{ justifyContent: 'flex-start', }}>
                                            <Text style={styles.textStyle}>{item.text}</Text>
                                        </Body>
                                        <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                                            {item.Certification &&
                                                <Text style={{ alignItems: 'center', marginRight: 10 }}>{item.Certification}</Text>
                                            }
                                            {item.arrows &&
                                                <Image
                                                    source={item.arrows}
                                                    style={CommonStyles.icon}// {tintColor: tintColor} 选中的图片和文字颜色
                                                />
                                            }</Right>
                                    </ListItem>
                                    {item.line &&
                                        <View style={{ backgroundColor: '#F3F3F3', height: 2 }} />
                                    }
                                </View>
                            ))
                        }
                        <View style={{ backgroundColor: '#F3F3F3', height: 20 }} />


                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { this._cleanCache() }}>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text >清除缓存</Text>
                            </Body>
                            <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                                <Text style={{ alignItems: 'center', marginRight: 10 }}>{Math.round((this.state.cacheSize / 1024 / 1024) * 100) / 100}M</Text>
                                <Image
                                    source={require('../../../images/goIn.png')}
                                    style={CommonStyles.icon}
                                />
                            </Right>
                        </ListItem>

                        <View style={{ backgroundColor: '#F3F3F3', height: 2 }} />

                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('AboutUs') }}>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text >关于区世界</Text>
                            </Body>
                            <Right>
                                <Image
                                    source={require('../../../images/goIn.png')}
                                    style={CommonStyles.icon}// {tintColor: tintColor} 选中的图片和文字颜色
                                />
                            </Right>
                        </ListItem>
                    </List>
                    <Row size={20} style={styles.row}>
                        <View>
                            <Button style={styles.button} >
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
        CacheManager.clearCache();
        CacheManager.getCacheSize().then((size) => {
            this.setState({ cacheSize: size })
            this.refs.toast.show('恭喜您，成功清除缓存', DURATION.LENGTH_LONG);
        })
    }
}