$(document).ready(function() {

	$(function(){
		$('#Container').mixItUp();
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

$('body').scrollspy({ target: '.navbar' })


$('.carousel').carousel({
  interval: 2000
})

})