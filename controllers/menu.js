const FoodModel = require("../models/products");

const menu = async (type) => {
    try {
        // Belirli bir türdeki yemekleri veritabanından çek
        const foods = await FoodModel.find({ type: type });
        return foods; // Yemek verilerini döndür
    } catch (error) {
        throw new Error(error.message); // Hata durumunda hata fırlat
    }
}

module.exports = menu; // Fonksiyonu dışa aktar
