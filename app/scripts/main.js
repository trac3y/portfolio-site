// (function() {
// 	'use strict';
// 	var canvas = document.getElementById('myCanvas');
// 	if (canvas.getContext) {
// 		var ctx = canvas.getContext('2d');
// 	}
//
// 	// resize the canvas to fill browser window dynamically and draw
// 	window.addEventListener('resize', resizeCanvas, false);
//
// 	function resizeCanvas() {
// 		canvas.width = window.innerWidth;
// 		canvas.height = window.innerHeight;
// 		draw();
// 	}
// 	resizeCanvas();
//
// 	function draw() {
//
// 		// ctx.fillStyle = "#73c6a8";
//
// 	}
// })();

// Global variables that can  passed from PaperScript and regular JS
// To be populated in PaperScript
window.globals = {
	flooded: false
};

var flood = function() {
	console.log('this is being called in main. flooding!');
	globals.flooded = true;
	console.log(window.globals.flooded);
}

// Document on load
$( document ).ready(function() {
	'use strict';

	// Flood screen on scroll and click of button
	$( '.intro-button' ).click( function() {
		$( 'html, body' ).animate({
			scrollTop: $( '#about-section' ).offset().top
		}, 900);
		flood();
	});

	$( window ).scroll(function() {
		var offset = $( window ).scrollTop();
		if ( offset > 30 ) {
			flood();
		}
	});

});

//to collapse the navbar on scroll
$( window ).scroll(function() {
	'use strict';
	// fade in words
	if ($( '.navbar' ).offset().top > 30) {
		$( '#fade' ).fadeIn(3000);
	}
	// make nav sticky
	if ($( '.navbar' ).offset().top > 50) {
		$( '.navbar-fixed-top' ).addClass( 'top-nav-collapse' );
		$( '.navbar' ).addClass( 'sticky' );
	} else {
		$( '.navbar-fixed-top' ).removeClass( 'top-nav-collapse' );
		$( '.navbar' ).removeClass( 'sticky' );
	}
});




//to scroll to section
// $(function() {
// 	'use strict';
// 	$('a.page-scroll').bind('click', function(event) {
// 		//window.alert('clicked a thing');
// 		var $anchor = $(this);
// 		$('html, body').stop().animate({
// 		scrollTop: $($anchor.attr('href')).offset().top
// 		}, 1500, 'easeInOutExpo');
// 		event.preventDefault();
// 	});
// });
