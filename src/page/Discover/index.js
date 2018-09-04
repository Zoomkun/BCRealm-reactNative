import React, { Component } from 'react';
import {
    Image,
} from 'react-native';
import {
    Tab,
    Tabs,
    Container,
} from 'native-base';
import CommonStyles from '../../css/commonStyle';
import { ThemeHeader } from '../../components';
import NewsTab from './newsTab';
import TopicTab from './topicTab';

/**
 * 主页三:发现
 */
export default class Discover extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: null,
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        tabBarLabel: '发现',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../../images/detection.png')}
                style={[CommonStyles.icon, { tintColor: tintColor }]}
            />
        ),
        headerTintColor: '#fff',
    })

    render() {
        return (
            <Container>
                <ThemeHeader title={"话题"} />
                <Tabs tabBarUnderlineStyle={CommonStyles.tabsStyle}>
                    <Tab heading="新闻" tabStyle={CommonStyles.tabStyle}
                        activeTabStyle={CommonStyles.tabActiveTabStyle}
                        activeTextStyle={CommonStyles.tabActiveTextStyle}
                        textStyle={CommonStyles.tabtextStyle}
                    >
                        <NewsTab navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading="话题" tabStyle={CommonStyles.tabStyle}
                        activeTabStyle={CommonStyles.tabActiveTabStyle}
                        activeTextStyle={CommonStyles.tabActiveTextStyle}
                        textStyle={CommonStyles.tabtextStyle}
                    >
                        <TopicTab navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}