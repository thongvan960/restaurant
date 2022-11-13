 $(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('#main-nav').addClass('arctica-sticky');
        }
        else{
            $('#main-nav').removeClass('arctica-sticky');
        }
    });
    //  Restaurant //
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    });
   // Menu Food//
    $('.gallery').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        
        }
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
          $('.scroll-top').fadeIn(600);
        } else {
          $('.scroll-top').fadeOut(600);
        }
      });
      $('.scroll-top').on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('.magnific-images').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});  
 