const express = require("express");
const router = express.Router();
const fetch = require('cross-fetch');

router.get('/search',async(req,res)=>{
    console.log("calling")
    const {value}=req.query;
    const response=await fetch(`https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${value}`);
    const data=await response.json();
    res.json(data);
}
);

module.exports=router;