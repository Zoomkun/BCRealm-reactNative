import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import {
    Button,
    Container,
    Segment,
    Content,
    Item,
    Input
} from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import Toast, { DURATION } from 'react-native-easy-toast'
import CommonStyles from '../../css/commonStyle';
import styles from "./styles";

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
            disable: false,
        }
        this.interval = 0

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

    static navigationOptions = { header: null };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={CommonStyles.container}>
                <Content>
                    <Grid style={styles.gridStyle}>
                        <Row size={2} style={styles.row}>
                            <Row>
                                <Col size={4} />
                                <Col>
                                    <Button transparent onPress={() => { navigate("Registration") }} >
                                        <Text style={{ color: '#FE6F06', fontSize: 20, }}>注册</Text>
                                    </Button>
                                </Col>
                            </Row>
                            <Image
                                source={require('../../../images/Icon.png')}
                                style={styles.imageStyle}
                            />
                        </Row>

                        <Row size={2.2} style={styles.row}>

                            <Segment >
                                <Button style={styles.SegmentButtonStyle} onPress={() => { this.setState({ pick: 0 }) }}>
                                    <Text style={this.state.pick == 0 ? styles.selectedTextStyle : styles.textStyle}>普通登录</Text>
                                    <View style={this.state.pick == 0 ? styles.selectedViewStyle : styles.viewStyle} />
                                </Button>
                                <Button style={styles.SegmentButtonStyle} onPress={() => { this.setState({ pick: 1 }) }}>
                                    <Text style={this.state.pick == 1 ? styles.selectedTextStyle : styles.textStyle}>验证码登录</Text>
                                    <View style={this.state.pick == 1 ? styles.selectedViewStyle : styles.viewStyle} />
                                </Button>
                            </Segment>

                            {
                                this.state.pick == 0 ? (
                                    <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                                        <Item rounded style={styles.itemStyle}>
                                            <Input placeholder="请输入手机号"
                                                value={this.state.phone}
                                                maxLength={11}
                                                keyboardType={'numeric'}
                                                placeholderTextColor={'#808080'}
                                                onChangeText={(text) => { this.setState({ phone: text }) }} />
                                        </Item>

                                        <Item rounded style={styles.itemStyle}>
                                            <Input placeholder="请输入密码"
                                                value={this.state.password}
                                                keyboardType={'numeric'}
                                                secureTextEntry={true}
                                                placeholderTextColor={'#808080'}
                                                onChangeText={(text) => { this.setState({ password: text }) }} >
                                            </Input>
                                            <Button transparent style={styles.forgetPassword}
                                                onPress={() => { navigate("ForgetPassword") }}>
                                                <Text>忘记密码</Text>
                                            </Button>
                                        </Item>
                                    </View>
                                ) : (
                                        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                                            <Item rounded style={styles.itemStyle}>
                                                <Input placeholder="请输入手机号"
                                                    value={this.state.phone}
                                                    maxLength={11}
                                                    keyboardType={'numeric'}
                                                    placeholderTextColor={'#808080'}
                                                    onChangeText={(text) => { this.setState({ phone: text }) }} />
                                            </Item>

                                            <Item rounded style={styles.itemStyle}>
                                                <Input placeholder="请输入验证码"
                                                    value={this.state.code}
                                                    keyboardType={'numeric'}
                                                    placeholderTextColor={'#808080'}
                                                    onChangeText={(text) => { this.setState({ code: text }) }} >
                                                </Input>
                                                <Button bordered
                                                    style={this.state.disable ? styles.disableCodeStyle : styles.codeStyle}
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
                                        </View>
                                    )
                            }

                        </Row>

                        <Row size={0.6} style={styles.row}>
                            <View>
                                <Button rounded style={styles.logInButtonStyle}>
                                    <Text style={styles.logInTextStyle}>登录</Text>
                                </Button>
                            </View>
                        </Row>
                        <Row size={0.6} style={styles.row}>
                            <View >
                                <Button transparent style={styles.button} onPress={() => { navigate("ServiceAgreement") }}>
                                    <Text>点击登录即表示已阅读并同意</Text><Text style={{ color: '#FE6F06' }}>《服务协议》</Text>
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
}