import React, {Component} from "react";
import {
    View,
    Text,
    Left,
    Container,
    Content,
} from 'native-base';
import {
    FlatList
} from 'react-native';
import {CommunityItem} from '../../../components';
//import styles from './styles';
/**
 * 社群
 */

const data = [
    {
        chatGroupName: "NXH社群",
        icon: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1192198377,2781673332&fm=58&w=150&h=150&img.JPEG',
        chatGroupNo: '',
        announcement: '这个是群公告',
        id: 123,
    },
]
export default class CommunityTab extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    static navigationOptions = {
        header: null
    };

    _goToCommunityInfo(id){
        this.props.navigation.navigate("CommunityInfo", {id: id})
    }

    render() {
        let items = data;
        return (
            <Container>
                <Content padder>
                    <Text style={styles.text}>已加入</Text>
                    <FlatList
                        data={items}
                        keyExtractor={(item, key) => key}
                        renderItem={({item, index}) => {
                            return <CommunityItem
                                {...this.props}
                                navigation={this.props.navigation}
                                chatGroupName={item.chatGroupName}
                                icon={item.icon}
                                chatGroupNo={item.chatGroupNo}
                                announcement={item.announcement}
                                id={item.id}
                                onPress={()=>this._goToCommunityInfo(item.id)}
                            />
                            }
                        }>
                    </FlatList>
                    <Text style={styles.text}>未加入</Text>
                    <FlatList
                        data={items}
                        keyExtractor={(item, key) => key}
                        renderItem={({item, index}) => {
                            return <CommunityItem
                                {...this.props}
                                chatGroupName={item.chatGroupName}
                                icon={item.icon}
                                chatGroupNo={item.chatGroupNo}
                                announcement={item.announcement}
                                id={item.id}
                                onPress={()=>this._goToCommunityInfo(item.id)}
                            />
                            }
                        }>
                    </FlatList>
                </Content>
            </Container>
        );
    }
}

const styles = {
    text: {
        marginTop:20,
    },
};
