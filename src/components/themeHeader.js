import React, { Component } from "react";
import {
    Header,
    Button,
    Body,
    Icon,
    Text,
} from "native-base";

import CommonStyles from '../css/commonStyle';

/**
 * Header控件
 */
export default class ThemeHeader extends Component {
    render() {
        let { leftSource, onLeftOnPress, title, onRightPress, rightSource } = this.props;
        return (
            <Header style={CommonStyles.headerStyle}>
                {leftSource &&
                    <Button transparent onPress={() => { onLeftOnPress }}  >
                        <Icon name={leftSource} style={CommonStyles.backIconStyle} />
                    </Button>
                }
                <Body style={CommonStyles.titleBodyStyle}>
                    <Text style={CommonStyles.headertextStyle}>{title}</Text>
                </Body>
                {rightSource &&
                    < Button transparent onPress={() => { onRightPress }}>
                        <Icon name={rightSource} style={CommonStyles.backIconStyle} />
                    </Button>
                }
            </Header>
        );
    }
}