import React, { Component } from "react";

import {
    Container,
    Body,
    Header,
    Button,
    Content,
    Icon,
} from 'native-base';
import {
    Text,
    WebView
} from 'react-native';

import styles from "./styles";
import CommonStyles from '../../../../css/commonStyle';

/**
 * 私信内容
 */
class NoticeContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        let data = this.data
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>{data.gameUrl != null ? "游戏" : "私信"}</Text>
                    </Body>
                    <Button transparent />
                </Header>
                {
                    data.gameUrl != null ?
                        <WebView source={{ uri: data.gameUrl || data.skipUrl }} style={styles.webStyle} >
                        </WebView> :
                        <Text style={styles.textStyle}>{data.content}</Text>
                }
            </Container>
        )
    }
}
export default NoticeContent