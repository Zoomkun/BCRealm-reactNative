
import { StackNavigator } from "react-navigation";
import MainPage from '../page/mainPage';
import PersonalInfo from '../page/Mine/personalInfo';
import SettingName from '../page/Mine/personalInfo/settingName';

const routers = StackNavigator({
    Main: { screen: MainPage },
    PersonalInfo: { screen: PersonalInfo },
    SettingName: { screen: SettingName },
});


module.exports = routers;