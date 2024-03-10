const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
    foodName: { type: String, required: true },
    price: { type: String, required: true },
    type: { type: String, required: true },
    label:{type:String,required:true},
});

const foodModel = model('foods', foodSchema);

module.exports = foodModel;
