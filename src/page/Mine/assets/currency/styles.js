import { Left } from 'native-base';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    container: {
        backgroundColor: '#ffffff'
    },
    imageStyle: {
        width: deviceWidth,
        height: deviceWidth / (deviceWidth / 164.2)
    },
    titleStyle: {
        fontSize: 19,
        color: '#ffffff'
    },
    recordStyle: {
        color: '#ffffff',
        fontSize: 17,
    },
    backIconStyle: {
        color: '#FFFFFF',
        fontSize: 28
    },
    extractQStyle: {
        height: deviceWidth / (deviceWidth / 309)
    },
    extractQuantityStyle: {
        color: '#313442',
        fontSize: 16,
        marginLeft: 17,
    },
    describeStyle: {
        color: '#ffffff',
        fontSize: 14,
        marginBottom: deviceWidth / (deviceWidth / 8),
    },
    quantityStyle: {
        color: '#ffffff',
        fontSize: 15
    },
    surplusStyle: {
        color: '#714BD9',
        marginRight: 16
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    colStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tipsStyle: {
        width: 178,
        height: 31,
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        backgroundColor: '#EFEFEF',
        height: 2,
        width: deviceWidth / (deviceWidth / (deviceWidth - 34)),
        marginLeft: deviceWidth / (deviceWidth / 17)
    },
    inputWidth: {
        width: deviceWidth / 2,
        marginLeft: (deviceWidth - (deviceWidth / 2)) / 2
    },
    inputStyle: {
        fontSize: 49,
        height: 80,
    },
    leftButtonStyle: {
        marginLeft: deviceWidth / (deviceWidth / 17),
        width: deviceWidth / (deviceWidth / 148),
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightButtonStyle: {
        backgroundColor: '#6056DD',
        width: deviceWidth / (deviceWidth / 148),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: deviceWidth / (deviceWidth / 17)
    }

}