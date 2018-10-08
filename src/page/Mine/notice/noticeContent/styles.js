const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    webStyle: {
        width: deviceWidth,
        height: deviceWidth * 2,
    },
    textStyle: {
        color: "#000000",
        marginLeft: deviceWidth / (deviceWidth / 20),
        marginTop: deviceWidth / (deviceWidth / 10)
    },
}