const express = require('express');
const handlers = require('../../handlers');
const { ErrorAPI } = handlers
const Router = express.Router
const route = Router();



module.exports =  (app) => {
    route.get('/', (req, res) => {
      return res.send('Hellow World Freinds!').status(200);
    });
    route.get('/error',(req, res, next)=>{
        try{
            throw new ErrorAPI(400,"Test Error");
        }catch(err){
            next(err);
        }
    })
    app.use('/hello', route);
  };