import React, {Component} from "react";

import {
    Container,
    Content,
    List,
    Left,
    ListItem,
    Icon,
    View,
    Thumbnail,
    Button,
    Body,
    Right,
    Header,
} from 'native-base';
import {
    Image,
    TouchableOpacity,
    FlatList,
    AsyncStorage,
    ImageBackground,
    Modal,
    Text,
} from 'react-native';
import {NimSession, NimFriend, NimUtils} from 'react-native-netease-im';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import QRCode from 'react-native-qrcode';
import Http from "../../../api/Api";
import {find_top_bg} from "../../../../images";

/**
 * 社群信息页面
 */
class CommunityInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chatGroupInfo: {}, // 当前
            accessToken: {},
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

        AsyncStorage.getItem('accessToken').then(data => {
            let accessToken = JSON.parse(data);
            self.setState({
                accessToken: accessToken
            })
        })
    }

    // 群主获取当前群详情
    _getGroupInfo() {
        let self = this
        Http.getRequest(
            'groupInfo',
            {groupId: self.state.chatGroupInfo.id},
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
            imToken: data.accessToken.token,
            account: data.accessToken.account,
        };
        navigation.popToTop()
        navigation.navigate('Chat', {session: session})
    }

    // 退群
    _leaveChat() {
        let self = this
        let groupInfo = self.state.chatGroupInfo
        Http.formDataRequest(
            'leaveChatGroup',
            {

                groupId: groupInfo.id
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
                <ImageBackground
                    resizeMode={"cover"}
                    source={find_top_bg}
                    style={styles.imageBackGroundStyle}
                >
                        <Button style={{height:40}} transparent onPress={() => {
                            this.goBack()
                        }}>
                            <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle}/>
                        </Button>
                    <ListItem avatar style={styles.groupInfo}>
                        <Left>
                            <Thumbnail style={styles.image} square source={{uri: data.groupIcon}} />
                        </Left>
                        <Body style={styles.borderNone}>
                        <Text style={styles.groupName}>{data.groupName}</Text>
                        </Body>
                        <Right style={styles.borderNone}>

                            <Button small bordered style={styles.escBtnColor}  onPress={() => this._leaveChat()}>
                                <Text style={styles.escBtn}>退出</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </ImageBackground>
                <Content style={styles.content}>
                    <Text style={styles.title}>群公告</Text>
                    <Text style={styles.description}>
                        {data.description}
                    </Text>

                    <Button style={[styles.loginGroup]}
                            onPress={() => this._toChat()}>
                        <Text style={styles.colorWhite}>进入群聊天室</Text>
                    </Button>
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