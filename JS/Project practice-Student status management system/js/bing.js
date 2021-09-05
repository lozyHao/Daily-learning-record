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
}
