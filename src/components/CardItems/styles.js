const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {
    buttonStyle: {
        backgroundColor: '#FE6F06',
        borderRadius: 10,
        height: 35,
    },
    buttonTextStyle: {
        color: '#ffffff'
    },
    cardImageStyle: {
        height: deviceWidth / 2.4,
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
    titleStyle: {
        color: '#808080',
        fontSize: 14,
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyStyle: {
        flexDirection: 'row',
        paddingLeft: 10
    }

}