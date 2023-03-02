const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const users = require("./modules/users");
const redis = require("./modules/redisModule");

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors());


app.use("",users);

app.get("/addkey",(req,res) => {
    redis.SET('foo','bar');
    res.send(200,"Redis SET");
})

app.get("/getkey",(req,res) => {
    redis.GET('foo').then((ret) => {
        res.send(200,ret);
    })
})


app.listen(PORT,() => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`)
})