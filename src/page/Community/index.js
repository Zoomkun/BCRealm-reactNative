import React, { Component } from 'react';
import {
    Text,
    Image,
} from 'react-native';
import {
    Tab,
    Tabs,
    Container,
} from 'native-base';

//import { NavigationActions } from 'react-navigation';
import styles from "./styles";
import CommonStyles from '../../css/commonStyle';
import InformationTab from './informationTab';
import CommunityTab from './communityTab';

export default class CommunityPage extends Component {


    static navigationOptions = ({ navigation }) => ({
        headerTitle: (<Text style={CommonStyles.title}>社区</Text>),
        // headerLeft: (<Image style={styles.headerLeft}>左边</Image>),
        // headerRight: (<Image style={styles.headerRight}>右边</Image>),
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        tabBarLabel: '社区',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../../images/community.png')}
                style={[CommonStyles.icon, { tintColor: tintColor }]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerTintColor: '#fff',

    })

    // goToDetail() {
    //     const { dispatch } = this.props.navigation;
    //     const resetAction = NavigationActions.reset({
    //         index: 0,//指定显示数组内的路由
    //         actions: [
    //             NavigationActions.navigate({ routeName: 'Detail', params: { user: 'xiongtm' } }),
    //             //NavigationActions.navigate({ routeName: 'others',params:{user: 'xiongtm'}}),
    //         ]
    //     });
    //     dispatch(resetAction);
    // }

    render() {
        return (
            <Container>
                <Tabs tabBarUnderlineStyle={CommonStyles.tabsStyle}>
                    <Tab heading="信息" tabStyle={CommonStyles.tabStyle}
                        activeTabStyle={CommonStyles.tabActiveTabStyle}
                        activeTextStyle={CommonStyles.tabActiveTextStyle}
                        textStyle={CommonStyles.tabtextStyle}
                    >
                        <InformationTab />
                    </Tab>
                    <Tab heading="社群" tabStyle={CommonStyles.tabStyle}
                        activeTabStyle={CommonStyles.tabActiveTabStyle}
                        activeTextStyle={CommonStyles.tabActiveTextStyle}
                        textStyle={CommonStyles.tabtextStyle}
                    >
                        <CommunityTab />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
