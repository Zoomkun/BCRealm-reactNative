import React, { Component } from "react";
import {
    Container,
    Header,
    Button,
    Text,
    Body,
    Icon,
    Footer,
    Item,
    Input
} from 'native-base';
import {
    WebView,
    AsyncStorage
} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../../css/commonStyle';
import { Col, Row } from "react-native-easy-grid";

/**
 * 新闻Tab
 */
export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attention: false,
            showInput: false,
            webViewData: []
        }
        this.url = this.props.navigation.state.params.url;
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    _onLoadEnd = (e) => {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            this.setState({
                token: datas.token,
            })
            let dataJson = JSON.stringify(datas)
            this.refs.webView.postMessage(dataJson);
        })
    }

    render() {
        //const { navigate } = this.props.navigation;
        let black = this.props.black || false;
        let url = this.url

        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}  >
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>新闻</Text>
                    </Body>
                    <Button transparent />
                </Header>

                {/* <WebView source={{ uri: "http://192.168.31.124:8092/qsj/" + url }} */}
                <WebView source={{ uri: "http://192.168.31.124:8092/qsj/" + url }}
                    ref='webView'
                    onLoadEnd={this._onLoadEnd}
                    style={styles.webStyle} >
                </WebView>
            </Container >
        );
    }
}