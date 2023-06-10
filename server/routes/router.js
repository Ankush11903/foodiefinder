const express = require('express');
const router = express.Router();
const users=require("../model/userSchema")
const fetch = require('cross-fetch');

const cookieParser = require('cookie-parser');
// ...
router.use(cookieParser());


router.use(express.json());
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/search',async(req,res)=>{
    console.log("calling")
    const {value}=req.query;
    const response=await fetch(`https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${value}`);
    const data=await response.json();
    res.json(data);
}
);

router.post('/register',async(req,res)=>{
    console.log(req.body);
    const {name,email,password}=req.body;
    const search=await users.findOne({email:email,password:password});
    console.log(search)
    if(search){
        res.status(409).json({message:"User already exists"});
        return;
    }else{
        const user=new users({
            name:name,
            email:email,
            password:password})
        user.save()
        .then(()=>res.status(200).json({message:"User created successfully"}))
        .catch((err)=>res.status(400).json({message:"Error occured"}));
    }

    
}
);

router.post('/login',(req,res)=>{
    
    console.log(req.body);
    const {email,password}=req.body;
    users.findOne({email:email,password:password})
    .then(async(user)=>{
        if(user){console.log("calling2")
            const token=await user.generateAuthToken();
            // console.log(token);
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) ,
                httpOnly: true,
                sameSite: "none"
              });
              
            console.log(token);
            res.status(200).json({message:"User logged in successfully"});
        }
        else{console.log("calling1")
            res.status(400).json({message:"Error occured"});
        }
    }
    )
    .catch((err)=>res.status(400).json({message:"Error occured"}));

}
);

module.exports=router;