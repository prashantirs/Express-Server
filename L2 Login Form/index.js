const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


//post is to create //get is to read //put is to update //delete is to delete

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/Form.html"));
})


app.post("/api/my",(req,res)=>{
    res.send("/api/my"); 
    console.log(req.body);
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})