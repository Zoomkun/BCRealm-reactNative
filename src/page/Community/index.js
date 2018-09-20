import React, {Component} from 'react';
import {
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import {
    Tab,
    Tabs,
    Icon,
    View,
    Container,
    Icon
} from 'native-base';
import CommonStyles from '../../css/commonStyle';
import InformationTab from './informationTab';
import CommunityTab from './communityTab';
import {ThemeHeader} from '../../components';

export default class CommunityPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            plugIng: false
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

    _plugToggle() {
        this.state.plugIng === true
            ?
            this.setState({
                plugIng: false
            })
            :
            this.setState({
                plugIng: true
            })
    }

//qrcode FontAwesome
    render() {
        return (
            <Container onPress={() => {
                this._plugToggle()
            }}>
                <ThemeHeader
                    title={"社区"}
                    buttonIconName={'dots-horizontal'}
                    buttonIconType={'MaterialCommunityIcons'}
                    onRightPress={() => {
                        this._plugToggle()
                    }}
                />
                {
                    this.state.plugIng === true &&
                    <TouchableOpacity onPress={() => {
                        this._plugToggle()
                    }} style={{
                        position: 'absolute',
                        top: 55,
                        padding: 10,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        right: 10,
                        zIndex: 99
                    }}>
                        <View
                            style={{
                                flexWrap: 'nowrap',
                                flexDirection: 'row',
                            }}
                        >
                            <Icon style={{color: '#fff', fontSize: 22,}} name={'qrcode'} type={'FontAwesome'}></Icon>
                            <Text style={{color: '#fff', paddingLeft: 10, fontSize: 15}}>扫描</Text>

                        </View>
                    </TouchableOpacity>

                }
                <Tabs tabBarUnderlineStyle={CommonStyles.tabsStyle}>
                    <Tab heading="信息" tabStyle={CommonStyles.tabStyle}
                         activeTabStyle={CommonStyles.tabActiveTabStyle}
                         activeTextStyle={CommonStyles.tabActiveTextStyle}
                         textStyle={CommonStyles.tabtextStyle}
                    >
                        <InformationTab navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="社群" tabStyle={CommonStyles.tabStyle}
                         activeTabStyle={CommonStyles.tabActiveTabStyle}
                         activeTextStyle={CommonStyles.tabActiveTextStyle}
                         textStyle={CommonStyles.tabtextStyle}
                    >
                        <CommunityTab navigation={this.props.navigation}/>
                    </Tab>
                </Tabs>
            </Container>
        )
            ;
    }
}
