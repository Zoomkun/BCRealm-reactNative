import React, { Component } from "react";
import { Dimensions, View, } from "react-native";
import CommonStyles from '../css/commonStyle';
import { Grid, Row, Col } from 'react-native-easy-grid';
import moment from 'moment'
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
                        <Text style={styles.dateStyle}>{moment(date).format('YYYY-MM-DD')}</Text>
                    </Col>
                    <Col size={1}>
                        <Text style={styles.dateStyle}>{quantity}</Text>
                    </Col>
                    <Col size={1}>
                        < Text
                            style={
                                state > 2
                                    ? state == 3
                                        ? styles.successTextStyle
                                        : styles.failTextStyle
                                    : styles.textStyle
                            }>
                            {
                                state > 2
                                    ? state == 3
                                        ? "提现成功"
                                        : "提现失败"
                                    : "处理中"
                            }
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
    textStyle: {
        color: '#313442',
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