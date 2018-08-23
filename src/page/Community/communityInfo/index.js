import React, { Component } from "react";

import {
    Container,
    Content,
    Body,
    Right,
    List,
    ListItem,
    Icon,
    View,
    Thumbnail,
    Button,
    Header,
} from 'native-base';
import {
    Text,
} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../css/commonStyle';

/**
 * 社群信息页面
 */
class CommunityInfo extends Component {

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
        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                    <Text style={CommonStyles.headertextStyle}>社区详情</Text>
                    </Body>
                </Header>
                <View style={styles.top}>
                <Thumbnail large style={styles.image} source={{uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1192198377,2781673332&fm=58&w=150&h=150&img.JPEG'}}/>
                <Text style={{color:'#333'}}>NXH社群</Text>
                </View>
                <Content style={styles.content}>
                    <Text style={{color:'#000',fontSize:18}}>群公告</Text>
                    <Text style={{height:8,backgroundColor:'#efefef'}}></Text>
                    <Text style={{fontSize:12,lineHeight:15}}>
                        这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告这个是测试群公告
                    </Text>
                    <Button full small style={{backgroundColor:'#FE6F06',marginTop:20}}>
                        <Text style={styles.colorWhite}>进入该群</Text>
                    </Button>
                    <Button full small style={{backgroundColor:'#FE0606',marginTop:20}}>
                        <Text style={styles.colorWhite}>退出该群</Text>
                    </Button>
                </Content>
            </Container>
        );
    };
}

export default CommunityInfo