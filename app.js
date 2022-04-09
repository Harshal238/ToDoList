const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Get Food","Cook Food","Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/",function(req, res){
    var today = new Date();

    let option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US",option);

    res.render('list',{kindOfDay:day, newListItems: items});
})
app.post("/",function(req,res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("the server is running on port: 3000");
})