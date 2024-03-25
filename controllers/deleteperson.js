const userModel = require("../models/user.js");

const deletePersonByUsername = async (username) => {
    try {
      const result = await userModel.findOneAndDelete({ userName: username });
      return result;
  
    } catch (error) {
      throw new Error("Personel silinirken bir hata oluştu.");
    }
  };



  module.exports = deletePersonByUsername;