/* eslint-disable no-undef */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',     
  database: 'ExpenseTracker', 
  password: 'meilleur',    
  port: 5432,       
});

module.exports = pool;


pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erreur de connexion à PostgreSQL:', err);
  } else {
    console.log('Connexion PostgreSQL OK:', res.rows[0]);
  }
});

module.exports = pool;