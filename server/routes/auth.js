const express = require("express");
const mongoose=require("mongoose")
const User=mongoose.model("User")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const router = express.Router();


router.post("/signup", async (req, res) => {
    try {
      const {
        name,
        email,
        password
      } = req.body;
  
      User.findOne({ email: email }).then((savedUser) => {
        if (savedUser) {
          return res.status(422).json({ error: "user already exist" });
        }
      });
      const user = new User({
        name,
        email,
        password
      });
      await user.save();
      console.log("USER registered")
    } catch (e) {
      console.log(e);
      res.status(400).send("Invalid Details");
    }
  });

  module.exports=router;