const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    imageBackGroundStyle: {
        width: deviceWidth,
        height: deviceWidth / (deviceWidth / 101)
    },
    titleFontStyle: {
        fontSize: 19,
        color: '#ffffff'
    },
    titleRowStyle: {
        height: 30
    },
    titleRowStyles: {
        marginTop: 20,
        height: 30
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
    },
    tabActiveBorderStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    sessionStyle: {
        height: 50,
        marginTop: 20
    },
    sessionStyles: {
        height: 50,
    }
}

