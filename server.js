const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/grocery-store', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Start server
const PORT = process.env.PORT || 8070;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
