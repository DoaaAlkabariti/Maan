$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 500){
            $('.navbar').addClass ('solid');
            // $('.backToTop').addClass ('visible');
        }else if (scrollTop == 0){
            $('.navbar').removeClass('solid');
            // $('.backToTop').removeClass('visible');
        }
    });

});
