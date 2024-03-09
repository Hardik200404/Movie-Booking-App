let Movie=require('../models/movie.models')

async function get_movies(req,res){
    let query_obj={}
    if(req.query.name){
        query_obj.name=req.query.name
    }
    let result=await Movie.find(query_obj)
    res.send(result)
}

async function get_movies_by_name(req,res){
    let result=await Movie.findOne({name:req.params.name})
    if(result){
        res.send(result)
    }else{
        res.status(404).send({"message":"Movie Not Found"})
    }
}

async function post_movies(req,res){
    let movie_obj={
        name:req.body.name,
        genre:req.body.genre,
        description:req.body.description, 
        casts:req.body.casts,
        duration:req.body.duration,
        release_date:req.body.release_date,
        director:req.body.director,
        release_status:req.body.release_status,
        language:req.body.language,
        rating:req.body.rating
    }
    await Movie.create(movie_obj);
    res.status(201).send({'message':'Movie Added Successfully'})
}

async function update_movies(req,res){
    await Movie.findOneAndUpdate({name:req.params.name},req.body,{new:true})
        .then((updated_movie_obj)=>{
            if(updated_movie_obj==null){
                res.status(404).send({
                    "message":"Error While Updating Movie"
                });
            }else{
                res.send({
                    "message":"Movie Updated Successfully"
                });
            }
        }).catch((err)=>{
            res.send(err);
        })
}

async function delete_movies(req,res){
    await Movie.deleteOne({name:req.params.name})
    .then((response)=>{
        if(response.deletedCount==0){
            res.status(404).send({
                "message":"Error While Deleting Movie"
            });
        }else{
            res.send({"message":"Movie Deleted Successfully"})
        }
    }).catch((err)=>{
        console.log(err)
    })
    
}
module.exports={get_movies,get_movies_by_name,post_movies,
    update_movies,delete_movies}