let Theatre=require('../models/theatre.models')

async function get_theatres(req,res){
    let query_obj={}
    if(req.query.name){
        query_obj.name=req.query.name
    }if(req.query.location){
        query_obj.location=req.query.location
    }if(req.query.city){
        query_obj.city=req.query.city
    }
    let result=await Theatre.find(query_obj)
    res.send(result)
}

async function get_theatres_by_name(req,res){
    let result=await Theatre.findOne({name:req.params.name})
    if(result){
        res.send(result)
    }else{
        res.status(404).send({"message":"Theatre Not Found"})
    }
}

async function post_theatres(req,res){
    let theatre_obj={
        name:req.body.name,
        location:req.body.location,
        city:req.body.city,
    }
    await Theatre.create(theatre_obj);
    res.status(201).send({'message':'Theatre Added Successfully'})
}

async function update_theatres(req,res){
    await Theatre.findOneAndUpdate({name:req.params.name},req.body,{new:true})
        .then((updated_theatre_obj)=>{
            if(updated_theatre_obj==null){
                res.status(404).send({
                    "message":"Error While Updating Theatre"
                });
            }else{
                res.send({
                    "message":"Theatre Updated Successfully"
                });
            }
        }).catch((err)=>{
            res.send(err);
        })
}

async function delete_theatres(req,res){
    await Theatre.deleteOne({name:req.params.name})
    .then((response)=>{
        if(response.deletedCount==0){
            res.status(404).send({
                "message":"Error While Deleting Theatre"
            });
        }else{
            res.send({"message":"Theatre Deleted Successfully"})
        }
    }).catch((err)=>{
        console.log(err)
    })
    
}

module.exports={get_theatres,get_theatres_by_name,
    post_theatres,update_theatres,delete_theatres}