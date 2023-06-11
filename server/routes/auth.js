const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../model/userSchema");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    user.findOne({ email: email }).then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "user already exist" });
      }
    });
    bcrypt.hash(password, 12).then(async(hashedpassword) => {
      const user = new user({
        email,
        password: hashedpassword,
        name,
      }); await user.save();
      return res.status(200).json({ message: "saved successfully" });
    });
   
    console.log("USER registered");
  } catch (e) {
    console.log(e);
    res.status(400).send("Invalid Details");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  user.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "invalid password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then(async(doMatch) => {
        if (doMatch) {
          console.log("successfully signin");
          const token =await savedUser.generateAuthToken();
          console.log(token);
          const { _id, name, email } = savedUser;
          res.json({ token, user: { _id, name, email } });
        } else {
          console.log(password);
          console.log(savedUser.password);

          console.log("error signin");
          return res.status(422).json({ error: "invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
