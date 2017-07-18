$(document).ready(function() {

	$(function(){
		$('#Container').mixItUp();
	});

	$(function() {	
		$('.vegas-container').vegas({
        slides: [
            { src: '/img/1.jpg' },
            { src: '/img/2.jpg' },
            { src: '/img/3.jpg' },
            { src: '/img/4.jpg' }
        ]
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