const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    gridStyle: {
        height: deviceHeight * 0.9,
    },
    rowStyel: {
        flexDirection: 'column',
        width: deviceWidth,
        justifyContent: "center",
        alignItems: 'center',
    },
    imageStyle: {
        width: deviceWidth / (deviceWidth / 180),
        height: deviceWidth / (deviceWidth / 180)
    },
    SegmentButtonStyle: {
        flexDirection: 'column',
        height: deviceWidth / (deviceWidth / 50),
    },
    textStyle: {
        color: '#808080'
    },
    selectedTextStyle: {
        color: '#FE6F06'
    },
    selectedViewStyle: {
        backgroundColor: '#FE6F06',
        height: 2,
        width: 70,
        marginBottom: 10
    },
    itemStyle: {
        marginTop: deviceWidth / (deviceWidth / 10),
        width: deviceWidth * 0.8,
        height: deviceWidth / (deviceWidth / 50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgetPassword: {
        width: deviceWidth / (deviceWidth / 120),
        justifyContent: 'center',
        marginTop: 5
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