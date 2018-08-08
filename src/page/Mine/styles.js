
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {

  title: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30
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