//importing controllers
let {get_theatres,get_theatres_by_name,post_theatres,update_theatres,delete_theatres}=require('../controllers/theatre.controller')

//importing validators
let {validate_theatre_req_body}=require('../middleware/req_body.verify')

module.exports=(app)=>{
    app.get('/api/theatres',get_theatres);
    app.get('/api/theatres/:name',get_theatres_by_name);
    app.post('/api/theatres',validate_theatre_req_body,post_theatres);
    app.put('/api/theatres/:name',validate_theatre_req_body,update_theatres);
    app.delete('/api/theatres/:name',delete_theatres);
}