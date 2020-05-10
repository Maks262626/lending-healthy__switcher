$( document ).ready(function() {

  	$('.about-slider').slick({
	  arrows: true,
	  infinite: true,
	  cssEase: 'linear',
	  slidesToShow: 2,
	  responsive: [
    {
      breakpoint: 767,
      settings: {
      	slidesToShow: 1,
      	vertical: true,
      }
    }
  ]
	});

	$('.burger-menu').on('click', function(){
		$('.header__list').toggleClass('active');
		$(this).toggleClass('activertical: true,ve');
	});

	new WOW().init();
});

  