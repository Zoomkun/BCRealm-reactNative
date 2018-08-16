import React, { Component } from "react";

import {
    Container,
    Body,
    Left,
    Right,
    List,
    ListItem,
    Button,
    Header,
    Item,
    Input
} from 'native-base';
import {
    Text,
    View,
    Image,
    Picker,
} from 'react-native';
import CommonStyles from '../../../css/commonStyle'
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";
/**
 * 实名制
 */
class Authenticate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            num: '',
            selected: ' ',
        }
    }
    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { navigate } = this.props.navigation;
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
                                selectedValue={this.state.dropdown}
                                onValueChange={(value) => this.onValueChange(2, value)}>
                                <Picker.Item label="大陆" value="key0" />
                                <Picker.Item label="台湾" value="key1" />
                                <Picker.Item label="香港" value="key2" />
                                <Picker.Item label="澳门" value="key3" />
                                <Picker.Item label="国外" value="key4" />
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
                                selectedValue={this.state.dropdown}
                                onValueChange={(value) => this.onValueChange(2, value)}>
                                <Picker.Item label="身份证" value="key0" />
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
                                    value={this.state.num}
                                    style={{ justifyContent: 'flex-end', }}
                                    onChangeText={(text) => { this.setState({ num: text }) }} />
                            </View></Col>
                    </Grid>
                </View>
                <View style={styles.lineStyle} />
                <Row size={20} style={styles.row}>
                    <View>
                        <Button style={styles.button}>
                            <Text style={styles.buttonTextStyle}>确认并提交</Text>
                        </Button>
                    </View>
                </Row>
            </Container >
        );
    };

    onValueChange = (flag, value) => {
        this.setState({ dropdown: value });
    };
}


export default Authenticate