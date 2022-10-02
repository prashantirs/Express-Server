const express = require("express");
const app = express();
const port = 4000;
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./userRoutes");
app.use("/api/v1",router);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/Form.html"));
})




app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})