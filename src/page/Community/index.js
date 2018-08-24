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
import CommonStyles from '../../css/commonStyle';
import InformationTab from './informationTab';
import CommunityTab from './communityTab';

export default class CommunityPage extends Component {


    static navigationOptions = ({ navigation }) => ({
        headerTitle: (<Text style={CommonStyles.title}>社区</Text>),
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        tabBarLabel: '社区',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../../images/community.png')}
                style={[CommonStyles.icon, { tintColor: tintColor }]}
            />
        ),
        headerTintColor: '#fff',

    })

    render() {
        return (
            <Container>
                <Tabs tabBarUnderlineStyle={CommonStyles.tabsStyle}>
                    <Tab heading="信息" tabStyle={CommonStyles.tabStyle}
                        activeTabStyle={CommonStyles.tabActiveTabStyle}
                        activeTextStyle={CommonStyles.tabActiveTextStyle}
                        textStyle={CommonStyles.tabtextStyle}
                    >
                        <InformationTab navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading="社群" tabStyle={CommonStyles.tabStyle}
                        activeTabStyle={CommonStyles.tabActiveTabStyle}
                        activeTextStyle={CommonStyles.tabActiveTextStyle}
                        textStyle={CommonStyles.tabtextStyle}
                    >
                        <CommunityTab navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
