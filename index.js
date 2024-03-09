const body_parser=require('body-parser');
const express=require('express');
const app=express()

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

const mongoose=require('mongoose');// ';' is important
const {PORT}=require('./configs/server.config');
const {DB_URL}=require('./configs/db.config');
require('./models/movie.models');
require('./models/theatre.models');
require('./routes/movie.route')(app);
require('./routes/theatre.route')(app);


//IIFE
(async ()=>{
    try{
        await mongoose.connect(DB_URL)
        console.log("connected to DB")
    }catch(err){
        console.log("error while connecting to DB",err)
    }
})()

app.listen(PORT,()=>{
    console.log(`Server is running on port :${PORT}`)
})