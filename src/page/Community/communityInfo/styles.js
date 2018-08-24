const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    image: {
        marginTop:20,
        marginBottom:10,
    },
    content:{
        width:deviceWidth,
        paddingLeft:15,
        paddingRight:15,
    },
    colorWhite:{
        color:'#fff',
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
        borderBottomWidth:8,
        borderColor:'#F9F9F9',
    }
}