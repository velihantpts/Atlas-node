const { MongoClient } = require('mongodb');
const express = require('express');
const router = express.Router();
const uri = 'mongodb+srv://admin:nv12345.@atlas.lbelsjf.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  } finally {
    // Do not close the connection here
  }
}

run();

router.post('/', async (req, res) => {
  try {
    const { name, lastName, email, password, confirmPassword } = req.body;

    // Check if any field is empty
    if (!name || !lastName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }

    await client.connect();
    console.log('Connected to MongoDB');

    const usersCollection = client.db('test').collection('users');
    const result = await usersCollection.insertOne(req.body);
    console.log(`Added user with ID: ${result.insertedId}`);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  } finally {
    // Do not close the connection here
  }
});

module.exports = router;