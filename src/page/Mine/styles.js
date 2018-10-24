const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    headStyle: {
        marginLeft: deviceWidth / 2
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
    imageStyle: {
        width: deviceWidth,
        height: deviceWidth / (deviceWidth / 126)
    },
    headStyle: {
        width: 57,
        height: 57,
        borderRadius: 28.5,
        marginTop: deviceWidth / (deviceWidth / 25),
        marginLeft: deviceWidth / (deviceWidth / 10)
    },
    userNameStyle: {
        marginTop: deviceWidth / (deviceWidth / 30),
        color: '#FFFFFF',
        fontSize: 17
    },
    userIdStyle: {
        marginTop: 1,
        color: '#FFFFFF',
        fontSize: 15
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
