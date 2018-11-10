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

import { DeviceStorage } from '../../components';
import CommonStyles from '../../css/commonStyle';
import styles from "./styles";
import * as CacheManager from 'react-native-http-cache';
import Toast, { DURATION } from 'react-native-easy-toast';
import HttpUtils from "../../api/Api";
import { Grid, Row, Col } from 'react-native-easy-grid';

import Dialog, {
    DialogTitle,
    DialogContent,
    DialogButton,
} from 'react-native-popup-dialog';
import {
    my_top_bg,
    photo_01,
    photo_02,
    photo_03,
    photo_04,
    assetsIcon,
    authenticateIcon,
    walletIcon,
    wipeCacheIcon,
    image_gx1,
    image_ts1
} from '../../../images';

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
            userName: '',
            certification: 0,
            headeIcon: '',
            defaultAnimationDialog: false,
        };
    }

    componentDidMount() {
        CacheManager.getCacheSize().then((size) => {
            this.setState({ cacheSize: size })
        })
    }


    componentWillMount() {
        this._getPlayerInfo()
    }

    static navigationOptions = ({ navigation }) => ({
        header: null,
        headerStyle: {
            "backgroundColor": "#714BD9",
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
                <Content>
                    <ImageBackground
                        resizeMode={"cover"}
                        source={my_top_bg}
                        style={styles.imageBackgroundStyle}
                    >
                        <Row style={{ height: 60, }}>
                            <Body>
                                <Text style={styles.titleStyle}>我的</Text>
                            </Body>
                        </Row>
                        <Grid size={1} style={{ flexDirection: 'row', }}>
                            <Col size={1.5} style={{ justifyContent: 'center' }} >
                                {
                                    data.headIcon != '' &&
                                    < Thumbnail source={
                                        data.headIcon == "1"
                                            ? photo_01
                                            : data.headeIcon == "2"
                                                ? photo_02
                                                : data.headeIcon == "3"
                                                    ? photo_03
                                                    : photo_04
                                    } style={styles.headStyle} />
                                }
                            </Col>
                            <Col size={2} style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <Text style={styles.userNameStyle}>{data.nickName}</Text>
                                <Text style={styles.userIdStyle}></Text>
                            </Col>
                            <Col size={3}></Col>
                        </Grid>
                    </ImageBackground>

                    <List>
                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('Assets') }}>
                            <Image style={{ width: 18, height: 18 }}
                                source={assetsIcon}>
                            </Image>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={styles.textStyle}>资产</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={styles.line} />

                        {/* <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('Notice', { returnData: this._upDataUnReads.bind(this) }) }}>
                            <Icon name={"message-circle"} type={"Feather"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={styles.textStyle}>私信</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={{ alignItems: 'center', marginRight: 10 }}{...console.log(this.state.unReads + 'unReads' + this.state.push + 'push')}>
                                    {this.state.unReads + this.state.push > 0 ?
                                        this.state.unReads + this.state.push : ""}
                                </Text>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={styles.line} /> */}

                        <ListItem
                            itemDivider
                            button
                            style={styles.listItemStyle}
                            onPress={() => {
                                data.realIdStatus == 2
                                    ? this.refs.toast.show("您已认证", DURATION.LENGTH_LONG)
                                    : navigate('Authenticate', { returnData: this._returnData.bind(this) })

                            }}>
                            <Image style={{ width: 18, height: 18 }}
                                source={authenticateIcon}>
                            </Image>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={styles.textStyle}>实名认证</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={
                                    data.realIdStatus == 2
                                        ? styles.certifiedStyle
                                        : styles.uncertifiedStyle}>
                                    {
                                        data.realIdStatus == 2
                                            ? "已认证 " :
                                            "未认证"
                                    }
                                </Text>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={styles.line} />

                        <ListItem
                            itemDivider
                            button
                            style={styles.listItemStyle}
                            onPress={() => {
                                navigate('WalletAuthenticate', { returnData: this._returnData.bind(this) })
                            }}
                        >
                            <Image style={{ width: 18, height: 18 }}
                                source={walletIcon}>
                            </Image>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={styles.textStyle}>钱包认证</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={this.state.certification > 0 ? styles.certifiedStyle : styles.uncertifiedStyle}> </Text>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={{ backgroundColor: '#F3F3F3', height: 10 }} />

                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { this._cleanCache() }}>
                            <Image style={{ width: 18, height: 18 }}
                                source={wipeCacheIcon}>
                            </Image>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={CommonStyles.textColor}>清除缓存</Text>
                            </Body>
                            <Right style={styles.rightStyle}>
                                <Text style={{ alignItems: 'center', marginRight: 10 }}>
                                    {
                                        0.15 >= (Math.round((this.state.cacheSize / 1024 / 1024) * 100) / 100)
                                            ? 0
                                            : (Math.round((this.state.cacheSize / 1024 / 1024) * 100) / 100)}M
                                    </Text>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={styles.line} />

                        {/* <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('AboutUs') }}>
                            <Image style={{ width: 18, height: 18 }}
                                source={require('../../../images/aboutUsIcon.png')}>
                            </Image>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={CommonStyles.textColor}>关于世界</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={{ backgroundColor: '#F3F3F3', height: 10 }} /> */}

                        <ListItem itemDivider style={styles.listItemStyle} button
                            onPress={() => {
                                this.setState({
                                    defaultAnimationDialog: true,
                                });
                            }}
                        >
                            {/* <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('AboutUs') }}> */}

                            <Image style={{ width: 18, height: 18 }}
                                source={image_gx1}>
                            </Image>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={CommonStyles.textColor}>检查更新</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={styles.line} />

                        <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate('ComplaintsAndSuggestions', { returnData: this._showToast.bind(this) }) }}>
                            <Image style={{ width: 18, height: 18 }}
                                source={image_ts1}>
                            </Image>
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text style={CommonStyles.textColor}>投诉与建议</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-thin-right"} type={"Entypo"} fontSize={5} style={CommonStyles.rightIconStyle} />
                            </Right>
                        </ListItem>
                        <View style={{ backgroundColor: '#F3F3F3', height: 10 }} />
                    </List>

                    <Row size={20} style={styles.rowStyle}>
                        <View>
                            <Button transparent style={styles.buttonStyle} onPress={() => { this._gologin() }}>
                                <Text style={styles.buttonTextStyle}>退出登录</Text>
                            </Button>
                        </View>
                    </Row>
                </Content>

                <Dialog
                    onDismiss={() => {
                        this.setState({ defaultAnimationDialog: false });
                    }}
                    width={0.9}
                    visible={this.state.defaultAnimationDialog}
                    rounded
                    dialogTitle={
                        <ImageBackground
                            style={{ width: 330, height: 80, justifyContent: 'center' }}
                            source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541852443450&di=629394d5009c530ff24f5665e23fe708&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F01%2F20160601104059_YNz8P.jpeg' }}>
                            <Text style={{ color: '#FF00FF', alignSelf: 'center', justifyContent: 'center' }}>我是标题啊啊啊啊啊啊啊</Text>
                        </ImageBackground>

                    }
                    actions={[
                        <DialogButton
                            text="取消"
                            onPress={() => {
                                this.setState({ defaultAnimationDialog: false });
                            }}
                            key="button-1"
                        />,
                        <DialogButton
                            text="确认"
                            onPress={() => {
                                this.setState({ defaultAnimationDialog: false });
                            }}
                            key="button-2"
                        />,
                    ]}
                >
                    <DialogContent
                        style={{
                            backgroundColor: '#F7F7F8',
                        }}
                    >
                        <Text>LOL</Text>
                        <Text>喜迎世界冠军IG</Text>
                    </DialogContent>
                </Dialog>
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


    _getPlayerInfo() {
        let self = this
        HttpUtils.getRequest(
            'getPlayerInfo',
            '',
            function (data) {
                console.log(data)
                self.setState({
                    data: data,
                })
            }
        )
    }

    _returnData(data) {
        this.setState({
            data: data
        });
    }

    _showToast(data) {
        this.refs.toast.show(data, DURATION.LENGTH_LONG);
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