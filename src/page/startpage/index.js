
import React, { Component } from "react";
import {
    Image,
    StatusBar,
    AsyncStorage
} from "react-native";
import {
    Container,
    Button,
} from "native-base";
import styles from "./styles";
import { NavigationActions } from 'react-navigation';
import DeviceInfo from 'react-native-device-info';
import HttpUtils from "../../api/Api";


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
            phone: '',
            password: '',
            cid: ''
        }
    }

    componentWillMount() {
        let self = this;
        let cid = DeviceInfo.getUniqueID();
        AsyncStorage.getItem('user').then(data => {
            datas = JSON.parse(data)
            if (datas) {
                self.setState({
                    phone: datas.phone,
                    password: datas.password,
                })
            }
        })

        self.setState({
            cid: cid
        })

        this.timer = setTimeout(() => {
            if (this.state.phone != '' && this.state.password != '' && this.state.cid != '') {
                this._login(this.state.phone, this.state.password, this.state.cid);
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
                <Button transparent style={styles.buttonStyle}
                //onPress={() => { this.props.navigation.navigate("Login") }}
                >
                    <Image source={require('../../../images/Icon.png')}
                        style={styles.image} />
                </Button>
            </Container>
        );
    }

    _login(phone, password, cid) {
        let self = this
        HttpUtils.postRequrst(
            'userUrl',
            'appLogin',
            {
                'cid': `${cid}`,
                'phoneNumber': `${phone}`,
                'pwd': `${password}`,
            },
            function (data) {
                if (data.userName) {
                    HttpUtils.setHeader({ token: data.token })
                    AsyncStorage.setItem('data', JSON.stringify(data));
                    // var user = new Object();
                    // user.phone = self.state.phone
                    // user.password = self.state.password
                    // AsyncStorage.setItem('user', JSON.stringify(user));
                    self.props.navigation.dispatch(resetAction);
                } else {
                    let { navigate } = self.props.navigation;
                    navigate("Login");
                }
            }
        )
    }
}