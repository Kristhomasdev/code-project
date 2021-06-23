const express=require("express");
const bodyParser=require("body-parser");

const app=express();
const https=require("https");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function (req,res) {
	// body...
	res.sendFile(__dirname+"/signup.html");




})

app.post("/",function(req,res){


const ffname = req.body.firstName;
const ssanme = req.body.secondName;
const email = req.body.email;

console.log(ffname,ssanme,email);



})




app.listen(3000);