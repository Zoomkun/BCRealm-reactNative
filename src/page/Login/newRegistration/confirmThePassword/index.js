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
import { Grid, Row } from 'react-native-easy-grid';


/**
 * 确认密码
 */
export default class ConfirmThePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            phone: '',
            password: '',
            pwd: '',
            code: '',
            disable: false,
        }
        this.interval = 0
        this.phone = props.navigation.state.params.phone
        this.code = props.navigation.state.params.code
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

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={CommonStyles.container}>

                <ImageBackground source={login_bg}
                    style={CommonStyles.backgroundStyle}
                >
                    <Content>
                        <Grid style={CommonStyles.gridStyle}>
                            <Row style={{ height: 60, }}>
                                <Left>
                                    <Button transparent onPress={() => { this.goBack() }}>
                                        <Icon
                                            name={"ios-arrow-back"}
                                            style={CommonStyles.backIconStyle} />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={CommonStyles.titleStyle}>注册</Text>
                                </Body>
                                <Right>
                                    <Button transparent />
                                </Right>
                            </Row>
                            <Row size={3}
                                style={{
                                    flexDirection: 'column',
                                    alignSelf: 'center',
                                }}>
                                <Row size={0.8} />
                                < View style={styles.viewStyle}>
                                    <Item style={styles.itemStyle}>
                                        <Input placeholder="请输入密码"
                                            value={this.state.password}
                                            maxLength={11}
                                            style={{ color: 'white' }}
                                            secureTextEntry={true}
                                            placeholderTextColor={'#FEFEFE70'}
                                            onChangeText={(text) => { this.setState({ password: text }) }} />
                                    </Item>

                                    <Item style={styles.itemStyle}>
                                        <Input placeholder="再次输入密码"
                                            value={this.state.pwd}
                                            style={{ color: 'white' }}
                                            secureTextEntry={true}
                                            placeholderTextColor={'#FEFEFE70'}
                                            onChangeText={(text) => { this.setState({ pwd: text }) }} >
                                        </Input>
                                    </Item>
                                </View>

                                < Row size={0.6} style={styles.rowStyle}>
                                    <Button style={styles.logInButtonStyle}
                                        onPress={() => {
                                            this._register(this.code, this.state.password, this.state.pwd, this.phone)
                                        }}>
                                        <Text style={styles.logInTextStyle}>注册</Text>
                                    </Button>
                                    <Button transparent style={styles.buttonStyle} onPress={() => { navigate("ServiceAgreement") }}>
                                        <Text style={{ color: 'white', fontSize: 13 }}>点击注册即表示已阅读并同意</Text>
                                        <Text style={{ color: '#FE6F06', fontSize: 13 }}>《区世界用户服务协议》</Text>
                                    </Button>
                                </Row>
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

    _register(code, password, pwd, phone) {
        let self = this;
        if (password == '' && pwd == '') {
            this.refs.toast.show('密码不能为空!', DURATION.LENGTH_LONG);
            return;
        } else {
            if (password != pwd) {
                this.refs.toast.show('两次密码不一致!', DURATION.LENGTH_LONG);
                return;
            } else {
                HttpUtils.postRequrst(
                    'register', {
                        'code': `${code}`,
                        'password': `${password}`,
                        'phone': `${phone}`
                    },
                    function (data) {
                        if (data.status == "success") {
                            self.refs.toast.show('注册成功!', DURATION.LENGTH_LONG)
                            self.props.navigation.navigate("Login")
                        } else {
                            self.refs.toast.show(data.msg, DURATION.LENGTH_LONG);
                        }
                    }
                )
            }
        }
    }
}
