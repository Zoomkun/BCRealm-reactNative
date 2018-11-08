import React, { Component } from "react";
import {
    Dimensions,
    View,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import CommonStyles from '../css/commonStyle';
import { my_item_bg1 } from '../../images';
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
            <TouchableOpacity style={styles.listItemStyle} onPress={onPress}>
                <ImageBackground
                    resizeMode={"cover"}
                    source={my_item_bg1}
                    style={styles.imageBackgroundStyle}
                >
                    <View style={styles.leftViewStyle}>
                        <Text style={{ alignSelf: 'flex-start', fontSize: 19, color: '#313442' }}>{currency}</Text>
                        <Text style={{ alignSelf: 'flex-start' }}>持有数量<Text style={[CommonStyles.blackText, styles.quantityStyle]}>{quantity}</Text></Text>
                    </View>
                    <View style={styles.viewStyle}>
                        <Text style={styles.estimatedValueStyle}>{estimatedValue}</Text>
                        <Text style={[styles.estimateStyle]}>预估价值(元)</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

const { width, height } = Dimensions.get("window")
const styles = {
    listItemStyle: {
        width: width,
        height: width / (width / 97),
    },
    imageBackgroundStyle: {
        width: width * 0.95,
        height: width / (width / 97),
        flexDirection: 'row',
        alignSelf: 'center'
    },
    leftViewStyle: {
        flexDirection: 'column',
        width: width * 0.45,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    viewStyle: {
        flexDirection: 'column',
        width: width * 0.45,
        justifyContent: 'center',
    },
    estimatedValueStyle: {
        color: '#7A55D9',
        alignSelf: 'flex-end',
        fontSize: 23
    },
    quantityStyle: {
        color: '#FF7F1A',
    },
    estimateStyle: {
        color: '#9698A4',
        alignSelf: 'flex-end'
    }
};
