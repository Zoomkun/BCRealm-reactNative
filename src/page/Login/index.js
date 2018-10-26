import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    AsyncStorage,
    Dimensions,
    ImageBackground,
    PixelRatio
} from 'react-native';
import {
    Button,
    Container,
    Content,
    Item,
    Input,
    Left,
    Body
} from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import Toast, { DURATION } from 'react-native-easy-toast';
import CommonStyles from '../../css/commonStyle';
import styles from "./styles";
import HttpUtils from "../../api/Api";
import { NavigationActions } from 'react-navigation';
// import DeviceInfo from 'react-native-device-info';
import Getui from 'react-native-getui';
import { logo, login_bg, warning } from '../../../images';
import { DeviceStorage } from '../../components';

resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Main' })
    ]
});

/**
 * 登录
 */
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pick: 0,
            seconds: 0,
            phone: '',
            password: '',
            code: '',
            cid: '',
            disable: false,
            clientId: '',
            version: '',
            status: '',
            warning: ''
        }
        this.interval = 0
    }

    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        let self = this
        this.updateComponentInfo();
        // let cid = DeviceInfo.getUniqueID();
        AsyncStorage.getItem('user').then(data => {
            datas = JSON.parse(data)
            if (datas) {
                self.setState({
                    phone: datas.phone,
                })
            }
        })

        // self.setState({
        //     cid: cid
        // })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={CommonStyles.container}>

                <ImageBackground source={login_bg}
                    resizeMode={"contain"}
                    style={CommonStyles.backgroundStyle}
                >
                    <Grid style={CommonStyles.gridStyle}>
                        <Row size={1.25} style={CommonStyles.rowStyel}>
                            <Row>
                                <Col size={4} />
                                <Col>
                                    <Button transparent onPress={() => { navigate("NewRegistration") }} >
                                        <Text style={{ color: '#FEFEFE', fontSize: 18, }}>注册</Text>
                                    </Button>
                                </Col>
                            </Row>
                            <Image
                                source={logo}
                                style={styles.iconStyle}
                            />
                        </Row>

                        <Row size={2} style={styles.accountPasswordStyle}>
                            <Item last style={styles.accountStyle}>
                                <Input placeholder="请输入手机号"
                                    value={this.state.phone}
                                    maxLength={11}
                                    keyboardType={'numeric'}
                                    placeholderTextColor={'#FEFEFE'}
                                    onChangeText={(text) => { this.setState({ phone: text }) }}
                                    style={{ color: 'white' }} />
                            </Item>
                            <Item last style={styles.PasswordStyle}>
                                <Input placeholder="请输入密码"
                                    value={this.state.password}
                                    keyboardType={'numeric'}
                                    secureTextEntry={true}
                                    placeholderTextColor={'#FEFEFE'}
                                    onChangeText={(text) => { this.setState({ password: text }) }}
                                    style={{ color: 'white' }}                                        >
                                </Input>
                            </Item>

                            <View style={styles.viewStyle}>
                                {this.state.warning != '' &&
                                    < Body style={styles.warnStyle}>
                                        <Image source={warning} style={styles.warningStyle} />
                                        <Text style={{ color: '#FFFFFF', fontSize: 13, }}>{this.state.warning}</Text>
                                    </Body>
                                }
                            </View>
                            <Row style={styles.rowStyel}>
                                <Button style={styles.logInButtonStyle}
                                    onPress={() => {
                                        this._login(this.state.phone, this.state.password)
                                    }}>
                                    <Text style={styles.logInTextStyle}>立即登录</Text>
                                </Button>
                            </Row>
                        </Row>

                        <Row size={0.6} style={styles.accountPasswordStyle}>
                            <Button transparent style={styles.forgetPassword}
                                onPress={() => { navigate("ForgetPassword") }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 14 }}>忘记密码</Text>
                                <View style={{ height: 1, width: 60, backgroundColor: 'white' }} />
                            </Button>
                        </Row>

                        <Row size={0.6} style={styles.rowStyel} />
                    </Grid>
                </ImageBackground >
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
        )
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
            this.setState({ disable: false });
        }
    }

    updateComponentInfo() {

        Getui.clientId((param) => {
            this.setState({ 'clientId': param })
            console.log(param + "__cid")
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

    //获取验证码
    _getCode(phone) {
        if (phone.length > 10) {
            this.state.seconds = 60
            let disable = !this.state.disable
            this.setState({ disable: disable })
            console.log("yaoqingma")
            HttpUtils.getRequest(
                'userUrl',
                'sendCode',
                {
                    'phone': `${phone}`
                },
                function (data) {
                    console.log(data)
                }
            )
            this.interval = setInterval(() => {
                let seconds = --this.state.seconds
                if (seconds <= 0) {
                    clearInterval(this.interval);
                    this.setState({ disable: false })
                }
                else {
                    this.setState({ seconds: seconds })
                }
            }, 1000)
        } else {
            this.refs.toast.show('请输入正确手机号!', DURATION.LENGTH_LONG);
        }
    }

    //密码登录
    _login(phone, password) {
        console.log(phone + '___' + password)
        let self = this
        if (phone > 10 && password != '') {
            HttpUtils.postRequrst(
                'newUserUrl',
                'newLogin',
                {
                    'loginOriginAddress': 'http://world.gametest.bcrealm.com',
                    'userName': `${phone}`,
                    'password': `${password}`,
                },
                function (data) {
                    if (data.token) {
                        console.log(data)
                        var user = new Object();
                        user.phone = self.state.phone;
                        user.Token = data.token;

                        DeviceStorage.save('user', user);
                        self.props.navigation.dispatch(resetAction);
                        //self._oldLogin(phone, password);
                    }
                }
            )
        } else {
            // self.setState({
            //     warning: "请检查您的账号密码!"
            // })
            this.refs.toast.show('请检查您的账号密码!', DURATION.LENGTH_LONG);
        }
    }

    //密码登录
    _oldLogin(phone, password) {
        console.log(phone + '___' + password)
        let self = this
        if (this.state.phone.length > 10 && this.state.password != '') {
            HttpUtils.postRequrst(
                'userUrl',
                'appLogin',
                {
                    'cid': '0',
                    'phoneNumber': `${phone}`,
                    'pwd': `${password}`,
                },
                function (data) {
                    console.log(data)
                    if (data.userName) {
                        HttpUtils.setHeader({ token: data.token })
                        DeviceStorage.save('data', data)
                        DeviceStorage.get('data').then((data) => {
                            console.log(data)
                        });
                        self.props.navigation.dispatch(resetAction);
                    } else {
                        self.refs.toast.show((data), DURATION.LENGTH_LONG);
                    }
                }
            )
        } else {
            this.refs.toast.show('请检查您的账号密码!', DURATION.LENGTH_LONG);
        }
    }

    _goMainPage() {
        let { navigate } = this.props.navigation;
        navigate("Main");
    }

    //短信登录
    _smsLogin(phone, code, clientId) {
        let self = this
        if (phone.length > 10 && code != '') {
            HttpUtils.postRequrst(
                'userUrl',
                'smsLogin',
                {
                    'cid': `${clientId}`,
                    'phoneNumber': `${phone}`,
                    'code': `${code}`,
                },
                function (data) {
                    if (data.userName) {
                        HttpUtils.setHeader({ token: data.token })
                        AsyncStorage.setItem('data', JSON.stringify(data));
                        self._goMainPage();
                        self.props.navigation.dispatch(resetAction);
                    } else {
                        self.refs.toast.show((data), DURATION.LENGTH_LONG);
                    }
                }
            )
        } else {
            this.refs.toast.show('请检查您的账号密码!', DURATION.LENGTH_LONG);
        }
    }
}