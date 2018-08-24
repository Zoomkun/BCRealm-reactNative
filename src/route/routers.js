
import { StackNavigator } from "react-navigation";
import MainPage from '../page/mainPage';
import Login from '../page/Login';
import Registration from '../page/Login/registration';
import ServiceAgreement from '../page/Login/serviceAgreement';
import ForgetPassword from '../page/Login/forgetPassword';
import GameWeb from '../page/Game/gameWeb';
import PersonalInfo from '../page/Mine/personalInfo';
import MinePage from '../page/Mine';
import SettingName from '../page/Mine/personalInfo/settingName';
import Currency from '../page/Mine/currency';
import Wallet from '../page/Mine/wallet';
import Authenticate from '../page/Mine/authenticate';
import AboutUs from '../page/Mine/aboutUs';
import Notice from "../page/Mine/notice";
import SendTopic from '../page/Discover/topicTab/sendTopic';
import News from '../page/Discover/newsTab/news';
import Content from '../page/Discover/topicTab/content';
const routers = StackNavigator({
    Login: { screen: Login },
    Main: { screen: MainPage },
    Registration: { screen: Registration },
    ServiceAgreement: { screen: ServiceAgreement },
    ForgetPassword: { screen: ForgetPassword },
    GameWeb: { screen: GameWeb },
    PersonalInfo: { screen: PersonalInfo },
    MinePage: { screen: MinePage },
    SettingName: { screen: SettingName },
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