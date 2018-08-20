import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    Button,
    Container,
    Content,
    Item,
    Input,
    Icon
} from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import Toast, { DURATION } from 'react-native-easy-toast'
import CommonStyles from '../../../css/commonStyle';
import styles from "./styles";

/**
 * 注册
 */
export default class Registration extends Component {
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

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={CommonStyles.container}>
                <Content >
                    <Grid style={styles.gridStyle}>
                        <Row size={2} style={styles.row}>
                            <Row>
                                <Col style={{ justifyContent: 'flex-end' }}>
                                    <Button transparent onPress={() => { this.goBack() }}>
                                        <Icon name={"ios-arrow-back"} style={styles.backIconStyle} />
                                    </Button>
                                </Col>
                            </Row>
                            <Image
                                source={require('../../../../images/Icon.png')}
                                style={styles.imageStyle}
                            />
                        </Row>

                        <Row size={2} style={styles.row}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                                <Item rounded style={styles.itemStyle}>
                                    <Input placeholder="请输入手机号"
                                        value={this.state.phone}
                                        maxLength={11}
                                        keyboardType={'numeric'}
                                        onChangeText={(text) => { this.setState({ phone: text }) }} />
                                </Item>

                                <Item rounded style={styles.itemStyle}>
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

                                <Item rounded style={styles.itemStyle}>
                                    <Input placeholder="请输入密码"
                                        value={this.state.password}
                                        keyboardType={'numeric'}
                                        secureTextEntry={true}
                                        onChangeText={(text) => { this.setState({ password: text }) }} >
                                    </Input>
                                </Item>
                            </View>
                        </Row>

                        <Row size={0.5} style={styles.row}>
                            <View >
                                < TouchableOpacity rounded style={styles.logInButtonStyle} onPress={() => { this._register(this.state.phone, this.state.password, this.state.code) }}>
                                    <Text style={styles.logInTextStyle}>注册</Text>
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row size={0.5} style={styles.row}>
                            <View >
                                <Button transparent style={styles.button} onPress={() => { navigate("ServiceAgreement") }}>
                                    <Text>点击注册即表示已阅读并同意</Text><Text style={{ color: '#FE6F06' }}>《服务协议》</Text>
                                </Button>
                            </View>
                        </Row>
                    </Grid>
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
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            }).then((response) => response.json())
                .then((jsonData) => {
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

    _register(phone, password, code) {
        console.log(phone + "__" + password + "__" + code);
        if (phone.length > 10 && password != '' && code != '') {
            fetch('http://test.bcrealm.com:9003/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify({
                    'checkNum': `${code}`,
                    'phoneNumber': `${phone}`,
                    'pwd': `${password}`,
                })
            }).then((response) =>
                response.json()
            )
                .then((jsonData) => {
                    console.log({
                        'checkNum': `${code}`,
                        'phoneNumber': `${phone}`,
                        'pwd': `${password}`,
                    })
                    console.log(jsonData)
                    this.refs.toast.show((jsonData.msg), DURATION.LENGTH_LONG);
                });
        } else {
            this.refs.toast.show('请检查您的账号密码!', DURATION.LENGTH_LONG);
        }
    }
}