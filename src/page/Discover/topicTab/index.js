import React, { Component } from "react";
import {
    Icon,
    Button,
    Container,
} from 'native-base';
import {
    FlatList
} from 'react-native';
import { NewsItem } from '../../../components';
import styles from "./styles";
import HttpUtils from "../../../api/Api";


/**
 * 话题
 */
export default class TopicTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buttonShow: '',
            data: []
        }
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this._getTopic();
    }

    render() {
        const { navigate } = this.props.navigation;
        let items = this.state.data;
        console.log(items)
        return (
            <Container>
                <FlatList data={items}
                    enableEmptySections={true}
                    onEndReachedThreshold={10}
                    keyExtractor={(item, key) => key}
                    renderItem={({ item, index }) => {
                        return <NewsItem
                            {...this.props}
                            avatar={item.headUrl}
                            title={item.title}
                            time={item.sendDate}
                            like={item.tsan}
                            read={item.readVal}
                            onPress={() => this.props.navigation.navigate("Content", { url: item.html5Url })}
                        />
                    }} />
                <Button style={styles.addButtonStyle} onPress={() => { navigate("SendTopic") }}>
                    <Icon name="md-add" style={{ color: 'white', }} />
                </Button>
            </Container>
        );
    }

    _getTopic() {
        let self = this
        HttpUtils.getRequest(
            'appUrl',
            'topicList',
            '',
            function (data) {
                self.setState({
                    data: data.list
                })
            }
        )
    }
}

