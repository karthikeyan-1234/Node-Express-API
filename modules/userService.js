var  db = require('./db');
var sqlInstance = db.pool.request();


class UserService{
    constructor(){}

    async getAllUsers(){
        try{
            return new Promise(function(resolve,reject){
                sqlInstance.query("Select * from Customers",(err,res,fields) =>{
                    console.log("Inside service call");
                    resolve(res);
                });
            })
        }
        catch(err){ return err; }
    }
}



module.exports = UserService;