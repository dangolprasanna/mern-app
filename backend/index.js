// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.config');
const authRoutes = require('./routes/user.routes');
const cors = require('cors');
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
