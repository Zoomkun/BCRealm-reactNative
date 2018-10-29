import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
} from 'react-native';
import {
    Container,
    Icon,
    Body,
    Left,
    Right,
    View,
} from 'native-base';
import CommonStyles from '../../css/commonStyle';
import { Grid, Row, Col } from 'react-native-easy-grid';
import NewsTab from './newsTab';
import TopicTab from './topicTab';
import { bg } from '../../../images';
import styles from './styles';

import { NewsItem } from '../../components';

/**
 * 主页三:发现
 */
export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pick: 0,
        }
    }

    static navigationOptions = ({ navigation }) => ({
        header: null,
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        tabBarLabel: '发现',
        tabBarIcon: ({ tintColor }) => (
            <Icon name={"news"} type={"Entypo"} fontSize={5} style={CommonStyles.iconStyle} />
        ),
    })

    data = [
        {
            uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540795651595&di=85478ff5860cdc47627714b0c25b891a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171201%2F13fbc2e53a2949ce85dd5a169d8e5a71.jpeg",
            title: "震惊某电竞选手2017年为了进决赛竟然对队友做了这件事", star: 233, read: 366
        },
        {
            uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540795651595&di=85478ff5860cdc47627714b0c25b891a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171201%2F13fbc2e53a2949ce85dd5a169d8e5a71.jpeg",
            title: "震惊某电竞选手2017年为了进决赛竟然对队友做了这件事", star: 233, read: 366
        },
        {
            uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540795651595&di=85478ff5860cdc47627714b0c25b891a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171201%2F13fbc2e53a2949ce85dd5a169d8e5a71.jpeg",
            title: "震惊某电竞选手2017年为了进决赛竟然对队友做了这件事", star: 233, read: 366
        },
        {
            uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540795651595&di=85478ff5860cdc47627714b0c25b891a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171201%2F13fbc2e53a2949ce85dd5a169d8e5a71.jpeg",
            title: "震惊某电竞选手2017年为了进决赛竟然对队友做了这件事", star: 233, read: 366
        },
        {
            uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540795651595&di=85478ff5860cdc47627714b0c25b891a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171201%2F13fbc2e53a2949ce85dd5a169d8e5a71.jpeg",
            title: "震惊某电竞选手2017年为了进决赛竟然对队友做了这件事", star: 233, read: 366
        },
    ]

    render() {
        return (
            <Container>
                <ImageBackground
                    resizeMode={"contain"}
                    source={bg}
                    style={styles.imageBackGroundStyle}
                >
                    {/* <Tabs tabBarUnderlineStyle={CommonStyles.tabsStyle}>
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
                    </Tabs> */}
                    <Grid>
                        <Row style={{ height: 30 }}>
                            <Body >
                                <Text style={styles.titleStyle}>发现</Text>
                            </Body>
                        </Row>

                        <Row style={{ height: 50, }}>
                            <Left />
                            <Body style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around'
                            }}>
                                <TouchableOpacity onPress={() => { this.setState({ pick: 0 }) }}>
                                    <Text style={this.state.pick == 0 ? styles.tabActiveStyle : styles.tabStyle}>新闻</Text>
                                </TouchableOpacity>
                                <View style={{ height: 15, width: 2, backgroundColor: '#ffffff' }} />
                                <TouchableOpacity onPress={() => { this.setState({ pick: 1 }) }}>
                                    <Text style={this.state.pick == 1 ? styles.tabActiveStyle : styles.tabStyle}>评级</Text>
                                </TouchableOpacity >
                            </Body>
                            <Right />
                        </Row>
                    </Grid>
                </ImageBackground>
                {this.state.pick == 0 ? < NewsTab /> : <TopicTab />}
            </Container >
        )
    }
}