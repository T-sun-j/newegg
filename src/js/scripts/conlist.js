define(function() {
    function conlist(){
        var index = 0;
        $("#hot_sale_a").click(function () {
            index = index + 1;
            if (index == 1) {
                $("#Container_HotSale").animate({ left: -936 }, 1500)
            } else if (index == 2) {
                $("#Container_HotSale").animate({ left: -1862 }, 1500)
            } else if (index == 3) {
                $("#Container_HotSale").animate({ left: -2577 }, 1500)
            } else {
                index = 0;
                $("#Container_HotSale").animate({ left: 0 }, 1500)
            }

        })
    }
    return{
        init: conlist
    }
    
});

