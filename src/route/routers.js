
import { StackNavigator } from "react-navigation";
import MainPage from '../page/mainPage';
import PersonalInfo from '../page/Mine/personalInfo';
import SettingName from '../page/Mine/personalInfo/settingName';
import MinePage from '../page/Mine';
import Currency from '../page/Mine/currency';
import Wallet from '../page/Mine/wallet';
import Authenticate from '../page/Mine/authenticate';
import AboutUs from '../page/Mine/aboutUs';
import Notice from "../page/Mine/notice";
import SendTopic from '../page/Discover/topicTab/sendTopic';
import News from '../page/Discover/newsTab/news';
import Content from '../page/Discover/topicTab/content';
const routers = StackNavigator({
    Main: { screen: MainPage },
    PersonalInfo: { screen: PersonalInfo },
    SettingName: { screen: SettingName },
    MinePage: { screen: MinePage },
    Currency: { screen: Currency },
    Wallet: { screen: Wallet },
    Authenticate: { screen: Authenticate },
    AboutUs: { screen: AboutUs },
    Notice: { screen: Notice },
    SendTopic: { screen: SendTopic },
    News: { screen: News },
    Content: { screen: Content },
});


module.exports = routers;