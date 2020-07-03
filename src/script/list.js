$(function(){
    // 进入页面,加载数据
    $.ajax({
        url:"../api/data.json",
        type:'get',
        data:'type=3',
        dataType:'json',
        success:function(json){
            $.each(json,function(index,item){
                var goodsDom = `
                <li>
                    <a href="./detail.html">
                        <div class="goods">
                            <img src="${item.imgurl}" alt="">
                            <p>${item.title}</p>
                            <div class="price">￥<span>${item.price}</span></div>
                        </div>
                    </a>
                </li>
                `
                $('.goodsList').append(goodsDom)
            })
        }
    });
    // // 点击加入购物车
    // $('.content').on('click','.goods div',function(){
    //     console.log(111)
    //     // 把点击的商品编号记录下来
    //     // 判断localstorage中是否有记录
    //     if(localStorage.getItem('goods')){
    //         console.log(112)
    //         var goodsArr = JSON.parse( localStorage.getItem('goods') )
    //     } else {
    //         console.log(2233)
    //         var goodsArr = []
    //     }

    //     // 获取当前点击商品的商品代码
    //     var code = $(this).attr('code')

    //     // 记录是否加入过购物车
    //     var hasCode = false

    //     // 遍历数组,判断是否已经加入过购物车
    //     $.each(goodsArr,function(index,item){
    //         console.log(222)
    //         if(item.code === code){
    //             item.num++
    //             hasCode = true
    //         }
    //     })

    //     // 如果没有加入过,num设为1
    //     if(!hasCode){
    //         goodsArr.push( {"code":code,"num":1} )
    //     }
    //     // 数组转换为json格式字符串,存入localStorage
    //     var strArr = JSON.stringify(goodsArr)
    //     localStorage.setItem('goods',strArr)

    //     alert('加入购物车成功')

    // })







})