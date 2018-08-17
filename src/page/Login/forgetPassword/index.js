import React, { Component } from 'react';
import {
    Text,
    View,
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
import { Grid, Row, Col } from 'react-native-easy-grid';
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

    goBack = () => { this.props.navigation.goBack(); }

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
                            value={this.state.password}
                            keyboardType={'numeric'}
                            onChangeText={(text) => { this.setState({ password: text }) }} >
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
                            value={this.state.code}
                            keyboardType={'numeric'}
                            secureTextEntry={true}
                            onChangeText={(text) => { this.setState({ code: text }) }} />
                    </Item>
                </View>

                <Row size={0.6} style={styles.rowStyle}>
                    <Button rounded style={styles.logInButtonStyle}>
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
}
