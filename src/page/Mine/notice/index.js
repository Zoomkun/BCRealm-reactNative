import React, { Component } from "react";

import {
    Container,
    Body,
    Header,
    Button,
    Content,
    Icon,
} from 'native-base';
import {
    Text,
    FlatList,
} from 'react-native';

import styles from "./styles";
import CommonStyles from '../../../css/commonStyle'
import { MsgItem } from '../../../components';

const notices = [
    { notices: "宁夏红游戏", timestamp: 1533802501000 },
    { notices: "币家摇钱树", timestamp: 1533802501000 },
    { notices: "太空城市", timestamp: 1533802501000 },
    { notices: "区世界APP区世界APP区世界APP区世界APP区世界APP区世界APP区世界APP区世界APP", timestamp: 1533802501000 }
]

/**
 * 私信页面
 */
class Notice extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    static navigationOptions = {

        header: null
    };
    goBack = () => {
        this.props.navigation.goBack();
    }
    render() {
        const { navigate } = this.props.navigation;
        let items = notices;
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>私信</Text>
                    </Body>
                    <Button transparent />
                </Header>

                <Content>
                    {/* <MsgItem navigation={this.props.navigation}
                        left={<Button warning style={styles.iconstyle}>
                            <Icon name='ios-notifications' style={styles.space} />
                        </Button>}
                        onPress={() => this.props.navigation.navigate("SystemNotification")}
                        text={'你有新的消息ijasdijasiodjisaodjuis你有新的消息ijasdijasiodjisasoiduoaisudoi'}
                        item={{ timestamp: 1512799900236, }}
                    /> */}
                    <FlatList data={items}
                        enableEmptySections={true}
                        //refreshing={this.state.refreshing}
                        onEndReachedThreshold={10}
                        //onRefresh={() => this._loadData(true)}
                        onEndReached={() => this._loadData(false)}
                        keyExtractor={(item, key) => key}
                        renderItem={({ item, index }) => {
                            return <MsgItem
                                text={item.notices}
                                timestamp={item.timestamp}
                            />
                        }} />
                </Content>
            </Container >
        );
    }
}


export default Notice