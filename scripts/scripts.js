 // Intro Carousel
 $(function () {

       $('#topSlide').owlCarousel({
        items:1,
        autoPlay:true,
        singleItem:true,
        transitionStyle:true

       });


       // Gallery Carousel
       $("#carousel-gallery").owlCarousel({
          items: 4,
          itemsDesktop: [1199,4],
          itemsDesktopSmall: [991,3],
          itemsTablet: [768,3],
          slideSpeed: 800,
          navigation: true,
          navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
          pagination: true,
       });
       
       // Animation on Scroll
       var wow = new WOW(
         {
           boxClass:     'wow',      // animated element css class (default is wow)
           animateClass: 'animated', // animation css class (default is animated)
           offset:       0,          // distance to the element when triggering the animation (default is 0)
           mobile:       false,      // trigger animations on mobile devices (default is true)
           live:         false       // act on asynchronously loaded content (default is true)
         }
       );
       wow.init();
       
 })
      