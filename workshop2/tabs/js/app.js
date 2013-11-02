$(function(){

	$('.tabs li a').click(function(){
		$(this).parent().addClass('selected').siblings('li').removeClass('selected');
		$( $(this).attr('href') ).show().siblings('.tabs-content').hide();
		return false;
	});
	
	$('.tabs li:eq(0) a').click();

});
