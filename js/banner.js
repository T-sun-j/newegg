

// banner_CT
function banner_CT() {
    var timer = null,
        index = 0,
        $ulist = $("#banner_CTimg>li"),
        $olist = $(".dir>li");
    timer = setInterval(autoPlay, 2000);
    function autoPlay() {
        index++;
        if (index == $ulist.size()) {
            index = 0;
        }
        $olist.eq(index).addClass("current").siblings().removeClass("current");
        $ulist.eq(index).fadeIn(1500).siblings().fadeOut(1500);
    }
    $olist.mouseenter(function () {
        clearInterval(timer);
        index = $(this).index() - 1;

        autoPlay();
    }).mouseleave(function () {
        timer = setInterval(autoPlay, 2000);
    })
}
banner_CT()



//banner_CB
function banner_CB() {
    var $ulist = $(".proslider>.mover>.prolist>li");
    var $aleft = $(".aleft");
    var $aright = $(".aright");
    var timer = null;
    var index = 0;
    timer = setInterval(() => {
        index++;
        if (index == 3) {
            $(".proslider>.mover>.prolist").animate({ left: -744 }, 1500);
        }
        if (index == 7) {
            index = 0;
            $(".proslider>.mover>.prolist").animate({ left: 0 }, 1500);
        }
    }, 1500)

}
banner_CB()
//banner_RT
function banner_RT() {
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
banner_RT()