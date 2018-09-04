const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    rowStyle: {
        flexDirection: 'column',
        width: deviceWidth,
        justifyContent: "center",
        alignItems: 'center',
    },
    gridStyle: {
        height: deviceHeight * 0.9,
    },
    backIconStyle: {
        color: '#000000',
        fontSize: 40
    },
    imageStyle: {
        width: deviceWidth / (deviceWidth / 180),
        height: deviceWidth / (deviceWidth / 180)
    },
    itemStyle: {
        marginTop: 10,
        width: deviceWidth * 0.8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    codeStyle: {
        borderColor: '#FE6F06',
        borderRadius: 10,
        marginTop: 10,
        marginRight: 15,
        height: deviceWidth / (deviceWidth / 30),
        width: deviceWidth / 3.35,
    },
    disableCodeStyle: {
        borderColor: '#808080',
        borderRadius: 10,
        marginTop: 10,
        marginRight: 15,
        height: deviceWidth / (deviceWidth / 30),
        width: deviceWidth / 3.35,
    },
    logInButtonStyle: {
        backgroundColor: '#FE6F06',
        width: deviceWidth * 0.8,
        justifyContent: 'center',
    },
    logInTextStyle: {
        color: '#ffffff'
    },
    buttonStyle: {
        width: deviceWidth * 0.8,
        justifyContent: 'center',
    }
}