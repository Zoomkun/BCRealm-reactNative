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
        let self = this;
        let client = ''
        Platform.OS === 'android' ? client = 'android' : client = 'iphone'
        console.log(client);
        let obj = HttpUtils.getToken()
        console.log(obj);
        HttpUtils.getRequest(
            'appVersion',
            {
                'client': client
            },
            function (data) {
                console.log(data)
                AsyncStorage.setItem('version', JSON.stringify(data));
                let newVersion = data.version.split('.')
                let oldVersion = DeviceInfo.getVersion().split('.')
                let update = false;
                for (let i in newVersion) {
                    if (~~newVersion[i] > ~~oldVersion[i]) {
                        update = true;
                        break
                    } else {
                        update = false
                    }
                }

                if (update) {
                    if (Platform.OS === 'android') {
                        Alert.alert('发现新版本', '是否下载',
                            [
                                {
                                    text: "确定", onPress: () => {
                                        //apkUrl为app下载连接地址
                                        NativeModules.upgrade.upgrade(data.downloadUrl);
                                    }
                                },
                                {
                                    text: "取消", onPress: () => {

                                        if (data.needForceUpgrade === true) {
                                            BackHandler.exitApp();
                                        }
                                    }
                                }
                            ]
                        );
                    } else {

                        // todo:增加APPID
                        NativeModules.upgrade.upgrade('AppId', (msg) => {
                            if ('YES' == msg) {
                                Alert.alert('发现新版本', '是否下载',
                                    [
                                        {
                                            text: "确定", onPress: () => {
                                                NativeModules.upgrade.openAPPStore('AppId');
                                            }
                                        },
                                        {
                                            text: "取消", onPress: () => {

                                                if (data.needForceUpgrade === true) {
                                                    BackHandler.exitApp();
                                                }
                                            }
                                        }
                                    ]
                                );
                            }
                        })
                    }

                }
                self._openApp()
            }
        )
    }

    // 打开App
    _openApp() {
        let self = this
        AsyncStorage.getItem('user').then(data => {
            let datas = JSON.parse(data)
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
                this.timer = setTimeout(() => {
                    if (self.state.data.nickName != undefined) {
                        self.props.navigation.dispatch(resetAction);
                    } else {
                        this.props.navigation.navigate("Login");
                    }
                },
                    2000
                );
            } else {
                this.props.navigation.navigate("Login");
            }
        })
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