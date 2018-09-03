const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {
    imageStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        width: deviceWidth,
        height: 493 * (deviceWidth / 750),
    },
}