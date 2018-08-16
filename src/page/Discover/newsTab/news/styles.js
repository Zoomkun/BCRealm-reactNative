const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    webStyle: {
        width: deviceWidth,
        height: deviceWidth * 2,
    },
    leftstyle: {
        marginLeft: 15,

    },
    item: {
        width: deviceWidth * 0.5,
        height: 35,
        borderColor: '#666666',
        marginTop: 10
    },
    button: {
        width: deviceWidth * 0.5,
        height: 35,
        margin: 0,
        marginTop: 10,
    },
    input: {
        padding: 5,
        fontSize: 14,
        color: 'white',
    },
    inputblack: {
        padding: 5,
        fontSize: 14,
        color: 'black',
    },
    footerStyle: {
        backgroundColor: '#f0f0f0'
    },
    layout: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    layou: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    comments: {
        color: '#000000',
        paddingLeft: 0,
    },
    icon: {
        color: '#000000'
    },
    like: {
        color: 'pink'
    },
    rowStyle: {},
}
