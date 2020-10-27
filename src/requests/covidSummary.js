const { handleSuccess } = require('../handlers');
const covidSummary = (covidService)=> async (req, res, next)=>{
    try{
        let result = {};
        if(req.params.countryCode){
            result = await covidService.Sumary(req.params.countryCode);
        }else{
            result = await covidService.Sumary();
        }
        return handleSuccess(result,res);

    }catch(err){
        next(err);
    }
}

module.exports = covidSummary;