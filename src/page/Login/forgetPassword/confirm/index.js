import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground
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
import CommonStyles from '../../../../css/commonStyle';
import Toast, { DURATION } from 'react-native-easy-toast'
import styles from "./styles";
import HttpUtils from "../../../../api/Api";
import { login_bg } from '../../../../../images'
import { Grid, Row, Col } from 'react-native-easy-grid';


/**
 * 确认密码
 */
export default class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            phone: '',
            password: '',
            code: '',
            disable: false,
            change: false
        }
        this.interval = 0
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    static navigationOptions = {
        header: null
    };

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
            this.setState({ disable: false });
        }
    }

    render() {
        return (
            <Container style={CommonStyles.container}>

                <ImageBackground source={login_bg}
                    resizeMode={"contain"}
                    style={CommonStyles.backgroundStyle}
                >
                    <Content>
                        <Grid style={CommonStyles.gridStyle}>
                            <Row style={{ height: 60, }}>
                                <Left>
                                    <Button transparent onPress={() => { this.goBack() }}>
                                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={CommonStyles.titleStyle}>找回密码</Text>
                                </Body>
                                <Right>
                                    <Button transparent />
                                </Right>
                            </Row>
                            <Row size={0.4} />

                            < View style={styles.viewStyle}>
                                <Item style={styles.itemStyle}>
                                    <Input placeholder="请输入新密码"
                                        value={this.state.phone}
                                        maxLength={11}
                                        keyboardType={'numeric'}
                                        style={{ color: 'white' }}
                                        placeholderTextColor={'#FEFEFE'}
                                        onChangeText={(text) => { this.setState({ phone: text }) }} />
                                </Item>

                                <Item style={styles.itemStyle}>
                                    <Input placeholder="再次输入新密码"
                                        value={this.state.code}
                                        keyboardType={'numeric'}
                                        style={{ color: 'white' }}
                                        placeholderTextColor={'#FEFEFE'}
                                        onChangeText={(text) => { this.setState({ code: text }) }} >
                                    </Input>
                                    <View style={{ height: 25, width: 1, backgroundColor: 'white' }} />
                                </Item>
                            </View>

                            < Row size={0.6} style={styles.rowStyle}>
                                <Button rounded style={styles.logInButtonStyle}
                                    onPress={() => { this._changePassword(this.state.phone, this.state.password, this.state.code) }}>
                                    <Text style={styles.logInTextStyle}>确认</Text>
                                </Button>
                            </Row>
                            <Text style={{ color: 'pink', fontSize: 30 }}>{this.state.change}</Text>
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

    _change() {
        this.setState(
            {
                change: !change
            }
        )
    }
    _getCode(phone) {
        let slef = this
        if (phone.length > 10) {
            this.state.seconds = 60
            let disable = !this.state.disable
            this.setState({ disable: disable })
            console.log("yaoqingma")
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
