# Cookie Parser

Cookie Parser takes a string of cookies like this…

	cookieparser('cookiename=value; expires=Mon, 23-Apr-2012 09:33:22 GMT; path=/; domain=www.example.com; secure; httponly, cookie2name=value; expires=Mon, 23-Apr-2012 09:33:22 GMT; path=/;');
	
…and returns a JavaScript array like this…

	[{
		name: 'cookiename',
		options: {
			domain: 'www.example.com',
			expires: 'Mon, 23-Apr-2012 09:33:22 GMT',
			httponly: true,
			path: '/',
			secure: true
		},
		value: 'value'
	}, {
		name: 'cookie2name',
		options: {
			expires: 'Mon, 23-Apr-2012 09:33:22 GMT',
			path: '/',
		},
		value: 'value'
	}];
