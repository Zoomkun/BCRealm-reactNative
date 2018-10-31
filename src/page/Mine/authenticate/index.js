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
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";
import Toast, { DURATION } from 'react-native-easy-toast';
import Http from '../../../api/Api';
import { authenticate, } from '../../../../images';

/**
 * 实名认证
 */
class Authenticate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            idName: '',
            idNo: '',
            id: 0,
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

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground
                    resizeMode={"cover"}
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
                                <Text style={styles.titleStyle}>实名认证</Text>
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

                <View style={{ height: 50, marginTop: 30 }}>
                    <Grid style={styles.gridStyle} >
                        <Col style={styles.colStyle} size={1}>
                            <Text style={{ marginLeft: 17, fontSize: 16, color: '#313442', }}>真实姓名:</Text>
                        </Col>
                        <Col size={3}>
                            <View style={styles.inputStyle}>
                                <Input placeholder="请输入名称"
                                    value={this.state.idName}
                                    onChangeText={(text) => { this.setState({ idName: text }) }} />
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
                                    value={this.state.idNo}
                                    onChangeText={(text) => { this.setState({ idNo: text }) }} />
                            </View>
                            <View style={styles.lineStyle} />
                        </Col>
                    </Grid>
                </View>

                <Row size={20} style={styles.rowStyle}>
                    <View>
                        <Button style={styles.buttonStyle} onPress={() => { this._authenticate(this.state.idName, this.state.idNo) }}>
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

    /**
     * 实名认证
     */
    _authenticate(idName, idNo) {
        let self = this
        if (idName != '' && idNo != '') {
            Http.postRequrst(
                'authenticate',
                {
                    "idNo": `${this.state.idNo}`,
                    "idName": `${this.state.idName}`
                },
                function (data) {
                    if (data == '') {

                        self.refs.toast.show("认证成功", DURATION.LENGTH_LONG);
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