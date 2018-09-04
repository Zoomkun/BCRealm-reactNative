import React, { Component } from "react";
import {
    Container,
    Body,
    Left,
    Right,
    Header,
    Button,
    ListItem,
    Icon
} from 'native-base';
import { Text, } from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';

const about = [{ v: "v1.0" }];

/**
 * 关于我们
 */
class AboutUs extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container style={CommonStyles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>关于区世界</Text>
                    </Body>
                    <Button transparent />
                </Header>

                <ListItem itemDivider style={CommonStyles.container}>
                    <Left><Text style={styles.textStyle}>版本号</Text></Left>
                    <Right><Text>{about[0].v}</Text></Right>
                </ListItem>
            </Container>
        );
    }
}
export default AboutUs