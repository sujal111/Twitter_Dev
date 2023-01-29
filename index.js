const express= require('express');
const connect = require('./src/config/database');
const app=express();
const Tweet= require('./src/models/tweet')


app.listen(300,async() =>{
    console.log(`Server started`);
    await connect();
    console.log('MongoDB connected');
    const tweet= await Tweet.create({
        content:'First Tweet',
        userEmail:'a@b.com'
    });

    console.log(tweet);

})