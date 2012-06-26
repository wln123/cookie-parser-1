/*! Cookie Parser - v0.1.0 - 2012-06-26
* https://github.com/danjordan/cookie-parser
* Copyright (c) 2012 Daniel Jordan; Licensed MIT, GPL */

(function() {

	'use strict';
	
	var attributes = ['name', 'value', 'expires', 'path', 'domain', 'secure', 'httponly'];
	var splitter = /,\s(?=\w+=\w)/g;
	
	var cookieparser = function(cookie_string) {
	
		var cookies = [];
		var cookie_array = cookie_string.split(splitter);
	
		cookie_array.forEach(function(e) {
			var cookie = {
				options: {}
			};
			var params = e.split('; ');
	
			params.forEach(function(param) {
				param = param.split('=');
				var key = param[0];
				var value = param[1];
				
				if (attributes.indexOf(key) > 0) {
					if (key === 'expires') {
						cookie.options[key] = new Date(value);
					} else {
						cookie.options[key] = value || true;
					}
				} else {
					cookie.name = key;
					cookie.value = value;
				}
			});
	
			cookies.push(cookie);
		});
	
		return cookies;
	};
	
	window.cookieparser = cookieparser;

}());