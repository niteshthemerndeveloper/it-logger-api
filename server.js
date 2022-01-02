const express = require('express');
const app = express();
const connectDB = require('./config/db.js');

// Connect to MongoDB Atlas;
connectDB();

// Initialize middleware to read received data
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/logs', require('./routes/logs.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on Port ${PORT}`));
