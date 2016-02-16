


//鼠标滑动延迟动画
wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();



$(function(){
    $(".xs-btn").click(function(){
		$(".dark-bg").toggleClass("dark-bg-open");
        $(this).find("span").toggleClass("rotate-135");
        $(".cn-wrapper").toggleClass("opened-nav");
    })
	
	$(".cn-wrapper li .login").click(function(){
		$(".loginbox").show();
	})
	
	$(".cancel").click(function(){
		$(".loginbox").hide();
	})
	
	
})