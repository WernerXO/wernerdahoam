jQuery(document).ready(function($){
	var url = window.location.href;
	$('a.nav-link, a.dropdown-item').map(function() {
 		$(this).toggleClass('active', this.href == url || this.href == url.split("?")[0].split("#")[0]);
	});
    $('a.dropdown-item.active').map(function() {
        $(this).closest('.nav-item.dropdown').find('.dropdown-toggle').toggleClass('active');
	});
});