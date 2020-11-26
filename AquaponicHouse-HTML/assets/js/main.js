(function ($) {
    "use strict";
	
	/*----------------------------
	Responsive menu Active
	------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu',
	});
	$(".review-btn").on('click', function() {
		$(".product-details-form").toggle( "slow" );
		return false;
	});
	$(".view-comments").on('click', function() {
		$(".show-comments").toggle( "slow" );
		return false;
	});
	
	/*----------------------------
	START - Smooth scroll animation
	------------------------------ */
	$('.menubar ul li a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
		   return false;
		  }
		}
	});
	
	/*----------------------------------
	START - login and registration form
	------------------------------------*/
	$(".popup-show").on('click', function() {
		$('.login-form').slideDown('slow', function(){
			$(this).show();
		});
		$(".registration-form").hide();
		$(".navbar-form.form-box").hide();
	});
	$(".registration-form-show").on('click', function() {
		$('.registration-form').slideDown('slow', function(){
			$(this).show();
		});
		$(".login-form").hide();
	});
	$(".login-form-show").on('click', function() {
		$('.login-form').slideDown('slow', function(){
			$(this).show();
		});
		$(".registration-form").hide();
	});
	$(".popup-close").on('click', function() {
		$('.registration-form , .login-form').slideUp('slow', function(){
			$(this).hide();
		});
	});
	
    /*----------------------------
    Slider Active
    ------------------------------ */
	$(".hero-area-slide").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: false,
		dots: true,
	});
	$(".about-area-slide").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: true,
		dots: false,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
	$(".testimonial-slide").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: false,
		dots: true,
		responsive:{
			0:{
				items: 1,
				margin: 0,
			},
			992:{
				items: 2,
				margin: 30,
			}
		}
	});
	$(".blog-slide").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		dots: false,
		nav: true,
		navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		responsive:{
			0:{
				items: 1,
				margin: 0,
			},
			576:{
				items: 2,
				margin: 30,
			},
			1050:{
				items: 3,
				margin: 30,
			}
		}
	});
	/*---------preloader--------*/
	$('#preloader').fadeOut('slow', function() {
		$(this).remove();
	});
	/*----------------------------
	START - Circlechart animation
	------------------------------ */
	$('.demo-1,.demo-2,.demo-3,.demo-4').percentcircle({
		animate : true,
		bgColor: '#F1F1F1',
		fillColor: '#f5a715',
		percentSize: '18px',
	});
	$('.ab').css({
		'width': '112px',
		'height': '112px',
	});	
	$('.cir').css({
		'width': '100px',
		'height': '100px',
		'top':'6px',
		'left':'6px',
		'background':'#f5f5f5',
	});		
	$('.perc').css({
		'width': '100px',
		'height': '100px',
		'lineHeight': '100px',
		'color': '#313131',
		'fontWeight': '700',
		'fontSize': '18px',
	});
	$(".demo-1 .perc").text("75%");
	$(".demo-2 .perc").text("50%");
	$(".demo-3 .perc").text("70%");
	$(".demo-4 .perc").text("60%");
	
	/*----------------------------
	START - videos and maps
	------------------------------ */
	$('.popup-youtube').magnificPopup({type:'iframe'});
	//iframe scripts
	$.extend(true, $.magnificPopup.defaults, {  
		iframe: {
			patterns: {
				//youtube videos
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				}
			}
		}
	});
	
	/*----------------------------
    START - Lightbox effect animation
    ------------------------------ */
	$('.lb-outerContainer').css({
		'width':'auto'
	});
	
	/*----------------------------
	START - magnifier JS animation
	------------------------------ */
	$('.zoom').zoom();
})(jQuery);