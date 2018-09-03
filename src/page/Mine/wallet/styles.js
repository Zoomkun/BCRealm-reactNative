
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  gridStyle: {
    height: 50,
  },
  colStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    backgroundColor: 'pink',
    width: 20,
    height: 20
  },
  container: {
    backgroundColor: '#ffffff'
  },
}
