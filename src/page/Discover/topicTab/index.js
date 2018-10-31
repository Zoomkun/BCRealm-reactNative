import React, { Component } from "react";
import {
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

