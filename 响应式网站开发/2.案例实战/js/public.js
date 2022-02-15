$(function(){
    //点击菜单按钮切换
    $(".hdMenu").click(function(){
        $(".bodyBg").toggle();
        $(this).toggleClass("active")
        $(".hdNav").slideToggle()
    })

    $(".bodyBg").click(function(){
        $(this).hide();
        $(".hdMenu").removeClass("active");
        $(".hdNav").slideUp();        
    })

    //当前页面的导航高亮显示
    var path=location.href.split("/")[location.href.split("/").length-1].substr(0,4)
    // var path=location.href.substring(location.href.lastIndexOf("/")+1)    
    $(".hdNav li a[href^='"+path+"']").parent().addClass("active");



    // 监听页面的宽度
    $(window).resize(function(){
        if($(this).width()>992){            
            $(".bodyBg").hide();
            $(".hdNav").show();            
        }else{
            $(".hdNav").hide();
        }
    })

    
})