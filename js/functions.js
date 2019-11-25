// Scroll One Page Menu
  $('a.page-scroll, .cbp-spmenu a').on('click', function(event){
        //var $nav_height = $('#navigation.affix').outerHeight();		
		var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
       event.preventDefault();;
		$('#navigation').affix({offset: {top: 50} });
		
		
   });