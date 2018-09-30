import React, {Component} from "react";

import {
    Container,
    Content,
    Body,
    Right,
    List,
    Left,
    ListItem,
    Icon,
    View,
    Thumbnail,
    Button,
    Header,
} from 'native-base';
import {
    Image,
    TouchableOpacity,
    FlatList,
    AsyncStorage,
    Modal,
    Text,
} from 'react-native';
import {NimSession, NimFriend, NimUtils} from 'react-native-netease-im';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import QRCode from 'react-native-qrcode';
import Http from "../../../api/Api";

/**
 * 社群信息页面
 */
class CommunityInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chatGroupInfo: {}, // 当前
            userInfo: {},
            visible: false,
        }
    }

    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        let self = this
        self.setState({
            chatGroupInfo: self.props.navigation.getParam('item')
        }, function () {
            self._getGroupInfo()
        })

        AsyncStorage.getItem('data').then(data => {
            let userInfo = JSON.parse(data);
            self.setState({
                userInfo: userInfo
            })
        })
    }

    // 群主获取当前群详情
    _getGroupInfo() {
        let self = this
        Http.getRequest(
            'appUrl',
            'groupInfo',
            {'id': self.state.chatGroupInfo.chatGroupId},
            function (data) {
                let newChatGroupInfo = Object.assign(self.state.chatGroupInfo, data)
                self.setState({
                    chatGroupInfo: newChatGroupInfo
                })
            }
        )
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    // 进入聊天室
    _toChat() {
        let self = this
        const {navigation} = this.props;
        const data = self.state
        const groupInfo = data.chatGroupInfo
        let session = {
            ...groupInfo,
            sessionType: '1',
            imToken: data.userInfo.imToken,
            account: data.userInfo.accountNo,
        };
        navigation.popToTop()
        navigation.navigate('Chat', {session: session})
    }

    // 退群
    _leaveChat() {
        let self = this
        let groupInfo = self.state.chatGroupInfo
        let userInfo = self.state.userInfo
        Http.deleteRequest(
            'appUrl',
            'leaveChatGroup',
            {
                "accountNo": userInfo.accountNo,
                "chatGroupId": groupInfo.chatGroupId,
                "chatGroupNo": groupInfo.chatGroupNo,
                "userId": userInfo.userId
            },
            function (data) {
                self.props.navigation.state.params.refresh();
                self.props.navigation.goBack();
            }
        )
    }

    // 二维码弹窗切换
    _toggleModal() {
        this.state.visible === true
            ?
            this.setState({
                visible: false
            })
            :
            this.setState({
                visible: true
            })
        ;
    }

    render() {
        const data = this.state.chatGroupInfo;
        const unJoinsUser = data.unJoinsUser
        let defaultImage = require('../../../../images/mine.png')
        return (
            <Container data={data}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => {
                        this.goBack()
                    }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle}/>
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                    <Text style={CommonStyles.headertextStyle}>社区详情</Text>
                    </Body>
                </Header>
                <Content style={styles.content}>
                    <View style={styles.top}>
                        <Thumbnail large style={styles.image} source={{uri: data.icon}}/>
                        <Text style={{color: '#333', paddingBottom: 20}}>{data.chatGroupName}</Text>
                    </View>

                    {
                        data.admin === true ?
                            <View>
                                <ListItem icon style={styles.ListItem}>
                                    <Body>
                                    <Text>群成员</Text>
                                    </Body>
                                    <Right>
                                        <Icon name={'navigate-next'} type="MaterialIcons"/>
                                    </Right>
                                </ListItem>
                                <ListItem icon style={styles.ListItem} onPress={() => this._toggleModal()}>
                                    <Body>
                                    <Text>群二维码</Text>
                                    </Body>
                                    <Right>
                                        <Icon name={'qrcode'} type="FontAwesome"/>
                                        <Icon name={'navigate-next'} type="MaterialIcons"/>
                                    </Right>
                                </ListItem>
                            </View>
                            : null
                    }
                    <Text style={styles.title}>群公告</Text>
                    <Text style={styles.announcement}>
                        {data.announcement}
                    </Text>
                    {
                        data.admin === true ?
                            <FlatList data={unJoinsUser}
                                      enableEmptySections={true}
                                      onEndReachedThreshold={10}
                                      keyExtractor={(item, index) => index.toString()}
                                      renderItem={({item, index}) => {
                                          return (<ListItem button style={styles.ListItem}>
                                              <Image source={{uri: item.headUrl}} style={styles.itemImage}/>
                                              <Body style={{justifyContent: 'flex-start',}}>
                                              <Text>{item.userName}</Text>
                                              </Body>
                                              <Right>
                                                  <Button small style={styles.invitationBtnIn}>
                                                      <Text style={styles.colorWhite}>邀请</Text>
                                                  </Button>
                                              </Right>
                                          </ListItem>)
                                      }}/>
                            : null
                    }
                    <Button full style={[styles.loginGroup, data.admin === true ? styles.marginB150 : '']}
                            onPress={() => this._toChat()}>
                        <Text style={styles.colorWhite}>进入该群</Text>
                    </Button>
                    {
                        data.admin !== true ?
                            <Button full style={styles.exitGroup}
                                    onPress={() => this._leaveChat()}>
                                <Text style={styles.colorWhite}>退出该群</Text>
                            </Button>
                            : null
                    }

                    <View style={{flex: 1}}>
                        <Modal
                            style={{flexDirection: 'row'}}
                            animationType={'fade'}
                            onRequestClose={this._toggleModal.bind(this)}
                            visible={this.state.visible}
                            transparent
                        >
                            <TouchableOpacity
                                onPress={() => this._toggleModal()}
                                style={styles.TouchableOpacity}>
                                <View style={{height: 200, width: 200}}>
                                    <QRCode
                                        value={'12313132'}
                                        size={200}
                                        bgColor='black'
                                        fgColor='white'/>
                                </View>

                            </TouchableOpacity>
                        </Modal>
                    </View>
                </Content>

            </Container>
        );
    };
}

export default CommunityInfo