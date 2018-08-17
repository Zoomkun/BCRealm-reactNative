import { FlatList } from 'react-native'
import React, { Component } from "react";

import {
    Container,
    Body,
    Item,
    Input,
    Header,
    Content,
    Card,
    Icon,
    Button,
} from 'native-base';
import {
    Text,
    View,
    Image,
} from 'react-native';
import styles from '../styles';
import CommonStyles from '../../../../css/commonStyle';
/**
 * 发送话题
 */

class SendTopic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
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
            <Container style={CommonStyles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>发送话题</Text>
                    </Body>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Text style={styles.text}>保存</Text>
                    </Button>
                </Header>
                <Content>
                    <Item style={styles.itemstyle}>
                        <Input placeholder="标题"
                            value={this.state.title} onChangeText={(text) => { this.setState({ title: text }) }} />
                    </Item>
                    <Card style={styles.carditem}>
                        <Input multiline style={{ textAlignVertical: 'top' }} placeholder="正文"
                            value={this.state.content}
                            onChangeText={(text) => { this.setState({ content: text }) }} />
                    </Card >
                </Content>
            </Container>
        );
    }
}
export default SendTopic