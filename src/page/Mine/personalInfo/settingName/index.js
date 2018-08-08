import { FlatList } from 'react-native'
import React, { Component } from "react";

import {
    Container,
    Body,
    Left,
    Right,
    Item,
    Input,
} from 'native-base';
import {
    Text,
    View,
    Image,
} from 'react-native';

import styles from "./styles";

/**
 * 修改名称
 */


class SettingName extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            title: '',
        }
    }
    static navigationOptions = {
        headerTitle: (
            <View>
                <Left /><Body style={styles.textBodyStyle}>
                    <Text style={styles.title}>个人信息</Text>
                </Body><Right />
            </View>),
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
    };

    render() {
        return (
            <Container style={styles.container}>
                <Item multiline style={styles.itemstyle}>
                    <Input placeholder="请输入名称"
                        value={this.state.name}
                        onChangeText={(text) => { this.setState({ name: text }) }} />
                </Item>
                <Text>{this.state.name}</Text>
            </Container>
        );
    }
}


export default SettingName