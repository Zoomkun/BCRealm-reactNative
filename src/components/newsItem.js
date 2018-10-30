import React, { Component } from "react";
import {
    Dimensions,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import {
    Text,
    ListItem
} from "native-base";
import { Row, Col } from 'react-native-easy-grid';

/**
 * 新闻/话题组件
 */
export default class NewsItem extends Component {
    render() {

        let { uri, onPress, title, star, read } = this.props;
        return (
            <View >
                <ListItem button itemDivider style={styles.listItem} onPress={onPress}>

                    <Row style={styles.rowStyle}>
                        <Col size={1.1} >
                            <View style={styles.viewStyle}>
                                <Image
                                    source={{ uri: uri }}
                                    style={styles.imageStyle} />
                            </View>
                        </Col>
                        <Col size={2}>
                            <View style={styles.centerStyle}>
                                <Text numberOfLines={2} style={{ fontSize: 17, color: '#313442', }}>{title}</Text>
                            </View>
                            <View style={styles.starStyle}>
                                <Text style={{ fontSize: 12, color: '#9699A5' }}>{star + "赞"}</Text>
                                <Text style={{ fontSize: 12, color: '#9699A5', marginLeft: 10 }}>{read + "阅读"}</Text>
                            </View>
                        </Col>
                    </Row>
                </ListItem>
                <View style={styles.lineStyle} />
            </View>
        );
    }
}
const { width, height } = Dimensions.get("window")
const styles = {
    listItem: {
        height: width / (width / 97),
        width: width,
    },
    rowStyle: {
        height: width / (width / 97),
        width: width,

    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    imageStyle: {
        width: width / (width / 115),
        height: width / (width / 75),
        marginTop: width / (width / 11),
        borderRadius: 5,
    },
    centerStyle: {
        width: width / (width / 210),
        height: width / (width / 44),
        marginTop: width / (width / 15),
    },
    starStyle: {
        flexDirection: 'row',
        marginTop: width / (width / 8),
    },
    lineStyle: {
        width: width * 0.92,
        height: 1,
        backgroundColor: '#D3D3D3',
        alignSelf: 'center'
    },



    listItemStyle: {
        height: 80,
    },
    avatarStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    bodyViewStyle: {
        flexDirection: 'column',
        marginLeft: 5,
        width: width * 0.49,
    },
    content: {
        width: width * 0.49,
        lineHeight: 25
    },
    timeStyle: {
        marginLeft: -width / 8.57
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        alignSelf: 'flex-end'
    }
};
