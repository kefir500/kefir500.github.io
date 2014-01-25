var SHIFT = 60; // Body padding-top value (override.css)

$(function() {
	$('a[href*=#]').click(function() {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - SHIFT
		}, 500);
		return false;
	});
});