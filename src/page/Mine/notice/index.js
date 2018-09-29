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
} from 'react-native';

import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import { MsgItem } from '../../../components';
import Http from "../../../api/Api";

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
        if (!this.state.refreshing) {
            return this._renderLoadingView();
        }
        let items = this.state.data.list;
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
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return <MsgItem
                                onPress={() => { this.props.navigation.navigate("GameWeb", { data: item }), this._putUpStatus() }}
                                text={item.content}
                                letterDate={item.letterDate}
                            />
                        }} />
                </Content>
            </Container >
        );
    }

    _renderLoadingView() {
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
        let self = this
        Http.getRequest(
            'userUrl',
            'letters',
            '',
            function (data) {
                console.log(data);
                self.setState({
                    data: data,
                    refreshing: true
                });
            }
        )
    }

    _putUpStatus() {
        Http.putRequrst(
            'userUrl',
            'upStatus',
            '',
            function (data) {
                console.log(data)
            }
        )
    }
}
export default Notice