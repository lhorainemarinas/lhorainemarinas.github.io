;(function($, window, document, undefined) {

	var $window = $(window),
		wH = $window.innerHeight();

	$(document).ready(function() {
		burger();
		$('#camera_wrap_1').camera({
			height: '35%',
			fx: 'simpleFade',
			navigation: true,
			opacityOnGrid: false,
			time: 3000, //tagal ng pagstay ng image
			transPeriod: 1000, //animation ng pagpalit ng image
			imagePath: 'plugins/camera/images/',
			hover: true,
			thumbnails:true
		});


	});

	function burger() {
		$('.menu-toggle').on('click', function(event) {
			event.stopPropagation();
			$('body').toggleClass('body-move');
		});

		$('html').on('click', function() {
			if ($('body').hasClass('body-move')) {
				$('body').removeClass('body-move');
			}
		});
	}

})(jQuery, window, document);
