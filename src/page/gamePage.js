import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';
export default class GamePage extends Component {

    static navigationOptions = {
        title: '游戏',
        tabBarLabel: '游戏',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={
                    require('../../images/game.png')
                }
                style={[styles.icon, { tintColor: tintColor }]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerTitleStyle: {
            alignSelf: 'center'
        },
    };

    render() {
        return (
            <View>
                <Text>游戏</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30
    }
});