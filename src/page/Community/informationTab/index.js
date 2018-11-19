import React, { Component } from "react";
import {
    View,
    Text,
    Content,
    List,
} from 'native-base';
import {
    FlatList,
    NativeAppEventEmitter,
    AsyncStorage,
} from 'react-native';
//import styles from './styles';
import { NimTeam, NimSession } from 'react-native-netease-im';
import { InformationItem } from '../../../components';
import Http from "../../../api/Api";

/**
 * 信息
 */

export default class InformationTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            teamList: [],
            accessToken: {}
        }
    }

    static navigationOptions = {
        header: ''
    };

    componentWillMount() {
        let self = this

        Http.getRequest(
            'getAccessToken',
            {
            },
            function (data) {
                AsyncStorage.setItem('accessToken', JSON.stringify(data))
                NimSession.login(data.account, data.token).then((data) => {
                    self.setState({
                        accessToken: data
                    })

                    self.sessionListener = NativeAppEventEmitter.addListener("observeRecentContact", (data) => {
                        console.log(data)
                        self.setState({
                            teamList: data.recents || data.sessionList
                        });
                    });
                }, (err) => {
                    console.warn(err);
                })
            }
        )
    }

    componentWillUnmount() {
        this.sessionListener && this.sessionListener.remove();
    }

    // 进入聊天室
    _chatRoom(item) {
        let self = this
        const { navigation } = this.props;
        const data = self.state;
        let chatInfo = item

        console.log(chatInfo)
        let session = {
            ...chatInfo,
            sessionType: '1',
            imToken: data.accessToken.token,
            account: data.accessToken,
        };
        navigation.popToTop()
        navigation.navigate('Chat', { session: session })
    }

    render() {
        let items = this.state.teamList;
        return (
            <Content>
                <FlatList data={items}
                    {...console.log(items)}
                    enableEmptySections={true}
                    onEndReachedThreshold={10}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return <InformationItem
                            {...this.props}
                            data={item}
                            name={item.name}
                            time={item.time}
                            msg={item.content}
                            image={item.imagePath}
                            id={item.contactId}
                            onPress={() => this._chatRoom(item)}
                        />
                    }} />
            </Content>
        );
    }
}

