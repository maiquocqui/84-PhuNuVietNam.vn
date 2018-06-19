"use strict";

var DOMAIN_URL = 'http://domain.com';
var VIENSOI_APP = {
    "ACTIVE_FIXED_HEADER": false,
    "HEADER_TRANPARENT": false,
    "NAV_CHANGE_ON": "sm",
    "ACTIVE_HEADER_POSITION": 1,
    "ACTIVE_PADDING_MAIN": false,
    "ACTIVE_FIXED_FOOTER": false,
    "DISPLAY_FOOTER": 600,
    "ACTIVE_RESPONSIVE": true,
    "ACTIVE_OFFCANVAS": true,
    "ACTIVE_BACKTOTOP": true,
    "DISPLAY_BACKTOTOP": 100,
    "CHANGE_GRID": 991,
    "DEV_MODE": true,
    "DEV_MODE_GIRD_FULL": false,
    "MEGA_MENU": false,
    "MEGA_MENU_COL": 5
};
$(document).ready(function () {
    $('.header-menu').scrollToFixed({
        zIndex: 1000,
        preFixed: function preFixed() {
            $(this).css('background', '#fff');
        },
        postFixed: function postFixed() {
            $(this).css('background', '#f7f7f7');
        }
    });
    if ($(window).width() < 1200) {
        $('.headline-list > .row').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    $('.btn-showmenu').click(function () {
        $('.overlay').fadeIn(500);
        $('.menu').toggleClass('open');
    });
    $('.btn-showsub').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(500);
    });
    $('.overlay').click(function () {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
    });
    $('.search-toggle').click(function () {
        $('.search-wrap').slideToggle(300);
        $(this).toggleClass('active');
    });


    $('.news-group .home-news').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: false
    });

    $('.newspaper-nav .item').click(function () {
        $('.newspaper-nav .item').removeClass('active');
        $(this).addClass('active');
        var imgsrc = $(this).find('img').attr('src');
        var imgtitle = $(this).find('img').attr('title');
        $('.newspaper-slide .item .newspaper figure .news-img img').attr('src', imgsrc);
        $('.newspaper-slide .item .newspaper figure figcaption').html(imgtitle);
    });

    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy'
    });

    $('.working-place .place-group .place-name').click(function () {
        var _parent = $(this).parent();
        if (_parent.hasClass('active')) {
            _parent.removeClass('active');
            _parent.find('.place-form').slideUp(300);
        } else {
            $('.working-place .place-group').removeClass('active');
            $('.working-place .place-group .place-form').slideUp();
            _parent.addClass('active');
            _parent.find('.place-form').slideDown(300);
        }
    });

    $('.e-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    });

    $('.ad-fixed').scrollToFixed({
        zIndex: 10,
        marginTop: 80,
        limit: $('.news-other').offset().top - $('.ad-fixed').outerHeight() - 30
    });
});

$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', 
        topDistance: '300', 
        topSpeed: 300, 
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: 'Scroll to top', 
        activeOverlay: false 
    });
});
