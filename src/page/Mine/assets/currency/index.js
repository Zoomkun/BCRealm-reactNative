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
    View
} from 'react-native';

import { Grid, Row, Col } from 'react-native-easy-grid';
import styles from "./styles";
import { bg, tip_bg } from '../../../../../images'
import Toast, { DURATION } from 'react-native-easy-toast';


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
                        <Button bordered style={{
                            marginLeft: 17,
                            width: 126,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                            onPress={() => { this._downloadTips() }}
                        >
                            <Text style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#714BD9'
                            }}>下载钱包</Text>
                        </Button>

                        <Button style={{
                            backgroundColor: '#6056DD',
                            width: 126,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 17
                        }}
                            onPress={() => { this._recordTips() }}
                        >
                            <Text>提取至钱包</Text>
                        </Button>
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

    _recordTips() {
        this.refs.toast.show("请实名认证后提现", DURATION.LENGTH_LONG);
    }
}
export default Currency