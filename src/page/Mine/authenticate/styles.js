
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  imageBackgroundStyle: {
    width: deviceWidth,
    height: deviceWidth / (deviceWidth / 171)
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
  inputStyle: {
    width: deviceWidth / (deviceWidth / 220),
    height: deviceWidth / (deviceWidth / 50),
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
  textStyle: {
    fontSize: 18,
    color: '#000000',
  },
  pickerStyle: {
    width: deviceWidth / 3.6,
  },
  buttonStyle: {
    width: deviceWidth * 0.8,
    backgroundColor: "#6649D5",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: '#ffffff'
  },
  rowStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: deviceWidth / 2.4,
  },
  bodyStyle: {
    justifyContent: 'flex-start',
    marginLeft: deviceWidth / 18
  },
  rightStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#ffffff'
  },
  listItemStyle: {
    height: deviceWidth / 7.2,
    backgroundColor: '#ffffff',
  },
  lineStyle: {
    width: deviceWidth / (deviceWidth / 220),
    backgroundColor: '#F3F3F3',
    height: 3
  },
  gridStyle: {
    height: deviceWidth / 36,
    width: deviceWidth,
  },
  colStyle: {
    justifyContent: 'center'
  },
}
