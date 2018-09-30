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
        let {data,onPress} = this.props;
        return (
            <ListItem onPress={onPress} button style={{paddingBottom: 5,}}>
                <Left>
                    <Thumbnail square source={{uri: data.imagePath}} style={styles.avatarStyle}/>
                    <Body>
                        <Text>{data.name}</Text>
                        <Text note>{data.time}</Text>
                        <Text note numberOfLines={1}>{data.content}</Text>
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
