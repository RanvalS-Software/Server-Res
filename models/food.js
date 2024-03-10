const { Schema, model } = require("mongoose");

const foodTypeSchema = new Schema({
  type: { type: String, required: true },
});

const FoodTypeModel = model("FoodType", foodTypeSchema);

module.exports = FoodTypeModel;
