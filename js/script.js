;(function($, window, document, undefined) {

	var $window = $(window),
		wH = $window.innerHeight();

	$(document).ready(function() {
		burger();
		sns_show();
		charts();
		portfolio();
		portfolio2();
		// home slider
		$('#camera_wrap_1').camera({
			height: '40%',
			fx: 'simpleFade',
			navigation: true,
			opacityOnGrid: false,
			time: 3000, //tagal ng pagstay ng image
			transPeriod: 1000, //animation ng pagpalit ng image
			imagePath: 'plugins/camera/images/',
			hover: true,
			thumbnails:true
		});

		// about allipsis
		$('.about p').ellipsis({ responsive: true });

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

	function sns_show(){
		$('.sns-button').on('click', function(e){
			$('.sns ul').toggleClass('show_sns');
			e.preventDefault();
		});
	}

	function charts(){
		Chart.defaults.global.tooltips.enabled = false;
		var skill1 = document.getElementById("skill1");
		var skill1_data = {
			labels: false,
			datasets: [
				{
					data: [60, 40], backgroundColor: ["#62a5a3", "#16262b"],
					hoverBackgroundColor: ["#FF4394", "#36A2EB"],
					borderColor: ["transparent", "transparent"]
				}]
		};
		var skill1_options = {cutoutPercentage:80 };

		var skill2 = document.getElementById("skill2");
		var skill2_data = {
			labels: false,
			datasets: [
				{
					data: [80, 20],
					backgroundColor: ["#62a5a3", "#16262b"],
					hoverBackgroundColor: ["#FF4394", "#36A2EB"],
					borderColor: ["transparent", "transparent"]
				}]
		};
		var skill2_options = {cutoutPercentage:80 };

		var skill3 = document.getElementById("skill3");
		var skill3_data = {
			labels: false,
			datasets: [
				{
					data: [90, 10],
					backgroundColor: ["#62a5a3", "#16262b"],
					hoverBackgroundColor: ["#FF4394", "#36A2EB"],
					borderColor: ["transparent", "transparent"]
				}]
		};
		var skill3_options = {cutoutPercentage:80 };

		var skill4 = document.getElementById("skill4");
		var skill4_data = {
			labels: false,
			datasets: [
				{
					data: [80, 20],
					backgroundColor: ["#62a5a3", "#16262b"],
					hoverBackgroundColor: ["#FF4394", "#36A2EB"],
					borderColor: ["transparent", "transparent"]
				}]
		};
		var skill4_options = {cutoutPercentage:80 };

		var skill5 = document.getElementById("skill5");
		var skill5_data = {
			labels: false,
			datasets: [
				{
					data: [80, 20],
					backgroundColor: ["#62a5a3", "#16262b"],
					hoverBackgroundColor: ["#FF4394", "#36A2EB"],
					borderColor: ["transparent", "transparent"]
				}]
		};
		var skill5_options = {cutoutPercentage:80 };

		var config = {
		  type: 'horizontalBar',
		  data: {
			labels: ["Adobe Photoshop", "Dreamweaver", "Sublime", "HTML / HTML5", "CSS / CSS3", "jQuery", "Photo & Video Editing", "Computer Troubleshooting", "Bootstrap", "Git", "SVG"],
			datasets: [{
			  backgroundColor: '#4de181',
			  data: [95, 80, 90, 95, 95, 65, 80, 80, 90, 80, 80, 0]
			}],
			lineAtIndex: 13
		  },
		  options: {
			elements: {tline:{value:30}},
			legend: { display: false },
			scales: {
			  xAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)"}, display: false}],
			  yAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)"}}]
			}
		  }
		};

		Chart.defaults.global.defaultFontColor = '#fff';
		var skills_bar = document.getElementById("skills_bar").getContext("2d");
		new Chart(skills_bar, config);
		var myDoughnutChart1 = new Chart(skill1, {type: 'doughnut', data: skill1_data, options: skill1_options });
		var myDoughnutChart2 = new Chart(skill2, {type: 'doughnut', data: skill2_data, options: skill2_options });
		var myDoughnutChart3 = new Chart(skill3, {type: 'doughnut', data: skill3_data, options: skill3_options });
		var myDoughnutChart4 = new Chart(skill4, {type: 'doughnut', data: skill4_data, options: skill4_options });
		var myDoughnutChart5 = new Chart(skill5, {type: 'doughnut', data: skill5_data, options: skill5_options });
	}

	function portfolio(){
		var $status = $('.pagingInfo');
    var $slickElement = $('.portfolio-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

		 $slickElement.slick({
		  dots: false,
		  infinite: true,
		  speed: 1000,
		  slidesToShow: 1,
		  adaptiveHeight: true,
		  autoplay: true,
		  responsive: true,
		  asNavFor: '.portfolio-txt',
		  fade: true, cssEase: 'linear' 
		});
		$('.portfolio-txt').slick({
		  dots: false,
		  infinite: true,
		  speed: 1000,
		  slidesToShow: 1,
		  asNavFor: '.portfolio-slider',
		  arrows: false,
		});
		var psh = $('.portfolio-slider').outerHeight();
		$('.portfolio-over').css('height',psh);
	}

	function portfolio2(){
			$('.img-portfolio-slider').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  variableWidth: true,
		  centerMode: true,
		});
	}
})(jQuery, window, document);
