/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/auth'));
app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/incomes', require('./routes/incomes'));

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Expense Tracker API is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend PostgreSQL sur port ${PORT}`);
});