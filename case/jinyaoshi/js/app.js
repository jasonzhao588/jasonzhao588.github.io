$(function(){




  $('#adSlide').owlCarousel({
    autoPlay:             8000,
    stopOnHover:          true,
    pagination:           true,
    singleItem:           true,
    pagination:           true,
    navigation:           true,
    addClassActive:       true,
    navigationText:       ["<i class='mdi mdi-chevron-left'></i>","<i class='mdi mdi-chevron-right'></i>"]
  });




  // var Teams = [
  //   {
  //     icon : "mdi-library",
  //     bg   : "bg-green",
  //     title: "直播室气氛活跃",
  //     intro: "优势的简介内容优势的简介内容优势的简介内容优势的简介内容优势的简介内容"
  //   },{
  //     icon : "mdi-emoticon",
  //     bg   : "bg-deep-orange",
  //     title: "优势二名称",
  //     intro: "优势的简介内容优势的简介内容优势的简介内容优势的简介内容优势的简介内容"
  //   },{
  //     icon : "mdi-book-multiple",
  //     bg   : "bg-blue",
  //     title: "老师喊单准",
  //     intro: "我们拥有一个优秀的技术团队，个个都是有着多年研发经验的业内精英"
  //   },{
  //     icon : "mdi-thumb-up-outline",
  //     bg   : "bg-red",
  //     title: "售后健全",
  //     intro: "企业文化售后介绍简介内容企业文化售后介绍简介内容企业文化售后介绍简介内容"
  //   }
  // ];
  // var teamItem = Handlebars.compile($('#teamItem').html());
  // $('#teamWrap').append( teamItem(Teams) );






  var cases = [
    {
      caseImg   : "images/sw-1.jpg",
      caseTitle : "企业文化照片",
    },
    {
      caseImg   : "images/sw-2.jpg",
      caseTitle : "企业文化照片",
    },
    {
      caseImg   : "images/sw-3.jpg",
      caseTitle : "企业文化照片",
    },
    {
      caseImg   : "images/sw-4.jpg",
      caseTitle : "企业文化照片",
    },
    {
      caseImg   : "images/sw-1.jpg",
      caseTitle : "企业文化照片",
    },
    {
      caseImg   : "images/sw-2.jpg",
      caseTitle : "企业文化照片",
    },
    {
      caseImg   : "images/sw-3.jpg",
      caseTitle : "企业文化照片",
    },
    {
      caseImg   : "images/sw-4.jpg",
      caseTitle : "企业文化照片",
    }
  ];

  var caseItem = Handlebars.compile($('#caseItem').html());
  $('#caseWrap').append( caseItem(cases) );

  //切换图片
  // $("#slideImgs img").each(function () {
  //   $(this).removeClass("active").sibings('img').removeClass("active");
  // })


  //图标背景
  // var bgColors = ['bg-dark-purple','bg-light-green','bg-orange','bg-purple','bg-green','bg-blue','bg-yellow','bg-light-red','bg-lime','bg-indigo'];
  // $('#fnListWrap > li').each(function(index){
  //     $(this).find('.avatar').addClass(bgColors[index]);
      
  // });

  $('#iconListWrap li').each(function(index){
      $(this).find(".wow").addClass("fadeInUp")
                          .attr("data-wow-delay","0."+ index +"s"); 
  });
  $('#fnListWrap li').each(function(index){
      $(this).find(".wow").addClass("fadeInRight")
                          .attr("data-wow-delay","0."+ index +"s"); 
  });

  $('#teamWrap li').each(function(index){
      $(this).find(".wow").addClass("bounceIn")
                          .attr("data-wow-delay","0."+ index +"s"); 
  });

  $('#compareWrap li').each(function(index){
      $(this).find(".wow").addClass("fadeIn")
                          .attr("data-wow-delay","0."+ index +"s"); 
  });


  $(".section-header").addClass("wow fadeInDown");
  //延迟动画
  wow = new WOW({
      animateClass: 'animated',
      offset: 10
  });
  wow.init();

  //滚动条偏离顶部隐藏返回顶部按钮
  $(window).scroll(function () {
      var scTop = $('body').scrollTop();
      if (scTop < 400) {
        $(".totop").addClass("hideIt");
        // $(".header").removeClass("fixedTop")
      }else{
        $(".totop").removeClass("hideIt");
        // $(".header").addClass("fixedTop")
      }
  });

  //锚点滑动
  $(".goto").anchorGoWhere({target:1});

});




//页面平滑滚动
jQuery.fn.anchorGoWhere = function(options){
     var obj = jQuery(this);
     var defaults = {target:0, timer:1000};
     var o = jQuery.extend(defaults,options);
     obj.each(function(i){
         jQuery(obj[i]).click(function(){
             var _rel = jQuery(this).attr("href").substr(1);
             switch(o.target){
                 case 1: 
                     var _targetTop = jQuery("#"+_rel).offset().top;
                     jQuery("html,body").animate({scrollTop:_targetTop},o.timer);
                     break;
                 case 2:
                     var _targetLeft = jQuery("#"+_rel).offset().left;
                     jQuery("html,body").animate({scrollLeft:_targetLeft},o.timer);
                     break;
             }
             return false;
         });                  
     });
 };