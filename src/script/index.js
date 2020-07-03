var mySwiper1 = new Swiper ('.swiper-container', {
    //   direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
    //   effect : 'fade',
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            },
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
      },
      
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })        

    var mySwiper = new Swiper ('.smallImg .swiper-container', {
      loop: true, // 循环模式选项
    //   effect : 'fade',
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            },
      
      
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })  
      //鼠标移出隐藏按钮，移入显示按钮
    mySwiper.el.onmouseover=function(){
      mySwiper.navigation.$nextEl.removeClass('hide');
      mySwiper.navigation.$prevEl.removeClass('hide');
    }
    mySwiper.el.onmouseout=function(){
      mySwiper.navigation.$nextEl.addClass('hide');
      mySwiper.navigation.$prevEl.addClass('hide');
    }
    
    
    var mySwiper3 = new Swiper ('.banCenter .swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    })  

    var mySwiper4 = new Swiper ('.banRight .swiper-container', {
        
        loop: true, // 循环模式选项
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      }) 