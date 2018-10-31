import React, { Component } from "react";
import {
    Container,
} from 'native-base';
import {
    FlatList
} from 'react-native';
import { NewsItem, OldNewsItem } from '../../../components';
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
        this._getSteefanKors();
    }

    render() {
        let items = this.state.data;
        console.log(items)
        return (
            <Container>
                <FlatList data={items}
                    enableEmptySections={true}
                    onEndReachedThreshold={10}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return <OldNewsItem
                            {...this.props}
                            title={item.title}
                            time={item.createTimestamp}
                            read={item.readQuantity}
                            onPress={() => this.props.navigation.navigate("Content", { id: item.id })}
                        />
                    }} />
            </Container>
        );
    }

    _getSteefanKors() {
        let self = this
        HttpUtils.getRequest(
            'getSteefanKors',
            '',
            function (data) {
                console.log(data)
                self.setState({
                    data: data.newsList
                })
            }
        )
    }
}

