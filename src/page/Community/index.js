import React, {Component} from 'react';
import {
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import {
    Tab,
    Tabs,
    Icon,
    View,
    Left,
    Right,
    Container,
    Body,
} from 'native-base';
import CommonStyles from '../../css/commonStyle';
import InformationTab from './informationTab';
import CommunityTab from './communityTab';
import {ThemeHeader} from '../../components';
import {find_top_bg} from "../../../images";
import styles from "../Discover/styles";

export default class CommunityPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            plugIng: false,
            pick:0
        }
    }

    static navigationOptions = ({navigation}) => ({
        header: null,
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        tabBarLabel: '社区',
        tabBarIcon: ({ tintColor }) => (
            <Icon name={"message-text-outline"} type={"MaterialCommunityIcons"}
                fontSize={5} style={CommonStyles.iconStyle} />
        ),
        headerTintColor: '#fff',
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
                        <Row style={styles.titleRowStyle}>
                            <Body >
                            <Text style={styles.titleFontStyle}>社区</Text>
                            </Body>
                        </Row>

                        <Row style={styles.sessionStyle}>
                            <Left />
                            <Body style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around'
                            }}>
                            <TouchableOpacity onPress={() => { this.setState({ pick: 0 }) }}>
                                <Text style={this.state.pick == 0 ? [styles.tabActiveStyle ,styles.tabActiveBorderStyle] : styles.tabStyle}>消息</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.setState({ pick: 1 }) }}>
                                <Text style={this.state.pick == 1 ? [styles.tabActiveStyle,styles.tabActiveBorderStyle] : styles.tabStyle}>社群</Text>
                            </TouchableOpacity >
                            </Body>
                            <Right />
                        </Row>
                    </Grid>
                </ImageBackground>
                {this.state.pick == 0 ? < InformationTab navigation={this.props.navigation}/> : <CommunityTab navigation={this.props.navigation}/>}
            </Container>
        )
    }
}
