import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    // Dimensions,
    Image,
} from 'react-native';

import {
    Container,
    Content,
} from 'native-base';
import Carousel from 'react-native-looped-carousel'
import CommonStyles from "../../css/commonStyle";
import styles from "./styles";

export default class GamePage extends Component {

    static navigationOptions = {
        headerTitle: (<Text style={CommonStyles.title}>游戏</Text>),
        tabBarLabel: '游戏',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={
                    require('../../../images/game.png')
                }
                style={[CommonStyles.icon, {tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
    };

    render() {
        return (
            <Content>
                <Carousel style={styles.wrapper} autoplay={true} bullets ={true}>
                    <View style={styles.slide}>
                        <Image style={{flex: 1,resizeMode: Image.resizeMode.contain}} source={require('../../../images/banner1.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={{flex: 1,resizeMode: Image.resizeMode.contain}} source={require('../../../images/banner2.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={{flex: 1,resizeMode: Image.resizeMode.contain}} source={require('../../../images/banner3.jpg')}/>
                    </View>
                </Carousel>
            </Content>

        )
    }
}

