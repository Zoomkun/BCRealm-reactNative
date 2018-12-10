import React, { Component } from "react";
import {
    Container,
    Body,
    Left,
    Right,
    Button,
    Icon,
    View,
    Content,
    Item,
    Input,
    Card,
} from 'native-base';
import { Text, } from 'react-native';
import styles from "./styles";
import { Grid, Col } from 'react-native-easy-grid';
import HttpUtils from '../../../api/Api';
import Toast, { DURATION } from 'react-native-easy-toast';

/**
 * 投诉与建议
 */
class ComplaintsAndSuggestions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            content: ''
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        let items = this.state.data
        return (
            <Container style={styles.containerStyle}>
                <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2',marginTop:20}}>
                    <Left>
                        <Button transparent onPress={() => { this.goBack() }}>
                            <Icon name={"ios-arrow-back"} style={styles.backIconStyle} />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.titleStyle}>投诉与建议</Text>
                    </Body>
                    <Right>
                        <Button transparent />
                    </Right>
                </View>

                <Content>
                    <View style={styles.carditem}>
                        <Input
                            multiline
                            style={{ textAlignVertical: 'top', }}
                            placeholder="    请输入不少于10个字的描述"
                            placeholderTextColor={'#929398'}
                            value={this.state.content}
                            maxLength={300}
                            onChangeText={(text) => { this.setState({ content: text }) }} />
                        <Text style={styles.textNumStyle}>{this.state.content.length + "/300"}</Text>
                    </View >
                    <Button
                        style={styles.buttonStyle}
                        onPress={() => {
                            this._Submit()
                        }}
                    >
                        <Text style={styles.buttonTextStyle}>确认</Text>
                    </Button>
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
            </Container >
        );
    }

    _Submit() {
        if (this.state.content.length < 10) {
            this.refs.toast.show("请输入不少于10个字的描述", DURATION.LENGTH_LONG);
        } else {
            this.refs.toast.show("您的投诉建议反馈成功", DURATION.LENGTH_LONG);
            this.timer = setTimeout(() => {
                this.props.navigation.goBack();
            },
                2000
            );
        }
    }
}
export default ComplaintsAndSuggestions