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
    $('.bxslider1').bxSlider({
        pager: false,
         infiniteLoop: true,  
        nextSelector: '#a01 .slider-next',
        prevSelector: '#a01 .slider-prev'
    });
});

$('a[href="#b01"]').one('shown.bs.tab', function (e) {
    $('.bxslider2').bxSlider({
        pager: false,
         infiniteLoop: true,  
        nextSelector: '#b01 .slider-next',
        prevSelector: '#b01 .slider-prev'

    });
});

$('a[href="#c01"]').one('shown.bs.tab', function (e) {
    $('.bxslider3').bxSlider({
        pager: false,
         infiniteLoop: true,  
        nextSelector: '#c01 .slider-next',
        prevSelector: '#c01 .slider-prev'
    });
});


//$(window).resize(function () {
//
//    $('.bxslider1').bxSlider({
//        pager: false,
//         infiniteLoop: true,  
//        nextSelector: '#a01 .slider-next',
//        prevSelector: '#a01 .slider-prev'
//    });
//
//    $('a[href="#b01"]').one('shown.bs.tab', function (e) {
//        $('.bxslider2').bxSlider({
//            pager: false,
//             infiniteLoop: true,  
//            nextSelector: '#b01 .slider-next',
//            prevSelector: '#b01 .slider-prev'
//
//        });
//    });
//
//    $('a[href="#c01"]').one('shown.bs.tab', function (e) {
//        $('.bxslider3').bxSlider({
//            pager: false,
//             infiniteLoop: true,  
//            nextSelector: '#c01 .slider-next',
//            prevSelector: '#c01 .slider-prev'
//        });
//    });
//});