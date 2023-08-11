// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for the canvas data
const canvasSchema = new mongoose.Schema({
  userId: String, // Store the user ID here
  canvasData: String, // Store the canvas data (e.g., base64 representation)
});

const CanvasModel = mongoose.model('Canvas', canvasSchema);

// API endpoint to save canvas data
app.post('/save-canvas', async (req, res) => {
  const { userId, canvasData } = req.body;

  try {
    await CanvasModel.create({ userId, canvasData });
    res.status(201).json({ message: 'Canvas data saved successfully' });
  } catch (error) {
    console.error('Error saving canvas data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
