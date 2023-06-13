  const express = require('express');
  const router = express.Router();
  const bcrypt = require('bcrypt');
  const User = require('../models/user');

  router.post('/', async (req, res) => {
    try {
      
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Kullanıcı bulunamadı.' });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
  
      if (!(password === user.password)) {
      
        return res.status(401).json({ message: 'Geçersiz şifre.' });
      }
      return res.json({ message: 'Giriş başarılı.' });
    } catch (err) {
      console.error(err);
      res.status(500).send('Sunucu hatası');
    }
  });

  module.exports = router;
