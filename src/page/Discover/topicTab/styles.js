const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    addButtonStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE6F06',
        position: 'absolute',
        bottom: 20,
        right: 10,
    },
  
}