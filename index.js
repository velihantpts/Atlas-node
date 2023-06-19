const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://admin:nv12345.@atlas.lbelsjf.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB bağlantısı başarılı.');
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });

  const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    lastName: String,
    confirmPassword: String,
    email: String,
    password: String
  }));
  
  const Blog = mongoose.model('Blog', {
    title: String,
    imageURL: String,
    longDescription: String,
    shortDescription: String,
  });
  // Mekanlar kısmı collections
  const Restaurants = mongoose.model('Restaurants', {
    title: String,
    cardImage: String,
    cardDescription: String,
    cardImage2: String,
    cardImage3: String,
    detail: String,
    longDescription: String,
    options: String,
    options2: String,
    options3: String,
    options4: String,
  });
  const Cinemas = mongoose.model('Cinemas', {
    title: String,
    cardImage: String,
    cardDescription: String,
  },);
  

const Pubs = mongoose.model('Pubs', {
  title: String,
  cardImage: String,
  cardDescription: String,
});
const Cafes = mongoose.model('Cafes', {
  title: String,
  cardImage: String,
  cardDescription: String,
}, );


// Event
const Event = mongoose.model('Event', {
  eventName: String,
  imageURL: String,
  eventType: String,
  eventDate: String,
  address: String,
  contact: String,
  eventAmount: String,
  eventDescription: String
});

// Ulasım
const Transportation = mongoose.model('Transportation', {
  bus_number: String,
  destination: String,
  image: String,
  iyasdurak_clock_1: String,
  unidurak_clock_1: String,
  anadurak_clock_1: String,
  iyasdurak_clock_2: String,
  unidurak_clock_2: String,
  anadurak_clock_2: String,
  iyasdurak_clock_3: String,
  unidurak_clock_3: String,
  anadurak_clock_3: String,
  iyasdurak_clock_4: String,
  unidurak_clock_4: String,
  anadurak_clock_4: String,
  iyasdurak_clock_5: String,
  unidurak_clock_5: String,
  anadurak_clock_5: String,
  iyasdurak_clock_6: String,
  unidurak_clock_6: String,
  anadurak_clock_6: String,
  iyasdurak_clock_7: String,
  unidurak_clock_7: String,
  anadurak_clock_7: String,
  iyasdurak_clock_8: String,
  unidurak_clock_8: String,
  anadurak_clock_8: String,
  iyasdurak_clock_9: String,
  unidurak_clock_9: String,
  anadurak_clock_9: String,
  iyasdurak_clock_10: String,
  unidurak_clock_10: String,
  anadurak_clock_10: String,
  iyasdurak_clock_11: String,
  unidurak_clock_11: String,
  anadurak_clock_11: String,
  iyasdurak_clock_12: String,
  unidurak_clock_12: String,
  anadurak_clock_12: String,
  iyasdurak_clock_13: String,
  unidurak_clock_13: String,
  anadurak_clock_13: String,
  iyasdurak_clock_14: String,
  unidurak_clock_14: String,
  anadurak_clock_14: String,
  iyasdurak_clock_15: String,
  unidurak_clock_15: String,
  anadurak_clock_15: String,
  anadurak_hs_clock_1: String,
  iyasdurak_hs_clock_1: String,
  unidurak_hs_clock_1: String,
  anadurak_hs_clock_2: String,
  iyasdurak_hs_clock_2: String,
  unidurak_hs_clock_2: String,
  anadurak_hs_clock_3: String,
  iyasdurak_hs_clock_3: String,
  unidurak_hs_clock_3: String,
  anadurak_hs_clock_4: String,
  iyasdurak_hs_clock_4: String,
  unidurak_hs_clock_4: String,
  anadurak_hs_clock_5: String,
  iyasdurak_hs_clock_5: String,
  unidurak_hs_clock_5: String,
  anadurak_hs_clock_6: String,
  iyasdurak_hs_clock_6: String,
  unidurak_hs_clock_6: String,
  anadurak_hs_clock_7: String,
  iyasdurak_hs_clock_7: String,
  unidurak_hs_clock_7: String,
  anadurak_hs_clock_8: String,
  iyasdurak_hs_clock_8: String,
  unidurak_hs_clock_8: String,
  anadurak_hs_clock_9: String,
  iyasdurak_hs_clock_9: String,
  unidurak_hs_clock_9: String,
  anadurak_hs_clock_10: String,
  iyasdurak_hs_clock_10: String,
  unidurak_hs_clock_10: String,
  anadurak_hs_clock_11: String,
  iyasdurak_hs_clock_11: String,
  unidurak_hs_clock_11: String,
  anadurak_hs_clock_12: String,
  iyasdurak_hs_clock_12: String,
  unidurak_hs_clock_12: String,
  anadurak_hs_clock_13: String,
  iyasdurak_hs_clock_13: String,
  unidurak_hs_clock_13: String,
  anadurak_hs_clock_14: String,
  iyasdurak_hs_clock_14: String,
  unidurak_hs_clock_14: String,
  anadurak_hs_clock_15: String,
  iyasdurak_hs_clock_15: String,
  unidurak_hs_clock_15: String
},'transportations');

