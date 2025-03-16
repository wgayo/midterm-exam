const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
const app = express();

// Database connection
const sequelize = new Sequelize('nmc_api', 'root', 'letmeinsyo', {
  host: 'localhost',
  dialect: 'mysql'
});

// User model
const Users = sequelize.define('Users', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.BOOLEAN, defaultValue: true }
});

// Sync model with DB
sequelize.sync();

// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});