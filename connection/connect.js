const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/sentEmailApi')
.then((res)=>console.log("Mongoose connected to DB"))
.catch((err)=>console.log(err))