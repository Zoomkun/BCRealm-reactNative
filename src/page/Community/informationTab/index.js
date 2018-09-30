import React, {Component} from "react";
import {
    View,
    Text,
} from 'native-base';
import {
    FlatList,
    NativeAppEventEmitter,
    AsyncStorage,
} from 'react-native';
//import styles from './styles';
import {NimTeam, NimSession} from 'react-native-netease-im';
import {InformationItem} from '../../../components';

/**
 * 信息
 */



export default class InformationTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            teamList: [],
            userInfo: {}
        }
    }

    static navigationOptions = {
        header: ''
    };

    componentWillMount() {
        let self = this
        AsyncStorage.getItem('data').then(data => {
            let userInfo = JSON.parse(data)
            self.setState({
                userInfo: userInfo
            });

            NimSession.login(userInfo.accountNo, userInfo.imToken).then((data) => {
                self.sessionListener = NativeAppEventEmitter.addListener("observeRecentContact", (data) => {
                    self.setState({
                        teamList: data.recents || data.sessionList
                    });
                });
            }, (err) => {
                console.warn(err);
            })
        })
    }

    componentWillUnmount() {
        this.sessionListener && this.sessionListener.remove();
    }

    // 进入聊天室
    _chatRoom(item) {
        let self = this
        const {navigation} = this.props;
        const data = self.state;
        let chatInfo = item
        let session = {
            ...chatInfo,
            sessionType: '1',
            imToken: data.userInfo.imToken,
            account: data.userInfo.accountNo,
        };
        navigation.popToTop()
        navigation.navigate('Chat', {session: session})
    }

    render() {
        let items = this.state.teamList;
        return (
            <View>
                <FlatList data={items}
                          enableEmptySections={true}
                          onEndReachedThreshold={10}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({item, index}) => {
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
                          }}/>
            </View>
        );
    }
}

