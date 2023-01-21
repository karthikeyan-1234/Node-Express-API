const express = require('express');
const router = express.Router();

var UserService = require("./userService");
var srv = new UserService();

router.get('/users',async (req,res)=>{
    try{
        srv.getAllUsers().then((result)=> {
            res.send(result.recordset);
        })
    }
    catch(err){
        res.send(err);
    }
})

router.post("/adduser",(req,res)=>{
    var usr = req.body;
    try{
        srv.addUser(usr).then((result)=> {
            res.send(result);
        })
    }
    catch(err){
        res.send(err);
    }
    
});

module.exports = router;