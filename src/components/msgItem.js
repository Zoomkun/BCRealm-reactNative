import React, { Component } from "react";
import { Dimensions, View, } from "react-native";
import moment from 'moment'
import {
    Button,
    Left,
    Body,
    Right,
    ListItem,
    Text,
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

/**
 * 消息组件
 */
export default class MsgItem extends Component {
    render() {
        let { timestamp, onPress, text, } = this.props;
        return (
            <ListItem button onPress={onPress} style={{ paddingBottom: 5, }}>
                <Body >
                    <View style={styles.viewStyle}>
                        <Text numberOfLines={2} style={styles.content}>{text} </Text>
                        <Text>
                            <Text style={styles.timeStyles}>{moment(timestamp).format('YYYY-MM-DD  HH:mm:ss')}</Text>
                        </Text>
                    </View>
                </Body>
            </ListItem>
        );
    }
}
const { width, height } = Dimensions.get("window")
const styles = {
    content: {
      
        fontSize: 18,
        color: '#000000',
        width: width * 0.85,
        lineHeight: 25,
    },
    timeStyles: {
        paddingTop: 26,
        color: '#808080',
        marginRight: -10,
        fontWeight: '200',
    },
    viewStyle: {
        paddingTop: 3,
        flexDirection: 'column',
    },
};
