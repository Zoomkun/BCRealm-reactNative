import React, { Component } from "react";
import {
    Container,
    Header,
    Button,
    Text,
    Body,
    Icon,
} from 'native-base';
import {
    WebView,
} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../../css/commonStyle';
export default class Content extends Component {
    constructor(props) {
        super(props)
        this.url = this.props.navigation.state.params.url || "http://www.jvrmusic.com.tw/news/";
    }
    static navigationOptions = { header: null };
    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        let url = this.url
        return (
            <Container>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>话题</Text>
                    </Body>
                    <Button transparent />
                </Header>
                <WebView source={{ uri: url }} style={styles.webStyle} >
                </WebView>
            </Container>
        )
    }
}