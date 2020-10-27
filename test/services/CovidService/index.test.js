const CovidService = require('../../../src/services/CovidService');
const expect = require("chai").expect;
const URL_API = "https://api.covid19api.com";
const TOKEN_API = "5cf9dfd5-3449-485e-b5ae-70a60e997864";

const covidService = new CovidService(URL_API,TOKEN_API);

describe("CovidService integration test",()=> {
    it("success request", async ()=> {
        const result = await covidService.Sumary();
        expect(result.Countries).length > 1;
    });

    it("success request filtered", async ()=> {
        const result = await covidService.Sumary("MX");
        expect(result.Countries[0].CountryCode).eq("MX");
    });


});