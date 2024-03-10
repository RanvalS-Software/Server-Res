const FoodModel = require("../models/products"); // Dosya yolunu düzelttim, foodModel yerine FoodModel olarak değiştirdim.

const add = async (req, res) => {
    try {
        const { foodName, price, type,label } = req.body; // İstek gövdesinden gelen verileri al

        // Yeni bir yemek öğesi oluştur
        const newFood = new FoodModel({
            foodName: foodName,
            price: price,
            type: type,
            label:label
        });

        // Yeni yemek öğesini veritabanına kaydet
        const savedFood = await newFood.save();

        res.status(201).json(savedFood); // Başarılı bir şekilde eklenen yemeği istemciye yanıt olarak gönder
    } catch (error) {
        res.status(500).json({ message: error.message }); // Hata durumunda istemciye hata mesajını gönder
    }
}

module.exports = {add}; // Fonksiyonu dışa aktar
