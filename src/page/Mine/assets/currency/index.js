import { React, Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    Container,
    Header,
    Button,
    Icon,
    Body,

} from 'native-base';
import CommonStyle from '../../../../css/commonStyle';

class Currency extends Component {
    constructor(props) {

    }

    static navigationOptions = {
        header: null
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {

        return (
            <Container>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>BBM</Text>
                    </Body>
                    <Button transparent />
                </Header>
            </Container>
        )
    }
}
export default Currency
