import React, { Component } from "react";
import _ from 'lodash';
import {
    Container,
    Body,
    Right,
    List,
    ListItem,
    Icon,
    Thumbnail,
    Button,
    Header,
} from 'native-base';
import {
    Text,
    View,
    Image,
    Picker,
    AsyncStorage,
} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import ImagePicker from 'react-native-image-picker';
import HttpUtils from "../../../api/Api";
import Toast, { DURATION } from 'react-native-easy-toast'


/**
 * 个人信息页面
 */
class PersonalInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            sex: '',
            headUrl: '',
            userName: '',
            id: 0,
            accountNo: 0,
            token: ''
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            datas.headUrl = this.state.headUrl;
            console.log(datas);
            this.props.navigation.state.params.returnData(datas);
        })
        this.props.navigation.goBack();
    }

    componentDidMount() {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            this.setState({
                sex: datas.sex,
                accountNo: datas.accountNo,
                id: datas.id,
                headUrl: datas.headUrl,
                userName: datas.userName,
                token: datas.token
            })
            console.log(datas);
        })
    }

    render() {
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
                    <ListItem itemDivider={true} style={{ height: 100, justifyContent: 'center', backgroundColor: '#ffffff' }}
                        button onPress={this.selectPhotoTapped.bind(this)}>
                        <Text>头像</Text>
                        <Body />
                        <Right style={styles.rightStyle} >
                            {this.state.headUrl != '' &&
                                <Thumbnail source={{ uri: this.state.headUrl }} />
                            }
                            {/* <Thumbnail source={constants.avatar} /> */}
                            <Image
                                source={require('../../../../images/goIn.png')}
                                style={styles.iconStyle}
                            />
                        </Right>
                    </ListItem>
                    <View style={{ backgroundColor: '#F3F3F3', height: 20 }} />

                    <ListItem itemDivider style={styles.listItemStyle}
                        button onPress={() => {
                            navigate("SettingName", { returnData: this._returnData.bind(this), id: this.state.id, accountNo: this.state.accountNo })
                        }}>
                        <Body style={{ justifyContent: 'flex-start', }}>
                            <Text >姓名</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                            <Text style={{ alignItems: 'center', marginRight: 10 }}>{this.state.userName}</Text>
                            <Image
                                source={require('../../../../images/goIn.png')}
                                style={styles.iconStyle}
                            />
                        </Right>
                    </ListItem>
                    <View style={{ backgroundColor: '#F3F3F3', height: 3 }} />

                    <ListItem itemDivider style={styles.listItemStyle} >
                        <Body style={{ justifyContent: 'flex-start', }}>
                            <Text >性别</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                            {this.state.sex != 0 &&
                                (
                                    < Picker
                                        style={styles.pickerStyle}
                                        selectedValue={this.state.sex}
                                        onValueChange={(value) => this.onValueChange(1, value)}>
                                        <Picker.Item label={this.state.sex == 1 ? "男" : "女"} value={this.state.sex == 1 ? 1 : '2'} />
                                        <Picker.Item label={this.state.sex == 1 ? "女" : "男"} value={this.state.sex == 1 ? 2 : '1'} />
                                    </Picker>
                                )
                            }
                        </Right>
                    </ListItem>
                </List>

                <Toast
                    ref="toast"
                    style={{ backgroundColor: '#434343' }}
                    position='center'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: '#ffffff' }}
                />
            </Container >
        );
    };

    onValueChange = (flag, value) => {
        this.setState({ sex: value });
        if (this.state.userName != '') {
            this._changeSex(this.state.accountNo, this.state.id, value)
        }
    };

    _returnData(userName) {
        this.setState({
            userName: userName
        });
    }

    _changeSex(accountNo, id, sex) {
        console.log(accountNo + "__" + id + "___" + sex)
        let self = this
        HttpUtils.putRequrst(
            'userUrl',
            'updateForApp',
            {
                "accountNo": `${accountNo}`,
                "id": `${id}`,
                "sex": `${sex}`
            },
            function (data) {
                console.log(data)
                if (data.data.userName) {
                    AsyncStorage.setItem('data', JSON.stringify(data.data));
                    self.refs.toast.show((data.msg), DURATION.LENGTH_LONG);
                } else {
                    self.refs.toast.show((data.msg), DURATION.LENGTH_LONG);
                }
            }
        )
    }

    _changeAvatar(loadForm) {
        console.log(loadForm.data)
        let self = this
        let fileName = loadForm.fileName
        let uri = loadForm.uri
        let formData = new FormData()
        formData.append("file", { uri: uri, type: 'application/octet-stream', name: fileName });
        HttpUtils.formDataRequest(
            'userUrl',
            'changeAvatar',
            formData,
            function (data) {
                if (data.userName) {
                    AsyncStorage.setItem('data', JSON.stringify(data));
                } else {
                    self.refs.toast.show((data), DURATION.LENGTH_LONG);
                }
            }
        )
    }

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
                // let source = { uri: response.uri };
                let source = response.uri;
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this._changeAvatar(response);
                this.setState({
                    headUrl: source,
                    //...constants.avatar = source,
                });
            }
        });
    }
}
export default PersonalInfo