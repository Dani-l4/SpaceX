$(function(){
    $('.burger').on('click', function(){
        $('.header__menu, .burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
});