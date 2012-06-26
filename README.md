# Cookie Parser

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/danjordan/cookie-parser/master/dist/cookie-parser.min.js
[max]: https://raw.github.com/danjordan/cookie-parser/master/dist/cookie-parser.js

## Examples
Cookie Parser takes a string of cookies like this…

	cookieparser('cookiename=value; expires=Wed, 21-Oct-2015 13:37:00 GMT; path=/; domain=www.example.com; secure; httponly, cookie2name=value; expires=Wed, 21-Oct-2015 13:37:00 GMT; path=/;');
	
…and returns a JavaScript array like this…

	[{
		name: 'cookiename',
		options: {
			domain: 'www.example.com',
			expires: 'Wed, 21-Oct-2015 13:37:00 GMT',
			httponly: true,
			path: '/',
			secure: true
		},
		value: 'value'
	}, {
		name: 'cookie2name',
		options: {
			expires: 'Wed, 21-Oct-2015 13:37:00 GMT',
			path: '/',
		},
		value: 'value'
	}];

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_


## License
Copyright (c) 2012 Daniel Jordan  
Licensed under the MIT, GPL licenses.
