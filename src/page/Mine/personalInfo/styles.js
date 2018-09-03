
const React = require('react-native');
const { Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  rightStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  listItemStyle: {
    backgroundColor: '#ffffff',
  },
  pickerStyle: {
    width: 100,
  },
}