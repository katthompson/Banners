$(document).ready(function(){
	
	FastClick.attach(document.body);
	
	var touchable = Modernizr.touch;
	
	$('.mainContainer').click(function(event){
		event.preventDefault();
		if ( $(this).css('opacity') == 0.5 ) $(this).css({'opacity':1.0});
		else $(this).css({'opacity':0.5});
	});
	
});