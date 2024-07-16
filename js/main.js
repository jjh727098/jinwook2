$(function(){
       /* -------------------------- header scroll --------------------------- */
       let $header = $('.nav_defalut');
       let headerOst = $header.offset().top;
   
       let menu = $header.find('nav>ul>li'),
           headerHeight =  $header.outerHeight(),
           newHeight = 0,
           subMenu = menu.find('ul')
   
           let btt = $('#go-top');
       
           $(window).scroll(function(){
               if($(this).scrollTop() > 1200){
                   btt.fadeIn();
               }else{
                   btt.fadeOut();
               }
           });
           btt.click(function(e){
               e.preventDefault();
               $('body,html').animate({scrollTop:0},500);
           });
           
       
       $(window).scroll(function(){
           let sct = $(this).scrollTop();
           if(sct > headerOst){
               $header.addClass('active');
           }else{
               $header.removeClass('active');
           }
       });
   
       subMenu.each(function(){
           if($(this).outerHeight()>newHeight){
               newHeight = headerHeight + $(this).outerHeight();
           }
       });
   
       $('nav ul:nth-child(1)').hover(
           function(){		
               $header.stop().animate({height:newHeight});
           },
           function(){
               $header.stop().animate({height:headerHeight});
           }
       );
   
    /* -------------------------- scroll event animation --------------------------- */

    let animateTarget = $('.animate__animated[data-effect]');

        $(window).scroll(function(){
        let sct = $(this).scrollTop();

        animateTarget.each(function(){
        let targetOst = $(this).offset().top - 700;


        if(sct>targetOst){
        let targetClass = $(this).attr('data-effect');
        $(this).addClass(targetClass);
        }
        });


    /* -------------------------- count up --------------------------- */
    if($('.infomation_conuters').length){

    
    let winSCT = $(window).scrollTop();
    let counters = $('.infomation_conuters');
    let counterNums = counters.find('.counter_list h3');
    let courtersOST = counters.offset().top - 800;

    if(winSCT>courtersOST){
        if(!excuted){
            counterNums.each(function(){
                let targetNum = $(this).attr('data-target');
                let speed = 1;
                let add = 5;

                if(targetNum > 900){
                    speed = 1;
                    add = 5;
                }
                if(targetNum > 2000){
                    speed = 1;
                    add = 5;
                }
                if(targetNum > 10000){
                    speed = 1;
                    add = 100;
                }
                let num = 0;
                
                    let numAnime = setInterval(()=>{
                        num += add;                       

                        if(num == targetNum || num > targetNum){
                            num = targetNum;
                            clearInterval(numAnime);
                        }
                        $(this).text(num);
                        
                    }, speed);                 
                
            });
            excuted = true;
        }
    }
}

    }); //scroll event

       /* -------------------------- slide --------------------------- */
    if($('.pager_slider').length){
        $('.pager_slider').bxSlider({
            controls:false,
            auto:true,
            autoHover:true
        });
    }

    if($('.slides').length){

    
    let $slider;

    function buildSliderConfiguration() {

        let deviceWidth = $(window).width();
        
        let slideNum;
        let slideMargin;
    
        if (deviceWidth < 480) {
            slideNum = 1;
            slideMargin = 30;
        } else if (deviceWidth < 768) {
            slideNum = 1;
            slideMargin = 30;
        } else if (deviceWidth < 900){
            slideNum = 1;
            slideMargin = 30;
        }
        else if (deviceWidth < 1170) {
            slideNum = 2;
            slideMargin = 30;
        } else {
            slideNum = 3;
            slideMargin = 30;
        }
    
        return {
            slideWidth: 270,
            autoControls: false,
            auto: true,
            autoHover: true,
            adaptiveHeight: true,
            pager: true,
            moveSlides: 1,
            slideMargin: slideMargin, 
            minSlides: slideNum,  
            maxSlides: slideNum,
            responsive: true  ,  
            touchEnabled: false
        };
    }
    
    function configureSlider() {
        var config = buildSliderConfiguration();
    
        if ($slider && $slider.reloadSlider) {
            $slider.reloadSlider(config);
        } else {
            $slider = $('.slides').bxSlider(config);
        }
    }

    $(window).on("orientationchange resize", configureSlider);
    configureSlider();

}

/*---------------------------- land -------------------------*/
if($('.landbg').length){

        $('[data-parallax]').parallax({
            datanaturalWidth:'auto',
            naturalHeight:'auto'
        });

}

/*---------------------------- popup -------------------------*/
if($('.modal_box').length){
let popup = document.querySelector('.modal_box');
let popupCheckBox = document.querySelector('#box_modal_close');
let popupClose = popup.querySelector('.box_modal_close');

function setCookie(name,value,day){
    let date = new Date();
    date.setDate(date.getDate() + day);

    let cookieContent = '';
    cookieContent += `${name}=${value};`;
    cookieContent += `Expires=${date.toUTCString()}`;            

    document.cookie = cookieContent;
}

function getCookie(name){
    let visited = false;
    let cookies = document.cookie.split(';');

    for(let cookie of cookies){
        if(cookie.indexOf(name) > -1){
            visited = true;
        }
    }
    if(visited){
        popup.style.display = 'none'; 
    }else{
        popup.style.display = 'block'; 
    }
}        
getCookie('ABC_2');

//쿠키 삭제 함수
function delCookie(name,value){           

    let date = new Date();
    date.setDate(date.getDate() - 1);

    let cookieContent = '';
    cookieContent += `${name}=${value};`;
    cookieContent += `Expires=${date.toUTCString()}`;            

    document.cookie = cookieContent;
}            


popupClose.addEventListener('click', ()=>{
    popup.style.display = 'none';
    if(popupCheckBox.checked){ 
        setCookie('ABC_2','Main Page',1);
    }else{
        delCookie('ABC_2','Main Page');
    }
});

} //popup

        
}); //ready
