function moveBlur(x, y) {
	$("#blur").css({
		left: x,
		top: y
	});
}

$(document).ready(function() {
	var pos = $("#projects").offset()
	var posX = pos.left - 60
	var posY = pos.top - 100
	moveBlur(posX, posY)
	$("#blur").show()
});

$(document).mousemove(function(e) {
	var pos = $("#projects").offset()
	var posX = e.pageX / 10 + pos.left - 140
	var posY = e.pageY / 10 + pos.top - 100
	moveBlur(posX, posY)
});

// For Mobile Devices (Accelerometer):
$(window).bind("devicemotion", function(e) {
	var acc = e.originalEvent.accelerationIncludingGravity
	var pos = $("#projects").offset()
	var posX = acc.y * 10 + pos.left - 50
	var posY = -(acc.z * 6) + pos.top - 50
	moveBlur(posX, posY)
});