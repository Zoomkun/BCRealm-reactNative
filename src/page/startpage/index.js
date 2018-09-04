
import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import {
    Container,
    Button,
} from "native-base";
import styles from "./styles";

/**
 *启动页面（登陆之前那个页面）
 */
export default class StartPage extends Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                this.props.navigation.navigate("Login");
            },
            2000
        );
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <Button transparent style={styles.buttonStyle}
                //onPress={() => { this.props.navigation.navigate("Login") }}
                >
                    <Image source={require('../../../images/Icon.png')}
                        style={styles.image} />
                </Button>
            </Container>
        );
    }
}
