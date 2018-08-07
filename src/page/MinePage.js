import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

import Styles from '../css/common'

console.debug(Styles)
export default class MinePage extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (<Text style={styles.title}>我</Text>),
        tabBarLabel: '我',
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/me.png')}
                style={[styles.icon, { tintColor: tintColor }]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
            alignSelf: 'center'
        },

    })

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.container}>
                <Button
                    onPress={() => navigate('Detail', { user: 'Lucy' })}
                    title="跳转+传参"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
//todo:可以优化
