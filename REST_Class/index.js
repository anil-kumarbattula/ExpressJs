const express = require("express");
const app = express();
const path = require("path");
const port = 5050;

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let posts = [
    {
        id : "1a",
        username : "anilkumar",
        content: "booooo..."
    },
    {
        id : "1b",
        username : "kumaranil",
        content : "name"
    },
    {
        id : "1c",
        username : "battula",
        content : "sur name"
    }
];

app.use(express.static(path.join(__dirname, "public")));

app.get("/posts", (req,res)=>{
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req, res)=>{
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res)=>{
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs");
});

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
});