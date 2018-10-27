import React, { Component } from 'react';
import {
    WebView,
    AsyncStorage
} from 'react-native';
import {
    Container,
    Icon,
} from 'native-base';
import styles from './styles';
import commonStyle from '../../css/commonStyle';
import { ThemeHeader, DeviceStorage } from '../../components';
import CommonStyles from "../../css/commonStyle";


export default class GamePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: ''
        }
    }

    static navigationOptions = {
        header: null,
        tabBarLabel: '游戏',
        tabBarIcon: ({ tintColor }) => (
            <Icon name={"gamepad-variant"} type={"MaterialCommunityIcons"} fontSize={5} style={CommonStyles.iconStyle} />
        ),
        headerStyle: {
            "backgroundColro": "#fe6f06",
        },
        headerTitleStyke: {
            alignSelf: 'center'
        }
    };


    render() {
        return (
            <Container>
                <ThemeHeader title={"游戏"} />
                <WebView
                    source={{ uri: "http://world.gametest.bcrealm.com" }} style={styles.webStyle}
                    ref='webView'
                    onLoadEnd={this._onLoadEnd}
                >
                </WebView>
            </Container>
        )
    }

    _onLoadEnd = (e) => {
        AsyncStorage.getItem('user').then(data => {
            let datas = JSON.parse(data);
            let dataJson = JSON.stringify(datas)
            console.log(dataJson)
            this.refs.webView.postMessage(datas.token);
        })
        // DeviceStorage.get('user').then(data => {
        //     console.log(data.token)
        //     //let datas = JSON.parse(data.token);
        //     // console.log(datas)
        //     this.refs.webView.postMessage(data.token);
        //     console.log(this.refs.webView)
        // })
    }
}

