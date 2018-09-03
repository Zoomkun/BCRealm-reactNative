const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    textStyle: {
        marginLeft: 10
    },
    buttonStyle: {
        width: deviceWidth * 0.8,
        backgroundColor: "#CC0000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#F3F3F3',
        height: 2
    },
    rowStyle: {
        marginTop: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    listItemStyle: {
        backgroundColor: '#ffffff',
    },
    buttonTextStyle: {
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}
