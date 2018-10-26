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

    componentDidMount() {
        DeviceStorage.get('user').then((data) => {
            console.log(data)
            console.log(111111)
        });
        console.log(3333)
    }

    render() {
        return (
            <Container>
                <ThemeHeader title={"游戏"} />
                <WebView source={{ uri: "http://world.gametest.bcrealm.com/" }} style={styles.webStyle} >
                </WebView>
            </Container>
        )
    }
}

