const supertest = require('supertest');
const createServer = require('../../src/server');
const {COVID_API_TOKEN, COVID_API_URL} = require('../../src/config');
const CovidService = require('../../src/services/CovidService');

describe('/covid/summary',function(){
    let covidService = new CovidService(COVID_API_URL,COVID_API_TOKEN);
    let request;
    
    before(()=>{
        const app = createServer(covidService);
        request = supertest.agent(app);
    })

    it('should return 200',()=>{
        return request.get('/covid/summary').expect(200);
    })
    
})

describe('/covid/summary',function(){
    let covidService = new CovidService(COVID_API_URL,COVID_API_TOKEN);
    let request;
    
    before(()=>{
        const app = createServer(covidService);
        request = supertest.agent(app);
    })
    it('should return 404',()=>{
        return request.get('/covid/summaryndo').expect(404);
    })
})

describe('/covid/summary/:countryCode',function(){
    let covidService = new CovidService(COVID_API_URL,COVID_API_TOKEN);
    let request;
    
    before(()=>{
        const app = createServer(covidService);
        request = supertest.agent(app);
    })

    it('should return 200',()=>{
        return request.get('/covid/summary/MX').expect(200);
    })
    
})

describe('/covid/summary/:countryCode',function(){
    let covidService = new CovidService(COVID_API_URL,COVID_API_TOKEN);
    let request;
    
    before(()=>{
        const app = createServer(covidService);
        request = supertest.agent(app);
    })
    it('should return 404',()=>{
        return request.get('/covid/summaryndo/MX').expect(404);
    })
})