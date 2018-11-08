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
                            <Text style={{ fontSize: 23, color: '#ffffff' }}>{items.totalValue}</Text>
                        </Body>
                    </View>
                </ImageBackground>
                <View style={styles.viewStyle} >
                    <Text style={styles.currencyTextStyle}>我的资产</Text>
                </View>
                <Content style={styles.contentStyle}>
                    <FlatList data={items.assets}
                        enableEmptySections={true}
                        onEndReachedThreshold={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return <CurrencyItem
                                currency={item.assetName}
                                quantity={item.gameAmount}
                                estimatedValue={(item.gameAssessValue).toFixed(4)}
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
                if (data.status != "error") {
                    self.setState({
                        data: data.data
                    })
                }
            }
        )
    }
}
export default Assets