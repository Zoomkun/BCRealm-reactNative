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
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: '#FE6F06',
        borderRadius: 10,
        height: 35,
    },
    buttonTextStyle: {
        color: '#ffffff'
    },

    cardImageStyle: {
        height: 150,
        width: null,
        flex: 1
    },
    cardBodStyle: {
        height: 40,
    },
    currencyTextStyle: {
        color: '#000000'
    },
    quantityStyle: {
        marginLeft: 10,
        color: '#FE6F06',
        fontSize: 18
    },
    caddBottomStyle: {
        height: 50,
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bannerStyle: {
        flex: 1,
    }

}