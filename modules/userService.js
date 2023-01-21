var  db = require('./db');
var sqlInstance = db.pool.request();


class UserService{
    constructor(){}

    async getAllUsers(){
        try{
            return new Promise(function(resolve,reject){
                var sql = `Select * from Customers`;
                sqlInstance.query(sql,(err,rows,fields) =>{
                    console.log("Inside service call");
                    resolve(rows);
                });
            })
        }
        catch(err){ return err; }
    }

    async addUser(newUser){
        try{
            return new Promise(function(resolve,reject){
                var sql = `insert into Customers(name,address,mobile_no) values('${newUser.name}','${newUser.address}','${newUser.mobile_no}')`;
                sqlInstance.query(sql,(err,result) =>{
                    resolve(result);
                })
            })
        }
        catch(err){return err;}
    }
}



module.exports = UserService;