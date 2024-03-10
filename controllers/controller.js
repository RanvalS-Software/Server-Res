const userModel = require("../models/user.js");

const sign = async (req, res) => {
    try {
        // Kullanıcıdan gelen bilgileri al
        const { userName, nameSurname, email, password } = req.body;

        // Eksik bilgi kontrolü
        if (!userName || !nameSurname || !email || !password) {
            return res.status(400).json({ error: "Gerekli alanları doldurunuz." });
        }

        // Veritabanında kullanıcıyı kontrol et
        const existingUser = await userModel.findOne({ email: email });

        // Eğer kullanıcı zaten varsa kaydetme işlemi yapma
        if (existingUser) {
            return res.status(400).json({ error: "E-posta adresi kullanılmaktadır." });
        }

        // Yeni bir kullanıcı belgesi oluştur
        const newUser = new userModel({
            userName: userName,
            nameSurname: nameSurname,
            email: email,
            password: password
        });

        // Yeni kullanıcıyı veritabanına kaydet
        const savedUser = await newUser.save();

        // Başarılı kayıt mesajını gönder
        res.json({ message: "Kullanıcı başarıyla kaydedildi", user: savedUser });
    } catch (error) {
        // Hata durumunda hata mesajını gönder
        res.status(500).json({ error: error.message });
    }
}

module.exports = sign;
