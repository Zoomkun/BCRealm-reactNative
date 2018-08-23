import React, {Component} from "react";
import {Dimensions, View,} from "react-native";
import {
    Body,
    ListItem,
    Text,
    Left,
    Right,
    Thumbnail,
    Button,
} from "native-base";

/**
 * 信息组件
 */
export default class CommunityItem extends Component {
    render() {
        let {chatGroupName, icon, onPress,chatGroupNo, announcement, id} = this.props;
        return (
            <ListItem  button style={styles.listItemStyle} onPress={onPress} avatar>
                <Left>
                    <Thumbnail square source={{uri: icon}} style={styles.avatarStyle}/>
                </Left>
                <Body style={styles.listItemStyle}>
                <Text>{chatGroupName}</Text>
                </Body>
                <Right style={styles.listItemStyle}>
                    {
                        0 ?
                        <Button small bordered style={styles.borderStyle}>
                        <Text style={styles.text}>加入社群</Text>
                    </Button>
                        : null
                    }
                </Right>
            </ListItem>
        );
    }
}
const {width, height} = Dimensions.get("window")
const styles = {
    listItemStyle: {
        height: 80,
        justifyContent: 'center',
    },
    avatarStyle: {
        height: 40,
        width: 40,
    },
    borderStyle: {
        height: 30,
        borderRadius: 6,
        borderColor: '#FF6109',
    },
    text: {
        color: "#FF6109"
    }
};
