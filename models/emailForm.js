const mongoose = require('mongoose');
const schema = mongoose.Schema;

let emailForm = schema({
    name: {type:String},
    dob: {type:String},
    email: {type:String},
    mobNumber: {type:Number}
});

const emailFormModel = mongoose.model('EmailForm',emailForm);
module.exports = emailFormModel;