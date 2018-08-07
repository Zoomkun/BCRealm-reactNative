import React, {Component} from 'react';
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
        title: '发现',
        tabBarLabel: '发现',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={
                    require('../../images/cert0.png')
                }
                style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerTitleStyle: {
            alignSelf:'center'
        },
    };

    render() {
        return(
            <View>
                <Text>发现</Text>
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
    icon:{
        width:20,
        height:20
    }
});