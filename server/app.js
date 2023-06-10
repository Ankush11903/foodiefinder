const express=require('express');
const bodyparser=require("body-parser");
const app = express();
const cors = require("cors")

require("./db/conn");
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

require("./model/userSchema");
app.use(cors());

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(require("./routes/auth"));
app.use(require("./routes/api"));

const port=process.env.PORT || 5000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));
// mongodb+srv://udaysangwan207:<password>@cluster0.8wh0sgb.mongodb.net/?retryWrites=true&w=majority