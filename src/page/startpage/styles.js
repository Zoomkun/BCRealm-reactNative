const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    mainbackcolor: {
        backgroundColor: '#B41E1F',
    },
    buttonStyle: {
        justifyContent: "center",
        alignItems: 'center',
        width: deviceWidth,
        height: deviceHeight
    },
    image: {
        width: 180,
        height: 180,
    },
};