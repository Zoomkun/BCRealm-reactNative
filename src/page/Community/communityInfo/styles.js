const React = require('react-native');

const {StyleSheet, Dimensions} = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    image: {
        marginTop: 20,
        marginBottom: 10,
    },
    content: {
        width: deviceWidth,
        paddingLeft: 15,
        paddingRight: 15,
    },
    colorWhite: {
        color: '#fff',
    },
    avatarStyle: {
        height: 40,
        width: 40,
    },
    borderStyle: {
        height: 30,
        borderRadius: 6,
        borderColor: '#FF6109',
    },
    top: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 8,
        borderColor: '#F9F9F9',
    },
    title: {
        color: '#000',
        fontSize: 16,
        paddingBottom: 15,
        paddingTop: 15,
        paddingRight: 15,
        paddingLeft: 15,
    },
    ListItem: {
        marginRight: 15,
    },
    description: {
        paddingRight: 15,
        paddingLeft: 15,
        fontSize: 14,
        lineHeight: 18
    },
    button: {},
    itemImage: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    invitationBtnIn: {
        backgroundColor: '#FE6F06',
        paddingLeft: 10,
        paddingRight: 10
    },
    invitationBtnIOut: {
        backgroundColor: '#8b8b8b',
        paddingLeft: 10,
        paddingRight: 10
    },
    exitGroup: {
        backgroundColor: '#FE0606',
        marginTop: 20,
    },
    loginGroup: {
        backgroundColor: '#FE6F06',
        marginTop: 20,
    },
    marginB150: {
        marginBottom: 150,
    },
    TouchableOpacity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
}