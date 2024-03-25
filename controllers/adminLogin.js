const userModel = require("../models/user.js");

const adminLogin = async (req, res) => {
    try {
        // Kullanıcıdan gelen bilgileri al
        const { userName, password } = req.body;

        // Alanların doluluk kontrolü
        if (!userName || !password) {
            return res.status(400).json({ error: 'Gerekli alanları doldurunuz' });
        }

        // Kullanıcıyı veritabanında kontrol et (ve userType kontrolü yapmadan)
        const user = await userModel.findOne({ userName: userName, password: password });

        if (!user) { // Kullanıcı bulunamadıysa
            return res.status(401).json({ message: 'Kullanıcı adı veya şifre hatalı.' });
        } 
        else if (user.type === true) { // Eğer kullanıcı bulunduysa ve userType true ise (yönetici ise)
            // Yönetici doğrulandı, başarılı yanıt gönder
            return res.status(200).json({ message: 'Giriş başarılı yönlendiriliyorsunuz.' });
        } 
        else { // Kullanıcı bulunduysa ama userType false ise (yani personel)
            // Personel girişi, yönlendirme yapılabilir veya hata döndürülebilir
            return res.status(401).json({ error: 'Yetkisiz giriş.' });
        }
    } catch (error) {
        // Hata durumunda hata mesajını gönder
        res.status(500).json({ error: error.message });
    }
};

module.exports = adminLogin;
