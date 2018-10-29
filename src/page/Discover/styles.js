const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    imageBackGroundStyle: {
        width: deviceWidth,
        height: deviceWidth / (deviceWidth / 164.2)
    },
    titleStyle: {
        fontSize: 19,
        color: '#ffffff'
    },
    tabActiveStyle: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center'
    },
    tabStyle: {
        fontSize: 16,
        color: '#ffffff',
        alignSelf: 'center'
    }
}
