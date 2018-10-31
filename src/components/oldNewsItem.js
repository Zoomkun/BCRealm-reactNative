import React, { Component } from "react";
import { Dimensions, View, } from "react-native";
import {
    ListItem,
    Text,
    Thumbnail,
    Left,
    Body
} from "native-base";


/**
 * 新闻/话题组件
 */
export default class OldNewsItem extends Component {
    render() {

        let { onPress, title, time, like, read } = this.props;
        return (
            <ListItem button style={title.length > 20 ? styles.listItemStyle : styles.listItem} onPress={onPress}>
                <View style={styles.bodyViewStyle}>
                    <Text numberOfLines={2} style={styles.content}>{title}</Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text note style={styles.readStyle}>阅读{read}</Text>
                    <Text note style={styles.timeStyle}>{time}</Text>
                </View >
            </ListItem >
        );
    }
}
const { width, height } = Dimensions.get("window")
const styles = {
    listItem: {
        height: width / (width / 80),
        flexDirection: 'column'
    },
    listItemStyle: {
        height: width / (width / 100),
        flexDirection: 'column'
    },
    avatarStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    bodyViewStyle: {
        width: width,
    },
    content: {
        alignSelf: 'flex-start',
        marginLeft: width / (width / 20),
        marginRight: width / (width / 20),
        // lineHeight: 25,
    },
    readStyle: {
        marginLeft: width / (width / 20),
        alignSelf: 'flex-start'
    },
    timeStyle: {
        marginRight: width / (width / 20)
    },
    viewStyle: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        alignSelf: 'flex-end'
    }
};
