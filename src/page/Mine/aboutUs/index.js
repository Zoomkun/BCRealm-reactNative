import React, { Component } from "react";
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
import {
    AsyncStorage,
    NativeModules,
    Platform,
    Text,
    Alert,
    BackHandler,
    ImageBackground
} from 'react-native';
import { } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import CommonStyles from '../../../css/commonStyle';
import { aboutus_top_bg } from '../../../../images';
import styles from "./styles";
import DeviceInfo from "react-native-device-info";


const about = [{ v: "v1.0" }];

/**
 * 关于我们
 */
class AboutUs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            version: '',
            update: false,
            versionData: null
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
    _update() {
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
                        { text: "取消", }
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
                                { text: "取消", }
                            ]
                        );
                    }
                })
            }
        }
    }

    render() {
        let update = this.state.update
        return (
            <Container style={CommonStyles.container}>

                <ImageBackground
                    resizeMode={"cover"}
                    source={aboutus_top_bg}
                    style={styles.imageBackgroundStyle}
                >
                    <Row style={{ height: 60, }}>
                        <Left>
                            <Button transparent onPress={() => { this.goBack() }}>
                                <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.titleStyle}>BBM</Text>
                        </Body>
                        <Right>
                            <Button transparent />
                        </Right>
                    </Row>
                </ImageBackground>

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