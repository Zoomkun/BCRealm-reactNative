import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';
import {
    Tab,
    Tabs,
    Container,
} from 'native-base';
import CommonStyles from '../../css/commonStyle';
import NewsTab from './newsTab';
import TopicTab from './topicTab';
export default class Discover extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (<Text style={CommonStyles.title}>发现</Text>),
        // headerLeft: (<Image style={styles.headerLeft}>左边</Image>),
        // headerRight: (<Image style={styles.headerRight}>右边</Image>),
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        tabBarLabel: '发现',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../../images/detection.png')}
                style={[CommonStyles.icon, { tintColor: tintColor }]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerTintColor: '#fff',
    })

    render() {
        return (
            <Container>
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20
    }
});