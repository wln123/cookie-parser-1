(function($) {

	'use strict';

	function parseCookies(cookie_string) {

		var cookies = [];
		var splitter = /,\s(?=\w+=\w)/g;
		var cookie_array = cookie_string.split(splitter);
		
		$.each(cookie_array, function(i, e) {
			var cookie = {};
			var params = e.split(';');
			$.each(params, function(i, param) {
				cookie[param.split('=')[0]] = param.split('=')[1] || true;
			});
			cookies.push(cookie);
		});

		return cookies;
	}

	$.parsecookies = parseCookies;

}(this.jQuery));