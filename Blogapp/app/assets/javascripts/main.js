jQuery(function($) {

	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

	//#main-slider
	var slideHeight = $(window).height();
	var slideHeight1 = 0.85*slideHeight // making slide height to 70 percent of original.
	$('#home-slider .item').css('height',slideHeight1);

	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight1);
	});
	
	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('navbar-fixed-top');
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});
	
	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href').slice(1) ).offset().top);
			contentBottom.push( $( $(this).attr('href').slice(1) ).offset().top + $( $(this).attr('href').slice(1) ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});
	
	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();
	
	// Progress Bar
	$('#about-us').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuetransitiongoal')+'%');
			});
			$(this).unbind('inview');
		}
	});

	//Countdown
	$('#features').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	// Portfolio Single View
	$('#portfolio').on('click','.folio-read-more',function(event){
		event.preventDefault();
		var link = $(this).data('single_url');
		var full_url = '#portfolio-single-wrap',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_top = $("#"+trgt).offset().top;

		$('html, body').animate({scrollTop:target_top}, 600);
		$('#portfolio-single').slideUp(500, function(){
			$(this).load(link,function(){
				$(this).slideDown(500);
			});
		});
	});

	// Close Portfolio Single View
	$('#portfolio-single-wrap').on('click', '.close-folio-item',function(event) {
		event.preventDefault();
		var full_url = '#portfolio',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_offset = $("#"+trgt).offset(),
		target_top = target_offset.top;
		$('html, body').animate({scrollTop:target_top}, 600);
		$("#portfolio-single").slideUp(500);
	});

	// Contact form
	// var form = $('#main-contact-form');
	// form.submit(function(event){
	// 	event.preventDefault();
	// 	var form_status = $('<div class="form_status"></div>');
	// 	var name1 = $('#name').val();
	// 	var email1 = $('#email').val();
	// 	var subject1 = $('#subject').val();
	// 	var message1 = $('#message').val();
	// 	var data = {name: name1, email: email1, subject: subject1, message: message1 }
	// 	$.ajax({
	// 		type: "POST",
	// 		url: $(this).attr('action'),
	// 		data: data,
	// 		beforeSend: function(){
	// 			form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
	// 		}
	// 	}).done(function(data){
	// 		form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
	// 	});
	// });

	//Google Map
	// var latitude = $('#google-map').data('latitude')
	// var longitude = $('#google-map').data('longitude')
	// function initialize_map() {
	// 	var myLatlng = new google.maps.LatLng(latitude,longitude);
	// 	var mapOptions = {
	// 		zoom: 14,
	// 		scrollwheel: false,
	// 		center: myLatlng
	// 	};
	// 	var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
	// 	var contentString = '';
	// 	var infowindow = new google.maps.InfoWindow({
	// 		content: '<div class="map-content"><ul class="address">' + $('.address').html() + '</ul></div>'
	// 	});
	// 	var marker = new google.maps.Marker({
	// 		position: myLatlng,
	// 		map: map
	// 	});
	// 	google.maps.event.addListener(marker, 'click', function() {
	// 		infowindow.open(map,marker);
	// 	});
	// }
	// google.maps.event.addDomListener(window, 'load', initialize_map);

	//Google Map
	var latitude = $('#google-map').data('latitude')
	var longitude = $('#google-map').data('longitude')
	var latitude1 = $('#google-map1').data('latitude')
	var longitude1 = $('#google-map1').data('longitude')
	function initialize()
	{
	    var latlng = new google.maps.LatLng(latitude,longitude);
	    var latlng2 = new google.maps.LatLng(latitude1,longitude1);
	    var myOptions =
	    {
	        zoom: 15,
	        center: latlng,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };

	    var myOptions2 =
	    {
	        zoom: 15,
	        center: latlng2,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };

	    var map = new google.maps.Map(document.getElementById("google-map"), myOptions);
	    
	    var map2 = new google.maps.Map(document.getElementById("google-map1"), myOptions2);

	    var myMarker = new google.maps.Marker(
	    {
	        position: latlng,
	        map: map,
	        title:"Plot No.8, Gopal Nagar, Nagpur-440022, Maharashtra, India"
	   });

	    var myMarker2 = new google.maps.Marker(
	    {
	        position: latlng2,
	        map: map2,
	        title:"120 E 62nd St #2b, New York, NY 10065, USA"
	    });
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
});

