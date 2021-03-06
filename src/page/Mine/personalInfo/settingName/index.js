import React, { Component } from "react";
import {
    Container,
    Body,
    Item,
    Input,
    Header,
    Button,
    Icon
} from 'native-base';
import {
    Text,
    AsyncStorage,
    Keyboard
} from 'react-native';

import styles from "./styles";
import CommonStyles from '../../../../css/commonStyle';
import HttpUtils from "../../../../api/Api";
import Toast, { DURATION } from 'react-native-easy-toast';

/**
 * 修改名称
 */
class SettingName extends Component {

    constructor(props) {
        super(props)
        this.keyboardDidShowListener = null;
        this.keyboardDidHideListener = null;
        this.state = {
            userName: '',
            title: '',
            id: 0,
            accountNo: 0,
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.state.params.returnData(this.state.userName);
        this.props.navigation.goBack();
    }

    dissmissKeyboard() {
        Keyboard.dismiss();
    }

    componentDidMount() {
        this.setState({
            id: this.props.navigation.state.params.id,
            accountNo: this.props.navigation.state.params.accountNo,
        })
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>个人信息</Text>
                    </Body>
                    <Button transparent onPress={() => {
                        this._changeUserName(this.state.accountNo, this.state.id, this.state.userName),
                            this.dissmissKeyboard()
                    }}>
                        <Text style={CommonStyles.headertextStyle}>保存</Text>
                    </Button>
                </Header>
                <Item multiline style={styles.itemstyle}>
                    <Input placeholder="请输入名称"
                        ref="bottomInput"
                        value={this.state.userName}
                        onChangeText={(text) => { this.setState({ userName: text }) }} />
                </Item>
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

    _changeUserName(accountNo, id, userName) {
        this.dissmissKeyboard.bind(this);
        let self = this
        if (self.state.userName != '') {
            HttpUtils.putRequrst(
                'userUrl',
                'updateForApp',
                {
                    "accountNo": `${accountNo}`,
                    "id": `${id}`,
                    "userName": `${userName}`
                },
                function (data) {
                    console.log(data)
                    if (data.data != null) {
                        AsyncStorage.setItem('data', JSON.stringify(data.data));
                        self.goBack();
                    } else {
                        self.refs.toast.show((data.msg), DURATION.LENGTH_LONG);
                    }
                }
            )
        } else {
            self.refs.toast.show(("名称不可为空"), DURATION.LENGTH_LONG);
        }
    }
}
export default SettingName