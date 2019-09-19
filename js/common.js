$(function() {
	$('header ul.menu a').click(function(e){
		$('header ul.menu a').removeClass('active')
	  e.preventDefault();
	  var target = $($(this).attr('href'));
	  if(target.length){
	    var scrollTo = target.offset().top;
	    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
	    $(this).addClass('active')
	  }
	});

	if (window.location.href.indexOf('#section-1')) {
        $('.section-1').addClass('active');
    }
    if (window.location.href.indexOf('#section-2')) {
        $('.section-2').addClass('active');
    }
    if (window.location.href.indexOf('#section-3')) {
        $('.section-3').addClass('active');
    }
    if (window.location.href.indexOf('#section-4')) {
        $('.section-4').addClass('active');
    }

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('header').addClass("sticky");
    }
    else{
    	var header_height = $('header').height()
        $('header').removeClass("sticky");
    }
});


	