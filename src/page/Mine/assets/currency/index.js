import React, { Component } from "react";
import {
    Container,
    Left,
    Body,
    Button,
    Content,
    Icon,
    Right,
    Input
} from 'native-base';
import {
    Text,
    ImageBackground,
    View,
    TouchableOpacity
} from 'react-native';

import { Grid, Row, Col } from 'react-native-easy-grid';
import styles from "./styles";
import { bg, tip_bg } from '../../../../../images'
import Toast, { DURATION } from 'react-native-easy-toast';
import HttpUtils from '../../../../api/Api';

/**
 * 货币页面
 */
class Currency extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: ''
        }
        this.data = props.navigation.state.params.data;
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground
                    resizeMode={"cover"}
                    source={bg}
                    style={styles.imageStyle}
                >
                    <Grid>
                        <Row style={{ height: 60, }}>
                            <Left>
                                <Button transparent onPress={() => { this.goBack() }}>
                                    <Icon name={"ios-arrow-back"} style={styles.backIconStyle} />
                                </Button>
                            </Left>
                            <Body>
                                <Text style={styles.titleStyle}>{this.data.assetName}</Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => this.props.navigation.navigate("Record", { assets: this.data })}>
                                    <Text style={styles.recordStyle}>提现记录</Text>
                                </Button>
                            </Right>
                        </Row>
                        <Row>
                            <Col size={1} style={styles.viewStyle}>
                                <Text style={styles.describeStyle}>数量(个)</Text>
                                <Text style={styles.quantityStyle}>{this.data.gameAmount}</Text>
                            </Col>
                            <Col size={1} style={styles.viewStyle}>
                                <Text style={styles.describeStyle}>预估价值(元)</Text>
                                <Text style={styles.quantityStyle}>{this.data.gameAssessValue}</Text>
                            </Col>
                        </Row>
                    </Grid>
                </ImageBackground>

                <Content>
                    <View style={styles.extractQStyle}>
                        <Row size={1}>
                            <Left>
                                <Text style={styles.extractQuantityStyle}>剩余可提取数量(个)</Text>
                            </Left>
                            <Right>
                                <Text style={styles.surplusStyle}>{this.data.walletAmount}</Text>
                            </Right>
                        </Row>
                        <View style={styles.line} />
                        <Row size={2} >
                            <Body>
                                <Text style={{ color: '#313442', fontSize: 16 }}>提取数量</Text>
                                <ImageBackground resizeMode={"cover"}
                                    source={tip_bg}
                                    style={styles.tipsStyle}
                                >
                                    <Text style={{ color: '#9699A5', fontSize: 13, marginTop: 5 }}>每日最大提现<Text style={{ color: '#FF801A', fontSize: 13 }}>{20 + this.data.assetName}</Text></Text>
                                </ImageBackground>
                            </Body>
                        </Row>
                        <Row size={3}>
                            <View style={styles.inputWidth}>
                                <Input
                                    placeholder={this.data.gameAmount + ''}
                                    placeholderTextColor='#DCDCDC'
                                    keyboardType='numeric'
                                    style={styles.inputStyle}
                                    ref="bottomInput"
                                    value={this.state.quantity}
                                    onChangeText={(text) => { this.setState({ quantity: text }) }}
                                />
                            </View>
                        </Row>
                        <View style={styles.line} />
                        <Body>
                            <Text style={{ color: '#9699A5', fontSize: 13, marginTop: 10 }}>请实名认证后再提取</Text>
                        </Body>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'space-between',
                    }}>
                        <Button bordered style={styles.leftButtonStyle}
                            onPress={() => { this._downloadTips() }}
                        >
                            <Text style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#714BD9',
                                fontSize: 19
                            }}>下载钱包</Text>
                        </Button>

                        <Button style={styles.rightButtonStyle}
                            onPress={() => { this._checkoutSubmit(this.state.quantity) }}
                        >
                            <Text style={{ fontSize: 19, color: '#ffffff' }}>提取至钱包</Text>
                        </Button>
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{ alignSelf: 'flex-end', marginRight: 20 }}
                            onPress={() => { this._findUserAccount() }}
                        >
                            <Text style={{ fontSize: 19, color: 'red' }}>＜创建账号须知＞</Text>
                        </TouchableOpacity>
                    </View>
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
        );
    }

    _downloadTips() {
        this.refs.toast.show("钱包正在搭建中,敬请期待", DURATION.LENGTH_LONG);
    }

    _checkoutSubmit(amount) {
        if (amount < 1) {
            this.refs.toast.show("提取数量必须大于1", DURATION.LENGTH_LONG);
            return;
        }
        let self = this
        let { navigate } = this.props.navigation;
        HttpUtils.formDataRequest(
            'checkoutSubmit',
            {
                assetId: `${self.data.assetId}`,
                amount: `${amount}`,
                createAccount: ''
            },
            function (data) {
                console.log(data)
                if (data.code == 119001) {
                    navigate("CheckOut", { data: self.data, type: 0, account: data, amount: amount });
                } else {
                    self.refs.toast.show(data.msg, DURATION.LENGTH_LONG);
                }
            }
        )
    }

    _findUserAccount() {
        let self = this
        let { navigate } = this.props.navigation;
        HttpUtils.formDataRequest(
            'findUserAccount',
            {
                assetId: `${self.data.assetId}`,
            },
            function (data) {
                console.log(data)
                navigate("CheckOut", { account: data, type: 1 });
            }
        )
    }

}
export default Currency