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
    console.log(req.body);
    res.send("data posted");
});

module.exports = router;