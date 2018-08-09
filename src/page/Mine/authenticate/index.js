import { FlatList } from 'react-native'
import React, { Component } from "react";

import {
    Container,
    Body,
    Left,
    Right,
    Item,
    Input,
    Header,
    Title,
    Button,
} from 'native-base';
import {
    Text,
    View,
    Image,
} from 'react-native';

import styles from "./styles";
import CommonStyles from '../../../css/commonStyle'
/**
 * 实名认证
 */


class Authenticate extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    static navigationOptions = {

        header: null
    };
    goBack = () => {
        this.props.navigation.goBack();
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Image source={require('../../../../images/goBack.png')} style={CommonStyles.icon} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>实名认证</Text>
                    </Body>
                    <Button transparent />
                </Header>

            </Container>
        );
    }
}


export default Authenticate