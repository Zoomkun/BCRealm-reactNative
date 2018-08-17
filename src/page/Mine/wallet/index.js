import React, { Component } from "react";

import {
    Container,
    Body,
    Header,
    Button,
    Content,
    Icon
} from 'native-base';
import {
    Text,
    Image,
    //FlatList
} from 'react-native';

import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import { Grid, Row, Col } from "react-native-easy-grid";

const m1 = [
    { all: "总资产", totalAssets: 10086, quantity: "数量", value: "价值" },
];
const menus = [
    { icon: require('../../../../images/find.png'), totalAssets: 1000000, quantity: 12345, value: 2545 },
    { icon: require('../../../../images/find.png'), totalAssets: 1000000, quantity: 12345, value: 2545 },
    { icon: require('../../../../images/find.png'), totalAssets: 1000000, quantity: 12345, value: 2545 },
    { icon: require('../../../../images/find.png'), totalAssets: 1000000, quantity: 12345, value: 2545 },
    { icon: require('../../../../images/find.png'), totalAssets: 1000000, quantity: 12345, value: 2545 },
];

/**
 * 钱包页面
 */
class Wallet extends Component {

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
        var m = m1[0];
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>钱包</Text>
                    </Body>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                </Header>
                <Content>
                    <Grid style={styles.gridStyle} >
                        <Col style={styles.colStyle}><Text>{m.all}</Text></Col>
                        <Col style={styles.colStyle}><Text>{m.totalAssets}</Text></Col>
                        <Col style={styles.colStyle}><Text>{m.quantity}</Text></Col>
                        <Col style={styles.colStyle}><Text>{m.value}</Text></Col>
                    </Grid>
                    {
                        menus.map((item, index) => (
                            <Grid style={styles.gridStyle} key={index}>
                                <Col style={styles.colStyle}>
                                    <Image
                                        source={item.icon}
                                        style={styles.icon}
                                    /></Col>
                                <Col style={styles.colStyle}><Text>{item.totalAssets}</Text></Col>
                                <Col style={styles.colStyle}><Text>{item.quantity}</Text></Col>
                                <Col style={styles.colStyle}><Text>{item.value}</Text></Col>
                            </Grid>
                        ))
                    }
                </Content>
            </Container>
        );
    }
}


export default Wallet