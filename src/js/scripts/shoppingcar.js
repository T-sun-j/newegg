
(function fn() {
    //首页用户名的显示
    var url = $(location).attr("href");
    var userName = url.split("?")[1];
    $("#log").html(userName)
    //从localStorage 中获取数据 存在页面
    var str_ = '';
    for (var i = 0; i < localStorage.length; i++) {

        var key = localStorage.key(i);

        //将localStorage获取的字符串转对象
        var val = JSON.parse(localStorage.getItem(key));
        str_ += `

       <tr sid="${val.sid}" rel="vendorSysNo_4092">
                                                <td align="center" valign="middle" class="pt20"><input class="vm cbx"
                                                        type="checkbox"></td>
                                                <td valign="top" class="pt20 pb">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">

                                                        <tbody>
                                                            <tr>
                                                                <td class="pb20 pb" width="80" valign="top">
                                                                    <a href="#" title="${val.Protitle}"><img
                                                                            src="${val.img}"
                                                                            alt="${val.Protitle}"
                                                                            style="width:80px"></a>

                                                                </td>
                                                                <td valign="top" class="pl10 pb20">
                                                                    <div class="lh120"><a href="#" title="${val.Protitle}"
                                                                            class="funcLink">${val.Protitle}</a></div>
                                                                    <div class="accessoryarea mt10">


                                                                    </div>

                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td align="center" valign="middle" class="pt20">
                                                    <span class="Arial14">¥${val.price}</span>
                                                </td>
                                                <td align="center" valign="middle" class="pt20">
                                                    <div class="center">
                                                        <input maxlength="3" class="textbox vm" type="text" value="${val.num}"
                                                            id="Quantity_457794">

                                                        <span class="inlineblock vm">
                                                            <span class="plusminus sAdd" >
                                                            </span>
                                                            <span class="plusminus1 minus sReduce">
                                                            </span>
                                                        </span>

                                                    </div>

                                                    <div class="center mt10">
                                                        <span class="limitcount">限购200</span>
                                                    </div>

                                                </td>
                                                <td align="center" valign="middle" class="pt20">
                                                    <span class="orange Arial14 sPrice" >￥${val.price}</span>
                                                </td>
                                                <td align="center" valign="middle" class="pt20 pr10">
                                                    <div class="right"><a class="funcLink sDelete" href="javascript:void(null);">删除</a></div>

                                                    <div class="mt5 right"><a class="funcLink" id="moveOut_457794"
                                                            level="3" cid="shoppingCart.moveOut" href="#">移入收藏夹</a></div>


                                                </td>
                                            </tr> 
   `;


        //    zPrice += Number($("#sPrice").html())
        //    console.log(zPrice)
    }
    $("#VendorSysNo_4092").html(str_);
    // $("#money").html(zPrice)
})()






function Car() {
    this.price = 0;
}
$.extend(Car.prototype, {
    init: function () {
        this.addList();
        this.reductList();
        this.delList();
    },
    addList: function () {
        var _this = this;
        $(".sAdd").click(function () {
            //input的页面数量 
            var num = Number($(this).parent().prev().val());
            $(this).parent().prev().val(num + 1);
           
            // //商品localstorage的数量
            // var tid = $(this).parent().parent().parent().parent().attr("sid");
         
            // var json = JSON.parse(localStorage.getItem(tid));
           
            // json.num++;
            // localStorage.setItem(tid, JSON.stringify(json));

            //一个商品的总计
            var str = $(this).parent().parent().parent().prev().children(0).html().slice(1);//获取单价
            var p = Number($(this).parent().prev().val()) * Number(str);//单价*数量
          
            $(this).parent().parent().parent().next().children(0).html("￥" + p.toFixed(2));
            _this.goodsNum();
        })

    },
    reductList: function () {
        var _this = this;
        $(".sReduce").click(function () {

            //商品localstorage的数量
            // var tid = $(this).parent().parent().parent().parent().attr("sid");
            // var obj = JSON.parse(localStorage.getItem(tid));
            // obj.num <= 1 ? 1 : obj.num--;
            // localStorage.setItem(tid, JSON.stringify(obj));

            //页面上的商品数量
            var num = Number($(this).parent().prev().val());
            if (num <= 1) {
                $(this).parent().prev().val(1);
            } else {
                $(this).parent().prev().val(num - 1);
            }
            //一个商品的总计
            var str = $(this).parent().parent().parent().prev().children(0).html().slice(1);//获取单价
            console.log(str)
            var p = Number($(this).parent().prev().val()) * Number(str);//单价*数量
            $(this).parent().parent().parent().next().children(0).html("￥" + p.toFixed(2));
            _this.goodsNum();

        })
    },
    goodsNum: function () {

        //总计
        var zPrice = 0;
        for (var i = 0; i < localStorage.length; i++) {
            zPrice += Number($(".sPrice").html().slice(1))
            console.log(zPrice)
        }
        $("#money").html("￥" + zPrice);
        $("#producesum").html("￥" + zPrice);
    },
  
    delList: function () {
        $(".sDelete").click(function () {
            //localStorage删除
            var tid = $(this).parent().parent().parent().attr("sid");
            localStorage.removeItem(tid);

            //页面删除
            $(this).parent().parent().parent().remove();

        });
    },

})

new Car().init();
