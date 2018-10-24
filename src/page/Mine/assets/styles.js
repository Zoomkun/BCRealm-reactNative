const React = require('react-native');
const { StyleSheet, Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  imageStyle: {
    width: deviceWidth,
    height: deviceWidth / (deviceWidth / 126)
  },
  viewStyle: {
    backgroundColor: '#F3F3F3'
  },
  textStyle: {
    color: 'white',
    fontSize: 15
  },
  bodyStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    color: '#313442',
    fontSize: 16,
    marginLeft: deviceWidth / (deviceWidth / 18),
    marginBottom: deviceWidth / (deviceWidth / 10),
    marginTop: deviceWidth / (deviceWidth / 10)
  },
  contentStyle: {
    marginTop: deviceWidth / (deviceWidth / 10)
  },
}