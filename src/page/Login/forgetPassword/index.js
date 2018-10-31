import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image
} from 'react-native';
import {
    Button,
    Container,
    Body,
    Item,
    Input,
    Icon,
    Content,
    Left,
    Right
} from 'native-base';
import CommonStyles from '../../../css/commonStyle';
import Toast, { DURATION } from 'react-native-easy-toast'
import styles from "./styles";
import HttpUtils from "../../../api/Api";
import { login_bg } from '../../../../images'
import { Grid, Row, Col } from 'react-native-easy-grid';

/**
 * 忘记密码
 */
export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            phone: '',
            password: '',
            code: '',
            disable: false,
            CodeUuId: '',
            imgCodeUrl: ''
        }
        this.interval = 0
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
            this.setState({ disable: false });
        }
    }

    componentDidMount() {
        this._getCodeUuId();
    }

    render() {
        return (
            <Container style={CommonStyles.container}>
                <ImageBackground source={login_bg}
                    resizeMode={"cover"}
                    style={CommonStyles.backgroundStyle}
                >
                    <Content>
                        <Grid style={CommonStyles.gridStyle}>
                            <Row style={{ height: 60, }}>
                                <Left>
                                    <Button transparent onPress={() => { this.goBack() }}>
                                        <Icon
                                            name={"ios-arrow-back"}
                                            style={CommonStyles.backIconStyle}
                                        />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={CommonStyles.titleStyle}>找回密码</Text>
                                </Body>
                                <Right>
                                    <Button transparent />
                                </Right>
                            </Row>

                            < View style={styles.viewStyle}>
                                <Item style={styles.itemStyle}>
                                    <Input placeholder="请输入手机号"
                                        value={this.state.phone}
                                        maxLength={11}
                                        keyboardType={'numeric'}
                                        style={{ color: 'white' }}
                                        placeholderTextColor={'#FEFEFE'}
                                        onChangeText={(text) => { this.setState({ phone: text }) }} />
                                </Item>


                                <Item style={styles.itemStyle}>
                                    <Input placeholder="输入图形码"
                                        value={this.state.imgcode}
                                        keyboardType={'numeric'}
                                        style={{ color: 'white' }}
                                        placeholderTextColor={'#FEFEFE'}
                                        maxLength={8}
                                        onChangeText={(text) => { this.setState({ imgcode: text }) }} >
                                    </Input>
                                    <Button transparent onPress={() => { this._getCodeUuId() }}>
                                        {this.state.imgCodeUrl != '' &&
                                            <Image
                                                resizeMode={"cover"}
                                                source={{ uri: 'http://test.bcrealm.com/api/wuser/user/imgCode?uuId=' + this.state.imgCodeUrl }}
                                                style={{ width: 100, height: 40 }}
                                            />
                                        }
                                    </Button>
                                </Item>

                                <Item style={styles.itemStyle}>
                                    <Input placeholder="请输入验证码"
                                        value={this.state.code}
                                        keyboardType={'numeric'}
                                        style={{ color: 'white' }}
                                        placeholderTextColor={'#FEFEFE'}
                                        onChangeText={(text) => { this.setState({ code: text }) }} >
                                    </Input>
                                    <View style={{ height: 25, width: 1, backgroundColor: 'white' }} />

                                    <Button
                                        transparent
                                        style={this.state.disable ? styles.disableCodeStyle : styles.codeStyle}
                                        disabled={this.state.disable}
                                        onPress={() => {
                                            this._newGetCode(this.state.imgcode, this.state.phone, this.state.imgCodeUrl)
                                        }}>
                                        {
                                            this.state.disable ?
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Text style={{ color: '#999999' }} note>重新发送</Text>
                                                    <Text style={{ color: '#999999' }} >（{this.state.seconds}）</Text>
                                                </View> :
                                                <Text style={{ color: 'white', fontSize: 14 }}>获取验证码</Text>
                                        }
                                    </Button>
                                </Item>
                            </View>

                            < Row size={0.6} style={styles.rowStyle}>
                                <Button style={styles.logInButtonStyle}
                                    onPress={() => {
                                        this._userBack(this.state.code, this.state.phone)
                                    }}>
                                    <Text style={styles.logInTextStyle}>下一步</Text>
                                </Button>
                            </Row>
                        </Grid>
                    </Content>
                </ImageBackground>

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

    _getCodeUuId() {
        let self = this;
        HttpUtils.getRequest(
            'getCodeUuId',
            '',
            function (data) {
                console.log(data)
                if (data != '') {
                    self.setState({
                        imgCodeUrl: data
                    })
                }
            }
        )
    }

    _newGetCode(imgCode, phone, uuId) {
        let self = this;
        if (imgCode == '' || phone.length != 11) {
            this.refs.toast.show('请检查您的手机号或图形码是否正确!', DURATION.LENGTH_LONG);
        } else {
            HttpUtils.postRequrst(
                'changePasswordCode',
                {
                    "code": `${imgCode}`,
                    "phone": `${phone}`,
                    "uuId": `${uuId}`
                },
                function (data) {
                    if (data == phone) {
                        self.refs.toast.show("验证码已下发.请注意查收", DURATION.LENGTH_LONG);
                    }
                }
            )
        }
    }

    _userBack(code, phone) {
        let self = this;
        if (code == '' || phone.length != 11) {
            this.refs.toast.show("请检查您的手机号或者验证码是否正确", DURATION.LENGTH_LONG);
        } else {
            HttpUtils.postRequrst(
                'userBack',
                {
                    'code': `${code}`,
                    'phone': `${phone}`
                },
                function (data) {
                    if (data == '') {
                        self.props.navigation.navigate("Confirm", { code: code, phone: phone });
                    } else {
                        self.refs.toast.show(data, DURATION.LENGTH_LONG);
                    }
                }
            )
        }
    }

    _getCode(phone) {
        let self = this
        if (phone.length > 10) {
            this.state.seconds = 60
            let disable = !this.state.disable
            this.setState({ disable: disable })
            HttpUtils.getRequest(
                'userUrl',
                'sendCode',
                {
                    '': `${phone}`
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

    _changePassword(phone, password, code) {
        let self = this
        if (phone.length > 10 && password != '' && code != '') {
            HttpUtils.putRequrst(
                'userUrl',
                'uppwd',
                {
                    'checkNum': `${code}`,
                    'phoneNumber': `${phone}`,
                    'pwd': `${password}`,
                },
                function (data) {
                    self.refs.toast.show(data.msg, DURATION.LENGTH_LONG);
                }
            )
        } else {
            this.refs.toast.show('请检查您的账号、新密码、验证码是否正确!', DURATION.LENGTH_LONG);
        }
    }
}
