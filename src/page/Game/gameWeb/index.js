import React, { Component } from "react";
import {
    Container,
    Header,
    Button,
    Text,
    Body,
    Icon,
} from 'native-base';
import {
    WebView,
} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';

/**
 * 游戏
 */
export default class GameWeb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attention: false,
            showInput: false,
        }
        this.data = this.props.navigation.state.params.data || "";
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        //const { navigate } = this.props.navigation;
        let data = this.data
        console.log(data)
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}  >
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                    </Body>
                    <Button transparent />
                </Header>
                {
                    data.gameUrl != null || data.skipUrl != null ?
                        <WebView source={{ uri: data.gameUrl || data.skipUrl }} style={styles.webStyle} >
                        </WebView> :
                        <Text style={styles.textStyle}>{data.content}</Text>
                }
            </Container >
        );
    }
}