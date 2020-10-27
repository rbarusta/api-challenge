const express = require('express');
const routes = require('./api');
const { HandleErrorLoader } = require('./handlers');

const createServer = (covidService)=>{
    let app = express();
    app.use(express.json())
    routes(app,covidService);
    HandleErrorLoader(app);
    return app;
}

module.exports = createServer;