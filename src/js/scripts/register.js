

//利用cookie实现注册登录效果


function Register() {
    this.check = [false, false];
}
$.extend(Register.prototype, {
    init: function () {
        this.checkPhone();
        this.checkNumber();
        this.nextclick();
        this.checkPwd();
        this.eventBind();
        this.checkqrmm();
        this.checkres();
    },
    eventBind: function () {

        $("#txtPhone").blur($.proxy(this.checkPhone, this));

        $("#register-pwd").blur($.proxy(this.checkPwd, this));
        $("#txtConfirmPwd").blur($.proxy(this.checkqrmm, this));


    },
    checkPhone: function () {
        var reg = /(13|14|15|17|18|19)[0-9]{9}/;
        if (!reg.test($("#txtPhone").val())) {
            this.check[0] = false;
            $("#tipPhone").show();
        } else {
            this.check[0] = true;
            $("#tipPhoneRight").show();
            $("#tipPhone").hide();
            $("#step2").show();
        }
    },
    checkNumber: function () {
        if ($("#txtCodeForEmail").val() == $("#imgValidator").val()) {
            this.check[1] = true;
            $("#tipCodeForEmail").hide()
        } else {
            $("#tipCodeForEmail").show();
        }
    },
    nextclick: function () {
        $("#nextBtn").click(() => {
            $("#step1").hide();
            $("#step2").show();
        })
    },
    checkPwd: function () {
        $("#txtPwd").keydown(() => {
           
            $(".tipPwd").show();
            $(".pwdStrength").show();
            if ($("#txtPwd").val().length < 5) {
                $(".pwd_text").html("密码强度：弱")
            } else if ($("#txtPwd").val().length > 5 && $("#txtPwd").val().length < 15) {
                $(".pwd_text").html("密码强度：中")
            } else {
                $(".pwd_text").html("密码强度：强")
            }
        })
    },
    checkqrmm: function () {
        if ($("#txtPwd").val() != $("#txtPwd").val()) {
            $("#tipConfirmPwd").show();
        }
    },
    checkres: function () {
        $("#next_step_btn").click(() => {
            document.cookie = "phone=" + $("#txtPhone").val();
            document.cookie = "pwd=" + $("#txtPwd").val();
            $(location).attr("href","../html/login.html")
        })
    }

})
new Register().init();