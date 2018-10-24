import React, { Component } from "react";
import { Dimensions, View, } from "react-native";
import CommonStyles from '../css/commonStyle';
import {
    ListItem,
    Text,
} from "native-base";

/**
 * 资产列表组件
 */
export default class CurrencyItem extends Component {
    render() {

        let { currency, quantity, estimatedValue, onPress } = this.props;
        return (
            < ListItem button style={styles.listItemStyle} onPress={onPress}>
                <View style={{ backgroundColor: '#9578E4', width: 5, height: 80 }} />
                <View style={styles.leftViewStyle}>
                    <Text style={[CommonStyles.blackText, styles.currencyStyle, { alignSelf: 'flex-start', }]}>{currency}</Text>
                    <Text style={{ alignSelf: 'flex-start' }}>持有数量<Text style={[CommonStyles.blackText, styles.quantityStyle]}>{quantity}</Text></Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text style={[styles.estimatedValueStyle, styles.currencyStyle]}>{estimatedValue}</Text>
                    <Text style={[styles.estimateStyle]}>预估价值(元)</Text>
                </View>
            </ListItem >
        );
    }
}
const { width, height } = Dimensions.get("window")
const styles = {
    listItemStyle: {
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        height: 80,
        width: width * 0.9,
        marginBottom: width / (width / 10)
    },
    leftViewStyle: {
        flexDirection: 'column',
        width: width * 0.45,
        paddingLeft: 10
    },
    viewStyle: {
        flexDirection: 'column',
        width: width * 0.4,
    },
    startTextStyle: {
        paddingLeft: width / (width / 10)
    },
    currencyStyle: {
        fontSize: 30
    },
    estimatedValueStyle: {
        color: '#7A55D9',
        alignSelf: 'flex-end',
    },
    quantityStyle: {
        color: '#FF7F1A',
    },
    estimateStyle: {
        color: '#9698A4',
        alignSelf: 'flex-end'
    }
};
