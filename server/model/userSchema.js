const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
      
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})
const jwt=require('jsonwebtoken');
userSchema.methods.generateAuthToken=async function(){
    try{
        console.log("calling")
        const token=jwt.sign({_id:this._id},process.env.JWT_KEY);
        console.log(token)
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
};

const user=mongoose.model('User',userSchema);
module.exports=user;