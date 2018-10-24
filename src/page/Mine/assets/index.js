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
    View,
    Content
} from 'native-base';
import { Text, ImageBackground, FlatList } from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import { CurrencyItem } from '../../../components';


const data = [
    { currency: "BBM", quantity: 123.123, estimatedValue: 10068, },
    { currency: "DBEX", quantity: 35.5, estimatedValue: 9879, },
    { currency: "HCC", quantity: 54.02, estimatedValue: 456, },
    { currency: "BSH", quantity: 98.4, estimatedValue: 32, },
    { currency: "VIS", quantity: 874.8, estimatedValue: 233, },
    { currency: "BBM", quantity: 123.123, estimatedValue: 10068, },
    { currency: "DBEX", quantity: 35.5, estimatedValue: 9879, },
    { currency: "HCC", quantity: 54.02, estimatedValue: 456, },
    { currency: "VIS", quantity: 874.8, estimatedValue: 233, },
]
/**
 * 资产详情
 */
class Assets extends Component {

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
        let items = data
        return (
            <Container style={CommonStyles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>资产</Text>
                    </Body>
                    <Button transparent />
                </Header>
                <ImageBackground resizeMode={"contain"}
                    source={require('../../../../images/aboutme_bg.png')}
                    style={styles.imageStyle}
                >
                    <View style={{ flex: 1, flexDirection: 'column', }}>
                        <Body style={styles.bodyStyle}>
                            <Text style={styles.textStyle}>我的资产总价值约(元)</Text>
                            <Text style={styles.textStyle}>7200.00</Text>
                        </Body>
                    </View>
                </ImageBackground>
                <View style={styles.viewStyle} />
                <Text style={styles.titleStyle}>我的资产</Text>
                <Content style={styles.contentStyle}>
                    {/* <ListItem button style={styles.listItemStyle}>
                        <View style={{ backgroundColor: '#9578E4', width: 5, height: 80 }} />
                        <View style={styles.leftViewStyle}>
                            <Text style={[CommonStyles.blackText, styles.currencyStyle]}>BBM</Text>
                            <Text style={CommonStyles.blackText}>持有数量 <Text style={styles.quantityStyle}>241.2333</Text></Text>
                        </View>
                        <View style={styles.viewStyle}>
                            <Text style={[styles.estimatedValueStyle, styles.currencyStyle]}>118.79</Text>
                            <Text style={[styles.estimateStyle]}>预估价值(元)</Text>
                        </View>
                    </ListItem> */}

                    <FlatList data={items}
                        enableEmptySections={true}
                        onEndReachedThreshold={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return <CurrencyItem
                                currency={item.currency}
                                quantity={item.quantity}
                                estimatedValue={item.estimatedValue}
                                onPress={() => this.props.navigation.navigate("Currency")}
                            />
                        }} />
                </Content>
            </Container>
        );
    }
}
export default Assets