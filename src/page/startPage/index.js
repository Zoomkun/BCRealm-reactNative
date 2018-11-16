import React, { Component } from "react";
import {
    Image,
    StatusBar,
    AsyncStorage,
    Platform,
    NativeModules,
    Alert,
    BackHandler,
} from "react-native";
import {
    Container,
    Button,
    View,
} from "native-base";
import styles from "./styles";
import { NavigationActions } from 'react-navigation';
import HttpUtils from "../../api/Api";
import DeviceInfo from 'react-native-device-info';

//重置路由
resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Main' })
    ]
});


/**
 *启动页
 */
export default class StartPage extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            token: '',
            data: []
        }
    }

    componentWillMount() {
        this._openApp()
    }

    // 打开App
    _openApp() {
        console.log(111)
        let self = this
        AsyncStorage.getItem('user').then(data => {
            let datas = JSON.parse(data)
            console.log(data)
            if (datas) {
                self.setState({
                    token: datas.token,
                })
                HttpUtils.setHeader({ Authorization: datas.token })
                HttpUtils.getRequest(
                    'getPlayerInfo',
                    '',
                    function (data) {
                        console.log(data)
                        if (data) {
                            self.setState({
                                data: data,
                            })
                        }
                    }
                )
            }
        })
        this.timer = setTimeout(() => {
            console.log(self.state.data.nickName)
            if (self.state.data.nickName != undefined) {
                self.props.navigation.dispatch(resetAction);
            } else {
                this.props.navigation.navigate("Login");
            }
        },
            2000
        );
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <Container>
                <StatusBar hidden={true} />
                {/* <Button transparent style={styles.buttonStyle}
                onPress={() => { this.props.navigation.navigate("Login") }}
                > */}
                <View style={styles.buttonStyle}>
                    <Image source={require('../../../images/Icon.png')}
                        style={styles.image} />
                </View>
                {/* </Button> */}
            </Container>
        );
    }
}