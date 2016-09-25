'use-strict';

const VALIDATION_TOKEN = 'menu_bot_verification_token';

/**
 * Handle incoming verification sent from Messenger API
 * @param  {Object} req The parsed json Request object
 * @param  {Object} res the json response object
 * @return {none}     
 */
exports.setupVerification = (req, res) => {
	if(req.query['hub.mode'] === 'subscribe' &&
	   req.query['hub.verify_token'] === VALIDATION_TOKEN) {
		console.log('Validating webhook');
		res.status(200).send(req.query['hub.challenge'])
	} else {
		console.error('Failed verification. Make sure the validation tokens match');
		res.sendStatus(403)
	}
}

exports.handleIncomingMessage = (req, res) => {
	// Handle incoming messages here
}