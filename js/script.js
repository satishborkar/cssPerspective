/* Author: Satish Borkar */

$(document).ready(function() {

	$('#container').height($(document).height());
	$('#menuSlider').height($(document).height());
	
	$('#navigator a, #menuSlider').hover(function() {
		/*$('#container').stop().animate({
			marginLeft : "-5%",
			width : "80%"
		}, 'fast');*/
		$('#container').addClass('pageCurl');
		$('#menuSlider').addClass('menuHolder');
		
		$('#navigator a').fadeOut(200);
	});

	$('#container').hover(function() {
		/*$('#container').stop().animate({
			marginLeft : "-20%",
			width : "100%"
		}, 'fast');*/
		$('#navigator a').fadeIn('fast');
		$('#menuSlider').removeClass('menuHolder');
		$('#container').removeClass('pageCurl');
	});
	
	
	$(function(){
		$('#container').empty();
		$.get('page1.html', function(data){
			$('#container').append(data);
		})
	})
	
	
	$('#menuSlider ul li a').click(function(){
		var curLink = $(this).attr('class');
		$('#container').empty();
		$.get(curLink +'.html', function(data){
			$('#container').append(data);
		})
	})
	
		

});

