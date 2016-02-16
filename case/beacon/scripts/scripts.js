 // Intro Carousel
 $(function () {

       $('.top-slider').owlCarousel({
        items:1,
        autoPlay:true,
        singleItem:true,
        transitionStyle:true,
        pagination: true

       });


       // Gallery Carousel
       $("#carousel-gallery").owlCarousel({
          items: 4,
          // itemsDesktop: [1199,4],
          itemsDesktopSmall: [991,1],
          itemsTablet: [768,2],
          slideSpeed: 800,
          navigation: true,
          navigationText: ["<i class='mdi mdi-arrow-left'></i>","<i class='mdi mdi-arrow-right'></i>"],
          pagination: true,
       });
       
       // Animation on Scroll
       var wow = new WOW(
         {
           boxClass:     'wow',      
           animateClass: 'animated', 
           offset:       0,          
           mobile:       false,      
           live:         false       
         }
       );
       wow.init();
       
 })
      