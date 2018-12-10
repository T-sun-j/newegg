
//放大镜

$(document).ready(function () {
    //底图切大图
    $("#bottom>li").on("mouseenter", function () {
        console.log($(this).index())
        $("#small>img").eq($(this).index()).show().siblings().hide();
        $("#big>img").eq($(this).index()).show().siblings().hide();
        $("#mask").show()
    })

    //mask移动
    $("#mask").on("mousemove", function (e) {
        alert();
        var e = e || event;
        var x = e.pageX - $(this).width() / 2 - $("#box").offset().left;
        var y = e.pageY - $(this).height() / 2 - $("#box").offset().top;
        var maxL = $("#box").width() - $(this).width();
        var maxT = $("#box").height() - $(this).height();
        x = x < 0 ? 0 : (x > maxL ? maxL : x);
        y = y < 0 ? 0 : (y > maxT ? maxT : y);
        $(this).css({
            left: x,
            top: y
        })
        $("#big").show()
        // 大图移动
        var x1 = x * ($("#big").width() / $("#box").width())
        var y1 = y * ($("#big").height() / $("#box").height())
        $("#big>img").css({
            left: -x1,
            top: -y1
        })
    })
    $("#small").mouseleave(function () {
        $("#big").hide()
    })

})