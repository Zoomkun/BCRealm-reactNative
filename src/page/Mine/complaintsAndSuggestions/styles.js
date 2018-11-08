const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    containerStyle: {
        backgroundColor: '#ffffff'
    },
    titleStyle: {
        color: '#000000',
        fontSize: 19,
    },
    textStyle: {
        color: '#714BD9',
        fontSize: 16,
    },
    backIconStyle: {
        fontSize: 28,
        color: '#000000'
    },
    listItemStyle: {
        backgroundColor: '#EEEDFF'
    },
    itemstyle: {
        width: deviceWidth / 1.1,
        marginTop: 10,
        marginLeft: (deviceWidth - (deviceWidth / 1.1)) / 2,
    },
    carditem: {
        width: deviceWidth,
        height: deviceWidth * 0.7,
        marginTop: deviceWidth / (deviceWidth / 20),
        backgroundColor: '#f2f2f2'
    },
    textNumStyle: {
        alignSelf: 'flex-end',
        marginRight: 20
    },
    buttonStyle: {
        width: deviceWidth * 0.9,
        backgroundColor: '#664BD6',
        marginTop: deviceWidth / (deviceWidth / 50),
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonTextStyle: {
        color: '#ffffff',
        fontSize: 20
    }
}
