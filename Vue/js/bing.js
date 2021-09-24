let $b = {
    // 判断是否为闰年
    isLeapYear: function (year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    },
    // 单数补零方法
    repairZero: function (val) {
        return (val + "").length > 1 ? val : "0" + val
    },
    // 手机号码打码方法
    telmosic: function (tel, start = 3, end = 8) {
        return tel.substring(0, start) + "****" + tel.substring(end)
    },
    // 文本打码方法
    textmosic: function (val, len = 10) {
        return val.substring(0, len) + "...."
    },

    // 定义一个方法，将日期转换成 xxxx-xx-xx
    getMiniDate: function (date = new Date()) {
        let year = date.getFullYear();
        let month = this.repairZero(date.getMonth() + 1); //使用自己的repair()方法来个位补0，加上 this 表示自己的方法
        let day = this.repairZero(date.getDate());
        return [year, month, day].join('-');
    },

    // 定义一个方法，返回中国日期 xxxx-xx-xx xx:xx:xx 星期(2021-08-10 14:25:30 星期二)
    getChaineseDate: function(date = new Date()) {
        let year = date.getFullYear();
        let month = this.repair(date.getMonth() + 1);
        let day = this.repair(date.getDate());
        // 根据join()里面的字符将元素拼接
        let y_m_d = [year, month, day].join('-');
        let hour = this.repair(date.getHours());
        let minute = this.repair(date.getMinutes());
        let second = this.repair(date.getSeconds());
        let h_m_s = [hour, minute, second].join(':');
        let week = '日一二三四五六'.charAt(date.getDay());
        return y_m_d + ' ' + h_m_s + ' 星期' + week;
    },

    // 返回两个日期的时间差
    getHMS: function (endDate, startDate = new Date()) {
        let differ = endDate - startDate;
        if (differ <= 0) {
            differ = 0
        }
        let h = $b.repairZero(Math.floor(differ / 1000 / 60 / 60));
        let m = $b.repairZero(Math.floor(differ / 1000 / 60 % 60));
        let s = $b.repairZero(Math.floor(differ / 1000 % 60));

        return {
            h, m, s
        }
    },

    // 定义一个方法，将字符串翻转
    reverseStr: val => val.split('').reverse().join(''),

    // 定义一个分页方法
    pageData:function(arr,pageIndex,pageSize) {//(元素组、页码、每页数量)
        // 思路：截取原数组中的数据
        let start=(pageIndex-1)*pageSize;
        let end=start+pageSize;
        let data=arr.slice(start,end);
        let totalPage=Math.ceil(arr.length/pageSize);
        return{
            data:data,
            totalPage:totalPage
        }
    },

    // 将对象转换成特定格式的字符串
    getStrByObj:function (obj,split='&') {
        return Object.keys(obj).map(key=>[key,obj[key]].join('=')).join(split);
    },

    // 将字符串转换成对象
    getObjByStr:function (str,char='&') {
        let obj={};
        str.split(char).forEach(item=>{
            // 将字符串打散成数组
            let kv=item.split('=');
            // console.log(kv); //依次输出 ["name", "华为Nova7"]  ["color", "奇境森林"]...
            obj[kv[0]]=kv[1] // 对象赋值 (循环赋值)
        });
        return obj;
    },

    // 设置cookie
    setCookie: function (cname, cvalue, exdays = 0) {
        // 创建一个日起对象
        var d = new Date();
        // 设置过期事件
        var expires = ''
        if (exdays != 0) {
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            expires = "; expires=" + d.toGMTString();
        }
        // 保存cookie
        document.cookie = cname + "=" + cvalue + expires;
    },
    // 获取cookie
    getCookie: function (cname) {
        let val = ''
        // a=aa; b=bb; c=cc
        // ['a=aa','b=bb','c=cc']
        // [['a','aa'],['b','bb'],['c','cc']]
        document.cookie.split(';').map(r => r.split('=')).forEach(e => {
            if (e[0] == cname) val = e[1];
        })
        return val;
    },
    // 检测cookie
    checkCookie: function () {
        var username = getCookie("username");
        if (username != "") {
            alert("Welcome again " + username);
        }
        else {
            username = prompt("Please enter your name:", "");
            if (username != "" && username != null) {
                setCookie("username", username, 365);
            }
        }
    },

    // 获取地址栏中的search 中的值
    getSearch:function(){
        let search=location.search;
        if(search!='null'){
            let arr1=search.replace('?').split('&');
            let arr2=arr1.map(r=>r.split('='));
            let obj={};
            arr2.forEach(r=>{
                obj[r[0]]=r[1];
            })
            return obj
        }
    }
    
}