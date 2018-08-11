
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  viewStyle: {
    backgroundColor: '#F3F3F3',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipsStyle: {

  },
  textStyle: {
    fontSize: 18,
    color: '#000000',
  },
  picker: {
    width: 100,
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
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  bodyStyle: {
    justifyContent: 'flex-start',
    marginLeft: 20
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
    height: 50,
    backgroundColor: '#ffffff',
  },
  lineStyle: {
    width: deviceWidth * 0.9,
    marginLeft: deviceWidth * 0.1 / 2,
    backgroundColor: '#F3F3F3',
    height: 3
  },
  gridStyle: {
    height: 10,
    width: deviceWidth,
  },
  colStyle: {
    justifyContent: 'center'
  },
}
