import React, {Component} from "react";
import {AsyncStorage, Dimensions, View,} from "react-native";
import {
    Body,
    ListItem,
    Text,
    Left,
    Right,
    Thumbnail,
    Button,
} from "native-base";
import HttpUtils from "../api/Api";

/**
 * 信息组件
 */
export default class CommunityItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }



    _joinChatGroup(){
        let self = this
        let groupInfo = self.props.item
        HttpUtils.formDataRequest(
            'joinItem',
            {
                "groupId": groupInfo.id
            },
            function (data) {
                self.props.methods()
            }
        )
    }

    render() {
        let { item,onPress } = this.props
        return (
            <ListItem  button style={styles.listItemStyle} onPress={onPress} avatar>
                <Left>
                    <Thumbnail square source={{uri: item.groupIcon}} style={styles.avatarStyle}/>
                </Left>
                <Body style={styles.listItemStyle}>
                <Text>{item.groupName}</Text>
                </Body>
                <Right style={styles.listItemStyle}>
                    {
                        item.joinStatus === 2 ?
                        <Button small bordered style={styles.borderStyle} onPress={()=>this._joinChatGroup()}>
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
        height: 50,
        justifyContent: 'center',
    },
    avatarStyle: {
        height: 30,
        width: 30,
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
