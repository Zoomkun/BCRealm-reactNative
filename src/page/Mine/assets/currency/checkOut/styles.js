const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    container: {
        backgroundColor: '#ffffff'
    },
    imageBackgroundStyle: {
        width: deviceWidth,
        height: deviceWidth / (deviceWidth / 165.9),
    },
    backIconStyle: {
        color: '#FFFFFF',
        fontSize: 28
    },
    titleStyle: {
        fontSize: 19,
        color: '#ffffff'
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    describeStyle: {
        marginLeft: deviceWidth / (deviceWidth / 25),
        color: '#ffffff',
        fontSize: 17,
        marginBottom: deviceWidth / (deviceWidth / 8),
    },
    quantityStyle: {
        marginLeft: deviceWidth / (deviceWidth / 25),
        color: '#ffffff70',
        fontSize: 13
    },
    bgStyle: {
        height: deviceWidth / (deviceWidth / 80),
        marginTop: deviceWidth / (deviceWidth / 32),
        marginLeft: 20,
    },
    accountPasswordStyle: {
        color: '#313442',
        fontSize: 16,
        marginLeft: deviceWidth / (deviceWidth / 5)
    },
    packageStyle: {
        flexDirection: 'row',
        width: deviceWidth * 0.9,
        height: deviceWidth / (deviceWidth / 45),
        marginTop: deviceWidth / (deviceWidth / 15),
        justifyContent: 'center',
    },
    lineStyle: {
        width: deviceWidth / (deviceWidth / 320),
        backgroundColor: '#F3F3F3',
        height: 3,
    },
    buttonViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: deviceWidth / (deviceWidth / 80),
    },
    cancelStyle: {
        width: deviceWidth / (deviceWidth / 148),
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    },
    confirmStyle: {
        width: deviceWidth / (deviceWidth / 148),
        backgroundColor: '#664AD6',
        justifyContent: 'center'
    },
}