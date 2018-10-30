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
import { Text, ImageBackground } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import CommonStyles from '../../../css/commonStyle';
import { aboutus_top_bg } from '../../../../images';
import styles from "./styles";

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
                {/* <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>关于区世界</Text>
                    </Body>
                    <Button transparent />
                </Header> */}
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
                <ListItem itemDivider style={styles.listItemStyle}>
                    <Left><Text style={styles.textStyle}>版本号</Text></Left>
                    <Right><Text>{about[0].v}</Text></Right>
                </ListItem>
            </Container>
        );
    }
}
export default AboutUs