const Bus = mongoose.model('Bus', {
  bus_number: String,
  destination: String,
  image: String,
},'transportations');

// Tüm blogları getiren bir GET endpointi tanımlayın
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// Tüm Locationları getiren Get isteği
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurants.find();
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

//Tum kafeleri getiren endpoint
app.get('/api/cafes', async (req, res) => {
  try {
    const cafes = await Cafes.find();
    res.json(cafes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// Tüm pubları getiren endpoint
app.get('/api/pubs', async (req, res) => {
  try {
    const pubs = await Pubs.find();
    res.json(pubs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// Tüm sinemaları getiren endpoint
app.get('/api/cinemas', async (req, res) => {
  try {
    const cinemas = await Cinemas.find();
    res.json(cinemas);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});


app.get('/api/blogs/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: 'Invalid blog ID.' });
    return;
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      res.status(404).send({ error: 'Blog not found.' });
      return;
    }
    res.send(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while querying the database.' });
  }
});


app.get('/api/restaurant/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: 'Invalid restaurant ID.' });
    return;
  }

  try {
    const restaurant = await Restaurants.findById(id);
    if (!restaurant) {
      res.status(404).send({ error: 'restaurant not found.' });
      return;
    }
    res.send(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while querying the database.' });
  }
});
app.delete('/api/restaurant/:id', async (req, res) => {
  try {
    const restaurantId = req.params.id;
    await Restaurants.findByIdAndRemove(restaurantId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
app.delete('/api/cinema/:id', async (req, res) => {
  try {
    const cinemaId = req.params.id;
    await Cinemas.findByIdAndRemove(cinemaId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
app.delete('/api/pub/:id', async (req, res) => {
  try {
    const pubId = req.params.id;
    await Pubs.findByIdAndRemove(pubId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
app.get('/api/cafe/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: 'Invalid cafe ID.' });
    return;
  }

  try {
    const cafe = await Cafes.findById(id);
    if (!cafe) {
      res.status(404).send({ error: 'cafe not found.' });
      return;
    }
    res.send(cafe);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while querying the database.' });
  }
});
app.get('/api/pub/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: 'Invalid pub ID.' });
    return;
  }

  try {
    const pub = await Pubs.findById(id);
    if (!pub) {
      res.status(404).send({ error: 'pub not found.' });
      return;
    }
    res.send(pub);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while querying the database.' });
  }
});

app.get('/api/cinema/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: 'Invalid cinema ID.' });
    return;
  }

  try {
    const cinema = await Cinemas.findById(id);
    if (!pub) {
      res.status(404).send({ error: 'cinema not found.' });
      return;
    }
    res.send(cinema);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while querying the database.' });
  }
});








// Tüm events getiren Get isteği
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
// 
// Tüm events getiren Get isteği
app.get('/api/cinemas', async (req, res) => {
  try {
    const cinemas = await Cinemas.find();
    res.json(cinemas);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
app.get('/api/cafes', async (req, res) => {
  try {
    const cafes = await Cafes.find();
    res.json(cafes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
app.get('/api/pubs', async (req, res) => {
  try {
    const pubs = await Pubs.find();
    res.json(pubs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurants.find();
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
app.get('/api/transportations', async (req, res) => {
  try {
    const transportations = await Transportation.find();
    res.json(transportations);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// GET isteği için filtrelenmiş etkinlikleri döndüren endpoint
app.get('/events/:eventType', async (req, res) => {
  const eventType = req.params.eventType;

  try {
    // EventType'a göre filtreleme yaparak ilgili etkinlikleri bulun
    const events = await Event.find({ eventType });

    // Bulunan etkinlikleri JSON formatında döndür
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Bir hata oluştu' });
  }
});

app.get('/api/events/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: 'Invalid event ID.' });
    return;
  }

  try {
    const event = await Event.findById(id);
    if (!event) {
      res.status(404).send({ error: 'Event not found.' });
      return;
    }
    res.send(event);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while querying the database.' });
  }
});
app.get('/api/transportations/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: 'Invalid event ID.' });
    return;
  }

  try {
    const transportation = await Transportation.findById(id);
    if (!transportation) {
      res.status(404).send({ error: 'Event not found.' });
      return;
    }
    res.send(transportation);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while querying the database.' });
  }
});

// Şifre sıfırlama API rotası
app.post('/api/reset-password', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Kullanıcıyı bul ve şifresini güncelle
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    }

    user.password = password;
    await user.save();

    // Şifre sıfırlama başarılı
    res.sendStatus(200);
  } catch (error) {
    console.error('Şifre sıfırlama hatası:', error);
    res.status(500).json({ error: 'Şifre sıfırlama başarısız' });
  }
});



// Blog silme endpoint'i
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const blogId = req.params.id;
    await Blog.findByIdAndRemove(blogId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

app.put('/api/blogs/:id', async (req, res) => {
  try {
    const blogId = req.params.id;
    const updatedBlog = req.body;
    await Blog.findByIdAndUpdate(blogId, updatedBlog);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
// Bus edit ve silme

app.delete('/api/bus/:id', async (req, res) => {
  try {
    const busId = req.params.id;
    await Bus.findByIdAndRemove(busId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

app.put('/api/bus/:id', async (req, res) => {
  try {
    const busId = req.params.id;
    const updatedBus = req.body;
    await Blog.findByIdAndUpdate(busId, updatedBus);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// Mekan edit ve silme

app.delete('/api/cafe/:id', async (req, res) => {
  try {
    const cafeId = req.params.id;
    await Cafe.findByIdAndRemove(cafeId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// Mekan silme endpoint'i
app.delete('/api/mekan/:id', async (req, res) => {
  try {
    const mekanId = req.params.id;
    await Blog.findByIdAndRemove(mekanId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

app.put('/api/mekan/:id', async (req, res) => {
  try {
    const mekanId = req.params.id;
    const updatedMekan = req.body;
    await Blog.findByIdAndUpdate(mekanId, updatedMekan);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});




// Express orta yazılımları
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Sayfa yönlendirmeleri
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});



const registerRouter = require('./routes/register');
app.use('/api/register', registerRouter);

const loginRouter = require('./routes/login');
app.use('/api/login', loginRouter);

const blogRouter = require('./routes/blog');
app.use('/api/blog', blogRouter);

const mekanRouter = require('./routes/mekan');
app.use('/api/mekans', mekanRouter);

const restaurantRouter = require('./routes/restaurant');
app.use('/api/restaurants', restaurantRouter);
const cinemaRouter = require('./routes/cinema');
app.use('/api/cinemas', cinemaRouter);
const cafeRouter = require('./routes/cafe');
app.use('/api/cafes', cafeRouter);

const busRouter = require('./routes/bus');
app.use('/api/bus', busRouter);

// Sunucu dinlemesi
app.listen(port, function () {
  console.log(`Sunucu ${port} numaralı bağlantı noktasında çalışıyor.`);
});