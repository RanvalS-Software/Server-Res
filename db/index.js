const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

// Mongoose bağlantı ayarı
const db = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB'ye bağlandı!");
    } catch (err) {
        console.log("Bağlantı başarısız:", err);
    }
};

// Bağlantıyı dışa aktarma
module.exports = db;
