import React, { Component } from "react";
import {
    View,
    Text,
    Left,
    Container,
    Content,
} from 'native-base';
import {
    FlatList
} from 'react-native';
import { CommunityItem } from '../../../components';
import Http from "../../../api/Api";
//import styles from './styles';
/**
 * 社群
 */

export default class CommunityTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chatGroupIn: [],
            chatGroupOut: []
        }
    }

    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        this._getGroupList()
    }

    // 获取群列表
    _getGroupList() {
        let self = this
        Http.getRequest(
            'chatGroup',
            {
                pageNo: 1,
                pageSize: 100
            },
            function (data) {
                console.log(data)
                let groupData = data.result
                let chatGroupIn = [];
                let chatGroupOut = [];
                for (let i in groupData) {
                    if (groupData[i].joinStatus === 1) {
                        chatGroupIn.push(groupData[i])
                    } else {
                        chatGroupOut.push(groupData[i])
                    }
                }

                self.setState({
                    chatGroupOut: chatGroupOut,
                    chatGroupIn: chatGroupIn
                })

            }
        )
    }

    // 跳转社群详情
    _goToCommunityInfo(item) {
        let self = this
        self.props.navigation.navigate("CommunityInfo", {
            item: item, refresh: () => {
                self._getGroupList();
            }
        })
    }

    render() {
        let chatGroupOut = this.state.chatGroupOut;
        let chatGroupIn = this.state.chatGroupIn;
        return (
            <Container>
                <Content padder>
                    {
                        chatGroupIn.length > 0 ?
                            <View style={styles.joinTitle}>
                                <Text style={styles.text}>已加入</Text>
                            </View>
                            : null
                    }

                    <FlatList
                        data={chatGroupIn}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return <CommunityItem
                                {...this.props}
                                item={item}
                                onPress={() => this._goToCommunityInfo(item)}
                            />
                        }
                        }>
                    </FlatList>
                    {
                        chatGroupOut.length > 0 ?
                            <View style={styles.joinTitle}>
                                <Text style={styles.text}>未加入</Text>
                            </View>
                            : null
                    }
                    <FlatList
                        data={chatGroupOut}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return <CommunityItem
                                {...this.props}
                                item={item}
                                methods={() => this._getGroupList()}
                            />
                        }
                        }>
                    </FlatList>
                </Content>
            </Container>
        );
    }
}

const styles = {
    text: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 45
    },
    joinTitle: {
        marginTop: 20,
        paddingLeft: 20,
        height: 45,
        backgroundColor: '#5146D1',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
};
