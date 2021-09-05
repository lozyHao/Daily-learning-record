let $b = {
    // 补零方法
    repair0: num => (num + '').length > 1 ? num : '0' + num,

    // 返回短日期方法
    getMiniDate: function (date = new Date()) {
        let year = date.getFullYear();
        let month = this.repair0(date.getMonth() + 1); //使用自己的repair()方法来个位补0，加上 this 表示自己的方法
        let day = this.repair0(date.getDate());
        return [year, month, day].join('-');
    },

    //将对象转换成特定格式的字符串
    getStrByObj: function (obj, split = '&') {
        return Object.keys(obj).map(key => [key, obj[key]].join('=')).join(split);
    },

    // 将字符串转换成对象(JSON字符串)
    getObjByStr:function (str,char='&') {
        let obj={};
        str.split(char).forEach(item=>{
            // 将字符串打散成数组
            let kv=item.split('=');
            // console.log(kv); //依次输出 ["name", "华为Nova7"]  ["color", "奇境森林"]...
            obj[kv[0]]=kv[1] // 对象赋值 (循环赋值)
        });
        return obj;
    }
}
