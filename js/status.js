$(function() {
	
	var DURATION = 200;

	$('*[data-status]').hover(

		// Mouse enter
		function() {
			var id = '#' + $(this).attr('data-status');
			$(id).not('#status-default').stop().fadeTo(DURATION, 1);
			$('#status-default').stop().fadeTo(DURATION, 0);
		},

		// Mouse leave
		function() {
			$('.status').not('#status-default').stop().fadeTo(DURATION, 0);
			$('#status-default').stop().fadeTo(DURATION, 1);
		}
	);
});