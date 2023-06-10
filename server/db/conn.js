const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://udaysangwan207:uday123@cluster0.8wh0sgb.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log(`success`);
}).catch((e) =>{
    console.log(e);
})