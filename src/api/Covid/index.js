const express = require('express');
const covidSummaryRequest = require('../../requests/covidSummary');
const Router = express.Router
const route = Router();



module.exports =  (app,covidService) => {
    route.get('/summary', covidSummaryRequest(covidService));
    route.get('/summary/:countryCode',covidSummaryRequest(covidService));
    app.use('/covid', route);
  };