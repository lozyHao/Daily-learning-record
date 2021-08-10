// 1.判断指定年份是否是闰年，是闰年返回true
let isLeepYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0

// 2.定义一个补零是方法，如果是个位数，在前面加0
// num += '' //将数字转为字符串
let repair = num => (num + '').length > 1 ? num : '0' + num;

// 3.定义一个方法，将日期转换成 xxxx-xx-xx
let getMiniDate = (date = new Date()) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return [year, month, day].join('-');
}

// 4.定义一个方法，返回中国日期 xxxx-xx-xx xx:xx:xx 星期(2021-08-10 14:25:30 星期二)
let getChaineseDate = (date = new Date()) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    // 根据join()里面的字符将元素拼接
    let y_m_d = [year, month, day].join('-');
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let h_m_s = [hour, minute, second].join(':');
    let week = '日一二三四五六'.charAt(date.getDay());

    return y_m_d + ' ' + h_m_s + ' 星期' + week;
}

// 5.定义一个方法，将字符串翻转
let reverseStr=val=>val.split('').reverse().join('');