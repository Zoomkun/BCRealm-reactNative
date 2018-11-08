const React = require('react-native');
const { StyleSheet, Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  backIconStyle: {
    color: '#ffffff'
  },
  imageStyle: {
    width: deviceWidth,
    height: deviceWidth / (deviceWidth / 164.2)
  },
  viewStyle: {
    height: 45,
    justifyContent: 'center'
  },
  currencyTextStyle: {
    marginTop: deviceWidth / (deviceWidth / 10),
    marginLeft: deviceWidth / (deviceWidth / 15),
    color: '#313442',
    fontSize: 16,
  },
  textStyle: {
    color: '#ffffff65',
    fontSize: 15
  },
  bodyStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    marginLeft: deviceWidth / (deviceWidth / 20),
    marginTop: deviceWidth / (deviceWidth / 5),
    color: '#ffffff',
    fontSize: 19,
  },
  contentStyle: {
    marginTop: deviceWidth / (deviceWidth / 10)
  },
}