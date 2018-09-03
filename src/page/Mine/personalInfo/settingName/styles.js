
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  itemstyle: {
    width: deviceWidth / 1.1,
    marginTop: 10,
    marginLeft: (deviceWidth - (deviceWidth / 1.1)) / 2,
  },
  container: {
    backgroundColor: '#ffffff'
  },
}
