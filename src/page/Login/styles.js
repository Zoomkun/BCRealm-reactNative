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
        alignSelf: 'center'
    },
    iconStyle: {
        width: deviceWidth / (deviceWidth / 94),
        alignSelf: 'center'
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
        alignSelf: 'flex-end',
        marginRight: deviceWidth / (deviceWidth / 20)
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
        height: deviceWidth / (deviceWidth / 20),
        flexDirection: 'row'
    },
    logInButtonStyle: {
        backgroundColor: '#ffffff',
        width: deviceWidth * 0.8,
        borderRadius: deviceWidth / (deviceWidth / 50),
        justifyContent: 'center',
        alignSelf: 'center'
    },
    logInTextStyle: {
        color: '#714BD9',
        fontSize: 15
    },
    buttonStyle: {
        width: deviceWidth * 0.8,
        justifyContent: 'center',
    },
    rowStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth / (deviceWidth / 50)
    },
    btnStyle: {
        width: deviceWidth * 0.8,
        justifyContent: 'center',
        alignSelf: 'center'
    }
}