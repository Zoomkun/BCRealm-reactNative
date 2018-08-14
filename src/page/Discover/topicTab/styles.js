
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    addButtonStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE6F06',
        position: 'absolute',
        bottom: 20,
        right: 10,
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    itemstyle: {
        width: deviceWidth / 1.1,
        marginTop: 10,
        marginLeft: (deviceWidth - (deviceWidth / 1.1)) / 2,
    },
    carditem: {
        width: deviceWidth / 1.1,
        height: deviceWidth * 1.2,
        marginTop: 10,
        marginLeft: (deviceWidth - (deviceWidth / 1.1)) / 2,
        borderRadius: 12,
        backgroundColor: '#ffffff',
    },
    addbutton: {
     
        marginTop: deviceWidth / 5,
        width: deviceWidth / 5.7,
        height: deviceWidth / 5.7,
        borderRadius: -10,
    },
    iconstyle: {
        color: '#8E8E8E',
        marginLeft: deviceWidth / 15,
    },
}
