$(document).ready(function() {
    // HEADER SCRIPT
    $('.header-menu').scrollToFixed({
        zIndex: 1000,
        preFixed: function() { $(this).css('background', '#fff'); },
        postFixed: function() { $(this).css('background', '#f7f7f7'); }
    });
    if ($(window).width() < 1200) {
        // $('.header-top .search-wrap').insertAfter('.search-toggle');
        // $('header .login').insertAfter('.menu-wrap');
        // $('header .header-main .sitelogo').insertBefore('.menu');
        // $('header .header-main .btn-showmenu').insertBefore('header .header-menu .sitelogo');
        // option2
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
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    $('.btn-showmenu').click(function() {
        $('.overlay').fadeIn(500);
        $('.menu').toggleClass('open');
    });
    $('.btn-showsub').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(500);
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
    });
    $('.search-toggle').click(function() {
        $('.search-wrap').slideToggle(300);
        $(this).toggleClass('active');
    });

    // if ($(window).width() < 576) {
    //     $('.banner-post').insertAfter('.headline-list');
    // }

    // HOME NEWS SLIDE
    $('.news-group .home-news').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: false,
    });

    // NEWSPAPER SLIDE
    // $('.newspaper-slide').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     speed: 500,
    //     dots: false,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     // fade: true,
    //     asNavFor: '.newspaper-nav'
    // });
    // $('.newspaper-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.newspaper-slide',
    //     dots: false,
    //     arrows: false,
    //     speed: 500,
    //     focusOnSelect: true
    // });
    $('.newspaper-nav .item').click(function() {
        $('.newspaper-nav .item').removeClass('active');
        $(this).addClass('active');
        var imgsrc = $(this).find('img').attr('src');
        var imgtitle = $(this).find('img').attr('title');
        $('.newspaper-slide .item .newspaper figure .news-img img').attr('src', imgsrc);
        $('.newspaper-slide .item .newspaper figure figcaption').html(imgtitle);
    });

    // DATETIME PICKER
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
    });

    // POST REQUIREMENT
    $('.working-place .place-group .place-name').click(function() {
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

    // EM-MAG SLIDE
    $('.e-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });

    // SIDEBAR AD FIXED
    $('.ad-fixed').scrollToFixed({
        zIndex: 10,
        marginTop: 80,
        limit: $('.news-other').offset().top - $('.ad-fixed').outerHeight() - 30,
    });
});

$(function() {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});