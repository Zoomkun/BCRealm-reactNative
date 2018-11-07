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
import HttpUtils from '../../api/Api';

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

    componentWillMount() {
        let OBJ = HttpUtils.getToken();
        this.setState({
            token: OBJ.Authorization
        })
        console.log(OBJ)
    }

    render() {
        return (
            <Container>
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
        if (this.state.token == '') {
            console.log("transmit")
            AsyncStorage.getItem('user').then(data => {
                let datas = JSON.parse(data);
                this.refs.webView.postMessage(datas.token);
                console.log(datas)
            })
        } else {
            this.refs.webView.postMessage(this.state.token);
            console.log(this.state.token)
        }
    }
}

