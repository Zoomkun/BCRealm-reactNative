
import React, { Component } from "react";
import {
    Image,
    StatusBar,
    AsyncStorage
} from "react-native";
import {
    Container,
    Button,
    View,
} from "native-base";
import styles from "./styles";
import { NavigationActions } from 'react-navigation';
import HttpUtils from "../../api/Api";

//重置路由
resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Main' })
    ]
});


/**
 *启动页
 */
export default class StartPage extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            token: '',
        }
    }

    componentWillMount() {
        let self = this;
        AsyncStorage.getItem('data').then(data => {
            datas = JSON.parse(data)
            console.log(datas)
            if (datas) {
                self.setState({
                    token: datas.token,
                })
            }
        })

        this.timer = setTimeout(() => {
            if (this.state.token != '') {
                self.props.navigation.dispatch(resetAction);
            } else {
                this.props.navigation.navigate("Login");
            }
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
                {/* <Button transparent style={styles.buttonStyle}
                onPress={() => { this.props.navigation.navigate("Login") }}
                > */}
                <View style={styles.buttonStyle}>
                    <Image source={require('../../../images/Icon.png')}
                        style={styles.image} />
                </View>
                {/* </Button> */}
            </Container>
        );
    }
}