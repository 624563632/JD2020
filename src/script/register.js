var username = document.querySelector('.phone input')
var pass = document.querySelector('.checking input')
var register = document.querySelector('.register')
var toLogin = document.querySelector('.toLogin')



 // 点击注册
register.onclick = function(){
    toLogin.href = "./login.html";
    setCookie({
        key: username.value,
        val: pass.value,
        days: 2,
    });
    alert('注册成功')
    // toLogin.setAttribute("href","./login.html")
    
}



// 设置cookie
function setCookie(options){
    if (!options.key || !options.val){
        throw new Error('设置失败，key和val是必填参数！');
    }
    options.domain = options.domain || '';
    options.path = options.path || '';
    options.days = options.days || 0;

    if (options.days !== 0) {
        var d = new Date();
        d.setDate(d.getDate()+options.days);
        document.cookie = options.key+'='+escape(options.val)+'; domain='+options.domain+'; path='+options.path+'; expires='+d;
    } else {
        document.cookie = options.key+'='+escape(options.val)+'; domain='+options.domain+'; path='+options.path;
    }
}


