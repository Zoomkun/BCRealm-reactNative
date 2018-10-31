const React = require('react-native');

const {StyleSheet, Dimensions} = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    image: {
        width: 36,
        height: 36,
    },
    escBtnColor: {
        backgroundColor: '#4C3BC7',
        paddingLeft:20,
        paddingRight:20,
        height:30,
        borderWidth:0,
        marginTop:5,
    },
    groupName:{
        color:'#fff',fontSize:16
    },
    borderNone:{
        borderBottomWidth:0
    },
    groupInfo:{
        height:60,
    },
    escBtn: {
        color: '#f3f3f3'
    },
    imageBackGroundStyle: {
        width: deviceWidth,
        height: deviceWidth / (deviceWidth / 101)
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
        lineHeight: 45,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    ListItem: {
        marginRight: 15,
    },
    description: {
        marginTop: 10,
        fontSize: 15,
        lineHeight: 24
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
        backgroundColor: '#624FD8',
        marginTop: 20,
        paddingLeft:20,
        paddingRight:20,
        marginBottom: 150,
    },
    marginB150: {
    },
    TouchableOpacity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
}