import React, { Component } from "react";
import {
    Header,
    Button,
    Body,
    Icon,
    Image,
    Text,
} from "native-base";

import CommonStyles from '../css/commonStyle'

/**
 * Header控件
 */
export default class ThemeHeader extends Component {
    render() {
        let { leftSource, rightSource, onLeftPress, onRightPress, headerTitle } = this.props;
        return (
            <Header >
                <Button transparent onPress={() => { onLeftPress }}>
                    <Image source={leftSource} style={CommonStyles.icon} />
                </Button>
                <Body style={CommonStyles.headerBodyStyle}>
                    <Text style={CommonStyles.headertextStyle}>{headerTitle}</Text>
                </Body>
                {rightSource !== null ?
                    < Button transparent onPress={() => { onRightPress }}>
                        <Image source={rightSource} style={CommonStyles.icon} />
                    </Button> : < Button transparent />
                }
            </Header>
            // <View style={{ backgroundColor: 'pink', height: 20 }} />
        );
    }
}