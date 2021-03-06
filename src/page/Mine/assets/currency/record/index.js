import React, { Component } from "react";
import {
    Container,
    Body,
    Left,
    Right,
    Button,
    ListItem,
    Icon,
    View
} from 'native-base';
import {
    Text,
    FlatList,
    Platform
} from 'react-native';
import styles from "./styles";
import RecordItem from '../../../../../components/recordItem';
import { Grid, Col } from 'react-native-easy-grid';
import HttpUtils from '../../../../../api/Api';

/**
 * 提现记录
 */
class Record extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.assets = props.navigation.state.params.assets;
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    componentWillMount() {
        this._getAssetCheckout();
    }

    render() {
        let items = this.state.data
        return (
            <Container style={styles.containerStyle}>

                <View style={Platform.OS !== 'android' ? { flexDirection: 'row', marginTop: 20 } : { flexDirection: 'row' }}>
                    <Left>
                        <Button transparent onPress={() => { this.goBack() }}>
                            <Icon name={"ios-arrow-back"} style={styles.backIconStyle} />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.titleStyle}>提现记录</Text>
                    </Body>
                    <Right>
                        <Button transparent />
                    </Right>
                </View>

                < ListItem itemDivider style={styles.listItemStyle} >
                    <Grid style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Col size={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textStyle}>日期</Text>
                        </Col>
                        <Col size={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textStyle}>数量</Text>
                        </Col>
                        <Col size={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textStyle}>状态</Text>
                        </Col>
                    </Grid>
                </ListItem >
                {
                    items.data != undefined &&
                    < FlatList data={items.data}
                        enableEmptySections={true}
                        onEndReachedThreshold={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return <RecordItem
                                date={item.createTimestamp}
                                quantity={item.amount}
                                state={item.transStatus}
                            />
                        }} />
                }
            </Container >
        );
    }

    _getAssetCheckout() {
        let self = this
        HttpUtils.formDataRequest(
            'getAssetCheckout',
            {
                coinId: `${this.assets.assetId}`
            },
            function (data) {
                console.log(data)
                self.setState({
                    data: data
                })
            }
        )
    }
}
export default Record