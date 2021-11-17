// REM自适应移动端布局配置
function remSize() {
    // 获取设备宽度
    let deviceWith = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWith >= 750) {
        deviceWith = 750;
    } else if (deviceWith <= 320) {
        deviceWith = 320;
    }
    document.documentElement.style.fontSize = (deviceWith / 7.5) + 'px';
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
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