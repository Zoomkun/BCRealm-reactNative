import React, { Component } from "react";

import {
    Container,
    Body,
    Right,
    List,
    ListItem,
    Button,
    Header,
    Input,
    Icon
} from 'native-base';
import {
    Text,
    View,
    Picker,
    AsyncStorage
} from 'react-native';
import CommonStyles from '../../../css/commonStyle';
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";
import Toast, { DURATION } from 'react-native-easy-toast';
import Http from '../../../api/Api';

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

    componentDidMount() {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            this.setState({
                id: datas.id,
            })
            console.log(datas);
        })
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>实名认证</Text>
                    </Body>
                    <Button transparent />
                </Header>
                <View style={styles.viewStyle} >
                    <Text style={styles.tipsStyle}>确认是您本人,验证完后不可修改</Text>
                </View>
                <List>
                    <ListItem itemDivider style={styles.listItemStyle} >
                        <Body style={{ justifyContent: 'flex-start', marginLeft: 20 }}>
                            <Text style={styles.textStyle}>国籍</Text>
                        </Body>
                        <Right style={styles.rightStyle}>
                            <Picker
                                mode={'dropdown'}
                                style={styles.pickerStyle}
                                selectedValue={this.state.nat}
                                onValueChange={(value) => this.onValueChange(1, value)}>
                                {/* nationality.map((item, index) => (
                                    <Picker.Item label={item.nationality} value={item.id} />
                                    )) */}
                                <Picker.Item label="大陆" value="1" />
                                <Picker.Item label="台湾" value="2" />
                                <Picker.Item label="香港" value="3" />
                                <Picker.Item label="澳门" value="4" />
                                <Picker.Item label="国外" value="5" />
                            </Picker>
                        </Right>
                    </ListItem>
                    <View style={styles.lineStyle} />

                    <View style={{ height: 50 }}>
                        <Grid style={styles.gridStyle} >
                            <Col style={styles.colStyle} size={2}>
                                <Text style={{ marginLeft: 38, fontSize: 18, color: '#000000', }}>真实姓名</Text></Col>
                            <Col style={styles.colStyle} size={1.2}>
                                <View style={{ width: 120, height: 50, }}>
                                    <Input placeholder="请输入名称"
                                        value={this.state.name}
                                        onChangeText={(text) => { this.setState({ name: text }) }} />
                                </View></Col>
                        </Grid>
                    </View>
                    <View style={styles.lineStyle} />

                    <ListItem itemDivider style={styles.listItemStyle} >
                        <Body style={styles.bodyStyle}>
                            <Text style={styles.textStyle}>证件类型</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                            <Picker
                                mode={'dropdown'}
                                style={{ width: 120 }}
                                selectedValue={this.state.cer}
                                onValueChange={(value) => this.onValueChange(2, value)}>
                                <Picker.Item label="身份证" value="1" />
                            </Picker>
                        </Right>
                    </ListItem>
                    <View style={styles.lineStyle} />
                </List>

                <View style={{ height: 50 }}>
                    <Grid style={styles.gridStyle} >
                        <Col style={styles.colStyle} size={1.5}>
                            <Text style={{ marginLeft: 38, fontSize: 18, color: '#000000', }}>证件号码</Text></Col>
                        <Col style={styles.colStyle} size={2}>
                            <View style={{ width: 200, height: 50, }}>
                                <Input
                                    placeholder="请输入"
                                    keyboardType={'numeric'}
                                    value={this.state.certificateNumber}
                                    onChangeText={(text) => { this.setState({ certificateNumber: text }) }} />
                            </View></Col>
                    </Grid>
                </View>
                <View style={styles.lineStyle} />

                <Row size={20} style={styles.rowStyle}>
                    <View>
                        <Button style={styles.buttonStyle} onPress={() => { this._authenticate() }}>
                            <Text style={styles.buttonTextStyle}>确认并提交</Text>
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