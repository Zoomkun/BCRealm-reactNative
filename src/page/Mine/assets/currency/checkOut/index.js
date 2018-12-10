import React, { Component } from "react";
import {
    Container,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Input,
    Content
} from 'native-base';
import {
    Text,
    View,
    ImageBackground,
    FlatList,
    Platform
} from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";
import Toast, { DURATION } from 'react-native-easy-toast';
import styles from "./styles";
import HttpUtils from '../../../../../api/Api';
import { my_top_bg3 } from '../../../../../../images';

/**
 * 提现认证
 */
class CheckOut extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accountNumber: '',
            type: 1,
            password: ''
        }
        this.data = props.navigation.state.params.data;
        this.type = props.navigation.state.params.type;
        this.amount = props.navigation.state.params.amount;
        this.account = props.navigation.state.params.account;
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container style={styles.container} {...console.log(this.data)}{...console.log(this.type)}{...console.log(this.account)}>
                <ImageBackground
                    resizeMode={"cover"}
                    source={my_top_bg3}
                    style={styles.imageBackgroundStyle}
                >
                    <Grid>
                        <Row style={Platform.OS !== 'android' ? { height: 60, marginTop: 10 } : { height: 60 }}>
                            <Left>
                                <Button transparent onPress={() => { this.goBack() }}>
                                    <Icon name={"ios-arrow-back"} style={styles.backIconStyle} />
                                </Button>
                            </Left>
                            <Body>
                                <Text style={styles.titleStyle}>提现注册</Text>
                            </Body>
                            <Right>
                                <Button transparent />
                            </Right>
                        </Row>
                        <Row>
                            <Col size={1} style={styles.viewStyle}>
                                <Text style={styles.describeStyle}>提现自动注册</Text>
                                <Text style={styles.quantityStyle}>第一次提现至钱包,系统将会帮你自动注册一个账号</Text>
                            </Col>
                        </Row>
                    </Grid>
                </ImageBackground>
                <View style={styles.bgStyle}>
                    <Text style={styles.accountPasswordStyle}>账号</Text>
                    <View style={styles.packageStyle}>
                        <Input
                            multiline
                            style={{ textAlignVertical: 'top', fontSize: 16 }}
                            placeholder={this.account != null ? this.account.data.mobile : "与区世界账号一致"}
                            placeholderTextColor={'#AAAAAA'}
                            keyboardType='decimal-pad'
                            editable={false}//文本框输入禁用
                            value={this.state.accountNumber}
                            style={styles.inputStyle}
                            onChangeText={(text) => { this.setState({ accountNumber: text }) }} />
                    </View>
                    <View style={styles.lineStyle} />
                </View>

                <View style={styles.bgStyle}>
                    <Text style={styles.accountPasswordStyle}>密码</Text>
                    <View style={styles.packageStyle}>password
                        <Input
                            multiline
                            style={{ textAlignVertical: 'top', fontSize: 16 }}
                            placeholder={this.account != null ? this.account.data.password + '' : "身份证后6位"}
                            placeholderTextColor={'#AAAAAA'}
                            keyboardType='decimal-pad'
                            editable={false}
                            value={this.state.password}
                            style={styles.inputStyle}
                            onChangeText={(text) => { this.setState({ password: text }) }} />
                    </View>
                    <View style={styles.lineStyle} />
                </View>

                <View style={{ justifyContent: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 14, color: '#ff4647', alignSelf: 'center' }}>(请直接至交易所执行忘记密码的操作设置新的密码)</Text>
                </View>
                {this.type == 0 &&
                    < View style={styles.buttonViewStyle}>
                        <Button bordered style={styles.cancelStyle}>
                            <Text style={{ color: '#714bd9', fontSize: 19, alignSelf: 'center' }}>取消</Text>
                        </Button>
                        <Button style={styles.confirmStyle}
                            onPress={() => {
                                this._checkoutSubmit(this.amount)
                            }}
                        >
                            <Text style={{ color: '#ffffff', fontSize: 19, alignSelf: 'center' }}>确认</Text>
                        </Button>
                    </View>
                }

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

    _downloadTips() {
        this.refs.toast.show("钱包正在搭建中,敬请期待", DURATION.LENGTH_LONG);
    }

    _recordTips() {
        this.refs.toast.show("请实名认证后提现", DURATION.LENGTH_LONG);
    }

    _checkoutSubmit(amount) {
        let self = this
        HttpUtils.formDataRequest(
            'checkoutSubmit',
            {
                assetId: `${self.data.assetId}`,
                amount: `${amount}`,
                createAccount: 'true'
            },
            function (data) {
                console.log(data)
                if (data.status == "success") {
                    self.refs.toast.show(data.msg, DURATION.LENGTH_LONG);
                }
            }
        )
    }
}
export default CheckOut