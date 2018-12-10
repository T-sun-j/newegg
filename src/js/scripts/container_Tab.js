define(["jquery"], function () {
    function container_Tab() {
        this.init = function () {
            this.getdata();
            this.layui();
        },
            this.getdata = function () {
                var _this = this;
                $.ajax({
                    type: "get",
                    url: "../../json/data.json",
                    processDate: false,
                    dataType: "json",
                    success: $.proxy(_this.setdata, _this)
                })
            },
            this.setdata = function (data) {
                var str_ = "";
                var str = "";
                var str2 = "";
                var str3 = "";
                var str4 = "";
                for (var i = 0; i < 20; i++) {
                    str_ = `  <li class="current" index="0">
                    <p class="img">
                        <a href="../html/list.html?id=${data[i].ProductID}"><img src="../img/${data[i].ImageUrl}" alt="${data[i].Title}">
                        </a></p>
                    <p class="title"><a href="">${data[i].Title}</a></p>
                    <p priceline=""><span class="price">¥${data[i].FormatedPrice}</span></p>
                </li> `
                    $("#main").append(str_)
                    console.log(str_)
                }
                for (var i = 0; i < 5; i++) {
                    str = `<li>
                                <p class="img"><a target="_blank" title="${data[i].Title}" href="../html/list.html?id=${data[i].ProductID}"><img
                                            alt="${data[i].Name}" src="../img/${data[i].ImageUrl}"></a>
                                </p>
                                <p class="title"><a target="_blank" title="${data[i].Title}" href="../html/list.html?id=${data[i].ProductID}">${data[i].Title}</a></p>
                                <p class="priceline"> <span class="price">¥${data[i].FormatedPrice}</span></p><a target="_blank" class="egg_btns_t1 egg_btns_org"
                                    href="../html/list.html?id=${data[i].ProductID}">抢购</a>
                            </li>`
                    $("#Container_Tab1>ul").append(str);
                }

                for (var i = 5; i < 10; i++) {
                    str2 = `<li>
                                <p class="img"><a target="_blank" title="${data[i].Title}" href="../html/list.html?id=${data[i].ProductID}"><img
                                            alt="${data[i].Name}" src="../img/${data[i].ImageUrl}"></a>
                                </p>
                                <p class="title"><a target="_blank" title="${data[i].Title}" href="../html/list.html?id=${data[i].ProductID}">${data[i].Title}</a></p>
                                <p class="priceline"> <span class="price">¥${data[i].FormatedPrice}</span></p><a target="_blank" class="egg_btns_t1 egg_btns_org"
                                    href="../html/list.html?id=${data[i].ProductID}">抢购</a>
                            </li>`
                    $("#Container_Tab2>ul").append(str2);
                }
                for (var i = 12; i <= 16; i++) {
                    str3 = `<li>
                                <p class="img"><a target="_blank" title="${data[i].Title}" href="../html/list.html?id=${data[i].ProductID}"><img
                                            alt="${data[i].Name}" src="../img/${data[i].ImageUrl}"></a>
                                </p>
                                <p class="title"><a target="_blank" title="${data[i].Title}" href="../html/list.html?id=${data[i].ProductID}">${data[i].Title}</a></p>
                                <p class="priceline"> <span class="price">¥${data[i].FormatedPrice}</span></p><a target="_blank" class="egg_btns_t1 egg_btns_org"
                                    href="../html/list.html?id=${data[i].ProductID}">抢购</a>
                            </li>`
                    $("#Container_Tab3>ul").append(str3);
                }
                for (var i = 15; i < 20; i++) {
                    str4 = `<li>
                                <p class="img"><a target="_blank" title="${data[i].Title}" href="../html/list.html?id=${data[i].ProductID}"><img
                                            alt="${data[i].Name}" src="../img/${data[i].ImageUrl}"></a>
                                </p>
                                <p class="title"><a target="_blank" title="${data[i].Title}" href="../html/list.html?id=${data[i].ProductID}">${data[i].Title}</a></p>
                                <p class="priceline"> <span class="price">¥${data[i].FormatedPrice}</span></p><a target="_blank" class="egg_btns_t1 egg_btns_org"
                                    href="../html/list.html?id=${data[i].ProductID}">抢购</a>
                            </li>`
                    $("#Container_Tab4>ul").append(str4);
                }
            },
            this.layui = function () {
                var _this = this;
                layui.use('element', function () {
                    var element = layui.element;
                    // element模块的实例
                    // 返回的element变量为该实例的对象，携带一些用于元素操作的基础方法

                    element.on('tab', function (data) {
                        // console.log(this); //当前Tab标题所在的原始DOM元素
                        $("#ContainerTab>div").hide()
                        $("#ContainerTab>div").eq(data.index).show()

                        // console.log($("#ContainerTab>div").eq(data.index)); //得到当前Tab的所在下标
                        // console.log(data.elem); //得到当前的Tab大容器
                    });

                })
            }


    }



    return new container_Tab().init()

})


