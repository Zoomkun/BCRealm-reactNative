import React, { Component } from 'react';
import { Text, WebView } from 'react-native';
import {
    Button,
    Container,
    Body,
    Header,
    Icon,
    Content,
} from 'native-base';
import CommonStyles from '../../../css/commonStyle';
import styles from "./styles";

/**
 * 服务协议
 */
export default class ServiceAgreement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pick: 0,
            phone: '',
            password: ''
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
            <Container style={CommonStyles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>服务协议</Text>
                    </Body>
                    <Button transparent />
                </Header>
                <WebView source={{ uri: "http://qsj.bcrealm.com/static/protocol.html" }}
                    style={styles.webStyle} >
                </WebView>
            </Container>
        )
    }
}
