import React, { Component } from "react";
import {
    Container,
    Header,
    Button,
    Text,
    Body,
    Icon,
    Footer,
    Item,
    Input
} from 'native-base';
import {
    WebView,
    AsyncStorage
} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../../css/commonStyle';
import { Col, Row } from "react-native-easy-grid";

/**
 * 新闻Tab
 */
export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attention: false,
            showInput: false,
            webViewData: []
        }
        this.url = this.props.navigation.state.params.url;
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    _onLoadEnd = (e) => {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            this.setState({
                token: datas.token,
            })
            let dataJson = JSON.stringify(datas)
            this.refs.webView.postMessage(dataJson);
        })
    }

    _onMessage = (e) => {
        this.setState({
            webViewData: e.nativeEvent.data
        });
        Alert.alert(e.nativeEvent.data)
    }

    render() {
        //const { navigate } = this.props.navigation;
        let black = this.props.black || false;
        let url = this.url

        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}  >
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>新闻</Text>
                    </Body>
                    <Button transparent />
                </Header>

                {/* <WebView source={{ uri: "http://192.168.31.124:8092/qsj/" + url }} */}
                <WebView source={{ uri: "http://192.168.31.124:8092/qsj/" + url }}
                    ref='webView'
                    onLoadEnd={this._onLoadEnd}
                    style={styles.webStyle} >

                </WebView>
                {
                    //底部按钮
                    // this.state.showInput ?
                    //     (< Footer style={styles.footerStyle} >
                    //         <Row style={styles.rowStyle}>
                    //             <Col size={2.4} style={styles.leftstyle}>
                    //                 <Item rounded style={styles.item}>
                    //                     <Button style={styles.button} onPress={() => { this.setState({ showInput: !this.state.showInput }) }} />
                    //                 </Item>
                    //             </Col>
                    //             <Col size={1} style={styles.layout}>
                    //                 <Button iconLeft transparent>
                    //                     <Icon style={styles.comments} name='md-text' />
                    //                     <Text note style={styles.comments}>12</Text>
                    //                 </Button>
                    //             </Col>
                    //             <Col size={1} style={styles.layout}>
                    //                 <Button transparent onPress={() => { this.setState({ attention: !this.state.attention }) }}>
                    //                     <Icon style={this.state.attention ? styles.like : styles.icon} name={this.state.attention ? 'md-heart' : 'ios-heart-outline'} />
                    //                     <Text note style={styles.comments}>12</Text>
                    //                 </Button>
                    //             </Col>
                    //         </Row>
                    //     </Footer>) :
                    //     (< Footer style={styles.footerStyle}>
                    //         <Row style={styles.rowStyle}>
                    //             <Col size={2.4} style={styles.leftstyle}>
                    //                 <Item rounded style={styles.item}>
                    //                     <Input multiline
                    //                         style={black ? styles.input : styles.inputblack}
                    //                         placeholder='写评论...' />
                    //                 </Item>
                    //             </Col>
                    //             <Col size={1} style={styles.layou}>
                    //                 <Button transparent style={styles.item} onPress={() => { this.setState({ showInput: !this.state.showInput }) }}>
                    //                     <Text style={styles.comments}>发送</Text>
                    //                 </Button>
                    //             </Col>
                    //             <Col size={1} style={styles.layou}>
                    //                 <Button transparent style={styles.item} onPress={() => { this.setState({ showInput: !this.state.showInput }) }}>
                    //                     <Text style={styles.comments}>取消</Text>
                    //                 </Button>
                    //             </Col>
                    //         </Row>
                    //     </Footer>)
                }
            </Container >
        );
    }
}