const userModel = require("../models/user.js");

const login = async (req, res) => {
    try {
        // Kullanıcıdan gelen bilgileri al
        const { userName, password } = req.body;

        // Alanların doluluk kontrolü
        if (!userName || !password) {
            return res.status(400).json({ error: 'Gerekli alanları doldurunuz' });
        }

        // Kullanıcıyı veritabanında kontrol et
        const user = await userModel.findOne({ userName: userName, password: password });

        if (user) {
            // Kullanıcı doğrulandı, başarılı yanıt gönder
            res.status(200).json({ message: 'Giriş başarılı' });
        } else {
            // Kullanıcı adı veya şifre hatalı, başarısız yanıt gönder
            res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı' });
        }
    } catch (error) {
        // Hata durumunda hata mesajını gönder
        res.status(500).json({ error: error.message });
    }
};

module.exports=login;
