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
    marginLeft: deviceWidth / (deviceWidth / 20),
    marginTop: deviceWidth / (deviceWidth / 5),
    color: '#313442',
    fontSize: 16,
  },
  contentStyle: {
    marginTop: deviceWidth / (deviceWidth / 10)
  },
}