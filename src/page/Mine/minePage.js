import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import {
    Container,
    Content,
    Body,
    Left,
    Right,
    List,
    ListItem,
    Icon,
    Thumbnail,
    Button,
} from 'native-base';

import { Grid, Row, Col } from "react-native-easy-grid";
import Styles from '../../css/common'
import styles from "./styles";

const menus = [
    { icon: require('../../../images/wallet.png'), text: "钱包", arrows: require('../../../images/goIn.png'), uri: 'Friends', Certification: '', },
    { icon: require('../../../images/currency.png'), text: "货币", arrows: require('../../../images/goIn.png'), uri: 'Setting', Certification: '', },
    { icon: require('../../../images/news.png'), text: "私信", arrows: require('../../../images/goIn.png'), uri: 'Setting', Certification: '', },
    { icon: require('../../../images/authenticate.png'), text: "实名认证", arrows: require('../../../images/goIn.png'), uri: 'AboutUs', Certification: "未认证", },
];
const m = [
    { text: "清除缓存", arrows: require('../../../images/goIn.png'), uri: 'Setting', },
    { text: "关于区世界", arrows: require('../../../images/goIn.png'), uri: 'Setting', },
];
var me = [
    {
        name: "JayChou",
        id: "0118",
        posters: { thumbnail: "http://img5.imgtn.bdimg.com/it/u=2716432665,3069906192&fm=11&gp=0.jpg" },
        icon: '../../../images/goIn.png',
    }
];
export default class MinePage extends Component {

    //test code
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (<View><Left style={{ backgroundColor: 'pink' }} /><Text style={styles.title}>我</Text><Right /></View>),
        tabBarLabel: '我',
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../../images/mine.png')}
                style={[styles.icon, { tintColor: tintColor }]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
            alignSelf: 'center'
        },

    })

    render() {
        var e = me[0];
        const { navigate } = this.props.navigation;
        return (
            <Container >
                <Content>
                    <List>
                        <ListItem itemDivider style={{ height: 100, justifyContent: 'center', backgroundColor: '#ffffff' }}>
                            <Thumbnail source={{ uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }} />
                            <Body style={{ justifyContent: 'flex-start', }}>
                                <Text>{e.name}</Text>
                                <Text note>{e.id}</Text>
                            </Body>
                            <Right>
                                <Image
                                    source={require('../../../images/goIn.png')}
                                    style={styles.icon}// {tintColor: tintColor} 选中的图片和文字颜色
                                />
                            </Right>
                        </ListItem>
                        <View style={{ backgroundColor: '#F3F3F3', height: 20 }} />
                        {
                            menus.map((item, index) => (
                                //<ListItem key={index} button onPress={() => { this.props.navigation.navigate(item.uri) }}>
                                <ListItem key={index} >
                                    <Image
                                        source={item.icon}
                                        style={styles.icon}// {tintColor: tintColor} 选中的图片和文字颜色
                                    />
                                    <Body style={{ justifyContent: 'flex-start', }}>
                                        <Text >{item.text}</Text>
                                    </Body>
                                    <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                                        {item.Certification != null &&
                                            <Text style={{ alignItems: 'center', marginRight: 10 }}>{item.Certification}</Text>
                                        }
                                        {item.arrows &&
                                            <Image
                                                source={item.arrows}
                                                style={styles.icon}// {tintColor: tintColor} 选中的图片和文字颜色
                                            />
                                        }</Right>
                                </ListItem>
                            ))
                        }
                        <View style={{ backgroundColor: '#F3F3F3', height: 20 }} />
                        {
                            m.map((item, index) => (
                                //<ListItem key={index} button onPress={() => { this.props.navigation.navigate(item.uri) }}>
                                <ListItem key={index} >

                                    <Body style={{ justifyContent: 'flex-start', }}>
                                        <Text >{item.text}</Text>
                                    </Body>
                                    <Right>
                                        {item.arrows != null &&
                                            <Image
                                                source={item.arrows}
                                                style={styles.icon}// {tintColor: tintColor} 选中的图片和文字颜色
                                            />
                                        }</Right>
                                </ListItem>
                            ))
                        }
                    </List>
                    <Row size={20} style={styles.row}>
                        <View>
                            <Button style={styles.button}>
                                <Text style={styles.buttonTextStyle}>退出登录</Text>
                            </Button>
                        </View>
                    </Row>
                </Content>
            </Container >
        );
    }
}