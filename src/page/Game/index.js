import React, { Component } from 'react';
import {
    View,
    WebView,
    StatusBar
} from 'react-native';
import {
    Button,
    Content,
    Container,
    Icon,
} from 'native-base';
import styles from './styles';
import commonStyle from '../../css/commonStyle';
import { ThemeHeader } from '../../components';
import CommonStyles from "../../css/commonStyle";


export default class GamePage extends Component {
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
                <WebView source={{ uri: "http://world.gametest.bcrealm.com/" }} style={styles.webStyle} >
                </WebView>
            </Container>
        )
    }
}

