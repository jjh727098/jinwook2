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


    }); 

var toggle_nav = $('.nav_toggle');
toggle_nav.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('open_nav_toggle');
    $('header').toggleClass('open');
    $('.nav_menu').toggleClass('open');
});
$("header .nav a").click(function(){
    if( $("header").hasClass("open") ){
        $("header").removeClass("open");
        $(".nav_toggle").removeClass("open_nav_toggle");
        $(".nav").removeClass("open");
    }
});

        
}); //ready
