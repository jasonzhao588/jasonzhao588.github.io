 // Intro Carousel
var jqPlug = angular.module('jq_plug', []);

jqPlug.directive('slider', [function () {
	return {
		restrict: 'AE',
		templateUrl: 'views/tpls/slider.html',
		transclude:  true, 

		link: function (scope, iElement, iAttrs) {
			$('.top-slider').owlCarousel({
			 items:1,
			 autoPlay:true,
			 singleItem:true,
			 transitionStyle:true
			});
		}
	};
}]);

jqPlug.directive('gallery', [function () {
	return {
		restrict: 'AE',
		templateUrl: 'views/tpls/gallery.html',
		transclude:  true, 
		link: function (scope, iElement, iAttrs) {
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
		}
	};
}]);

jqPlug.directive('ap-tabs', [function () {
	return {
		restrict: 'AE',
		templateUrl: 'views/tpls/tabs.html',
		transclude:  true, 
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}]);

jqPlug.directive('wow', [function () {
	return {
		restrict: 'AE',
		link: function (scope, iElement, iAttrs) {
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
		}
	};
}]);