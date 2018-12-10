//产品编号
var url = $(location).attr("href");
var produceNum = url.split("=")[1];
$("#produceNum").html("产品编号" + produceNum);


//导航吸顶效果

function ProducelistTop() {

}
$.extend(ProducelistTop.prototype, {
    init: function () {
        this.scrolltop();
        this.click();
    },
    scrolltop: function () {
        $(window).scroll(() => {

            if ($(document).scrollTop() > 150) {
                $("#TabsHeadFixed").css({ position: "fixed", top: 0, display: "block" })
            } else {
                $("#TabsHeadFixed").css({
                    position: "static",
                    display: "none"
                })
            }
        })
    },
    click: function () {
        $("#TabsHead li").click(function () {
            $("#TabsHead li").eq($(this).index()).addClass("cur").siblings().removeClass("cur")
        })
        $("#TabsHeadFixed li").click(function () {
            $("#TabsHeadFixed li").eq($(this).index()).addClass("cur").siblings().removeClass("cur")
        })
    }
})
new ProducelistTop().init();




