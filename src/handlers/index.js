
const handleError = require('./handleError');
const handleSuccess = require('../handlers/handleSuccess');
const {ErrorAPI} = require('./errorAPI');

const HandleErrorLoader = (app)=>{
    app.use((err, req, res, next) => {
        handleError(err, res);
      });
}

module.exports = {
    HandleErrorLoader,
    ErrorAPI,
    handleSuccess
}