function validate_movie_req_body(req,res,next){
    if(req.body.name && req.body.description 
        && req.body.duration && req.body.release_date && req.body.director
        && req.body.release_status && req.body.language){
        next();
    }else{
        res.setHeader('content-type','application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            "message":"Bad Content"
        }))
    }
}

function validate_theatre_req_body(req,res,next){
    if(req.body.name && req.body.location
        && req.body.city){
        next();
    }else{
        res.setHeader('content-type','application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            "message":"Bad Content"
        }))
    }
}

module.exports={validate_movie_req_body,validate_theatre_req_body}