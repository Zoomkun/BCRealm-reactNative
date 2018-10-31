import React, {Component} from "react";
import {Dimensions, View,} from "react-native";
import {
    Body,
    ListItem,
    Text,
    Left,
    Right,
    Thumbnail,
} from "native-base";

/**
 * 信息组件
 */
export default class InformationItem extends Component {
    render() {
        let {data,onPress} = this.props;
        return (
            <ListItem onPress={onPress} avatar>
                <Left>
                    <Thumbnail square source={{uri: data.imagePath}} style={styles.avatarStyle}/>
                </Left>
                <Body style={{marginTop:10}}>
                    <Text>{data.name}</Text>
                    <Text note numberOfLines={1}>{data.content}</Text>
                </Body>
                <Right >
                    <Text note>{data.time}</Text>
                </Right>
            </ListItem>
        );
    }
}
const {width, height} = Dimensions.get("window")
const styles = {
    listItemStyle: {
        height: 70,
    },
    avatarStyle: {
        width: 48,
        height: 48,
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
