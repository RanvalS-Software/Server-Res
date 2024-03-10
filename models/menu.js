const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
    menuName: { type: String, required: true },
    ürünler: { type: [String], required: true }, // Ürünler dizisi olarak güncellendi
    fiyat: { type: String},
    label: { type: String, required: true },
});

const menuModel = model('menu', menuSchema);

module.exports = menuModel;
