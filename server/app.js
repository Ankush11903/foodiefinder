const express=require('express');
const mongoose=require('mongoose');
const fetch = require('cross-fetch');

const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});




const app=express();

const db=process.env.DATABASE;


const users=require('./model/userSchema');

mongoose.connect(db,{ useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('Connected to MongoDB...'))
.catch(err=>console.log('Could not connect to MongoDB...',err));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/home',(req,res)=>{
    res.send('Hello World');
    console.log("Hello World");
}
);
app.use(express.json());

app.get('/search',async(req,res)=>{
    console.log("calling")
    const {value}=req.query;
    const response=await fetch(`https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${value}`);
    const data=await response.json();
    res.json(data);
}
);

app.post('/register',async(req,res)=>{
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
app.post('/login',(req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;
    users.findOne({email:email,password:password})
    .then((user)=>{
        if(user){
            res.status(200).json({message:"User logged in successfully"});
        }
        else{
            res.status(400).json({message:"Error occured"});
        }
    }
    )
    .catch((err)=>res.status(400).json({message:"Error occured"}));

}
);



const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));
