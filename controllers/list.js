const userModel = require("../models/user.js");

const list = async (userType) => {
    try {
      // userType değerine göre filtreleme yap
      const persons = await userModel.find({ type: userType });
      return persons;
    } catch (error) {
      throw new Error('Personel listesi alınamadı.');
    }
  };

  module.exports=list;