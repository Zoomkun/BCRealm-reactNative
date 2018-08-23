import React, {Component} from "react";
import {
    View,
    Text,
} from 'native-base';
import {
    FlatList
} from 'react-native';
//import styles from './styles';

import {InformationItem} from '../../../components';

/**
 * 信息
 */

const data = [
    {
        name: '区世界官方',
        time: '2018/8/12 08:12:00',
        msg: '2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode',
        image: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1192198377,2781673332&fm=58&w=150&h=150&img.JPEG',
        id: '123'
    }, {
        name: '区世界官方',
        time: '2018/8/12 08:12:00',
        msg: '2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode',
        image: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1192198377,2781673332&fm=58&w=150&h=150&img.JPEG',
        id: '123'
    }, {
        name: '区世界官方',
        time: '2018/8/12 08:12:00',
        msg: '2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode',
        image: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1192198377,2781673332&fm=58&w=150&h=150&img.JPEG',
        id: '123'
    }, {
        name: '区世界官方',
        time: '2018/8/12 08:12:00',
        msg: '2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode',
        image: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1192198377,2781673332&fm=58&w=150&h=150&img.JPEG',
        id: '123'
    }, {
        name: '区世界官方',
        time: '2018/8/12 08:12:00',
        msg: '2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode',
        image: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1192198377,2781673332&fm=58&w=150&h=150&img.JPEG',
        id: '123'
    }, {
        name: '区世界官方',
        time: '2018/8/12 08:12:00',
        msg: '2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode',
        image: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1192198377,2781673332&fm=58&w=150&h=150&img.JPEG',
        id: '123'
    }, {
        name: '区世界官方',
        time: '2018/8/12 08:12:00',
        msg: '2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode',
        image: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1192198377,2781673332&fm=58&w=150&h=150&img.JPEG',
        id: '123'
    }, {
        name: '区世界官方',
        time: '2018/8/12 08:12:00',
        msg: '2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode2018创新游戏颠覆传统testCode',
        image: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1192198377,2781673332&fm=58&w=150&h=150&img.JPEG',
        id: '123'
    },
]
export default class InformationTab extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    static navigationOptions = {
        header: null
    };

    render() {
        let items = data;
        return (
            <View>
                <FlatList data={items}
                          enableEmptySections={true}
                          onEndReachedThreshold={10}
                          keyExtractor={(item, key) => key}
                          renderItem={({item, index}) => {
                              return <InformationItem
                                  {...this.props}
                                  name={item.name}
                                  time={item.time}
                                  msg={item.msg}
                                  image={item.image}
                                  id={item.id}
                                  // onPress={() => this.props.navigation.navigate("News", {url: item.s})}
                              />
                          }}/>
            </View>
        );
    }
}

