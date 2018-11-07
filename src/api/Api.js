import { Component } from 'react'
import { AsyncStorage } from "react-native"
import Api from './UrlList'


/**
 * fetch 网络请求的header，可自定义header 内容
 * @type {{Accept: string, Content-Type: string, accessToken: *}}
 */
let header = { 'Content-Type': 'application/json;charset=UTF-8' }
let headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
let token = {}

AsyncStorage.getItem('data').then(data => {
    let datas = JSON.parse(data);
    console.log(datas);
    if (datas) {
        token = datas.token;
        header.token = datas.token;
        headers.token = datas.token;
    }
})

// 环境判断
let api = ''
__DEV__ ? api = 'http://test.bcrealm.com/api/' : api = 'http://test.bcrealm.com/api/'

/**
 * GET 请求时，拼接请求URL
 * @param url 请求URL
 * @param params 请求参数
 * @returns {*}
 */
const handleUrl = url => params => {
    if (params) {
        let paramsArray = []
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
        if (url.search(/\?/) === -1) {
            typeof (params) === 'object' ? url += '?' + paramsArray.join('&') : url
        } else {
            url += paramsArray.join('&')
        }
    }
    return url
}

/**
 *
 * @param params 请求参数
 * @returns {*}
 */
const paramFormat = params => {
    let param = ''
    let paramsArray = []
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))

    param += paramsArray.join('&')

    console.log(param)
    return param
}

/**
 * fetch 网络请求超时处理
 * @param original_promise 原始的fetch
 * @param timeout 超时时间 30s
 * @returns {Promise.<*>}
 */
const timeoutFetch = (original_fetch, timeout = 30000) => {
    let timeoutBlock = () => { }
    let timeout_promise = new Promise((resolve, reject) => {
        timeoutBlock = () => {
            // 请求超时处理
            reject('timeout promise')
        }
    })

    // Promise.race(iterable)方法返回一个promise
    // 这个promise在iterable中的任意一个promise被解决或拒绝后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝。
    let abortable_promise = Promise.race([
        original_fetch,
        timeout_promise
    ])

    setTimeout(() => {
        timeoutBlock()
    }, timeout)

    return abortable_promise
}

/**
 * 网络请求工具类
 */
export default class HttpUtils extends Component {

    /**
     * 设置headers
     * @param obj 设置的header对象
     */
    static setHeader = (obj) => {
        if (typeof obj !== 'object') {
            return false
        }
        Object.assign(token, obj)
        Object.assign(headers, obj)
        Object.assign(header, obj)
    }

    static getToken() {
        return token;
    }

    /**
     * 基于fetch 封装的GET 网络请求
     * @param url 请求URL
     * @param ApiName api
     * @param params 请求参数
     * @param 
     * @param success 成功回调
     * @returns {Promise}
     */
    static getRequest = (ApiName, params, success) => {
        return timeoutFetch(fetch(handleUrl(api + Api[ApiName])(params), {
            method: 'GET',
            headers: header
        })).then(response => {
            console.log(header)
            console.log(response)
            if (response.ok) {
                return response.json()
            } else {
                console.log(response)
            }
        }).then(response => {
            console.log(response)
            // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
            if (response && response.code === 1) {
                success(response.data);
            } else {
                // 非 200，错误处理
                alert(response.message)
                return response
            }
        }).catch(error => {
            alert(error)
        })
    }

    /**
     * 基于fetch 的 POST 请求
     * @param url 请求的URL
     * @param params 请求参数
     * @param success 成功回调
     * @returns {Promise}
     */
    static postRequrst = (ApiName, params, success) => {
        return timeoutFetch(fetch(api + Api[ApiName], {
            method: 'POST',
            headers: header,
            body: JSON.stringify(params)
        })).then(response => {
            console.log(response)
            console.log(JSON.stringify(params))
            if (response.ok) {
                return response.json()
            } else {
                alert('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
            }
        }).then(response => {
            console.log(response)
            // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
            if (response && response.code === 1) {
                success(response.data)
            } else {
                success(response.msg)
            }
        }).catch(error => {
            alert(error)
        })
    }

    /**
    * 基于fetch 的 POSTformData 请求
    * @param url 请求的URL
    * @param params 请求参数
    * @param success 成功回调
    * @returns {Promise}
    */
    static formDataRequest = (ApiName, params, success) => {
        return timeoutFetch(fetch(api + Api[ApiName], {
            method: 'POST',
            headers: headers,
            body: paramFormat(params)
        })).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                alert('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
            }
        }).then(response => {
            // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
            if (response && response.code === 1) {
                success(response.data)
            } else {
                success(response.msg)
            }
        }).catch(error => {
            // console.log(error)
            alert(error)
        })
    }


    /**
     * 基于fetch 的 PUT 请求
     * @param url 请求的URL
     * @param params 请求参数
     * @param success 成功回调
     * @returns {Promise}
     */
    static putRequrst = (ApiName, params, success) => {
        return timeoutFetch(fetch(api + Api[ApiName], {
            method: 'PUT',
            headers: header,
            body: JSON.stringify(params)
        })).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                alert('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
            }
        }).then(response => {
            success(response)
            // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
            // if (response && response.code === 1) {
            //     success(response.data)
            // } else {
            //     // alert(response.message)
            //     return response
            // }
        }).catch(error => {
            // console.log(error)
            alert(error)
        })
    }

    /**
     * 基于fetch 封装的DELETE 网络请求
     * @param url 请求URL
     * @param params 请求参数
     * @param success 成功回调
     * @returns {Promise}
     */
    static deleteRequest = (ApiName, params, success) => {
        return timeoutFetch(fetch(api + Api[ApiName], {
            method: 'DELETE',
            headers: header,
            body: JSON.stringify(params)
        })).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                // alert(response)
            }
        }).then(response => {
            // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
            success(response)
        }).catch(error => {
            alert(error)
        })
    }
}

module.exports = HttpUtils
