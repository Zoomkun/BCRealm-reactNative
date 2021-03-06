import { Component } from 'react'

/**
 * api集合
 */
export default {
    /**网易云信token接口 */
    getNeteaseToken: 'wwyim/chatUser/getAccessToken',
    /**app版本接口 */
    appVersion: 'wskdapp/skdapp/getAppInfo',

    /**新用户服务地址 */
    newUserUrl: 'http://test.bcrealm.com/api/',
    /**新登录接口 parameter:"loginOriginAddress": "http://world.gametest.bcrealm.com"*/
    newLogin: 'wuser/user/login',
    /**获取图片验证码唯一标识 */
    getCodeUuId: 'wuser/user/getCodeUuId',
    /**图形码  http://test.bcrealm.com/api/wuser/user/imgCode?uuId=6000001355233411*/
    imgCode: 'wuser/user/imgCode?',
    /**获取短信验证码 */
    newGetCode: 'wuser/user/send/msg',
    /**验证码验证 */
    confirmation: 'wuser/user/Msg/',
    /**注册 */
    register: 'wuser/user/register',
    /**获取找回密码验证码 */
    changePasswordCode: 'wuser/user/back/msg',
    /**找回密码验证吗验证 */
    userBack: 'wuser/user/back/',
    /**修改密码 */
    changePassword: 'wuser/user/back/pwd',
    /** 获取新闻 */
    getNews: 'wnews/news/list?sourceType=1',
    /**获取评级列表 */
    getSteefanKors: 'wnews/news/list?sourceType=2',
    /**获取用户信息 */
    getPlayerInfo: 'wuser/player/info?inviteCode=',
    /**获取钱包资产列表 */
    getAssetList: 'wwallet/wallet/asset/list',
    /**获取提现记录 */
    getAssetCheckout: 'wexchange/checkout/list?',
    /**实名认证 */
    authenticate: 'wuser/user/submitIdentity',
    /**查询钱包地址 */
    getWalletAddressList: 'wwallet/wallet/address/list',
    /**钱包地址认证 */
    WalletAddressSubmit: 'wwallet/wallet/address/submit',
    /**提交提现请求 */
    checkoutSubmit: 'wexchange/checkout/submit',
    /**交易所账号密码 */
    findUserAccount: 'wexchange/checkout/findUserAccount',
    /**屏蔽字库 */
    harmonious: 'wskdapp/skdapp/loadSensors?',


    
    /**下面都是老的接口*/
    /**线上*/
    appUrl: 'http://test.bcrealm.com:9002/api/',
    userUrl: 'http://test.bcrealm.com:9003/api/',
    /**本地*/
    // appUrl: 'http://192.168.31.124:9002/api/',
    // userUrl: 'http://192.168.31.124:9003/api/',

    /**注册*/
    register: 'user/register',
    /**获取验证码*/
    sendCode: 'user/sendCode?',
    /**用户登录*/
    appLogin: 'login/appLogin',
    /**短信登录*/
    smsLogin: 'login/user/smsLogin',
    /**修改密码*/
    uppwd: 'user/uppwd',
    /**退出登录*/
    loginOut: 'login/loginOut',

    /**实名认证*/
    realNameAu: 'user/realNameAu',
    /**证件类型*/
    certificateType: 'certificateType?page=1&pageSize=10',
    /**国籍*/
    nationality: 'nationality',
    /**修改用户信息(名称/性别)*/
    updateForApp: 'user/updateForApp',
    /**跟换头像ok*/
    changeAvatar: 'user/photo/upload',
    /**获取指定用户的私信列表*/
    letters: 'letters?page=1&pageSize=10',
    /**获取指定用户的未读私信数量*/
    unreads: 'letters/unreads',
    /**修改指定用户的未读私信为已读*/
    upStatus: 'letters/upStatus',//
    /**查询审核通过的话题*/
    topicList: 'topic?page=1&pageSize=10',
    /**发布话题*/
    sendTopic: 'topic/',
    /**阅读话题*/
    read: 'topic/read',
    /**新闻列表*/
    newsList: 'news?page=1&pageSize=10',
    /**获取游戏列表*/
    gameList: 'game?page=1&pageSize=10',
    /**图集*/
    banner: 'banner',
    /**获取所有群列表*/
    chatGroup: 'wwyim/chatGroup/list',
    /**加入群*/
    joinItem: 'wwyim/chatGroup/join',
    /**退出群*/
    leaveChatGroup: 'wwyim/chatGroup/leave',
    /**获取群详细信息*/
    groupInfo: 'wwyim/chatGroup/info?',
    /**获取网易云信登录接口*/
    getAccessToken: 'wwyim/chatUser/getAccessToken',
}