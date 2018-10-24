import React, { Component } from "react";
import { Dimensions, View, } from "react-native";
import CommonStyles from '../css/commonStyle';
import { Grid, Row, Col } from 'react-native-easy-grid';

import {
    ListItem,
    Text,
    Body,
    Left,
    Right,
} from "native-base";

/**
 *提现记录列表
 */
export default class RecordItem extends Component {
    render() {

        let { date, quantity, state, onPress } = this.props;
        return (
            < ListItem style={styles.listItemStyle} >
                <Grid>
                    <Col size={1}>
                        <Text style={styles.dateStyle}>{date}</Text>
                    </Col>
                    <Col size={1}>
                        <Text style={styles.dateStyle}>{quantity}</Text>
                    </Col>
                    <Col size={1}>
                        <Text style={state == 1 ? styles.successTextStyle : styles.failTextStyle}>
                            {state == 1 ? "提现成功" : "提现失败"}
                        </Text>
                    </Col>
                </Grid>
            </ListItem >
        );
    }
}
const { width, height } = Dimensions.get("window")
const styles = {
    listItemStyle: {
        height: width / (width / 64),
    },
    Style: {
        color: '#AAAAAA',
        fontSize: 15
    },
    successTextStyle: {
        color: '#14C96D',
        fontSize: 15
    },
    failTextStyle: {
        color: '#FF5065',
        fontSize: 15
    }
};