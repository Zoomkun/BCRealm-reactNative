import React, {Component} from "react";
import {Dimensions, View,} from "react-native";
import {
    Body,
    ListItem,
    Text,
    Left,
    Thumbnail,
} from "native-base";

/**
 * 信息组件
 */
export default class InformationItem extends Component {
    render() {
        let {name, time, msg, image, id} = this.props;
        return (
            <ListItem button style={{paddingBottom: 5,}}>
                <Left>
                    <Thumbnail square source={{uri: image}} style={styles.avatarStyle}/>
                    <Body>
                        <Text>{name}</Text>
                        <Text note>{time}</Text>
                        <Text note numberOfLines={1}>{msg}</Text>
                    </Body>
                </Left>

            </ListItem>
        );
    }
}
const {width, height} = Dimensions.get("window")
const styles = {
    listItemStyle: {
        height: 80,
    },
    avatarStyle: {
        width: 60,
        height: 60,
    },
    bodyViewStyle: {
        flex: 1,
        marginLeft: 5,
        width: width * 0.49,
    },
    text: {
        flex: 1,
        flexDirection: 'column',
    }
};
