function remSize() {
    // 获取设备宽度，目前手机端普遍宽度是750px的一半为375px左右。
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 750) {
        deviceWidth = 750;
    } else if (deviceWidth <= 320) {
        deviceWidth = 320;
    }
    // 设置字体大小比例
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    document.querySelector('body').style.fontSize=0.3+'rem';
    // 设计稿是750px
    // 设置一半的宽度，那么就是375px
    // 1rem=100px的设计稿宽度
    // 表达一半的宽度就是3.75rem
}
remSize();

// 窗口发生变化的时候
window.onresize = function () {
    remSize();
}