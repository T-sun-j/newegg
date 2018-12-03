//hotlist
$(".hot_comment_goods_c").mouseenter(function () {
    if ($(this).index() == 0) {
        $(".hot_comment_goods_c").eq($(this).index()).animate({ "width": 675, "left": 0 }).siblings().animate({ "width": 174, "left": $(this).index() * 675 }).end().eq(1).animate({ "width": 174, "left": 676 }).end().eq(2).animate({ "width": 174, "left": 851 }).end().eq(3).animate({
            "width": 174, "left": 1026
        })
        $(".hot_comment_goods_c").eq($(this).index()).children().eq(0).show().siblings().hide()
    }
    if ($(this).index() == 1) {
        $(".hot_comment_goods_c").eq($(this).index()).animate({ "width": 675, "left": 175 }).end().eq(0).animate({ "width": 174, "left": 0 }).end().eq(2).animate({ "width": 174, "left": 851 }).end().eq(3).animate({
            "width": 174, "left": 1026
        })
        $(".hot_comment_goods_c").eq($(this).index()).children().eq(0).show().siblings().hide()
    }
    if ($(this).index() == 2) {
        $(".hot_comment_goods_c").eq($(this).index()).animate({ "width": 675, "left": 350 }).end().eq(0).animate({ "width": 174, "left": 0 }).end().eq(1).animate({ "width": 174, "left": 175 }).end().eq(3).animate({ "width": 174, "left": 1026 })
        $(".hot_comment_goods_c").eq($(this).index()).children().eq(0).show().siblings().hide()
    }
    if ($(this).index() == 3) {
        $(".hot_comment_goods_c").eq($(this).index()).animate({ "width": 675, "left": 525 })
        $(".hot_comment_goods_c").eq($(this).index()).children().eq(0).show().siblings().hide()
    }
}).mouseleave(function () {
    // $(".hot_comment_goods_c").eq($(this).index()).children().eq(0).show().siblings().hide()

    // $(".hot_comment_goods_c").eq($(this).index()).animate({ "width": 675, "left": 175 }).children(".hot_commen_goods_child1").show().siblings().hide()
})


// $(".hot_comment_goods_c").mouseenter(function () {

//     var index = $(this).index();
//     // console.log(index * 175)
//      $(".hot_comment_goods_c").each(function (i, ele) {
//         if ( i>= index) {
//             console.log(ele)
//             $(ele).animate({
//                 left: i * 174 + 675
//             })
//         }
//     })
//     $(".hot_comment_goods_c").eq(index).children().eq(1).hide().end().eq(0).show().end().end().animate({
//         "width": 675,
//         "left": index * 175
//     }, 1000);

// }).mouseleave(function () {
//     var index = $(this).index();
//     $(".hot_comment_goods_c").eq(index).children().eq(1).show().end().eq(0).hide();
// })
