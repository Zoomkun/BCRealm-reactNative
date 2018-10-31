import React, { Component } from "react";
import {
    Container,
    Body,
    Left,
    Right,
    Button,
    Icon,
    View,
    Content
} from 'native-base';
import { Text, ImageBackground, FlatList } from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import { CurrencyItem } from '../../../components';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { bg } from '../../../../images';
import HttpUtils from "../../../api/Api";


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
        this.state = {
            data: []
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    componentWillMount() {
        this._getAssetList()
    }

    render() {
        let items = this.state.data
        return (
            <Container style={CommonStyles.container}>
                <ImageBackground resizeMode={"cover"}
                    source={bg}
                    style={styles.imageStyle}
                >
                    <Row style={{ height: 60, }}>
                        <Left>
                            <Button transparent onPress={() => { this.goBack() }}>
                                <Icon name={"ios-arrow-back"} style={styles.backIconStyle} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.titleStyle}>资产</Text>
                        </Body>
                        <Right>
                            <Button transparent />
                        </Right>
                    </Row>
                    <View style={{ flex: 1, flexDirection: 'column', }}>
                        <Body style={styles.bodyStyle}>
                            <Text style={styles.textStyle}>我的资产总价值约(元)</Text>
                            <Text style={styles.textStyle}>{items.totalValue}</Text>
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

                    <FlatList data={items.assets}
                        enableEmptySections={true}
                        onEndReachedThreshold={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return <CurrencyItem
                                currency={item.assetName}
                                quantity={item.gameAmount}
                                estimatedValue={(item.gameAmount).toFixed(4)}
                                onPress={() => this.props.navigation.navigate("Currency", { data: item })}
                            />
                        }} />
                </Content>
            </Container>
        );
    }


    _getAssetList() {
        let self = this
        HttpUtils.postRequrst(
            'getAssetList',
            '',
            function (data) {
                console.log(data)
                self.setState({
                    data: data
                })
            }
        )
    }
}
export default Assets