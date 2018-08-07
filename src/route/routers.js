
import {StackNavigator} from "react-navigation";
import MainPage from '../page/Mine/MinePage';


const routers = StackNavigator({
    Main: {
        screen: MainPage,
    },

});
module.exports = routers;