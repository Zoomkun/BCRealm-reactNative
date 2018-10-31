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
                    {...console.log('http://qsj.bcrealm.com/static/' + url)}
                    source={{ uri: "http://world.game.bcrealm.com/static/article.html?newsId=" + this.id }}
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
}