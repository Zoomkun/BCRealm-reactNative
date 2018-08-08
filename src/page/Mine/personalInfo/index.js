import { FlatList } from 'react-native'
import React, { Component } from "react";

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
    ActionSheet,
} from 'native-base';
import {
    Text,
    View,
    Image,
} from 'react-native';

import styles from "./styles";

/**
 * 个人信息页面
 */
const me = [
    {
        title: "头像",
        id: "0118",
        posters: { thumbnail: "http://img5.imgtn.bdimg.com/it/u=2716432665,3069906192&fm=11&gp=0.jpg" },
        icon: '../../../..s/images/goIn.png',
        uri: 'PersonalInfo',
        bg: true
    }
];
const m = [
    { text: "姓名", arrows: require('../../../../images/goIn.png'), uri: 'Setting', Certification: "JayChou", line: true, uri: 'SettingName' },
    { text: "性别", arrows: require('../../../../images/goIn.png'), uri: 'Setting', Certification: "男", },
];

var BUTTONS = [
    { text: "同意", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "删除", icon: "trash", iconColor: "#fa213b" },
    { text: "取消", icon: "close", iconColor: "#25de5b" }
];

var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 2;
class PersonalInfo extends Component {

    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        headerTitle: (
            <View>
                <Left /><Body style={styles.textBodyStyle}>
                    <Text style={styles.title}>个人信息</Text>
                </Body><Right />
            </View>),
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
    };

    render() {
        var e = me[0];
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <List>
                    <ListItem itemDivider={e.bg} style={{ height: 100, justifyContent: 'center', backgroundColor: '#ffffff' }} >
                        <Text>{e.title}</Text>
                        <Body />
                        <Right style={styles.rightStyle}>
                            <Thumbnail source={{ uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }} />
                            <Image
                                source={require('../../../../images/goIn.png')}
                                style={styles.icon}// {tintColor: tintColor} 选中的图片和文字颜色
                            />
                        </Right>
                    </ListItem>
                    <View style={{ backgroundColor: '#F3F3F3', height: 20 }} />
                    {
                        m.map((item, index) => (
                            //<ListItem key={index} button onPress={() => { this.props.navigation.navigate(item.uri) }}>
                            <View key={index}>
                                <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate(item.uri) }}>

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
                                {item.line &&
                                    <View style={{ backgroundColor: '#F3F3F3', height: 3 }} />
                                }
                            </View>
                        ))
                    }
                </List>
            </Container>
        );
    }
}


export default PersonalInfo