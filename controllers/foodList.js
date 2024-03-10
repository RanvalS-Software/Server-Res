const FoodTypeModel = require("../models/food.js");

// Tüm yemek türlerini listeleme fonksiyonu
const listFoodTypes = async (req, res) => {
    try {
      const foodTypes = await FoodTypeModel.find();
      res.status(200).json(foodTypes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports =  {listFoodTypes};