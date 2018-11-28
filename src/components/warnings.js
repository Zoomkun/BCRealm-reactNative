import HttpUtils from '../api/Api';
var arrMg = [];
var result = [];

class Warnings {
    // 要屏蔽的字或词
    static _getHarmonious() {
        HttpUtils.getRequest(
            'harmonious',
            {
                pageNo: 1,
                pageSize: 1000
            },
            function (data) {
                console.log(data)
                result = data.result;
                if (data) {
                    for (var i in result) {
                        arrMg.push(result[i].keyMatch);
                    }
                    console.log(arrMg)
                }
            }
        )
    }

    /**
     * 替换不和谐字或词
     * @param {*} inputContent 
     */
    static _filterMethod(inputContent) {
        var value = inputContent;
        for (var i = 0; i < arrMg.length; i++) {
            var reg = new RegExp(arrMg[i], "g");
            console.log(arrMg[i].length)
            if (value.indexOf(arrMg[i]) != -1) {
                var result = value.replace(reg, (this._replace(arrMg[i].length)));
                value = result;
            }
        }
        console.log(value)
        return value;
    }

    static _replace(num) {
        var r = ""
        for (var i = 0; i < num; i++) {
            r += "*";
        }
        return r;
    }
}

export default Warnings;