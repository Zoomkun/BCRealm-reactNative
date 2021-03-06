import React, { Component } from "react";
import {
    View,
    Image,
} from "react-native";
import {
    Left,
    Body,
    Right,
    Text,
    Card,
    CardItem,
    Button
} from "native-base";
import styles from "./styles";

/**
 * 游戏Card组件
 */
export default class CardItems extends Component {
    render() {
        let { gameFeatureDTO, url, currency, quantity, onPress, } = this.props;
        return (
            <Card>
                <CardItem cardBody>
                    <Image source={{ uri: url }} style={styles.cardImageStyle} />
                </CardItem>
                <CardItem style={styles.cardBodStyle}>
                    <Left>
                        <Text style={styles.currencyTextStyle}>{currency}</Text>
                        <Text style={styles.quantityStyle}>{quantity}</Text>
                    </Left>
                </CardItem>
                <CardItem style={styles.caddBottomStyle}>
                    <View style={styles.viewStyle}>
                        <Body style={styles.bodyStyle}>
                            {
                                gameFeatureDTO.map((item, index) => (
                                    <Text key={index} node style={styles.titleStyle}>{item.featureName}</Text>
                                ))
                            }
                        </Body>
                        <Right>
                            <Button style={styles.buttonStyle} onPress={onPress}>
                                <Text style={styles.buttonTextStyle}>进入游戏</Text>
                            </Button>
                        </Right>
                    </View>
                </CardItem>
            </Card>
        )
    }
}
