const foodModel = require("../models/products");

// Belirli bir ürünü silmek için
const deleteFood = async (req, res) => {
  try {
    const deletedFood = await foodModel.findByIdAndDelete(req.params.id);
    if (!deletedFood) {
      return res.status(404).json({ message: "Silinecek ürün bulunamadı." });
    }
    res.status(200).json({ message: "Ürün başarıyla silindi.", deletedFood });
  } catch (error) {
    console.error("Ürünü silme hatası:", error);
    res.status(500).json({ error: `Ürünü silme hatası: ${error.message}` });
  }
};

module.exports = { deleteFood };
