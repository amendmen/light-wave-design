$(document).ready(function() {

	$(function(){
		$('#Container').mixItUp();
	});

	$('.go_to').click( function(){ 
  		var scroll_el = $(this).attr('href'); 
  		if ($(scroll_el).length != 0) { 
  			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
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