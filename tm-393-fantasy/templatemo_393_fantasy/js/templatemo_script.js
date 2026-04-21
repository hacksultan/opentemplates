/*
	http://www.templatemo.com
*/

function onWindowResize()
{
	// https://github.com/twbs/bootstrap/issues/9774
	var container = document.getElementById('home');
	var navbar = document.getElementById('navbar');
	var content = document.getElementById('thumbnails_container');
	container.removeChild(navbar);
	container.insertBefore(navbar, content);		
}

$(document).ready(function(){
	$(window).resize(onWindowResize);
});