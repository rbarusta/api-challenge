const axios = require('axios');
class CovidService {
    constructor(urlApi, token){
        this.urlApi = urlApi;
        this.token = token;
        
    }

    async Sumary(CountryCode = null){
        const response = await axios({
            method:'get',
            url:'/summary',
            baseURL: this.urlApi,
            headers:{
                "X-Access-Token":this.token
            }
           })
        if(CountryCode !== null) response.data.Countries = response.data.Countries.filter(w=> w.CountryCode === CountryCode);
        return response.data;
    }
}

module.exports = CovidService;