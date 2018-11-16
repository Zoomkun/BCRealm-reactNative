const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {
    wrapper: {
        width: deviceWidth,
        height: 493 * (deviceWidth / 750),
    },
    imageStyle: {
        width: deviceWidth,
        height: 480 * (deviceWidth / 750),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        width: deviceWidth,
        height: 480 * (deviceWidth / 750),
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotStyle: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 10,
        marginRight: 9,
        marginTop: 12,
        marginBottom: 9,
    },
    activeDotStyle: {
        backgroundColor: '#ffffff',
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 10,
        marginRight: 9,
        marginTop: 12,
        marginBottom: 9,
    },
    dialogTopStyle: {
        width: '100%',
        height: deviceWidth / (deviceWidth / 60),
        justifyContent: 'center'
    }
}