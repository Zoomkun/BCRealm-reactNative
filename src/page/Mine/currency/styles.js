
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  headerStyle: {
    backgroundColor: "#FE6F06",
    alignItems: "center",
    flexDirection: 'row',
  },
  gridStyle: {
    height: 50,
  },
  colStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    backgroundColor: 'pink',
    width: 20,
    height: 20
  },
  container: {
    backgroundColor: '#ffffff'
  },
  titleBodyStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
}