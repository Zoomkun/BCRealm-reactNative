

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  titleStyle: {
    color: '#fefefe',
    fontSize: 18
  },
  textStyle: {
    color: '#000000',
    fontSize: 18,
  },
  imageBackgroundStyle: {
    width: deviceWidth,
    height: deviceWidth / (deviceWidth / 60)
  },
  listItemStyle: {
    backgroundColor: '#F3F3F3'
  }
}
