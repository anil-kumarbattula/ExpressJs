const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=> { //listening upcoming api requests
    console.log(`app is listening on ${port}`);
});

app.get("/", (req, res)=>{
    res.send("This is home")
});

app.get("/:username/:id", (req, res)=>{
    console.log(req.params);
    let {username, id} = req.params; // gets the parameters in route
    res.send(`This page is of @${username}.`)
});

// app.get("/anil", (req, res)=>{
//     res.send("anil")
// });

// app.get("/nithin", (req, res)=>{
//     res.send("nithin")
// });

// app.get("*", (req,res)=>{
//     res.send("Error bhai")
// });
// app.use((req,res)=>{
//     console.log("request recived");
//     res.send("this is a basic response");
// });