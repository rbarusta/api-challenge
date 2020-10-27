
const config = require('./config');
const CovidService = require('./services/CovidService');
const createServer = require('./server');
const {PORT,COVID_API_TOKEN, COVID_API_URL} = config;
const covidService = new CovidService(COVID_API_URL,COVID_API_TOKEN);
const app = createServer(covidService);



app.listen(PORT, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${PORT} 🛡️
      ################################################
    `);
  }).on('error', err => {
    console.error(err);
    process.exit(1);
  });