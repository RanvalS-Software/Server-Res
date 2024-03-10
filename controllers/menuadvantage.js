const menuModel = require("../models/menu");

const addProductToMenu = async (menuName, products, price, label) => {
  try {
    // Yeni bir menü öğesi oluştur
    const newProduct = new menuModel({
      menuName: menuName,
      ürünler: products, // Ürünler dizisi olarak güncellendi
      fiyat: price,
      label: label
    });

    // Veritabanına ürünü kaydet
    const savedProduct = await newProduct.save();

    console.log('Ürün başarıyla eklendi:', savedProduct);
    return savedProduct;
  } catch (error) {
    console.error('Ürün eklenirken bir hata oluştu:', error);
    throw error; // Hata durumunda dışarıya hatayı iletiyoruz
  }
};

module.exports = addProductToMenu;
