$(function() {
    var hash = window.location.hash.substring(1);
    if (hash == 'thanks') {
        $('#panel-thanks').addClass('visible');
    }
});