import { AppRegistry,Platform } from 'react-native';
import App from './App';
import {
    isFirstTime,
    isRolledBack,
    packageVersion,
    currentVersion,
    checkUpdate,
    downloadUpdate,
    switchVersion,
    switchVersionLater,
    markSuccess,
} from 'react-native-update';

import _updateConfig from './update.json';
console.log(_updateConfig)
const {appKey} = _updateConfig[Platform.OS];
import { YellowBox } from 'react-native';
import {Component} from "react";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class MyProject extends Component {
    componentWillMount(){
        if (isFirstTime) {
            Alert.alert('提示', '这是当前版本第一次启动,是否要模拟启动失败?失败将回滚到上一版本', [
                {text: '是', onPress: ()=>{throw new Error('模拟启动失败,请重启应用')}},
                {text: '否', onPress: ()=>{markSuccess()}},
            ]);
        } else if (isRolledBack) {
            Alert.alert('提示', '刚刚更新失败了,版本被回滚.');
        }
    }
    doUpdate = info => {
        downloadUpdate(info).then(hash => {
            Alert.alert('提示', '下载完毕,是否重启应用?', [
                {text: '是', onPress: ()=>{switchVersion(hash);}},
                {text: '否',},
                {text: '下次启动时', onPress: ()=>{switchVersionLater(hash);}},
            ]);
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };
    checkUpdate = () => {
        checkUpdate(appKey).then(info => {
            if (info.expired) {
                Alert.alert('提示', '您的应用版本已更新,请前往应用商店下载新的版本', [
                    {text: '确定', onPress: ()=>{info.downloadUrl && Linking.openURL(info.downloadUrl)}},
                ]);
            } else if (info.upToDate) {
                Alert.alert('提示', '您的应用版本已是最新.');
            } else {
                Alert.alert('提示', '检查到新的版本'+info.name+',是否下载?\n'+ info.description, [
                    {text: '是', onPress: ()=>{this.doUpdate(info)}},
                    {text: '否',},
                ]);
            }
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    欢迎使用热更新服务
                </Text>
                <Text style={styles.instructions}>
                    这是版本一 {'\n'}
                    当前包版本号: {packageVersion}{'\n'}
                    当前版本Hash: {currentVersion||'(空)'}{'\n'}
                </Text>
                <TouchableOpacity onPress={this.checkUpdate}>
                    <Text style={styles.instructions}>
                        点击这里检查更新
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

AppRegistry.registerComponent('BCRealmApp', () => App);
