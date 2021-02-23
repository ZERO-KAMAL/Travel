$(window).scroll(function(){
    if($(this).scrollTop()> 100){
        $('.bg-light').addClass("fixed")
    }else{
        $('.bg-light').removeClass("fixed")
    }
})
$(' .testimonial ').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
})