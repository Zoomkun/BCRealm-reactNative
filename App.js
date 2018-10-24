import { StackNavigator } from "react-navigation";
import MainPage from './src/page/mainPage';
import StartPage from './src/page/startPage';
import Login from './src/page/Login';
import Registration from './src/page/Login/registration';
import ServiceAgreement from './src/page/Login/serviceAgreement';
import ForgetPassword from './src/page/Login/forgetPassword';
import GameWeb from './src/page/Game/gameWeb';
import PersonalInfo from './src/page/Mine/personalInfo';
import MinePage from './src/page/Mine';
import Assets from './src/page/Mine/assets';
import SettingName from './src/page/Mine/personalInfo/settingName';
import Currency from './src/page/Mine/assets/currency';
import Wallet from './src/page/Mine/wallet';
import Record from './src/page/Mine/assets/currency/record';
import Authenticate from './src/page/Mine/authenticate';
import AboutUs from './src/page/Mine/aboutUs';
import CommunityInfo from './src/page/Community/communityInfo';
import Notice from "./src/page/Mine/notice";
import NoticeContent from "./src/page/Mine/notice/noticeContent"
import SendTopic from './src/page/Discover/topicTab/sendTopic';
import News from './src/page/Discover/newsTab/news';
import Content from './src/page/Discover/topicTab/content';
import Chat from './src/page/Community/chat';

const routers = StackNavigator({
    StartPage: { screen: StartPage },
    Login: { screen: Login },
    Main: { screen: MainPage },
    Registration: { screen: Registration },
    ServiceAgreement: { screen: ServiceAgreement },
    ForgetPassword: { screen: ForgetPassword },
    CommunityInfo: { screen: CommunityInfo },
    GameWeb: { screen: GameWeb },
    PersonalInfo: { screen: PersonalInfo },
    MinePage: { screen: MinePage },
    Assets: { screen: Assets },
    SettingName: { screen: SettingName },
    Currency: { screen: Currency },
    Wallet: { screen: Wallet },
    Record: { screen: Record },
    Authenticate: { screen: Authenticate },
    AboutUs: { screen: AboutUs },
    Notice: { screen: Notice },
    NoticeContent: { screen: NoticeContent },
    SendTopic: { screen: SendTopic },
    News: { screen: News },
    Content: { screen: Content },
    Chat: { screen: Chat },
});

export default routers;