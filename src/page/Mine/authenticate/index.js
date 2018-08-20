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
    FlatList
} from 'react-native';
import CommonStyles from '../../../css/commonStyle';
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";
import Toast, { DURATION } from 'react-native-easy-toast'
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
            nationality: [],
            certificate: []
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    componentDidMount() {
        // this._getNationality();
        // this._getController();
    }


    render() {
        //const { navigate } = this.props.navigation;
        //let nationality = this.state.nationality;
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
                                style={{ width: 100 }}
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

                    <ListItem itemDivider style={styles.listItemStyle} >
                        <Body style={styles.bodyStyle}>
                            <Text style={styles.textStyle}>真实姓名</Text>
                        </Body>
                        <Body style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <View style={{ width: 100, height: 50 }}>
                                <Input placeholder="请输入名称"
                                    value={this.state.name}
                                    onChangeText={(text) => { this.setState({ name: text }) }} />
                            </View>
                        </Body>
                    </ListItem>
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
                        <Col style={styles.colStyle}>
                            <Text style={{ marginLeft: 38, fontSize: 18, color: '#000000', }}>证件号码</Text></Col>
                        <Col style={styles.colStyle}>
                            <View style={{ justifyContent: 'flex-end', width: 200, height: 50, }}>
                                <Input placeholder="请输入"
                                    value={this.state.certificateNumber}
                                    style={{ justifyContent: 'flex-end', }}
                                    onChangeText={(text) => { this.setState({ certificateNumber: text }) }} />
                            </View></Col>
                    </Grid>
                </View>
                <View style={styles.lineStyle} />

                <Row size={20} style={styles.row}>
                    <View>
                        <Button style={styles.button} onPress={() => { this._authenticate() }}>
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
        console.log(1);
        fetch('http://test.bcrealm.com:9003/api/nationality', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset-UTF-8',
                'token': '4cf1f9adc26c4142a4079e4323e2a8c3'
            },
        }).then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                if (jsonData.msg == "成功") {
                    this.setState({
                        nationality: this.state.nationality.concat(jsonData.data),
                    });
                } else {
                    // console.log(jsonData.msg);
                }
            })
    }

    /**
    * 证件类型
    */
    _getController() {
        console.log(2);
        fetch('http://test.bcrealm.com:9003/api/certificateType?page=1&pageSize=10', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset-UTF-8',
                'token': '4cf1f9adc26c4142a4079e4323e2a8c3'
            },
        }).then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                if (jsonData.msg == "成功") {
                    this.setState({
                        certificate: this.state.certificate.concat(jsonData.data),
                        //refreshing: true
                    });
                } else {
                    // console.log(jsonData.msg);
                }
            })
    }

    /**
     * 实名认证
     */
    _authenticate() {
        fetch('http://test.bcrealm.com:9003/api/user/realNameAu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset-UTF-8',
                'token': 'dfff6860ceb04e00bc800b1853ea83af'
            },
            body: JSON.stringify({
                "certificateNumber": `${this.state.certificateNumber}`,
                "certificateTypeId": `${this.state.cer}`,
                "id": 35,
                "nationalityId": `${this.state.nat}`,
                "realName": `${this.state.name}`
            })
        }).then((response) => response.json())
            .then((jsonData) => {
                this.refs.toast.show((jsonData.msg), DURATION.LENGTH_LONG);
            });
    }
}


export default Authenticate