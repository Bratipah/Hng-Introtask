const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const { appendFile } = require("fs");

const app = express();

app.listen(3000, ()=> console.log("Application server is running"));

app.get("/",(req,res)=>{

    //API data
    const slackUsername = "Bratipah Kioko";
    const backend = true;
    const age = 22;
    const bio = "I'm a mern-stack developer with an interest of upscaling my backend skills for an upcoming job opportunity";
    
    //Stringy data to JSON format
    res.send(JSON.stringify({
        slackUsername,
        backend,
        age,
        bio
    }))
});