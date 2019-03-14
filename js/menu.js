$(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 30){
            $("body").addClass("sticky-header display-none ");
        }else{
            $("body").removeClass("sticky-header display-none");
        }
    })
})