// @flow

import {StyleSheet, PixelRatio,Dimensions} from 'react-native'
import {create} from './PlatformStyleSheet'
const {width,height}=Dimensions.get('window');

export default create({
    container: {
        flexDirection: 'column',
    },
    search: {
        //marginTop: 5,
        flexDirection: 'column',
        //paddingTop: 10,
        backgroundColor:'#fff',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(173, 185, 193, 0.5)'
    },
    inputRow: {
        flexDirection: 'row',
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems:"center",
    },
    iconRow: {
        flexDirection: 'row',
        padding:15

    },
    actionIcon:{

    },
    iconTouch: {
        justifyContent:'center',
        alignItems:'center'
    },
    searchRow: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft:4,
    },
    searchInput: {
        borderRadius: 4,
        fontSize: 15,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(190, 190, 190, 1)',
        backgroundColor:'#fff'
    },
    searchIcon: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    searchFocus: {
        flex: 0,
        width: 20,
        alignItems: 'center'
    },
    searchExtra: {
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchPlus: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendText: {
        fontFamily: 'HelveticaNeue',
        fontSize: 13,
        color:'rgba(0, 186, 110, 1)',
        textAlign: 'center'
    },
    emojiRow: {
        backgroundColor: '#e8ebef',
    },
    wrapper: {
        backgroundColor: '#e8ebef',
    },
    slide: {
        height: 150,
        paddingTop: 15,
        paddingHorizontal: 15,
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    slideRow: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 30,
    },
    sendRow: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    emoji: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        paddingLeft: 4,
        paddingBottom: 1,
        // height: 30
        color: '#fff'
    },
    send: {
        marginRight: 12,
        paddingVertical: 8,
        width: 50,
    }
})
