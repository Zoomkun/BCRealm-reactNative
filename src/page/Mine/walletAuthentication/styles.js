
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  container: {
    backgroundColor: '#ffffff'
  },
  imageBackgroundStyle: {
    width: deviceWidth,
    height: deviceWidth / (deviceWidth / 165.9),
  },
  backIconStyle: {
    color: '#FFFFFF',
    fontSize: 28
  },
  titleStyle: {
    fontSize: 19,
    color: '#ffffff'
  },
  recordStyle: {
    color: '#ffffff',
    fontSize: 17,
  },
  tipsStyle: {
    fontSize: 13,
    color: '#714BD9'
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  describeStyle: {
    marginLeft: deviceWidth / (deviceWidth / 25),
    color: '#ffffff',
    fontSize: 19,
    marginBottom: deviceWidth / (deviceWidth / 8),
  },
  quantityStyle: {
    marginLeft: deviceWidth / (deviceWidth / 25),
    color: '#ffffff',
    fontSize: 15
  },
  tipsBackgroundStyle: {
    backgroundColor: '#EEEDFF',
    height: deviceWidth / (deviceWidth / 25),
    alignItems: 'center',
    justifyContent: 'center',
  },


  bgStyle: {
    height: deviceWidth / (deviceWidth / 105),
    marginTop: 30,
    marginLeft: 20,
  },
  packageStyle: {
    flexDirection: 'row',
    width: deviceWidth * 0.9,
    height: deviceWidth / (deviceWidth / 80),
    justifyContent: 'center'
  },
  inputStyle: {
    justifyContent: 'center',
    width: deviceWidth / (deviceWidth / 280),
  },
  buttonStyle: {
    width: deviceWidth / (deviceWidth / 80),
    height: deviceWidth / (deviceWidth / 35),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  gridStyle: {
    height: deviceWidth / 36,
    width: deviceWidth,
  },
  buttonTextStyle: {
    color: '#ffffff'
  },
  lineStyle: {
    width: deviceWidth / (deviceWidth / 320),
    backgroundColor: '#F3F3F3',
    height: 3,
  },

  addressStyle: {
    alignSelf: 'center',
    width: deviceWidth / (deviceWidth / 80),
    height: deviceWidth / (deviceWidth / 35),
    marginLeft: 180
  }
}
