const React = require('react-native');
const { StyleSheet, Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  imageStyle: {
    width: deviceWidth,
    height: deviceWidth / (deviceWidth / 126)
  },
  textStyle: {
    color: 'white',
  },
  bodyStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    marginLeft: deviceWidth / (deviceWidth / 18),
    marginBottom: deviceWidth / (deviceWidth / 10),
    marginTop: deviceWidth / (deviceWidth / 10)
  },
  contentStyle: {
    marginTop: deviceWidth / (deviceWidth / 10)
  },
}