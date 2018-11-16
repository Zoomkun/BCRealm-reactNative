import React, { Component } from 'react';
import {
    WebView,
    AsyncStorage,
    ImageBackground,
    Text,
    Platform,
    NativeModules,
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
import { updateTop } from '../../../images';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogButton,
} from 'react-native-popup-dialog';
import DeviceInfo from 'react-native-device-info';

export default class GamePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: '',
            defaultAnimationDialog: false,
            appInfo: [],
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

                <Dialog
                    onDismiss={() => {
                        this.setState({ defaultAnimationDialog: false });
                    }}
                    width={0.9}
                    visible={this.state.defaultAnimationDialog}
                    rounded
                    dialogTitle={
                        <ImageBackground
                            style={styles.dialogTopStyle}
                            source={updateTop}>
                            <Text style={{ color: '#ffffff', alignSelf: 'center', justifyContent: 'center', fontSize: 19 }}>检查更新</Text>
                        </ImageBackground>

                    }
                    actions={[
                        <DialogButton
                            text="取消"
                            onPress={() => {
                                if (this.state.appInfo.needForceUpgrade === true) {
                                    BackHandler.exitApp();
                                } else {
                                    this.setState({ defaultAnimationDialog: false });
                                }
                            }}
                            key="button-1"
                        />,
                        <DialogButton
                            text="确认"
                            onPress={() => {
                                if (Platform.OS === 'android') {
                                    this.setState({ defaultAnimationDialog: false });
                                    NativeModules.upgrade.upgrade(this.state.appInfo.downloadUrl);
                                } else {
                                    NativeModules.upgrade.openAPPStore('AppId');
                                    // todo:增加APPID
                                    NativeModules.upgrade.upgrade('AppId', (msg) => {
                                        if ('YES' == msg) {
                                            NativeModules.upgrade.openAPPStore('AppId');
                                        }
                                    })
                                }
                            }}
                            key="button-2"
                        />,
                    ]}
                >
                    <DialogContent
                        style={{
                            backgroundColor: '#F7F7F8',
                            height: 120,
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{ fontSize: 13, alignSelf: 'center', color: '#313442' }}>{"请问是否更新" + this.state.appInfo.description}</Text>
                        <Text style={{ fontSize: 13, alignSelf: 'center' }}>{"预计将下载" + this.state.appInfo.packageSize}</Text>
                    </DialogContent>
                </Dialog>
            </Container>
        )
    }

    _onLoadEnd = (e) => {
        console.log("transmit")
        if (this.state.token == '' || this.state.token == undefined) {
            AsyncStorage.getItem('user').then(data => {
                let datas = JSON.parse(data);
                this.refs.webView.postMessage(datas.token);
                console.log(datas.token + "/Storage")
            })
        } else {
            this.refs.webView.postMessage(this.state.token);
            console.log(this.state.token + "/state")
        }
        this._getAppInfo();
    }

    _getAppInfo() {
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
                self.setState({
                    appInfo: data
                })
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
                    self.setState({
                        defaultAnimationDialog: true,
                        appUpdate: update
                    });
                } else {
                    self.refs.toast.show('您已是最新版!', DURATION.LENGTH_LONG);
                }
            }
        )
    }
}

