const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    backgroundStyle: {
        width: deviceWidth / (deviceWidth / 361),
        height: deviceWidth / (deviceWidth / 642)
    },
    gridStyle: {
        height: deviceHeight * 0.9,
    },
    rowStyel: {
        flexDirection: 'column',
        width: deviceWidth,
        justifyContent: "center",
        alignItems: 'center',
    },
    accountPasswordStyle: {
        flexDirection: 'column',
        width: deviceWidth,
        alignItems: 'center'
    },
    iconStyle: {
        width: deviceWidth / (deviceWidth / 94),
    },
    textStyle: {
        color: '#808080'
    },
    accountStyle: {
        width: deviceWidth * 0.8,
        height: deviceWidth / (deviceWidth / 40),
        marginTop: deviceWidth / (deviceWidth / 50),
        marginLeft: deviceWidth / (deviceWidth / 30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    PasswordStyle: {
        width: deviceWidth * 0.8,
        height: deviceWidth / (deviceWidth / 40),
        marginTop: deviceWidth / (deviceWidth / 20),
        marginLeft: deviceWidth / (deviceWidth / 30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgetPassword: {
        flexDirection: 'column',
        width: deviceWidth / (deviceWidth / 120),
        justifyContent: 'center',
        alignSelf: 'center'
    },
    warningStyle: {
        width: deviceWidth / (deviceWidth / 12),
        height: deviceWidth / (deviceWidth / 13),
    },
    warnStyle: {
        marginLeft: deviceWidth / (deviceWidth / 50),
        flexDirection: 'row'
    },
    viewStyle: {
        height: deviceWidth / (deviceWidth / 36),
        flexDirection: 'row'
    },
    logInButtonStyle: {
        backgroundColor: '#5A40BE',
        width: deviceWidth * 0.8,
        borderRadius: deviceWidth / (deviceWidth / 50),
        justifyContent: 'center',
        alignSelf: 'center'
    },
    logInTextStyle: {
        color: '#F5F4FB',
        fontSize: 15
    },
    buttonStyle: {
        width: deviceWidth * 0.8,
        justifyContent: 'center',
    }
}