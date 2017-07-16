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

$('.carousel').carousel({
  interval: 2000
})

})