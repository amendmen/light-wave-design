$(document).ready(function() {

	
		if ( $(window).width() < 768) {
			$('#modal-menu').addClass('mfp-hide white-popup-block');
		}
		else { 
			$('#modal-menu').removeClass('mfp-hide white-popup-block');
		}

	
	$(window).resize(function() {
		if ($(window).width() < 768) {
			$('#modal-menu').addClass('mfp-hide white-popup-block');
		}
		else {
			$('#modal-menu').removeClass('mfp-hide white-popup-block');
		}
	})

 

	$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		closeOnContentClick: true,
		modal: false
	});
	
	$('a.go_to').click(function() {
		$.magnificPopup.close();
	});
	
    });

	$(function(){
		$('#Container').mixItUp();
	});

	$('.go_to').click( function(){ 
		var scroll_el = $(this).attr('href'); 
		if ($(scroll_el).length != 0) { 
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600); 
		}
		return false; 
	}); 

	$(function() {	
		$('.vegas-container').vegas({
			delay: 7000,
			timer: false,
			slides: [
			{ src: '/img/1.jpg' },
			{ src: '/img/2.jpg' },
			{ src: '/img/3.jpg' },
			{ src: '/img/4.jpg' }
			],
			transition: 'fade2',
			animation: 'random',
			overlay: '/img/overlays/02.png'


		});
	})

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('body').scrollspy({ target: '.navbar' });


	$('.carousel').carousel({
		interval: 2000
	});

})