define(function () {
    function banner_RT() {

        //用户登陆
        var url = $(location).attr("href");
        var username = url.split("?")[1];
        $("#user").html("欢迎 " + username);

        //banner
        var timer = null,
            index = 0,
            $ulist1 = $(".bombshell>.mover>.prolist>li"),
            $olist1 = $(".bombshell>.nav>a");
        timer = setInterval(() => {
            index++;
            if (index == 1) {
                $(".bombshell>.mover>.prolist").animate({ left: -226 }, 500);
            }
            if (index == 2) {
                index = 0;
                $(".bombshell>.mover>.prolist").animate({ left: 0 }, 500);
            }
            $olist1.eq(index).addClass("current").siblings().removeClass("current");
        }, 2500)
    }
    return {
        init: banner_RT
    }
})