const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());


// Connect to your MongoDB Atlas cluster
mongoose.connect('mongodb+srv://alluharsha82:root@cluster0.dz8xwys.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas: ' + err);
  });
const db = mongoose.connection;

// Check the MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the Player model
const Player = mongoose.model('Player', {
  name: String,
  age: Number,
  team: String,
  position: String,
});

// Routes
app.get('/api/players', async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

app.get('/api/players/:id', async (req, res) => {
  const player = await Player.findById(req.params.id);
  res.json(player);
});

app.post('/api/players', async (req, res) => {
  const player = new Player(req.body);
  await player.save();
  res.json(player);
});

app.put('/api/players/:id', async (req, res) => {
  const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(player);
});

app.delete('/api/players/:id', async (req, res) => {
  await Player.findByIdAndRemove(req.params.id);
  res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
