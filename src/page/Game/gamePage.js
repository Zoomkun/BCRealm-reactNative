import React, { Component } from 'react';
import {
    Text,
    View,
    // Dimensions,
    Image,
    FlatList
} from 'react-native';
import { Content } from 'native-base';
import Carousel from 'react-native-looped-carousel'
import CommonStyles from "../../css/commonStyle";
import { CardItems } from '../../components';
import styles from "./styles";
import Http from '../../api/Api';

const m = [
    { title: "画风精致|操作易上手", url: require('../../../images/banner1.jpg'), currency: "BTC", quantity: 10086, gameUrl: 'http://dbex.bcrealm.com/' },
    { title: "画风精致|操作易上手", url: require('../../../images/banner1.jpg'), currency: "DBEX", quantity: 123, gameUrl: 'http://dbex.bcrealm.com/' },
    { title: "画风精致|操作易上手", url: require('../../../images/banner1.jpg'), currency: "NXH", quantity: 789, gameUrl: 'http://nxh.bcrealm.com/' },
    { title: "画风精致|操作易上手", url: require('../../../images/banner1.jpg'), currency: "BBM", quantity: 5656, gameUrl: 'http://bbm.bcrealm.com/' },
]

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
        //header: null,
        headerTitle: (<Text style={CommonStyles.title}>游戏</Text>),
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
        this._getGameList();
        this._getBannerList();
    }

    render() {
        let items = this.state.data;
        let data = this.state.bannerData;
        console.log(this.state.data)
        return (
            <Content>
                <Carousel style={styles.wrapper} autoplay={true} bullets={true} >
                    {data.map((item, index) => (
                        <View style={styles.slide} key={index}>
                            <Image style={{ flex: 1, resizeMode: Image.resizeMode.contain }} source={{}} />
                        </View>
                    ))}
                    <View style={styles.slide}>
                        <Image style={{ flex: 1, resizeMode: Image.resizeMode.contain }} source={require('../../../images/banner1.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={{ flex: 1, resizeMode: Image.resizeMode.contain }} source={require('../../../images/banner2.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={{ flex: 1, resizeMode: Image.resizeMode.contain }} source={require('../../../images/banner3.jpg')} />
                    </View>
                </Carousel>
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
            </Content>

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
                console.log(self.state.data)
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

}

