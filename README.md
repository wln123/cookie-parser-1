# Cookie Parser

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

