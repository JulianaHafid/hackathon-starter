import mongoose from 'mongoose';
//const terminal = require ('./terminal')

// create User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },       //user's email address
  password: String,                            //user's password
  firstname: String,                           //user's firstname
  lastname: String,                            //user's lastname
  gender: String,                              //user's gender
  dob: Date                                    //user's date of birth
},{ timestamps: true});                        //timestamp account created


//this will take what you set in the schema
const User = mongoose.model('User', userSchema);

//you will import this in app.js..this is module NOT model..remember
module.exports = User;
