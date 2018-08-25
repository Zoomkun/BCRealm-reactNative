const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    icon: {
        width: 20,
        height: 20,
    },
    textStyle: {
        marginLeft: 10
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconstyle: {
        color: '#808080',
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: deviceWidth * 0.8,
        backgroundColor: "#CC0000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#F3F3F3',
        height: 2
    },
    row: {
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
    headerRight: {
        fontSize: 20,
        color: '#fff',
    },
    headerLeft: {
        fontSize: 20,
        color: '#fff',
    },
    rightStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}
