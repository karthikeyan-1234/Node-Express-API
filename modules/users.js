const express = require('express');
const router = express.Router();

var UserService = require("./userService");
var service = new UserService();

router.get('/users',async (req,res)=>{
    try{
        service.getAllUsers().then((result)=> {
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
        service.addUser(usr).then((result)=> {
            res.send(result);
        })
    }
    catch(err){
        res.send(err);
    }
    
});

module.exports = router;