const supertest = require('supertest');
const createServer = require('../../src/server');

describe('/hello',function(){
    
    before(()=>{
        const app = createServer(null);
        request = supertest.agent(app);
    })

    it('should return 200',()=>{
        return request.get('/hello').expect(200);
    })
    
})