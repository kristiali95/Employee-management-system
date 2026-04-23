const { Client } = require('pg');

const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  database: 'employee_management',
});

client.connect()
  .then(() => {
    console.log('✅ Connected successfully to PostgreSQL!');
    return client.query('SELECT version()');
  })
  .then((res) => {
    console.log('Database version:', res.rows[0].version);
    client.end();
  })
  .catch((err) => {
    console.error('❌ Connection error:', err.message);
    console.error('Error code:', err.code);
    client.end();
  });
