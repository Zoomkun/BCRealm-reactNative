import React, { Component } from "react";

import {
    Container,
    Body,
    Item,
    Input,
    Header,
    Content,
    Card,
    Icon,
    Button,
} from 'native-base';
import {
    Text,
} from 'react-native';
import styles from '../styles';
import CommonStyles from '../../../../css/commonStyle';
import HttpUtils from '../../../../api/Api';
import Toast, { DURATION } from 'react-native-easy-toast'
/**
 * 发送话题
 */
class SendTopic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={CommonStyles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>发送话题</Text>
                    </Body>
                    <Button transparent onPress={() => { this._sendTopic(this.state.content, this.state.title) }}>
                        <Text style={styles.text}>保存</Text>
                    </Button>
                </Header>
                <Content>
                    <Item style={styles.itemstyle}>
                        <Input placeholder="标题"
                            value={this.state.title} onChangeText={(text) => { this.setState({ title: text }) }} />
                    </Item>
                    <Card style={styles.carditem}>
                        <Input multiline style={{ textAlignVertical: 'top' }} placeholder="正文"
                            value={this.state.content}
                            onChangeText={(text) => { this.setState({ content: text }) }} />
                    </Card >
                </Content>
                <Toast
                    ref="toast"
                    style={{ backgroundColor: '#434343' }}
                    position='center'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: '#ffffff' }}
                />
            </Container>
        );
    }

    _sendTopic(content, title) {
        self = this
        if (content != '' && title != '') {
            HttpUtils.postRequrst(
                'appUrl',
                'sendTopic',
                {
                    'content': `${content}`,
                    'title': `${title}`,
                },
                function (data) {
                    if (data == '') {
                        self.refs.toast.show("发布成功", DURATION.LENGTH_LONG);
                    } else {
                        self.refs.toast.show(data, DURATION.LENGTH_LONG);
                    }
                }
            )
        } else {
            self.refs.toast.show("标题或内容不可为空", DURATION.LENGTH_LONG);
        }

    }

}
export default SendTopic