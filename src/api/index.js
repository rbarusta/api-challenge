const express = require('express');
const hellowWorld = require('./HelloWorld');
const covidSummary = require('./Covid');
const Router = express.Router


module.exports =  (app,covidService) => {
	const router = Router();
    hellowWorld(router);
    covidSummary(router,covidService);
    app.use('/',router)
}