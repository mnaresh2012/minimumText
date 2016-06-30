
'use strict';

$(function() {
	//pugin initialization
	$('.container').minimumText({
		element: '.jumbotron p.description',
		numsChar: 10,
		url: 'www.google.com',
		dots: '....',
		str: 'view more'
	});
});
