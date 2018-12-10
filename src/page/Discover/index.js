import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    Platform
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
import { find_top_bg } from '../../../images';
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

    render() {
        return (
            <Container>
                <ImageBackground
                    resizeMode={"cover"}
                    source={find_top_bg}
                    style={styles.imageBackGroundStyle}
                >
                    <Grid>
                        <Row style={Platform.OS !== 'android' ? styles.titleRowStyles : styles.titleRowStyle} >
                            <Body >
                                <Text style={styles.titleFontStyle}>发现</Text>
                            </Body>
                        </Row>

                        <Row style={Platform.OS !== 'android' ? styles.sessionStyles : styles.sessionStyle}>
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
                {this.state.pick == 0 ? < NewsTab  {...this.props} /> : <TopicTab {...this.props} />}
            </Container >
        )
    }
}