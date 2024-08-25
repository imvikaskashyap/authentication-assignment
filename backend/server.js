const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(
    cors({
      origin: [
        "https://authentication-assignment-gamma.vercel.app/", 
        "https://authentication-assignment-o9ii.onrender.com",
        "http://localhost:3000",
      ],
      methods: ["GET", "POST", "PUT", "DELETE"], 
      credentials: true, 
    })
  );
app.use(express.json());

// Routes
app.use('/api', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
