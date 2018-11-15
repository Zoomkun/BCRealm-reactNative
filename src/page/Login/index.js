import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    AsyncStorage,
    ImageBackground,
} from 'react-native';
import {
    Button,
    Container,
    Item,
    Input,
    Body,
    Content
} from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import Toast, { DURATION } from 'react-native-easy-toast';
import CommonStyles from '../../css/commonStyle';
import styles from "./styles";
import HttpUtils from "../../api/Api";
import { NavigationActions } from 'react-navigation';
// import DeviceInfo from 'react-native-device-info';
import Getui from 'react-native-getui';
// import Cookie from 'react-native-cookie';
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
            let datas = JSON.parse(data);
            if (datas) {
                self.setState({
                    phone: datas.phone,
                })
                console.log(datas)
                // self.props.navigation.dispatch(resetAction);
            }
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={CommonStyles.container}>

                <ImageBackground source={login_bg}
                    resizeMode={"cover"}
                    style={CommonStyles.backgroundStyle}
                >
                    <Content>
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
                                    <Input placeholder="请输入区世界账号"
                                        value={this.state.phone}
                                        maxLength={11}
                                        placeholderTextColor={'#FEFEFE70'}
                                        onChangeText={(text) => { this.setState({ phone: text }) }}
                                        style={{ color: 'white' }} />
                                </Item>
                                <Item last style={styles.PasswordStyle}>
                                    <Input placeholder="请输入密码"
                                        value={this.state.password}
                                        secureTextEntry={true}
                                        placeholderTextColor={'#FEFEFE70'}
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

                                <Row size={0.5} style={styles.accountPasswordStyle}>
                                    <Button transparent style={styles.forgetPassword}
                                        onPress={() => { navigate("ForgetPassword") }}>
                                        <Text style={{ color: '#FFFFFF', fontSize: 14 }}>忘记密码</Text>
                                        <View style={{ height: 1, width: 60, backgroundColor: 'white' }} />
                                    </Button>
                                </Row>

                                <Row style={styles.rowStyel}>
                                    <Button style={styles.logInButtonStyle}
                                        onPress={() => {
                                            this._login(this.state.phone, this.state.password)
                                        }}>
                                        <Text style={styles.logInTextStyle}>立即登录</Text>
                                    </Button>
                                    <Button transparent style={styles.btnStyle} onPress={() => { navigate("ServiceAgreement") }}>
                                        <Text style={{ color: 'white', fontSize: 13 }}>点击注册即表示已阅读并同意</Text>
                                        <Text style={{ color: '#FE6F06', fontSize: 13 }}>《区世界服务协议》</Text>
                                    </Button>
                                </Row>
                            </Row>

                            <Row size={0.6} style={styles.rowStyel} />
                        </Grid>
                    </Content>
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
                'newLogin',
                {
                    'loginOriginAddress': 'http://world.gametest.bcrealm.com',
                    'userName': `${phone}`,
                    'password': `${password}`,
                },
                function (data) {
                    if (data.status != "error") {
                        HttpUtils.setHeader({ Authorization: data.data.token })
                        var user = new Object();
                        user.phone = self.state.phone;
                        user.token = data.data.token;
                        AsyncStorage.setItem('user', JSON.stringify(user));
                        console.log(user)
                        //DeviceStorage.save("user", user);
                        // DeviceStorage.get('user').then(data => {
                        //     console.log(data)
                        // })
                        self.props.navigation.dispatch(resetAction);
                    } else {
                        self.refs.toast.show(data.msg, DURATION.LENGTH_LONG);
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

    _goMainPage() {
        let { navigate } = this.props.navigation;
        navigate("Main");
    }
}