
const React = require('react-native');
import { PixelRatio, } from 'react-native';
const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  rightStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: 20,
    height: 20,
  },
  listItemStyle: {
    backgroundColor: '#ffffff',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 50,
    width: 80,
    height: 80
  },
}