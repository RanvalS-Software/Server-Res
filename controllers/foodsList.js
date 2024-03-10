const foodModel = require("../models/products"); // Adjust path if necessary

// Tüm menüleri listeleme fonksiyonu (Function to list all menus)
const listFoods = async (req, res) => {
  try {
    const menus = await foodModel.find();
    res.status(200).json(menus);
  } catch (error) {
    console.error('Error retrieving menus:', error);
    res.status(500).json({ error: `Error retrieving menus: ${error.message}` }); // Include specific error message
  }
};
module.exports =  {listFoods} ;