const { MongoClient } = require('mongodb');
const express = require('express');
const router = express.Router();
const uri = 'mongodb+srv://admin:nv12345.@atlas.lbelsjf.mongodb.net/test';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();

    // Do something with the connection
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();


router.post('/', async (req, res) => {
  try {
    await client.connect();

    const blogCollection = client.db('test').collection('blogs');
    const result = await blogCollection.insertOne(req.body);
    console.log(`Added blog with ID: ${result.insertedId}`);

    res.status(201).json({ message: 'Blog added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error blog added' });
  } finally {
    await client.close();
  }
});

module.exports = router;