const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=> {
    // res.send("This is home");
    res.render("home.ejs");
});

app.get("/ig/:username",(req,res)=>{
    // let followers = ["anil", "nithin", "kaki"];
    // let {username} = req.params;
    // res.render("instagram.ejs", {username, followers})
    const igData = require("./data.json");
    let {username} = req.params;
    const data = igData[username];
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs");
    }
});

app.get("/home", (req, res)=> {
    res.send("Hello!!!");
});

app.get("/rolldice", (req, res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs",{ diceVal});
    // res.render("rolldice.ejs",{num: diceVal});
});

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});