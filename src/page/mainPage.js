import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Style
} from 'react-native';
import {TabNavigator} from "react-navigation";

import GamePage from './gamePage';
import CommunityPage from './communityPage';
import MinePage from './Mine/minePage';
import DiscoverPage from './discoverPage';


const mainPage = TabNavigator({
    Game: {
        screen: GamePage,
        navigationOptions: {
            //默认参数
        }
    },
    Community: {
        screen: CommunityPage,
        navigationOptions: {

        }
    }, Discover: {
        screen: DiscoverPage,
        navigationOptions: {

        }
    },
    Mine: {
        screen: MinePage,
        navigationOptions: {

        }
    },
}, {
        animationEnabled: true, // 切换页面时不显示动画
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false, // 是否左右滑动,如果有DrawerNavigator,最好设置为false避免手势冲突
        backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#FE6F06', // 文字和图片选中颜色
            inactiveTintColor: '#9f9f9f', // 文字和图片默认颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                height: 50
            },
            labelStyle: {
                fontSize: 12, // 文字大小,
                marginTop: 0,
            },
        },
    });
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20
    }
});
module.exports = mainPage;