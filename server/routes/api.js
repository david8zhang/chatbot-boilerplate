import express from 'express';
import handlers from './api-route-handlers';

var router = module.exports = express.Router();

// Configure routes here
router.get('/webhook', handlers.webhookHandler.setupVerification);
router.post('/webhook', handlers.webhookHandler.handleIncomingMsg);