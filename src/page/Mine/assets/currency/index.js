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
    Image,
    ImageBackground,
    View
    //FlatList
} from 'react-native';

import { Grid, Row, Col } from 'react-native-easy-grid';
import styles from "./styles";
import { bg, tip_bg } from '../../../../../images'

/**
 * 货币页面
 */
class Currency extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: ''
        }
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
                    resizeMode={"contain"}
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
                                <Text style={styles.titleStyle}>BBM</Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => this.props.navigation.navigate("Record")}>
                                    <Text style={styles.recordStyle}>提现记录</Text>
                                </Button>
                            </Right>
                        </Row>
                        <Row>
                            <Col size={1} style={styles.viewStyle}>
                                <Text style={styles.describeStyle}>数量(个)</Text>
                                <Text style={styles.quantityStyle}>720</Text>
                            </Col>
                            <Col size={1} style={styles.viewStyle}>
                                <Text style={styles.describeStyle}>预估价值(元)</Text>
                                <Text style={styles.quantityStyle}>7200.00</Text>
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
                                <Text style={styles.surplusStyle}>700</Text>
                            </Right>
                        </Row>
                        <View style={styles.line} />
                        <Row size={2} >
                            <Body>
                                <Text style={{ color: '#313442', fontSize: 16 }}>提取数量</Text>
                                <ImageBackground resizeMode={"contain"}
                                    source={tip_bg}
                                    style={styles.tipsStyle}
                                >
                                    <Text style={{ color: '#9699A5', fontSize: 13, marginTop: 5 }}>每日最大提现<Text style={{ color: '#FF801A', fontSize: 13 }}> 50DBEX</Text></Text>
                                </ImageBackground>
                            </Body>
                        </Row>
                        <Row size={3}>
                            <View style={styles.inputWidth}>
                                <Input
                                    placeholder='0000'
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
                        }}>
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
                        }}>
                            <Text>提取至钱包</Text>
                        </Button>
                    </View>
                </Content>
            </Container >
        );
    }
}
export default Currency