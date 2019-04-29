$(document).ready(function(){

    $('.main_btna').on('click', modalShow);
    $('.close').on('click', modalHide);

    function modalShow(){
        $('.overlay').animate({
            opacity: 'show'
        }, 600);
        $('.modal').slideDown(600);
    }

    function modalHide(){
        $('.overlay').animate({
            opacity: 'hide'
        }, 600);
        $('.modal').slideUp(600);
    }

});