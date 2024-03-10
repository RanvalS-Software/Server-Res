const menuModel = require("../models/menu");

const deleteMenu = async (menuId) => {
  try {
    // Veritabanından menüyü sil
    const deletedMenu = await menuModel.findByIdAndDelete(menuId);
    if (!deletedMenu) {
      return { success: false, message: "Silinecek menü bulunamadı." };
    }
    console.log("Menü başarıyla silindi:", deletedMenu);
    return { success: true, message: "Menü başarıyla silindi.", deletedMenu };
  } catch (error) {
    console.error("Menüyü silme hatası:", error);
    throw error; // Hata durumunda dışarıya hatayı iletiyoruz
  }
};

module.exports = { deleteMenu };
