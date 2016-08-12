/*
    Theme Name: SALT project
    Author:  Company Name
    Author URL: WebURL
    Description: salt 2016.
    Document   : Framework
    Created on : August 8, 2016, 10:50:00 AM
*/
/*===================================================================================*/
/*  DEVICE DETECTION
/*===================================================================================*/



$(document).ready(function () {
    $('.menuTrigger').on("click", function () {
        $(this).toggleClass('menuToggle');
        $('.visit_suite_modal').hide();
        $('.visit_suite').removeClass('modalToggle');
        $('.register_interest_modal').hide();
        $('.register_interest').removeClass('modalToggle');
        $('.menu-modal').slideToggle('2000', "swing", function () {});
    });

    $('.visit_suite').on("click", function () {
       // $('body').addClass('nav_blk');
        $(this).toggleClass('modalToggle');
        
        $('.menu-modal').hide();
        $('.menuTrigger').removeClass('menuToggle');
        $('.register_interest_modal').hide();
        $('.register_interest').removeClass('modalToggle');
        $('.visit_suite_modal').slideToggle('2000', "swing", function () {});
    });

     $('.visit_suite').on("click",function () {

        if($('body').hasClass('visit')){
        $('body').removeClass('visit');
        }else{
        $('body').addClass('visit');
        }

       if($('body').hasClass('register') || $('body').hasClass('main_nav')){
        $('body').removeClass('register');
        $('body').removeClass('main_nav');
        }
    });
    $('.register_interest').on("click",function () {
        
        if($('body').hasClass('register')){
        $('body').removeClass('register');
        }else{
        $('body').addClass('register');
        }

        if($('body').hasClass('visit') || $('body').hasClass('main_nav')){
        $('body').removeClass('visit');
        $('body').removeClass('main_nav');
        }
    }); 
    $('.menuTrigger').on("click",function () {
        
        if($('body').hasClass('main_nav')){
        $('body').removeClass('main_nav');
        }else{
        $('body').addClass('main_nav');
        }

        if($('body').hasClass('visit') || $('body').hasClass('register')){
        $('body').removeClass('visit');
        $('body').removeClass('register');
        }
    }); 

    $('.register_interest').on("click", function () {
        $(this).toggleClass('modalToggle');
        $('.menu-modal').hide();
        $('.menuTrigger').removeClass('menuToggle');
        $('.visit_suite_modal').hide();
        $('.visit_suite').removeClass('modalToggle');
        $('.register_interest_modal').slideToggle('2000', "swing", function () {});
    });
    
      $('.visit_suite_close').on("click", function () {
             $('.visit_suite').trigger('click');
        });
    
    $('.register_close').on("click", function () {
             $('.register_interest').trigger('click');
        });
    
    
    
//        $('.register_interest, .visit_suite ').on("click", function () {
//             $('body').addClass('nav_blk');
//        });
//    
    
    
     
  
  //$('ul.accordianSubMenu').prev('a').addClass('submenu');
  $('ul.accordianMenu li').on('click', function(){
     
  $('ul.accordianSubMenu').removeClass('active');
   //$('ul.accordianMenu li').children('a').removeClass('current');
  $('ul.accordianSubMenu').slideUp(); 
 	$(this).children('ul.accordianSubMenu').addClass('active');
  //$(this).children('ul.accordianSubMenu').addClass('active');
    
    if($(this).children('ul.accordianSubMenu').hasClass('active')){
      $(this).children('a').addClass('current');
      $('.active').clearQueue();
      	$('.active').slideToggle();
          
    }
 
    
});
    
 
    
 /*===================================================================================*/
    /*	PAGE HEIGHT
    /*===================================================================================*/
    
    $(window).resize(function () {
        h = $(window).height();
        h = (h < 700) ? 700 : h;
        $('.main_banner').height(h);
    });
    h = $(window).height();
    h = (h < 700) ? 700 : h;
    $('.main_banner').height(h);
    
    
});


$(function () {
    /*===================================================================================*/
    /*	SCROLL TOP LINK
    /*===================================================================================*/

    $('.scroll a').click(function () {


        $(".menu_area li").removeClass("active");
        $(this).closest('li').addClass('active');
        var pageid = $(this).attr('href').split('#');
        var id = pageid[1];
        //$(".menu-"+id).addClass('active');
        pageid = '#' + pageid[1];
        pos = $(pageid).offset();
        $('html, body').animate({
            scrollTop: pos.top - 70
        }, 800, function () {
            //window.location =pageid;
            history.pushState(null, null, pageid);
        });
        return false;
    });

});


$(window).scroll(function () {
    /*===================================================================================*/
    /*	HEADER SCROLL COLOR CHANGE
    /*===================================================================================*/

    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("header").addClass("bg_change");
    } else {
        $("header").removeClass("bg_change");

    }

});

