$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-links');
    });
    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-links');
        if($(window).scrollTop()>30){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');
        }
    })
})