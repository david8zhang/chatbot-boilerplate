import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

var app = express();

// Configure middleware here
app.use(morgan('dev'));

// body-parser pre-parses incoming requests as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Allow for cross-origin requests
app.use(cors());

// Set up api routes
routes.setup(app)

module.exports = app;