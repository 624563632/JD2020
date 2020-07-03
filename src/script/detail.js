
// 引入头部和尾部
$('#aheader').load("./header.html")
$('#footer').load("./footer.html")





// 放大镜效果
var max,min,mask,imgCon,preImg;
var x=0,
y=0,
pos=0,
iconList=["../imgs/big1_icon.jpg","../imgs/big2_icon.jpg","../imgs/big3_icon.jpg","../imgs/big4_icon.jpg","../imgs/bigdong_icon.jpg","../imgs/bigren_icon.jpg","../imgs/bigzhi_icon.jpg","../imgs/big1_icon.jpg","../imgs/big2_icon.jpg"],
bnList=[];
var picture = document.querySelector('.picture')
const MASK_WIDTH=203.75;
const MIN_WIDTH=348;
const MAX_WIDTH=500;
const IMAGE_MARGIN=0;
const IMAGE_WIDTH=58;

function ce(type,style){
    let elem=document.createElement(type);
    Object.assign(elem.style,style);
    return elem;
};
init();
function init(){
    var zoom=ce("div",{
        position:'absolute',
        left:"107px",
        top:"260px"
    });
    createMin(zoom);
    createMax(zoom);
    createCarousel(zoom);
    picture.appendChild(zoom);
}

function createMin(parent){
    min=ce("div",{
        position:"absolute",
        width:MIN_WIDTH+"px",
        height:MIN_WIDTH+"px",
        backgroundImage:"url(../imgs/big1.jpg)",
        backgroundSize:"100% 100%",
        border:"1px solid #CCCCCC"
    });
    mask=ce("div",{
        position:"absolute",
        width:MASK_WIDTH+"px",
        height:MASK_WIDTH+"px",
        display:"none",
        backgroundColor:"rgba(180,160,0,0.3)"
    })
    min.appendChild(mask);
    parent.appendChild(min);
    min.addEventListener("mouseenter",mouseHandler);
}

function createMax(parent){
    max=ce("div",{
        position:"absolute",
        width:MAX_WIDTH+"px",
        height:MAX_WIDTH+"px",
        backgroundImage:"url(../imgs/big1.jpg)",
        border:"1px solid #CCCCCC",
        display:"none",
        left:MIN_WIDTH+1+"px"
    });
    parent.appendChild(max);
}

function createCarousel(parent){
    var div=ce("div",{
        position:"absolute",
        width:MIN_WIDTH+2+"px",
        height:"58px",
        top:380+"px"
    })
    var left=ce("div",{
        width:"22px",
        height:"32px",
        top:"13px",
        backgroundImage:"url(../imgs/jiantou.png)",
        backgroundPositionX:"0px",
        backgroundPositionY:"-54px",
        position:"absolute",
    });
    // 复制标签 会将标签的所有标签属性完全复制
    var right=left.cloneNode(false);
    left.style.left="0px";//先复制以后再加
    Object.assign(right.style,{
        right:"0px",
        backgroundPositionX:"-78px",
        backgroundPositionY:"0px",
    })
    bnList.push(left);
    bnList.push(right);
    div.appendChild(left);
    div.appendChild(right);

    var con=ce("div",{
        position:"absolute",
        width:"290px",
        height:"58px",
        left:"35px",
        overflow:"hidden",
    })
    div.appendChild(con);
    createImageCon(con);
    parent.appendChild(div);
    div.addEventListener("click",clickHandler);
}

function createImageCon(parent){
    var width=iconList.length*IMAGE_WIDTH+iconList.length*IMAGE_MARGIN*2-IMAGE_MARGIN;
    imgCon=ce("div",{
        position:"absolute",
        width:width+"px",
        height:"58px",
        left:0,
        transition: "all 0.5s"
    });
    for(var i=0;i<iconList.length;i++){
        var img=ce("img",{
            width:IMAGE_WIDTH-4+"px",
            height:IMAGE_WIDTH-4+"px",
            border:`2px solid rgba(255,0,0,${i==0 ? 1 : 0})`,
            marginLeft:`${i===0 ? '0px' : IMAGE_MARGIN+"px"}`,
            marginRight: IMAGE_MARGIN+"px"
        });
        img.src=iconList[i];
        if(i===0) preImg=img;
        imgCon.appendChild(img);
    }
    imgCon.addEventListener("mouseover",iconMouseHandler);
    parent.appendChild(imgCon);
}

function iconMouseHandler(e){
    if(e.target.nodeName!=="IMG") return;
    if(preImg){
        preImg.style.border="2px solid rgba(255,0,0,0)";
    }
    preImg=e.target;
    preImg.style.border="2px solid rgba(255,0,0,1)"
//    console.log( e.target.src.replace("_icon",""));
    min.style.backgroundImage=max.style.backgroundImage=`url(${e.target.src.replace(/_icon/,"")})`;
}

function mouseHandler(e){
    if(e.type==="mouseenter"){
        mask.style.display=max.style.display="block"
        min.addEventListener("mouseleave",mouseHandler);
        min.addEventListener("mousemove",mouseHandler);
    }else if(e.type==="mousemove"){
        // 获取min块的相对视口位置，矩形
        move(e.clientX,e.clientY);
    }else if(e.type==="mouseleave"){
        mask.style.display=max.style.display="none"
        min.removeEventListener("mouseleave",mouseHandler);
        min.removeEventListener("mousemove",mouseHandler);
    }
}


function move(mouseX,mouseY){
    var rect=min.getBoundingClientRect();
        x=mouseX-MASK_WIDTH/2-rect.x;
        y=mouseY-MASK_WIDTH/2-rect.y;
        if(x<0) x=0;
        if(y<0) y=0;
        if(x>MIN_WIDTH-MASK_WIDTH) x=MIN_WIDTH-MASK_WIDTH;
        if(y>MIN_WIDTH-MASK_WIDTH) y=MIN_WIDTH-MASK_WIDTH;
        mask.style.left=x+"px";
        mask.style.top=y+"px";
        max.style.backgroundPositionX=-x*(MAX_WIDTH/MASK_WIDTH)+"px";
        max.style.backgroundPositionY=-y*(MAX_WIDTH/MASK_WIDTH)+"px";
}


function clickHandler(e){
    var index=bnList.indexOf(e.target)
    if(index<0) return
    if(index===0){
        pos--;
        if(pos<0) pos=0;
    //    imgCon.style.left="0px";
    }else{
        // imgCon.style.left="-380px";
        pos++;
        if(pos>Math.floor(iconList.length/5)){
            pos=Math.floor(iconList.length/5)
        }
    }

    if(pos===Math.floor(iconList.length/5)){
        imgCon.style.left=-(imgCon.offsetWidth-348)+"px"
    }else{
        imgCon.style.left=pos*-348+"px";
    }
   
}

// 选择颜色/白条分期

$('.colorRight').on('click','li',function(){
    console.log(this)
   $(this).css('border','1px solid #e3393c')
   $(this).siblings().css('border','1px solid #ccc')
})



// 加入购物车，数字加减
var ipt = document.querySelector('.number input')
var plus = document.querySelector('.plus')
var cut = document.querySelector('.cut')

plus.onclick = function(){
    ipt.value = parseInt(ipt.value ) + 1
}
cut.onclick = function(){
    if(ipt.value == 1){
        ipt.value = 1
        
    } else{
        ipt.value = parseInt(ipt.value ) - 1
    }
}

// 右侧轮播图

var mySwiper = new Swiper ('.look .swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要前进后退按钮
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }
}) 


