define(function () {

    function search() {
        
        $("#search").keydown(() => {
            $.ajax({
                type: "get",
                url: "/Ajax/Common/AutoFilledKeywords.aspx?Keyword=" + $("#search").val(),
                processData: false,
                dataType: "json",
                // data: "" ,
                success: function (data) {
                    // console.log(data)
                    getData(data)
                }
    
            })
            function getData(data) {
                var str = "";
                for (var i = 0; i < data.Data.length;i++ ){
                    str = `
                    <li>${data.Data[i].Keyword}</li>
                    `
                    $(".searchbar>ul").append(str);
                }
                $(".searchbar>ul>li").click(function(){
                    $("#search").val(($(".searchbar>ul>li").eq($(this).index()).html()))            
                })
                $("#sec").click(function(){
                    $(".searchbar>ul").hide();
                })
                 
               
            }
        })

    }
    return {
        init: search
    }

});


