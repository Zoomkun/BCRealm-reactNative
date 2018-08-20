import React, { Component } from "react";
import {
    Container,
    Body,
    Item,
    Input,
    Header,
    Button,
    Icon
} from 'native-base';
import {
    Text,
    //FlatList
} from 'react-native';

import styles from "./styles";
import CommonStyles from '../../../../css/commonStyle';

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
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        //const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>个人信息</Text>
                    </Body>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Text style={CommonStyles.headertextStyle}>保存</Text>
                    </Button>
                </Header>
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