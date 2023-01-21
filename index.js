const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const users = require("./modules/users");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("",users);

app.listen(PORT,() => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`)
})