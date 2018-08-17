const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    row: {
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
        width: 180,
        height: 180
    },
    tabsStyle: {
        backgroundColor: '#FE6F06',
        width: 100,
        marginLeft: 40
    },
    SegmentButtonStyle: {
        flexDirection: 'column',
        height: 50,
    },
    textStyle: {
        color: '#808080'
    },
    selectedTextStyle: {
        color: '#FE6F06'
    },
    selectedViewStyle: {
        backgroundColor: '#FE6F06',
        height: 3,
        width: 70,
        marginBottom: 10
    },
    itemStyle: {
        marginTop: 10,
        width: deviceWidth * 0.8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgetPassword: {
        width: 120,
        justifyContent: 'center',
        marginTop: 5
    },
    codeStyle: {
        borderColor: '#FE6F06',
        borderRadius: 10,
        marginTop: 10,
        marginRight: 15,
        height: 30,
        width: deviceWidth / 3.35,
    },
    disableCodeStyle: {
        borderColor: '#808080',
        borderRadius: 10,
        marginTop: 10,
        marginRight: 15,
        height: 30,
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
    button: {
        width: deviceWidth * 0.8,
        justifyContent: 'center',
    }
}