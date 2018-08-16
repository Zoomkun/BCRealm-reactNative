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
    ListItem,
} from 'native-base';
import {
    Text,
    View,
    Image,
} from 'react-native';

import styles from "./styles";
import CommonStyles from '../../../css/commonStyle'
/**
 * 关于我们
 */
const about = [{ v: "v1.0" }]

class AboutUs extends Component {

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
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>关于区世界</Text>
                    </Body>
                    <Button transparent />
                </Header>
                <ListItem itemDivider>
                    <Left><Text style={styles.textStyle}>版本号</Text></Left>
                    <Right><Text>{about[0].v}</Text></Right>
                </ListItem>
            </Container>
        );
    }
}


export default AboutUs