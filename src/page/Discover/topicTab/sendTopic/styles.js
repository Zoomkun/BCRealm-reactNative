
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  textStyle: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  itemstyle: {
    width: deviceWidth / 1.1,
    marginTop: 10,
    marginLeft: (deviceWidth - (deviceWidth / 1.1)) / 2,
  },
  carditem: {
    width: deviceWidth / 1.1,
    height: deviceWidth * 1.2,
    marginTop: 10,
    marginLeft: (deviceWidth - (deviceWidth / 1.1)) / 2,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
}
