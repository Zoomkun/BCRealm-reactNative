
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {

  title: {
    fontSize: 22,
    color: '#fff'
  },
  rightStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textBodyStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  goBackIcon: {
    width: 20,
    height: 20,
    color: 'pink'
  },
  iconstyle: {
    color: '#808080',
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: deviceWidth * 0.8,
    backgroundColor: "#CC0000",
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  listItemStyle: {
    backgroundColor: '#ffffff',
  },
  buttonTextStyle: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
