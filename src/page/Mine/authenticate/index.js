import React, { Component } from "react";

import {
    Container,
    Left,
    Body,
    Right,
    Button,
    Input,
    Icon,
} from 'native-base';
import {
    Text,
    View,
    AsyncStorage,
    ImageBackground,
} from 'react-native';
import CommonStyles from '../../../css/commonStyle';
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";
import Toast, { DURATION } from 'react-native-easy-toast';
import Http from '../../../api/Api';
import { authenticate, bg } from '../../../../images';
// import { url } from "inspector";

/**
 * 实名认证
 */
class Authenticate extends Component {

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
                    resizeMode={"contain"}
                    source={authenticate}
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
                                <Text style={styles.titleStyle}>BBM</Text>
                            </Body>
                            <Right>
                                <Button transparent />
                            </Right>
                        </Row>
                        <Row>
                            <Col size={1} style={styles.viewStyle}>
                                <Text style={styles.describeStyle}>实名认证</Text>
                                <Text style={styles.quantityStyle}>实名认证算力<Text style={{ color: '#ffffff', fontSize: 18 }}>+10</Text></Text>
                            </Col>
                        </Row>
                    </Grid>

                </ImageBackground>
                <View style={styles.tipsBackgroundStyle} >
                    <Text style={styles.tipsStyle}>确认是您本人,验证完后不可修改</Text>
                </View>


                {/* <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>实名认证</Text>
                    </Body>
                    <Button transparent />
                </Header> */}



                <View style={{ height: 50, marginTop: 30 }}>
                    <Grid style={styles.gridStyle} >
                        <Col style={styles.colStyle} size={1}>
                            <Text style={{ marginLeft: 17, fontSize: 16, color: '#313442', }}>真实姓名:</Text>
                        </Col>
                        <Col size={3}>
                            <View style={styles.inputStyle}>
                                <Input placeholder="请输入名称"
                                    value={this.state.name}
                                    onChangeText={(text) => { this.setState({ name: text }) }} />
                            </View>
                            <View style={styles.lineStyle} />
                        </Col>
                    </Grid>
                </View>

                <View style={{ height: 50, marginTop: 30 }}>
                    <Grid style={styles.gridStyle} >
                        <Col style={styles.colStyle} size={1}>
                            <Text style={{ marginLeft: 17, fontSize: 16, color: '#313442', }}>身份证号:</Text>
                        </Col>
                        <Col s size={3}>
                            <View style={styles.inputStyle}>
                                <Input placeholder="请输入身份证号"
                                    value={this.state.certificateNumber}
                                    onChangeText={(text) => { this.setState({ certificateNumber: text }) }} />
                            </View>
                            <View style={styles.lineStyle} />
                        </Col>
                    </Grid>
                </View>

                <Row size={20} style={styles.rowStyle}>
                    <View>
                        <Button style={styles.buttonStyle} onPress={() => { this._authenticate() }}>
                            <Text style={styles.buttonTextStyle}>确认</Text>
                        </Button>
                    </View>
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
     * 国籍
     */
    _getNationality() {
        self = this
        Http.getRequest(
            'userUrl',
            'nationality',
            '',
            function (data) {
                self.setState({
                    nationality: data
                })
            }
        )
    }

    /**
    * 证件类型
    */
    _getController() {
        self = this
        Http.getRequest(
            'userUrl',
            'certificateType',
            '',
            function (data) {
                self.setState({
                    certificate: data
                });
            }
        )
    }

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

export default Authenticate