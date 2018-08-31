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
    AppRegistry,
    Keyboard
} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../../css/commonStyle';

/**
 * 话题内容
 */
export default class Content extends Component {
    constructor(props) {
        super(props)
        this.url = this.props.navigation.state.params.url;
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

    _onLoadEnd = (e) => {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            this.setState({
                token: datas.token,
            })
            let dataJson = JSON.stringify(datas)
            this.refs.webView.postMessage(dataJson);
            console.log(dataJson)
        })
    }

    _onMessage = (e) => {
        this.setState({
            webViewData: e.nativeEvent.data
        });
        Alert.alert(e.nativeEvent.data)
    }

    render() {
        let url = this.url
        return (
            <Container>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => {
                        this.goBack()
                    }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>话题</Text>
                    </Body>
                    <Button transparent />
                </Header>
                <WebView
                    // source={{ uri: "http://qsj.bcrealm.com/qsj/" + url }}
                    {...console.log('http://192.168.31.124:8092/qsj/' + url)}
                    source={{ uri: "http://192.168.31.124:8092/qsj/" + url }}
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
}