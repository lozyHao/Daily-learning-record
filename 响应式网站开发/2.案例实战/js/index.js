// 监听页面高度变化
function scH(scW) {
    $(window).scroll(function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scW <= 992) {
            $(".header").css({
                "background": "rgba(255,255,255,1)",
                "height": "40px",
                "border-bottom": "2px solid #00abd9"
            })
            $(".pubCon").css("height", "40px")
            $(".hdMenu").removeClass("active");
            $(".headNav").hide();
        } else {
            $(".headNav").show();
            if (scrollTop >= 200) {
                $(".header").css({
                    "background": "rgba(255,255,255,1)",
                    "height": "40px",
                    "border-bottom": "2px solid #00abd9"
                })
                $(".pubCon").css("height", "40px")
            } else {
                $(".header").css({
                    "background": "rgba(255,255,255,0.6)",
                    "height": "60px",
                    "border-bottom": "none"
                })
                $(".pubCon").css("height", "60px")
            }
        }
    })
}

// 监听页面宽度变化
function scW(w) {
    scH(w);
    if (w <= 992) {
        $(".hdMenu").removeClass("active");
        $(".headNav").hide();
        $(".header").css({
            "background": "rgba(255,255,255,1)",
            "height": "40px",
            "border-bottom": "2px solid #00abd9"
        })
        $(".pubCon").css("height", "40px")
    } else {
        $(".headNav").show();
        $(".header").css({
            "background": "rgba(255,255,255,0.6)",
            "height": "60px",
            "border-bottom": "none"
        })
        $(".pubCon").css("height", "60px")
    }

}

// 监听页面大小变化
let scw = 0;
window.addEventListener('load', function () {
    // 页面加载的时候
    scw = window.innerWidth;
    scW(scw);
    window.addEventListener('resize', function () {
        // 页面变化的时候
        scw = window.innerWidth;
        scW(scw);
    })
})

// 手机端顶部导航菜单点击事件
$(function () {
    $(".hdMenu").click(function () {
        $(".hdMenu").toggleClass(".active");
        $(".headNav").slideToggle();
    })
})
