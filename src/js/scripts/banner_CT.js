define( function() {
    function banner_CT(){
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
    return {
        init:banner_CT
    }
    
});