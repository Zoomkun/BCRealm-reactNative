const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    titleStyle: {
        color: '#fefefe',
        fontSize: 19
    },
    textStyle: {
        marginLeft: 10,
        color: '#313442',
        fontSize: 15
    },
    buttonStyle: {
        width: deviceWidth,
        height: 45,
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#F3F3F3',
        height: 2
    },
    rowStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    listItemStyle: {
        height: 50,
        backgroundColor: '#ffffff',
    },
    startlistItemStyle: {
        height: 40,
        backgroundColor: '#ffffff',
    },
    buttonTextStyle: {
        color: '#FF801A',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18
    },
    rightStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageBackgroundStyle: {
        width: deviceWidth,
        height: deviceWidth / (deviceWidth / 140)
    },
    headStyle: {
        width: deviceWidth / (deviceWidth / 57),
        height: deviceWidth / (deviceWidth / 57),
        alignSelf: 'center',
    },
    userNameStyle: {
        color: '#FFFFFF',
        fontSize: 17
    },
    userIdStyle: {
        color: '#FFFFFF',
        fontSize: 15,
        marginBottom: 10
    },
    certifiedStyle: {
        alignItems: 'center',
        marginRight: 10,
        color: '#714BD9'
    },
    uncertifiedStyle: {
        alignItems: 'center',
        marginRight: 10,
        color: '#9699A5'
    }
}
