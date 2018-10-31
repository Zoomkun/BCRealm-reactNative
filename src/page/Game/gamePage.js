import React, { Component } from 'react';
import {
    Image,
    FlatList,
    View,
} from 'react-native';
import { Content, Container, Icon, Button } from 'native-base';
import Swiper from 'react-native-swiper';
import CommonStyles from "../../css/commonStyle";
import { CardItems, ThemeHeader } from '../../components';
import styles from "./styles";
import Http from '../../api/Api';
import Getui from 'react-native-getui'
/**
 * 主页一:游戏
 */

export default class GamePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            bannerData: [],
            clientId: '',
            version: '',
            status: ''
        }

    }
    static navigationOptions = {
        header: null,
        //headerTitle: (<Text style={CommonStyles.title}>游戏</Text>),
        tabBarLabel: '游戏',
        tabBarIcon: ({ tintColor }) => (
            < Icon name={"gamepad-variant"} type={"MaterialCommunityIcons"} fontSize={5} style={CommonStyles.iconStyle} />
        ),
        headerStyle: {
            "backgroundColor": "#714BD9",
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
    };

    componentWillMount() {
        this._getBannerList();
        this._getGameList();
        // this.updateComponentInfo();
    }

    render() {
        let items = this.state.data;
        return (
            <Container>
                <ThemeHeader title={"游戏"} />
                <Content>
                    <View style={styles.wrapper}>
                        <Swiper
                            horizontal={true} //水平方向
                            isLoop={true}
                            autoplay={true}   //自动轮播
                            autoplayTimeout={4}//隔几秒播放
                            dot={<View style={styles.dotStyle} />}
                            activeDot={<View style={styles.activeDotStyle} />}
                        >
                            {
                                this.state.bannerData.map((item, index) => (
                                    <Button key={index}
                                        onPress={() => this.props.navigation.navigate("GameWeb", { data: item })}
                                        style={styles.buttonStyle}>
                                        <Image style={styles.imageStyle}
                                            source={{ uri: item.bannerUrl }}
                                        />
                                    </Button>
                                ))
                            }
                        </Swiper>
                    </View>

                    <FlatList data={items}
                        enableEmptySections={true}
                        onEndReachedThreshold={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return <CardItems
                                {...this.props}
                                gameFeatureDTO={item.gameFeatureDTO}
                                url={item.gameImgUrl}
                                currency={item.gameFeatureDTO[0].featureName}
                                quantity={item.gameFeatureDTO[1].featureName}
                                onPress={() => this.props.navigation.navigate("GameWeb", { data: item })}
                            />
                        }} />
                </Content >
            </Container>
        )
    }

    _getGameList() {
        let self = this
        Http.getRequest(
            'appUrl',
            'gameList',
            '',
            function (data) {
                console.log(data)
                self.setState({
                    data: data.list
                })
            }
        )
    }

    _getBannerList() {
        let self = this
        Http.getRequest(
            'appUrl',
            'banner',
            '',
            function (data) {
                console.log(data)
                self.setState({
                    bannerData: data
                })
            }
        )
    }

    updateComponentInfo() {
        Getui.clientId((param) => {
            this.setState({ 'clientId': param })
            console.log(param)
        })

        Getui.version((param) => {
            this.setState({ 'version': param })
        })

        Getui.status((param) => {
            let status = ''
            switch (param) {
                case '0':
                    status = '正在启动'
                    break;
                case '1':
                    status = '启动'
                    break;
                case '2':
                    status = '停止'
                    break;
            }
            this.setState({ 'status': status })
        })
    }
}