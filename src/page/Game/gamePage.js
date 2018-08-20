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

const m = [
    { title: "画风精致|操作易上手", url: require('../../../images/banner1.jpg'), currency: "BTC", quantity: 10086, game: 'http://dbex.bcrealm.com/' },
    { title: "画风精致|操作易上手", url: require('../../../images/banner1.jpg'), currency: "DBEX", quantity: 123, game: 'http://dbex.bcrealm.com/' },
    { title: "画风精致|操作易上手", url: require('../../../images/banner1.jpg'), currency: "NXH", quantity: 789, game: 'http://nxh.bcrealm.com/' },
    { title: "画风精致|操作易上手", url: require('../../../images/banner1.jpg'), currency: "BBM", quantity: 5656, game: 'http://bbm.bcrealm.com/' },
]

/**
 * 主页一:游戏
 */
export default class GamePage extends Component {

    static navigationOptions = {
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

    render() {
        let items = m;
        return (
            <Content>
                <Carousel style={styles.wrapper} autoplay={true} bullets={true}>
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
                            title={item.title}
                            url={item.url}
                            currency={item.currency}
                            quantity={item.quantity}
                            onPress={() => this.props.navigation.navigate("GameWeb", { data: item })}
                        />
                    }} />
                {/* <Card>
                    <CardItem cardBody>
                        <Image source={require('../../../images/banner1.jpg')} style={styles.cardImageStyle} />
                    </CardItem>
                    <CardItem style={styles.cardBodStyle}>
                        <Left>
                            <Text style={styles.currencyTextStyle}>BBM</Text>
                            <Text style={styles.quantityStyle}>0</Text>
                        </Left>
                    </CardItem>
                    <CardItem style={styles.caddBottomStyle}>
                        <View style={styles.viewStyle}>
                            <Body>
                                <Button transparent>
                                    <Text>画风精致|操作简单易上手</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Button style={styles.buttonStyle}>
                                    <Text style={styles.buttonTextStyle}>进入游戏</Text>
                                </Button>
                            </Right>
                        </View>
                    </CardItem>
                </Card> */}
            </Content>

        )
    }
}

