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
    AsyncStorage,
    ImageBackground,
    FlatList
} from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";
import Toast, { DURATION } from 'react-native-easy-toast';
import CommonStyles from '../../../css/commonStyle';
import styles from "./styles";
import Http from '../../../api/Api';
import { wallet_renzheng_top_bg } from '../../../../images';
// import { url } from "inspector";


const data = [
    { a: 1 },
    { a: 1 },
    { a: 1 },
    { a: 1 },
]
/**
 * 实名认证
 */
class WalletAuthenticate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            certificateNumber: '',
            selected: '',
            nat: '1',
            cer: '1',
            id: 0,
            nationality: [],
            certificate: []
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            console.log(datas);
            this.props.navigation.state.params.returnData(datas);
        })
        this.props.navigation.goBack();
    }

    // componentDidMount() {
    //     AsyncStorage.getItem('data').then(data => {
    //         let datas = JSON.parse(data);
    //         this.setState({
    //             id: datas.id,
    //         })
    //         console.log(datas);
    //     })
    // }

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
                                value={this.state.name}
                                style={styles.inputStyle}
                                onChangeText={(text) => { this.setState({ name: text }) }} />

                            <Button style={styles.buttonStyle} onPress={() => { this._authenticate() }}>
                                <Text style={styles.buttonTextStyle}>确认</Text>
                            </Button>
                        </View>
                    </Grid>
                    <View style={styles.lineStyle} />
                </View>

                <View style={{ height: 80, marginLeft: 25, }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={{ color: '#313442', fontSize: 16, alignSelf: 'center' }}>ETH地址</Text>
                        <Button style={styles.addressStyle} >
                            <Text style={styles.buttonTextStyle}>已认证</Text>
                        </Button>
                    </View>
                    <View style={styles.lineStyle} />
                </View>
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

    onValueChange = (flag, value) => {
        if (flag == 1) {
            this.setState({ nat: value });
        } else {
            this.setState({ cer: value });
        }
    };



    /**
     * 实名认证
     */
    _authenticate() {
        let self = this
        if (this.state.name != '' && this.state.certificateNumber != '') {
            Http.postRequrst(
                'userUrl',
                'realNameAu',
                {
                    "certificateNumber": `${this.state.certificateNumber}`,
                    "certificateTypeId": `${this.state.cer}`,
                    "id": `${this.state.id}`,
                    "nationalityId": `${this.state.nat}`,
                    "realName": `${this.state.name}`
                },
                function (data) {
                    console.log(data)
                    if (data.userName) {
                        AsyncStorage.setItem('data', JSON.stringify(data));
                        self.refs.toast.show("成功", DURATION.LENGTH_LONG);
                    } else {
                        self.refs.toast.show(data, DURATION.LENGTH_LONG);
                    }
                }
            )
        } else {
            this.refs.toast.show("真实姓名或证件号码不可为空", DURATION.LENGTH_LONG);
        }
    }
}

export default WalletAuthenticate