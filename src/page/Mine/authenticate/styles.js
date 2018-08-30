
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  viewStyle: {
    backgroundColor: '#F3F3F3',
    height: deviceWidth / 7.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: '#000000',
  },
  picker: {
    width: deviceWidth / 3.6,
  },
  button: {
    width: deviceWidth * 0.8,
    backgroundColor: "#FE6F06",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: '#ffffff'
  },
  row: {
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
    width: deviceWidth * 0.9,
    marginLeft: deviceWidth * 0.1 / 2,
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
