require('babel-register');

import app from './server/app';

const HOST = '0.0.0.0';
const PORT = process.env.PORT || '8080';

app.listen(PORT, HOST, function() {
	console.log('listening at host https://' + HOST + ':' + PORT);
})
