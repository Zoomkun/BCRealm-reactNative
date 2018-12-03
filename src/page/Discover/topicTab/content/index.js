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
    AsyncStorage,
} from 'react-native';
//import styles from "./styles";
import CommonStyles from '../../../../css/commonStyle';

/**
 * 话题内容
 */
export default class Content extends Component {
    constructor(props) {
        super(props)
        this.id = this.props.navigation.state.params.id;
        this.keyboardDidShowListener = null;
        this.keyboardDidHideListener = null;
        this.state = {
            token: '',
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        let url = this.url
        let webpageUrl = ''
        __DEV__ ? webpageUrl = 'http://world.gametest.bcrealm.com/static/worldnews.html?fromapp=true&newsId=' : webpageUrl = 'http://world.game.bcrealm.com/static/worldnews.html?fromapp=true&newsId='
        return (
            <Container>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => {
                        this.goBack()
                    }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>评级</Text>
                    </Body>
                    <Button transparent />
                </Header>
                <WebView
                    source={{ uri: webpageUrl + this.id }}
                    ref='webView'
                    onLoadEnd={this._onLoadEnd}
                    onMessage={(e) => {
                        this._onMessage(e)
                    }}
                >
                </WebView>
            </Container>
        )
    }

    _onLoadEnd = (e) => {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            let dataJson = JSON.stringify(datas)
            this.refs.webView.postMessage(dataJson);
        })
    }

    _onMessage = (e) => {
        this.setState({
            webViewData: e.nativeEvent.data
        });
        Alert.alert(e.nativeEvent.data)
    }
}