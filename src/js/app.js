require(["config"],function(){
    require(["jquery", "banner_CB", "banner_RT", "banner_CT", "conlist", "search","container_Tab"], 
        function ($, banner_CB, banner_RT, banner_CT, conlist, search, container_Tab){
        banner_CB.init();
        banner_RT.init();
        banner_CT.init();
        conlist.init();
        // hotlist.init();
        search.init();
        // container_Tab.init();
    })
})