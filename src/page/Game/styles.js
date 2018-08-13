const React = require('react-native');

const {StyleSheet, Dimensions} = React;

const deviceHeight = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default {
    wrapper: {
        width: width,
        height: 493*(width/750),
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageSize: {

    }

}