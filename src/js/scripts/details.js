function ProduceDetails() {
    this.url = null;
    this.produceNum = null;
    this.str = "";
}
$.extend(ProduceDetails.prototype, {
    init: function () {
        this.getID();
        this.setData();
        this.obj = {};
       
    },
    getID: function () {
        this.url = $(location).attr("href");
        this.produceNum = url.split("=")[1];
    },
    setData: function () {
        var _this = this;
        $.ajax({
            type: "get",
            url: "../../json/data.json",
            processDate: false,
            dataType: "json",
            success: $.proxy(_this.getData, _this)
        })
    },
    getData:function(data){
        for(var i=0;i<data.length;i++){

            if (this.produceNum == data[i].ProductID){
              
                this.str = ` <div class="goods_all">
                        <div class="goods_prev">
                            <!-- 放大镜 -->
                            <div id="box">
                                <div id="small" class="small">
                                    <img src="../img/${data[i].ImageUrl}" alt="" />
                                    <img src="../img/${data[i].ImageUrl}" alt="" />
                                    <img src="../img/${data[i].ImageUrl}" alt="" />
                                    <img src="../img/${data[i].ImageUrl}" alt="" />
                                </div>
                                <div id="mask"></div>
                                <div id="big">
                                    <img src="../img/${data[i].ImageUrl}" class="bigImage" />
                                    <img src="../img/${data[i].ImageUrl}" class="bigImage" />
                                    <img src="../img/${data[i].ImageUrl}" class="bigImage" />
                                    <img src="../img/${data[i].ImageUrl}" class="bigImage" />
                                </div>
                                <ul id="bottom">
                                    <li><img src="../img/${data[i].ImageUrl}" alt="" /></li>
                                    <li><img src="../img/${data[i].ImageUrl}" alt="" /></li>
                                    <li><img src="../img/${data[i].ImageUrl}" alt="" /></li>
                                    <li><img src="../img/${data[i].ImageUrl}" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt10"></div>
                        <div class="goods_intro">
                            <div class="goods_title" ><h1 id="productTitle">${data[i].Title}</h1><p></p>
                            </div>
                            <div class="goods_info">
                                <ul>

                                    <li>
                                        <div class="goods_info_name">品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：</div>
                                        <div class="godds_info_data">

                                            <a href="#" title="${data[i].Title}" target="_blank">
                                               ${data[i].Title.substr(0,2)}
                                            </a>

                                        </div>

                                    </li>
                                    <li>
                                        <div class="goods_info_name">产品型号：</div>
                                        <div class="godds_info_data">${data[i].ProductSysNo} 黑色</div>
                                    </li>
                                    <li class="goods_price_now">
                                        <div class="goods_info_name" id="pricecontent" v="新蛋价">新&nbsp;&nbsp;蛋&nbsp;&nbsp;价：</div>
                                        <div class="godds_info_data">
                                            <span id="priceValue">

                                                <span class="clf76"><em>¥&nbsp;</em><strong class="fs30" id="Produceprice">${data[i].FormatedPrice}</strong></span>

                                            </span>


                                        </div>

                                    </li>
                                    <li class="goods_info_choose goods_info_support">
                              
                                        <div class="goods_info_name">商品支持：</div>
                                        <div class="godds_info_data">

                                            <a href="javascript:void(0)" class="goods_info_promise_logo promise_seven_day_off"
                                                title="不支持7天无理由退换货">不支持无理由退</a>

                                        </div>
                                    </li>
                                    <li class="goods_info_choose productProperty">
                                        <div class="goods_info_name lh29">颜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色：</div>
                                        <div class="godds_info_data cl000 ">

                                            <a ref="noBlank" class="common_choose pr10  common_choose_cur" href="javascript:void(0);"
                                                title="黑色" target="_self">
                                                黑色<s class=""></s></a>

                                            <a ref="noBlank" class="common_choose pr10 " href="https://www.newegg.cn/Product/A04-112-6AR.htm?switch=1"
                                                title="碳晶灰" target="_self">
                                                碳晶灰</a>

                                        </div>
                                    </li>

                                    <li class="goods_info_choose productProperty">
                                        <div class="goods_info_name lh29">列&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;表：</div>
                                        <div class="godds_info_data cl000 ">

                                            <a ref="noBlank" class="common_choose pr10 " href="https://www.newegg.cn/Product/A04-112-69P.htm?switch=1"
                                                title="18-135套机" target="_self">
                                                18-135套机</a>

                                            <a ref="noBlank" class="common_choose pr10 " href="https://www.newegg.cn/Product/A04-112-69Q.htm?switch=1"
                                                title="XF35" target="_self">
                                                XF35</a>

                                            <a ref="noBlank" class="common_choose pr10 " href="https://www.newegg.cn/Product/A04-112-65Q.htm?switch=1"
                                                title="机身" target="_self">
                                                机身</a>

                                            <a ref="noBlank" class="common_choose pr10  common_choose_cur" href="javascript:void(0);"
                                                title="18-55套机" target="_self">
                                                18-55套机<s class=""></s></a>

                                        </div>
                                    </li>
                                    <li class="goods_info_cnts" id="buyQty">
                                        <div class="goods_info_name">数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</div>
                                        <div class="godds_info_data posr">
                                            <span class="plus_minus minus" ref1="1">-</span>
                                            <input class="num num-input" type="text" value="1" maxlength="3" autocomplete="off">
                                            <span class="plus_minus plus" ref1="">+</span>
                                            <span class="godds_cnts_tips"></span>

                                            <span style="color:green">&nbsp;&nbsp;&nbsp;&nbsp;库存：有货</span>


                                        </div>
                                    </li>

                                    <li class="goods_info_answer" id="productTips" style="">
                                        <div class="goods_info_name"></div>
                                        <div class="godds_info_data">已选择 “<strong>黑色、18-55套机</strong><strong></strong>”</div>
                                    </li>
                                </ul>
                                <div class="goods_buy_btns " id="operations">
                                    <a id="quickBuy" class="pro_common_add_btn pro_common_org  btn_mrg" title="立即购买"
                                        href="../html/shoppingcar.html">立即购买</a>

                                    <a id="addToCart" class="pro_common_add_btn pro_common_addShoppingCart ie6png"
                                        title="加入购物车" href="../html/shoppingcar.html">加入购物车</a>
                                </div>
                                <ul class="mt15">
                                </ul>
                                <div id="middleBanner" class="mt10"></div>
                            </div>
                        </div>
                    </div>`

                  
            }
        }
        $("#tab1").html(this.str)
        this.onAdd();
        this.addList();
    },
    //加减按钮
    onAdd : function () {
        $(".plus").on("click", function () {
            var a = Number($(".num-input").val()) + 1;
            console.log(a)
            $(".num-input").val(a);
        })
        $(".minus").on("click", function () {
            var a = Number($(".num-input").val()) - 1;
            if (a < 1) {
                $(".num-input").val(1);
            } else {
                $(".num-input").val(a);
            }
        })
    },
    //点击加购，将id和数量存入localStorage,
   addList : function () {
       var obj = {
           sid: this.produceNum,
           img: $("#bottom>li>img").eq(0).attr("src"),
           price: $("#Produceprice").html(),
           Protitle: $("#productTitle").html(),
           num: $(".num-input").val()
       }
      console.log(obj)
       $("#addToCart").click(function () {
            obj.num = $(".num-input").val();
            console.log(obj);
            var strdata = JSON.stringify(obj);
           localStorage.setItem(obj.sid,strdata);
        });
       $("#quickBuy").click(function () {
           obj.num = $(".num-input").val();
           console.log(obj);
           var strdata = JSON.stringify(obj);
           localStorage.setItem(obj.sid,strdata);
       });
    }

})
new ProduceDetails().init()