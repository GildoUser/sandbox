const express = require('express');
const app = new express();

const port = 8880
app.use(express.json());

app.get("/c",(req,res)=>{
    console.log("foi")
    res.status(200).json({message:"Foi"})
})

app.get("/",(req,res)=>{
    res.sendStatus(200)
})

app.listen(port, ()=>{
    console.log(`Is running now...`)
})