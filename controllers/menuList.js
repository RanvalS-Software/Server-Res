// controllers/menuController.js
const menuModel = require("../models/menu");

const getAllMenus = async (req, res) => {
  try {
    const allMenus = await menuModel.find();
    res.json(allMenus);
  } catch (error) {
    console.error('Tüm menüler alınırken bir hata oluştu:', error);
    res.status(500).json({ error: 'Tüm menüler alınırken bir hata oluştu' });
  }
};

module.exports = getAllMenus;
