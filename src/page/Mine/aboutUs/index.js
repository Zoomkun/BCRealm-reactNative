import React, {Component} from "react";
import {
    Container,
    Body,
    Left,
    Right,
    Header,
    Button,
    ListItem,
    Icon,
} from 'native-base';
import {AsyncStorage, NativeModules, Platform, Text,Alert,BackHandler} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import DeviceInfo from "react-native-device-info";

const about = [{v: "v1.0"}];

/**
 * 关于我们
 */
class AboutUs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            version: '',
            update: false,
            versionData:null
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    componentWillMount() {
        this.setState({
            version: DeviceInfo.getVersion()
        })
        AsyncStorage.getItem('version').then(data => {
            console.log(data)
            let versionData = JSON.parse(data);
            this.setState({
                versionData: versionData
            })
            let newVersion = versionData.version.split('.')
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
            this.setState({
                update: update
            })
        })
    }

    // 版本升级
    _update(){
        let data = this.state.versionData
console.log(this.state.update)
        if (this.state.update) {
            console.log(111)
            if (Platform.OS === 'android') {
                Alert.alert('发现新版本', '是否下载',
                    [
                        {
                            text: "确定", onPress: () => {
                                //apkUrl为app下载连接地址
                                NativeModules.upgrade.upgrade(data.downloadUrl);
                            }
                        },
                        {text: "取消",}
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
                                {text: "取消",}
                            ]
                        );
                    }
                })
            }
        }
    }

    render() {
        let update = this.state.update
        console.log(update)
        return (
            <Container style={CommonStyles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => {
                        this.goBack()
                    }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle}/>
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                    <Text style={CommonStyles.headertextStyle}>关于区世界</Text>
                    </Body>
                    <Button transparent/>
                </Header>

                <ListItem itemDivider style={CommonStyles.container}>
                    <Left><Text style={styles.textStyle}>版本号</Text></Left>
                    <Body><Text>{this.state.version}</Text></Body>
                    {
                        update === true ? <Right><Button small onPress={() => {
                                this._update()
                            }}><Text style={style.text}>升级</Text></Button></Right>
                            : null

                    }
                </ListItem>
            </Container>
        );
    }
}

const style = {
    text: {
        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10
    }
}

export default AboutUs