define(function () {
    function banner_CB() {
        // var $ulist = $(".proslider>.mover>.prolist>li");
        // var $aleft = $(".aleft");
        // var $aright = $(".aright");
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
    return {
        init: banner_CB
    }
});









