const express = require("express");
const app = express();
const port = 7070;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req,res)=>{
    let {user, password} = req.query;
    res.send(`standard GET request.Welcome ${user}!`);
});

app.post("/register", (req,res)=>{
    // console.log(req.body);
    let {user, password} = req.body;
    res.send(`standard POST request.Welcome ${user}!`);
});

app.listen(port, ()=>{
    console.log("Listening to server");
});