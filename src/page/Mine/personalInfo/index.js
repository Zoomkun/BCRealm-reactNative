import { FlatList } from 'react-native'
import React, { Component } from "react";

import {
    Container,
    Content,
    Body,
    Left,
    Right,
    List,
    ListItem,
    Icon,
    Thumbnail,
    Button,
    Header,
    Toast,
} from 'native-base';
import {
    Text,
    View,
    Image,
    Picker,
} from 'react-native';

import styles from "./styles";
import CommonStyles from '../../../css/commonStyle'
import ImagePicker from 'react-native-image-picker';
import constants from '../../constants';
const me = [
    {
        title: "头像",
        id: "0118",
        posters: { thumbnail: "http://img5.imgtn.bdimg.com/it/u=2716432665,3069906192&fm=11&gp=0.jpg" },
        icon: '../../../..s/images/goIn.png',
        uri: 'PersonalInfo',
        bg: true
    }
];
/**
 * 个人信息页面
 */
class PersonalInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // avatarSource: null,
            //videoSource: null
            selected: ' ',
        }
    }
    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        var e = me[0];
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>个人信息</Text>
                    </Body>
                    <Button transparent />
                </Header>

                <List>
                    <ListItem itemDivider={e.bg} style={{ height: 100, justifyContent: 'center', backgroundColor: '#ffffff' }} button onPress={this.selectPhotoTapped.bind(this)}>

                        <Text>{e.title}</Text>
                        <Body />
                        <Right style={styles.rightStyle} >
                            {/* <Thumbnail source={{ uri: "http://g.hiphotos.baidu.com/zhidao/pic/item/203fb80e7bec54e79059f800ba389b504fc26a73.jpg" }} /> */}
                            <Thumbnail source={constants.avatar} />
                            <Image
                                source={require('../../../../images/goIn.png')}
                                style={styles.icon}
                            />
                        </Right>
                    </ListItem>

                    <View style={{ backgroundColor: '#F3F3F3', height: 20 }} />

                    <ListItem itemDivider style={styles.listItemStyle} button onPress={() => { navigate("SettingName") }}>
                        <Body style={{ justifyContent: 'flex-start', }}>
                            <Text >姓名</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                            <Text style={{ alignItems: 'center', marginRight: 10 }}>{constants.name}</Text>
                            <Image
                                source={require('../../../../images/goIn.png')}
                                style={styles.icon}
                            />
                        </Right>
                    </ListItem>

                    <View style={{ backgroundColor: '#F3F3F3', height: 3 }} />

                    <ListItem itemDivider style={styles.listItemStyle} >
                        <Body style={{ justifyContent: 'flex-start', }}>
                            <Text >性别</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                            <Picker
                                style={styles.picker}
                                selectedValue={this.state.selected}
                                onValueChange={(value) => this.onValueChange(1, value)}>
                                <Picker.Item label="男" value="0" />
                                <Picker.Item label="女" value="1" />
                            </Picker>
                        </Right>
                    </ListItem>
                </List>
                <Text>{this.state.selected}</Text>
            </Container>
        );
    };

    onValueChange = (flag, value) => {
        this.setState({ selected: value });
    };

    //选择图片
    selectPhotoTapped() {
        const options = {
            title: '选择',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    //avatarSource: source,
                    ...constants.avatar = source,
                });
            }
        });
    }
}


export default PersonalInfo