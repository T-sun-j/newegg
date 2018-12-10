
function Login() {
    var str = document.cookie;
    var arr = str.replace(/\s+/g, "").split(";");
    for (var i = 0; i < arr.length; i++) {
        var brr = arr[i].split("=");
        if (brr[0] == "phone") {          
            var userphone = brr[1];
        }
        if (brr[0] == "pwd") {
            var userpwd = brr[1];
        }
    }

    $("#login").click(() => {
        if ($("#name").val() == userphone && $("#pwd").val() == userpwd) {
            $(location).attr("href","../html/index.html?"+userphone)
        } else {
            alert("登录失败");
        }
    })
   
}



new Login();
