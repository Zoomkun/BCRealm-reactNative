import React, { Component } from "react";
import {
    Container,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Input
} from 'native-base';
import {
    Text,
    View,
    ImageBackground,
    FlatList
} from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";
import Toast, { DURATION } from 'react-native-easy-toast';
import styles from "./styles";
import HttpUtils from '../../../api/Api';
import { wallet_renzheng_top_bg } from '../../../../images';

/**
 * 钱包认证
 */
class WalletAuthenticate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            address: '',
            type: 1
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        // AsyncStorage.getItem('data').then(data => {
        //     let datas = JSON.parse(data);
        //     console.log(datas);
        //     this.props.navigation.state.params.returnData(datas);
        // })
        this.props.navigation.goBack();
    }

    componentDidMount() {
        // this._getWalletAddressList();
    }

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground
                    resizeMode={"cover"}
                    source={wallet_renzheng_top_bg}
                    style={styles.imageBackgroundStyle}
                >
                    <Grid>
                        <Row style={{ height: 60, }}>
                            <Left>
                                <Button transparent onPress={() => { this.goBack() }}>
                                    <Icon name={"ios-arrow-back"} style={styles.backIconStyle} />
                                </Button>
                            </Left>
                            <Body>
                                <Text style={styles.titleStyle}>钱包认证</Text>
                            </Body>
                            <Right>
                                <Button transparent />
                            </Right>
                        </Row>
                        <Row>
                            <Col size={1} style={styles.viewStyle}>
                                <Text style={styles.describeStyle}>钱包认证</Text>
                                <Text style={styles.quantityStyle}>认证一个地址算力<Text style={{ color: '#ffffff', fontSize: 18 }}>+10</Text></Text>
                            </Col>
                        </Row>
                    </Grid>

                </ImageBackground>
                <View style={styles.tipsBackgroundStyle} >
                    <Text style={styles.tipsStyle}>认证钱包后,部分数字货币可以直接打入钱包地址</Text>
                </View>

                <View style={styles.bgStyle}>
                    <Text style={{ color: '#313442', fontSize: 16, marginLeft: 5 }}>ETH地址</Text>
                    <Grid style={styles.gridStyle} >
                        <View style={styles.packageStyle}>
                            <Input
                                multiline
                                style={{ textAlignVertical: 'top' }}
                                placeholder="请填写正确地址码"
                                keyboardType='decimal-pad'
                                value={this.state.address}
                                style={styles.inputStyle}
                                onChangeText={(text) => { this.setState({ address: text }) }} />

                            <Button style={styles.buttonStyle} onPress={() => { this._walletAddressSubmit(this.state.address) }}>
                                <Text style={styles.buttonTextStyle}>确认</Text>
                            </Button>
                        </View>
                    </Grid>
                    <View style={styles.lineStyle} />
                </View>

                {/* <View style={{ height: 80, marginLeft: 25, }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={{ color: '#313442', fontSize: 16, alignSelf: 'center' }}>ETH地址</Text>
                        <Button style={styles.addressStyle} >
                            <Text style={styles.buttonTextStyle}>已认证</Text>
                        </Button>
                    </View>
                    <View style={styles.lineStyle} />
                </View> */}
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
    };

    /**
     * 钱包认证
     */
    _walletAddressSubmit(address) {
        let self = this
        if (address != '') {
            HttpUtils.postRequrst(
                'WalletAddressSubmit',
                {
                    "address": `${address}`,
                    "type": 1
                },
                function (data) {
                    if (data.status == "success") {
                        self.refs.toast.show("成功", DURATION.LENGTH_LONG);
                    } else {
                        self.refs.toast.show(data.msg, DURATION.LENGTH_LONG);
                    }
                }
            )
        } else {
            this.refs.toast.show("真实姓名或证件号码不可为空", DURATION.LENGTH_LONG);
        }
    }

    /**
     * 获取钱包地址列表
     */
    _getWalletAddressList() {
        HttpUtils.postRequrst(
            'getWalletAddressList',
            '',
            function (data) {
                console.log(data)
            }
        )
    }
}

export default WalletAuthenticate