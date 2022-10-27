const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const { appendFile } = require("fs");

const app = express();

app.listen(3000, ()=> console.log("Application server is running"));

app.get("/",(req,res)=>{
    const slackUsername = "Bratipah Kioko";
    const backend = true;
    const age = 22;
    const bio = "I'm a mern-stack developer with an interest of upscaling my backend skiils for an upcoming job opportunity";
    res.json({
        slackUsername: (slackUsername),
        backend: (backend),
        age: (age),
        bio: (bio)
    })
});