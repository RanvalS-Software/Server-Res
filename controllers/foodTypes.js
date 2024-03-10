const FoodTypeModel = require("../models/food.js");

// Yemek türü ekleme fonksiyonu
const addFoodType = async (req, res) => {
  try {
    const { type } = req.body;
    if (!type) {
      return res.status(400).json({ error: 'Yemek türü belirtilmelidir' });
    }
    const newFoodType = new FoodTypeModel({ type });
    await newFoodType.save();
    res.status(201).json({ message: "Yemek türü başarıyla eklendi" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { addFoodType };
