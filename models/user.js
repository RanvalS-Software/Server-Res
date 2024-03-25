const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    userName: { type: String, required: true },
    nameSurname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    registerDate: { type: Date, required: false, default: Date.now },
    type:{type:Boolean,required:true}
});

const userModel = model('users', userSchema);

module.exports = userModel;
