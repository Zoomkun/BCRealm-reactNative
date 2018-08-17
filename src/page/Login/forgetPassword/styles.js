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
        height: 60
    },
    codeTextStyle: {
        color: '#FE6F06',
    },
    logInButtonStyle: {
        backgroundColor: '#FE6F06',
        width: deviceWidth * 0.8,
        justifyContent: 'center',
    },
    rowStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    codeStyle: {
        borderColor: '#FE6F06',
        borderRadius: 10,
        marginTop: 13,
        marginRight: 15,
        height: 30,
        width: deviceWidth / 3.35,
    },
    disableCodeStyle: {
        borderColor: '#808080',
        borderRadius: 10,
        marginTop: 13,
        marginRight: 15,
        height: 30,
        width: deviceWidth / 3.35,
    },
}