const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    container: {
        backgroundColor: '#EFEFF4'
    },
    backgroundStyle: {
        width: deviceWidth / (deviceWidth / 361),
        height: deviceWidth / (deviceWidth / 642)
    },
    icon: {
        width: 20,
        height: 20
    },
    iconStyle: {
        fontSize: 18,
        color: '#FE6F06'
    },
    rightIconStyle: {
        fontSize: 22,
    },
    title: {
        flex: 1,
        fontSize: 20,
        color: '#fff',
        textAlign: "center"
    },
    textColor: {
        marginLeft: 15,
        color: '#020202'
    },
    headerBodyStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headertextStyle: {
        color: '#FFFFFF',
        fontSize: 19
    },
    headerStyle: {
        // backgroundColor: "skyblue"
    },
    titleBodyStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabsStyle: {
        backgroundColor: '#FE6F06'
    },
    tabStyle: {
        backgroundColor: '#ffffff'
    },
    tabActiveTabStyle: {
        backgroundColor: '#ffffff'
    },
    tabActiveTextStyle: {
        color: '#FE6F06'
    },
    tabtextStyle: {
        color: '#808080'
    },
    backIconStyle: {
        color: '#ffffff',
        fontSize: 30
    },
    gridStyle: {
        height: deviceHeight * 0.9,
    },
    rowStyel: {
        flexDirection: 'column',
        width: deviceWidth,
        justifyContent: "center",
        alignItems: 'center',
    },
    backIconStyle: {
        color: '#FFFFFF',
        fontSize: 28
    },
    titleStyle: {
        fontSize: 19,
        color: '#ffffff'
    },
    imageBackGroundStyle: {
        width: deviceWidth,
        height: deviceWidth / (deviceWidth / 164.2)
    },
}
