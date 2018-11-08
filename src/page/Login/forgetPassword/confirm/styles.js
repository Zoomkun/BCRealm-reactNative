const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemStyle: {
        width: deviceWidth * 0.9,
        height: deviceWidth / (deviceWidth / 50),
    },
    logInButtonStyle: {
        borderRadius: deviceWidth / (deviceWidth / 50),
        width: deviceWidth * 0.8,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    rowStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth / (deviceWidth / 50)
    },
    codeStyle: {
        marginRight: 15,
        height: 30,
        width: deviceWidth / 3.35,
        alignSelf: 'center'
    },
    disableCodeStyle: {
        marginRight: 15,
        height: deviceWidth / (deviceWidth / 30),
        width: deviceWidth / 3.35,
        alignSelf: 'center'
    },
    logInTextStyle: {
        color: '#714BD9',
        fontSize: 15
    }
}