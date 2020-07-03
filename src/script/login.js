var fl2li1 = $('.fl2-li1')
var fl2li2 = $('.fl2-li2')
var floor3 = $('.floor3')
var hiddenfloor = $('.hiddenfloor')



fl2li1.click(function(){
    fl2li1.css("color","#e4393c")
    fl2li2.css("color","#666")
    floor3.css("display","block")
    hiddenfloor.css("display","none")
})

fl2li2.click(function(){
    fl2li2.css("color","#e4393c")
    fl2li1.css("color","#666")
    floor3.css("display","none")
    hiddenfloor.css("display","block")
})


var username = document.querySelector('.phone input')
var pass = document.querySelector('.checking input')
var register = document.querySelector('.register')

// 点击登录
register.onclick = function(){
    console.log(username.value)
    console.log(pass.value)

    var passInp = getCookie(username.value);
    
    if( passInp == pass.value){
        alert("登录成功")
    }else{
        alert("用户名或密码错误")
    }
}


// 获取cookie
function getCookie(key){
    var arr1 = document.cookie.split('; ');//所有cookie分割出来的数组
    var arr2 = [];//每一个cookie分割出来的key和value
    for (var i = 0, len = arr1.length; i < len; i++){
        arr2 = arr1[i].split('=');
        if (arr2[0] === key) {
            return unescape(arr2[1]);
        }
    }
    return null;
}

