//importing controllers
let {get_movies,post_movies,update_movies,delete_movies,get_movies_by_name}=require('../controllers/movie.controller')

//importing validators
let {validate_movie_req_body}=require('../middleware/req_body.verify')

module.exports=(app)=>{
    app.get('/api/movies',get_movies);
    app.get('/api/movies/:name',get_movies_by_name);
    app.post('/api/movies',validate_movie_req_body,post_movies);
    app.put('/api/movies/:name',validate_movie_req_body,update_movies);
    app.delete('/api/movies/:name',delete_movies);
}