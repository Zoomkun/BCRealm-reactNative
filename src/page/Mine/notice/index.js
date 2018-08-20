import React, { Component } from "react";

import {
    Container,
    Body,
    Header,
    Button,
    Content,
    Icon,
} from 'native-base';
import {
    Text,
    FlatList,
    View
} from 'react-native';

import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import { MsgItem } from '../../../components';

const notices = [
    { notices: "宁夏红游戏", timestamp: 1533802501000 },
    { notices: "币家摇钱树", timestamp: 1533802501000 },
    { notices: "太空城市", timestamp: 1533802501000 },
    { notices: "区世界APP区世界APP区世界APP区世界APP区世界APP区世界APP区世界APP区世界APP", timestamp: 1533802501000 }
]

/**
 * 私信页面
 */
class Notice extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            refreshing: false
        }
        this._getList = this._getList.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this._getList();
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { navigate } = this.props.navigation;

        if (!this.state.refreshing) {
            return this.renderLoadingView();
        }
        let items = this.state.data[0].list;
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>私信</Text>
                    </Body>
                    <Button transparent />
                </Header>

                <Content>
                    <FlatList data={items}
                        enableEmptySections={true}
                        refreshing={!this.state.refreshing}
                        onEndReachedThreshold={10}
                        //onRefresh={() => this._loadData(true)}
                        //onEndReached={() => this._loadData(false)}
                        keyExtractor={(item, key) => key}
                        renderItem={({ item, index }) => {
                            return <MsgItem
                                onPress={() => this.props.navigation.navigate("GameWeb", { data: item })}
                                text={item.content}
                                timestamp={item.letterDate}
                            />
                        }} />
                </Content>
            </Container >
        );
    }

    renderLoadingView() {
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>私信</Text>
                    </Body>
                    <Button transparent />
                </Header>
                <Content>
                    <FlatList
                        refreshing={!this.state.refreshing}
                    />
                </Content>
            </Container >
        );
    }

    _getList() {
        fetch('http://test.bcrealm.com:9003/api/letters?page=1&pageSize=10', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset-UTF-8',
                'token': '0849c3a379c14b5db7e41ede148d55fd'
            },
        }).then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                if (jsonData.msg == "成功") {
                    this.setState({
                        data: this.state.data.concat(jsonData.data),
                        refreshing: true
                    });
                    // console.log(jsonData.msg);
                } else {
                    // console.log(jsonData.msg);
                }

            })
    }
}


export default Notice