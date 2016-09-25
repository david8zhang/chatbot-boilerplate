import apiRouter from './api';

var setup = function(app) {
	app.use('/api/v1', apiRouter);
}

exports.setup = setup;