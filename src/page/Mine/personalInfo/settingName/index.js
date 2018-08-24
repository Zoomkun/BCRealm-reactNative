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
    AsyncStorage
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

    componentDidMount() {
        this.setState({
            id: this.props.navigation.state.params.id,
            accountNo: this.props.navigation.state.params.accountNo,
        })
        // AsyncStorage.getItem('data').then(data => {
        //     let datas = JSON.parse(data);
        //     this.setState({
        //         id: datas.id,
        //         accountNo: datas.accountNo
        //     })
        //     console.log(this.state.id)
        // })
    }

    render() {
        //const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>个人信息</Text>
                    </Body>
                    <Button transparent onPress={() => { this._changeUserName(this.state.accountNo, this.state.id, this.state.userName) }}>
                        <Text style={CommonStyles.headertextStyle}>保存</Text>
                    </Button>
                </Header>
                <Item multiline style={styles.itemstyle}>
                    <Input placeholder="请输入名称"
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
        let self = this
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
                if (data.data.userName) {
                    AsyncStorage.setItem('data', JSON.stringify(data.data));
                    self.refs.toast.show((data.data.userName), DURATION.LENGTH_LONG);
                } else {
                    self.refs.toast.show((data.msg), DURATION.LENGTH_LONG);
                }
            }
        )
        // _upDATAForAPP(accountNo, headUrl, id, sex, userName) {
        //     fetch('http://test.bcrealm.com:9003/api/user/updateForApp', {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json;charset-UTF-8',
        //             'token': '07c298a08a1741b8accab242071ac690'
        //         },
        //         body: JSON.stringify({
        //             "accountNo": `${accountNo}`,
        //             "headUrl": `${headUrl}`,
        //             "id": `${id}`,
        //             "sex": `${sex}`,
        //             "userName": `${userName}`
        //         })
        //     }).then((response) => response.json())
        //         .then((jsonData) => {
        //             console.log(jsonData)
        //         });
        // }
    }
}


export default SettingName