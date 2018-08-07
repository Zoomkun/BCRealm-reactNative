
import {StackNavigator} from "react-navigation";
import MainPage from '../page/Mine/mainPage';


const routers = StackNavigator({
    Main: {
        screen: MainPage,
    },

});
module.exports = routers;