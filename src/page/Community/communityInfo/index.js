import React, { Component } from "react";

import {
    Container,
    Content,
    Body,
    Right,
    List,
    ListItem,
    Icon,
    View,
    Thumbnail,
    Button,
    Header,
} from 'native-base';
import {
    AsyncStorage,
    Text,
} from 'react-native';
import {NimSession, NimFriend, NimUtils} from 'react-native-netease-im';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import Http from "../../../api/Api";

/**
 * 社群信息页面
 */
class CommunityInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chatGroupInfo:{},
            userInfo:{}
        }

    }
    static navigationOptions = {
        header: null
    };

    componentWillMount(){
        let self = this
        self.setState({
            chatGroupInfo:self.props.navigation.getParam('item')
        })

        AsyncStorage.getItem('data').then(data => {
            let userInfo = JSON.parse(data);
            self.setState({
                userInfo:userInfo
            })
        })
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    _toChat(){
        let self = this
        const {navigation} = this.props;
        const data = self.state
        const groupInfo = data.chatGroupInfo
        let session = {
            ...groupInfo,
            sessionType:'0',
            imToken:data.userInfo.imToken,
            account:data. userInfo.accountNo,
        };
        navigation.popToTop()

        NimSession.login(session.account,session.imToken).then((data)=>{
            navigation.navigate('Chat',{session:session })
        },(err)=>{
            console.warn(err);
        })
    }

    // 退群
    _leaveChat(){
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

    render() {
        const data = this.state.chatGroupInfo;
        return (
            <Container style={styles.container}
                       data={data}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>社区详情</Text>
                    </Body>
                </Header>
                <View style={styles.top}>
                    <Thumbnail large style={styles.image} source={{ uri: data.icon }} />
                    <Text style={{ color: '#333',paddingBottom:20 }}>{data.chatGroupName}</Text>
                </View>
                <Content style={styles.content}>
                    <Text style={styles.title}>群二维码</Text>
                    <Text style={styles.title}>群成员</Text>
                    <Text style={styles.title}>群公告</Text>
                    <Text style={{ fontSize: 14, lineHeight: 18 }}>
                        {data.announcement}
                    </Text>
                    <Button full style={{ backgroundColor: '#FE6F06', marginTop: 20 }}  onPress={()=>this._toChat()}>
                        <Text style={styles.colorWhite}>进入该群</Text>
                    </Button>
                    <Button full style={{ backgroundColor: '#FE0606', marginTop: 20 }}  onPress={()=>this._leaveChat()}>
                        <Text style={styles.colorWhite}>退出该群</Text>
                    </Button>
                </Content>
            </Container>
        );
    };
}

export default CommunityInfo