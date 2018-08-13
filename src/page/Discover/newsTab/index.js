import { FlatList } from 'react-native'
import React, { Component } from "react";

import {
    Container,
} from 'native-base';
import {
    Text,
} from 'react-native';

/**
 * 新闻
 */

export default class NewsTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    static navigationOptions = {

        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container >
                <Text >新闻</Text>
            </Container>
        );
    }
}

