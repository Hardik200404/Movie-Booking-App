const mongoose=require('mongoose');

const movies_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    genre:{
        type:Array,
        required:false
    },
    description:{
        type:String,
        required:true
    },
    casts:Array,
    duration:{
        type:String,
        required:true
    },
    release_date:{
        type:Date,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    release_status:{
        type:Boolean,
        required:true
    },
    language:{
        type:Array,
        required:true
    },
    rating:{
        type:Number,
        default:0.0
    }
})

const movies_model=mongoose.model('Movie',movies_schema)

module.exports=movies_model