//to collapse the navbar on scroll
$(window).scroll(function() {
	'use strict';
	// fade in words
	if ($('.navbar').offset().top > 30) {
		$('#fade').fadeIn(3000);
	} 
	// make nav sticky
	if ($('.navbar').offset().top > 50) {
		$('.navbar-fixed-top').addClass('top-nav-collapse');
		$('.navbar').addClass('sticky');
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
		$('.navbar').removeClass('sticky');
	}
});

//to scroll to section
$(function() {
	'use strict';
	$('a.page-scroll').bind('click', function(event) {
	//window.alert('clicked a thing');
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top
	}, 1500, 'easeInOutExpo');
	event.preventDefault();
});
});



