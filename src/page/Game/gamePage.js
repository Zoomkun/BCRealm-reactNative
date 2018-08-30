import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import { Content, Container } from 'native-base';
import Carousel from 'react-native-looped-carousel'
import CommonStyles from "../../css/commonStyle";
import { CardItems, ThemeHeader } from '../../components';
import styles from "./styles";
import Http from '../../api/Api';

/**
 * 主页一:游戏
 */
export default class GamePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            bannerData: []
        }

    }
    static navigationOptions = {
        header: null,
        //headerTitle: (<Text style={CommonStyles.title}>游戏</Text>),
        tabBarLabel: '游戏',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={
                    require('../../../images/game.png')
                }
                style={[CommonStyles.icon, { tintColor: tintColor }]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerStyle: {
            "backgroundColor": "#FE6F06",
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
    };

    componentDidMount() {
        this._getBannerList();
        this._getGameList();
    }

    render() {
        let items = this.state.data;
        let bannerData = this.state.bannerData;
        return (
            <Container>
                <ThemeHeader title={"游戏"} />
                <Content>
                    {
                        bannerData.length != 0 &&
                        <Carousel style={styles.wrapper} autoplay={true} bullets={true}>
                            {
                                bannerData.map((item, index) => (
                                    <Image style={styles.imageStyle}
                                        source={{ uri: item.bannerUrl }} key={index} />
                                ))
                            }
                            {/* <Image style={{ flex: 1, resizeMode: Image.resizeMode.contain }}
                            source={{ uri: 'http://bcr-app-oss-001.oss-cn-shenzhen.aliyuncs.com/game/Ky5d8wthSA.jpg' }} />
                        <Image style={{ flex: 1, resizeMode: Image.resizeMode.contain }}
                            source={{ uri: 'http://bcr-app-oss-001.oss-cn-shenzhen.aliyuncs.com/game/Ky5d8wthSA.jpg' }} />
                        <Image style={{ flex: 1, resizeMode: Image.resizeMode.contain }}
                            source={{ uri: 'http://bcr-app-oss-001.oss-cn-shenzhen.aliyuncs.com/game/Ky5d8wthSA.jpg' }} />
                        <Image style={{ flex: 1, resizeMode: Image.resizeMode.contain }}
                            source={{ uri: 'http://bcr-app-oss-001.oss-cn-shenzhen.aliyuncs.com/game/Ky5d8wthSA.jpg' }} /> */}
                        </Carousel>
                    }
                    <FlatList data={items}
                        enableEmptySections={true}
                        //refreshing={this.state.refreshing}
                        onEndReachedThreshold={10}
                        // onRefresh={() => this._loadData(true)}
                        //onEndReached={() => this._loadData(false)}
                        keyExtractor={(item, key) => key}
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
                self.setState({
                    bannerData: data
                })
            }
        )
    }

}

