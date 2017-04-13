$(function(){
    FastClick.attach(document.body);
    $("#loadForm .verify").on("click",function(){
        var $btn=$(this);
        var idnumber=$('#loadForm .name').val();
        var submit=$('#loadForm .submit');
        var telephone=$("#loadForm .mobile").val();
        var re = /^(\+86)?1[3,5,8,7](\d{9})$/;
        var idre1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
        var idre2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        var flag=re.test(telephone);
        var flag2=idre1.test(idnumber);
        var flag3=idre2.test(idnumber);
        if(flag2 || flag3){
            if(!flag){
                $("#loadForm .wrong").html("请输入正确的手机号码");
                $("#loadForm .wrong").fadeIn(1000).delay(2000).fadeOut(1000);
                return
            }
        }else{
            $("#loadForm .wrong").html("请输入正确的身份证号码");
            $("#loadForm .wrong").fadeIn(1000).delay(2000).fadeOut(1000);
            return
        }
        $btn.addClass("disabled");
        $btn.attr("disabled", true);
        submit.removeClass("disabled");
        submit.attr("disabled", false);
        var number=60;
        var timer=setInterval(function(){
            number--;
            $btn.val(number+"秒之后获取");
            if(number<=0){
                clearInterval(timer);
                $btn.val("获取验证码");
                $btn.removeClass("disabled");
                $btn.attr("disabled", false);
            }
        },1000)
    })
})