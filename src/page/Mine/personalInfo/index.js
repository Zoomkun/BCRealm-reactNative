import React, { Component } from "react";

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
    AsyncStorage
} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';
import ImagePicker from 'react-native-image-picker';
import HttpUtils from "../../../api/Api";

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
            data: [],
            sex: 1,
            headUrl: '',
            userName: '',
            id: 0,
            accountNo: 0
        }

        //this.url = this.props.navigation.state.params.url;
    }
    static navigationOptions = {
        header: null
    };

    goBack = () => {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            console.log(datas)
            this.props.navigation.state.params.returnData(datas);
        })
        this.props.navigation.goBack();
    }

    componentDidMount() {
        // this.setState({
        //     data: this.props.navigation.state.params.data
        // })
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            this.setState({
                sex: datas.sex,
                accountNo: datas.accountNo,
                id: datas.id,
                headUrl: datas.headUrl,
                userName: datas.userName
            })
            console.log(datas);
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        let data = this.state.data;
        console.log(data)
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
                                style={styles.icon}
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
                                selectedValue={this.state.sex}
                                onValueChange={(value) => this.onValueChange(1, value)}>
                                <Picker.Item label="男" value="1" />
                                <Picker.Item label="女" value="2" />
                            </Picker>
                        </Right>
                    </ListItem>
                </List>
                <Text>{this.state.sex}</Text>
            </Container>
        );
    };

    onValueChange = (flag, value) => {
        this.setState({ sex: value });
        console.log(this.state.sex)
        // this._upDATAForAPP(
        //     this.state.accountNo,
        //     this.state.headUrl,
        //     this.state.id,
        //     value,
        //     this.state.userName);
    };

    _returnData(userName) {
        this.setState({
            userName: userName
        });
    }
    /**
     * 更改用户信息
     */
    _upDATAForAPP(accountNo, headUrl, id, sex) {
        self = this
        HttpUtils.putRequrst(
            'userUrl',
            'updateForApp',
            {
                "accountNo": `${accountNo}`,
                "id": `${id}`,
                "headUrl": `${headUrl}`,
                "sex": `${sex}`
            },
            function (data) {
                console.log(data)
                // if (data.data.userName) {
                //     AsyncStorage.setItem('data', JSON.stringify(data.data));
                //     self.refs.toast.show((data.data.userName), DURATION.LENGTH_LONG);
                // } else {
                //     self.refs.toast.show((data.msg), DURATION.LENGTH_LONG);
                // }
            }
        )


        // fetch('http://test.bcrealm.com:9003/api/user/updateForApp', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json;charset-UTF-8',
        //         'token': '07c298a08a1741b8accab242071ac690'
        //     },
        //     body: JSON.stringify({
        //         "accountNo": `${accountNo}`,
        //         "headUrl": `${headUrl}`,
        //         "id": `${id}`,
        //         "sex": `${sex}`,
        //         "userName": `${userName}`
        //     })
        // }).then((response) => response.json())
        //     .then((jsonData) => {
        //         console.log(jsonData)
        //     });
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
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    headUrl: source,
                    //...constants.avatar = source,
                });
                this._upDATAForAPP(this.state.accountNo, this.state.headUrl, this.state.id, this.state.sex);
            }
        });
    }
}


export default PersonalInfo