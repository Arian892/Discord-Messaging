const {Pool}= require('pg');
const env=require('./config/env');
console.log(`Connecting to database with URL: ${process.env.DATABASE_URL}`);

const pool = new Pool({
    connectionString: env.databaseUrl,
    ssl: {
        rejectUnauthorized: false
    },
    family: 4, // Use IPv4
});

module.exports = pool;