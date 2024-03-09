const mongoose=require('mongoose');

const theatres_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

const theatres_model=mongoose.model('Theatre',theatres_schema)

module.exports=theatres_model
