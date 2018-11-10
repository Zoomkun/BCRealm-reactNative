import React, { Component } from 'react';
import {
    WebView,
    AsyncStorage,
    ImageBackground,
    Text,
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
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogButton,
} from 'react-native-popup-dialog';

export default class GamePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: '',
            defaultAnimationDialog: false,
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
                            style={{ width: 330, height: 80, justifyContent: 'center' }}
                            source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541852443450&di=629394d5009c530ff24f5665e23fe708&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F01%2F20160601104059_YNz8P.jpeg' }}>
                            <Text style={{ color: '#FF00FF', alignSelf: 'center', justifyContent: 'center' }}>我是标题啊啊啊啊啊啊啊</Text>
                        </ImageBackground>

                    }
                    actions={[
                        <DialogButton
                            text="取消"
                            onPress={() => {
                                this.setState({ defaultAnimationDialog: false });
                            }}
                            key="button-1"
                        />,
                        <DialogButton
                            text="确认"
                            onPress={() => {
                                this.setState({ defaultAnimationDialog: false });
                            }}
                            key="button-2"
                        />,
                    ]}
                >
                    <DialogContent
                        style={{
                            backgroundColor: '#F7F7F8',
                        }}
                    >
                        <Text>LOL</Text>
                        <Text>喜迎世界冠军IG</Text>
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
        // this.setState({
        //     defaultAnimationDialog: true
        // })
    }
}

