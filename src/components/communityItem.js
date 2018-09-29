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
            userInfo:{}
        }
    }

    componentWillMount(){
        let self = this
        AsyncStorage.getItem('data').then(data => {
            let userInfo = JSON.parse(data);
            self.setState({
                userInfo:userInfo
            })
        })
    }

    _joinChatGroup(){
        let self = this
        let groupInfo = self.props.item
        let userInfo = self.state.userInfo
        HttpUtils.postRequrst(
            'appUrl',
            'joinItem',
            {
                "accountNo": userInfo.accountNo,
                "chatGroupId": groupInfo.chatGroupId,
                "chatGroupNo":groupInfo.chatGroupNo,
                "owner": groupInfo.owner,
                "userId": userInfo.id
            },
            function (data) {
                self.props.methods()
                // self.props.params.refresh();
            }
        )
    }

    render() {
        let { item,onPress } = this.props
        return (
            <ListItem  button style={styles.listItemStyle} onPress={onPress} avatar>
                <Left>
                    <Thumbnail square source={{uri: item.icon}} style={styles.avatarStyle}/>
                </Left>
                <Body style={styles.listItemStyle}>
                <Text>{item.chatGroupName}</Text>
                </Body>
                <Right style={styles.listItemStyle}>
                    {
                        item.join === false ?
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
