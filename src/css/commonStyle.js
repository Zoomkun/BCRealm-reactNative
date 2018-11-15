import { Dimensions, PixelRatio } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    container: {
        backgroundColor: '#EFEFF4'
    },
    backgroundStyle: {
        flex: 1
    },
    icon: {
        width: 20,
        height: 20
    },
    iconStyle: {
        fontSize: 18,
        color: '#714BD9'
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
        backgroundColor: "#1C127A"
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
