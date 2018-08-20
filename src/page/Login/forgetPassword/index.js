import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import {
    Button,
    Container,
    Body,
    Item,
    Input,
    Header,
    Icon
} from 'native-base';
import { Row, } from 'react-native-easy-grid';
import CommonStyles from '../../../css/commonStyle';
import Toast, { DURATION } from 'react-native-easy-toast'
import styles from "./styles";

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
        }
        this.interval = 0
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Container style={CommonStyles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>忘记密码</Text>
                    </Body>
                    <Button transparent />
                </Header>

                <View style={styles.viewStyle}>
                    <Item style={styles.itemStyle}>
                        <Input placeholder="请输入手机号"
                            value={this.state.phone}
                            maxLength={11}
                            keyboardType={'numeric'}
                            onChangeText={(text) => { this.setState({ phone: text }) }} />
                    </Item>

                    <Item style={styles.itemStyle}>
                        <Input placeholder="请输入验证码"
                            value={this.state.code}
                            keyboardType={'numeric'}
                            onChangeText={(text) => { this.setState({ code: text }) }} >
                        </Input>
                        <Button bordered style={this.state.disable ? styles.disableCodeStyle : styles.codeStyle}
                            disabled={this.state.disable}
                            onPress={() => { this._getCode(this.state.phone) }}>
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
                                    <Text style={{ color: '#FE6F06', fontSize: 14 }}>获取验证码</Text>
                            }
                        </Button>
                    </Item>

                    <Item itemDivider style={styles.itemStyle}>
                        <Input placeholder="请输入新密码"
                            value={this.state.password}
                            keyboardType={'numeric'}
                            secureTextEntry={true}
                            onChangeText={(text) => { this.setState({ password: text }) }} />
                    </Item>
                </View>

                <Row size={0.6} style={styles.rowStyle}>
                    <Button rounded style={styles.logInButtonStyle}
                        onPress={() => { this._changePassword(this.state.phone, this.state.password, this.state.code) }}>
                        <Text style={styles.logInTextStyle}>完成</Text>
                    </Button>
                </Row>
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
            </Container>
        )
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
            this.setState({ disable: false });
        }
    }

    _getCode(phone) {
        if (phone.length > 10) {
            this.state.seconds = 60
            let disable = !this.state.disable
            this.setState({ disable: disable })
            fetch('http://test.bcrealm.com:9003/api/user/sendCode?phone=' + `${phone}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
                .then((jsonData) => {
                    console.log(jsonData);
                    this.refs.toast.show((jsonData.data.msg), DURATION.LENGTH_LONG);
                });
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
        console.log(phone + '__' + password + '__' + code)
        if (phone.length > 10 && password != '' && code != '') {
            fetch('http://test.bcrealm.com:9003/api/user/uppwd', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    // 'Accept': 'application/json',
                },
                body: JSON.stringify({
                    'checkNum': `${code}`,
                    'phoneNumber': `${phone}`,
                    'pwd': `${password}`,
                })
            }).then((response) => response.json())
                .then((jsonData) => {
                    console.log(jsonData)
                    if (jsonData.data === "修改成功") {
                        this.goBack();
                    } else {
                        this.refs.toast.show((jsonData.msg), DURATION.LENGTH_LONG);
                    }
                });
        } else {
            this.refs.toast.show('请检查您的账号、新密码、验证码是否正确!', DURATION.LENGTH_LONG);
        }

    }
}
