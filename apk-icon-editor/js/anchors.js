$(document).ready(function() {

	if (window.location.hash == '#contact') {
		$('#shake').effect('shake');
	}

	$('a[href*=#]').click(function() {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	});
});