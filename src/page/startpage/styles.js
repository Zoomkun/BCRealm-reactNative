
import  React  from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    mainbackcolor: {
        backgroundColor: '#B41E1F',
    },
    buttonStyle: {
        justifyContent: "center",
        alignItems: 'center',
        width: deviceWidth,
        height: deviceHeight
    },
    image: {
        width: deviceWidth / (deviceWidth / 180),
        height: deviceWidth / (deviceWidth / 180),
    },
};